import { useEffect, useState } from "react";
import "./AQIindex.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const API_KEY = "/rEtAIVRBj912jCd93o/+A==si91O9eDG2ljRnQo";

const CITY_SUGGESTIONS = [
  // optional: put your city list here
];

/* ---------------------- BASIC HELPERS ---------------------- */

function toNumberSafe(v) {
  if (v === null || v === undefined) return null;
  const n = Number(v);
  return Number.isNaN(n) ? null : n;
}

function deg2rad(deg) {
  return (deg * Math.PI) / 180;
}

function distanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/* ---------------------- INDIAN AQI BREAKPOINTS (CPCB) ---------------------- */

const AQI_BREAKPOINTS = {
  PM10: [
    { cLow: 0, cHigh: 50, iLow: 0, iHigh: 50 },
    { cLow: 51, cHigh: 100, iLow: 51, iHigh: 100 },
    { cLow: 101, cHigh: 250, iLow: 101, iHigh: 200 },
    { cLow: 251, cHigh: 350, iLow: 201, iHigh: 300 },
    { cLow: 351, cHigh: 430, iLow: 301, iHigh: 400 },
    { cLow: 431, cHigh: 10000, iLow: 401, iHigh: 500 },
  ],
  "PM2.5": [
    { cLow: 0, cHigh: 30, iLow: 0, iHigh: 50 },
    { cLow: 31, cHigh: 60, iLow: 51, iHigh: 100 },
    { cLow: 61, cHigh: 90, iLow: 101, iHigh: 200 },
    { cLow: 91, cHigh: 120, iLow: 201, iHigh: 300 },
    { cLow: 121, cHigh: 250, iLow: 301, iHigh: 400 },
    { cLow: 251, cHigh: 1000, iLow: 401, iHigh: 500 },
  ],
  NO2: [
    { cLow: 0, cHigh: 40, iLow: 0, iHigh: 50 },
    { cLow: 41, cHigh: 80, iLow: 51, iHigh: 100 },
    { cLow: 81, cHigh: 180, iLow: 101, iHigh: 200 },
    { cLow: 181, cHigh: 280, iLow: 201, iHigh: 300 },
    { cLow: 281, cHigh: 400, iLow: 301, iHigh: 400 },
    { cLow: 401, cHigh: 1000, iLow: 401, iHigh: 500 },
  ],
  SO2: [
    { cLow: 0, cHigh: 40, iLow: 0, iHigh: 50 },
    { cLow: 41, cHigh: 80, iLow: 51, iHigh: 100 },
    { cLow: 81, cHigh: 380, iLow: 101, iHigh: 200 },
    { cLow: 381, cHigh: 800, iLow: 201, iHigh: 300 },
    { cLow: 801, cHigh: 1600, iLow: 301, iHigh: 400 },
    { cLow: 1601, cHigh: 5000, iLow: 401, iHigh: 500 },
  ],
  CO: [
    { cLow: 0, cHigh: 1.0, iLow: 0, iHigh: 50 },
    { cLow: 1.1, cHigh: 2.0, iLow: 51, iHigh: 100 },
    { cLow: 2.1, cHigh: 10.0, iLow: 101, iHigh: 200 },
    { cLow: 10.1, cHigh: 17.0, iLow: 201, iHigh: 300 },
    { cLow: 17.1, cHigh: 34.0, iLow: 301, iHigh: 400 },
    { cLow: 34.1, cHigh: 1000.0, iLow: 401, iHigh: 500 },
  ],
  OZONE: [
    { cLow: 0, cHigh: 50, iLow: 0, iHigh: 50 },
    { cLow: 51, cHigh: 100, iLow: 51, iHigh: 100 },
    { cLow: 101, cHigh: 168, iLow: 101, iHigh: 200 },
    { cLow: 169, cHigh: 208, iLow: 201, iHigh: 300 },
    { cLow: 209, cHigh: 748, iLow: 301, iHigh: 400 },
    { cLow: 749, cHigh: 5000, iLow: 401, iHigh: 500 },
  ],
  NH3: [
    { cLow: 0, cHigh: 200, iLow: 0, iHigh: 50 },
    { cLow: 201, cHigh: 400, iLow: 51, iHigh: 100 },
    { cLow: 401, cHigh: 800, iLow: 101, iHigh: 200 },
    { cLow: 801, cHigh: 1200, iLow: 201, iHigh: 300 },
    { cLow: 1201, cHigh: 1800, iLow: 301, iHigh: 400 },
    { cLow: 1801, cHigh: 5000, iLow: 401, iHigh: 500 },
  ],
};

function calcSubIndex(pollutantId, concRaw) {
  const conc = toNumberSafe(concRaw);
  if (conc === null) return null;

  const table = AQI_BREAKPOINTS[pollutantId];
  if (!table) return null;

  for (const row of table) {
    if (conc >= row.cLow && conc <= row.cHigh) {
      const { cLow, cHigh, iLow, iHigh } = row;
      const aqi =
        ((iHigh - iLow) / (cHigh - cLow || 1)) * (conc - cLow) + iLow;
      return Math.round(aqi);
    }
  }

  return 500;
}

/* ----------- BUILD STATIONS FROM CPCB JSON RECORDS ----------- */

function buildStationsFromRecords(records = []) {
  const map = new Map();

  records.forEach((rec) => {
    const {
      country,
      state,
      city,
      station,
      last_update,
      latitude,
      longitude,
      pollutant_id,
      avg_value,
    } = rec;

    const key = `${country}|${state}|${city}|${station}|${last_update}`;
    if (!map.has(key)) {
      map.set(key, {
        country,
        state,
        city,
        station,
        last_update,
        latitude: toNumberSafe(latitude),
        longitude: toNumberSafe(longitude),
        pollutants: {},
      });
    }

    const entry = map.get(key);
    if (pollutant_id) {
      entry.pollutants[pollutant_id] = {
        avg: toNumberSafe(avg_value),
      };
    }
  });

  return Array.from(map.values());
}

function findBestCpcbStation(stations, lat, lon, cityName, stateName) {
  if (!stations.length || lat == null || lon == null) return null;

  const cityLower = cityName ? cityName.toLowerCase() : "";
  const stateLower = stateName ? stateName.toLowerCase() : "";

  let best = null;
  let bestScore = Infinity;

  stations.forEach((st) => {
    if (st.latitude == null || st.longitude == null) return;

    const stCity = (st.city || "").toLowerCase();
    const stState = (st.state || "").toLowerCase();

    const sameCity = cityLower && stCity.includes(cityLower);
    const sameState = stateLower && stState.includes(stateLower);

    const d = distanceKm(lat, lon, st.latitude, st.longitude);

    let score = d;
    if (sameState) score *= 0.6;
    if (sameCity) score *= 0.4;

    if (score < bestScore) {
      bestScore = score;
      best = st;
    }
  });

  return best;
}

function computeStationAqi(station) {
  if (!station || !station.pollutants) return null;

  const ids = Object.keys(station.pollutants);
  if (!ids.length) return null;

  const subIndices = [];

  ids.forEach((id) => {
    const conc = station.pollutants[id]?.avg;
    if (conc == null) return;

    let fixedConc = conc;

    if (id === "CO" && conc > 100) {
      fixedConc = conc / 1000;
    }

    const sub = calcSubIndex(id, fixedConc);
    if (sub != null) subIndices.push(sub);
  });

  if (!subIndices.length) return null;

  return Math.max(...subIndices);
}

/* ---------------------- EXISTING UI HELPERS ---------------------- */

function getAqiCategory(aqi) {
  if (aqi === null || aqi === undefined)
    return { label: "N/A", color: "#6b7280" };
  if (aqi <= 50) return { label: "Good", color: "#22c55e" };
  if (aqi <= 100) return { label: "Moderate", color: "#eab308" };
  if (aqi <= 150)
    return { label: "Unhealthy for Sensitive Groups", color: "#f97316" };
  if (aqi <= 200) return { label: "Unhealthy", color: "#ef4444" };
  if (aqi <= 300) return { label: "Very Unhealthy", color: "#a855f7" };
  return { label: "Hazardous", color: "#7f1d1d" };
}

function getDominantPollutant(data) {
  if (!data) return null;
  const keys = ["CO", "NO2", "O3", "SO2", "PM2.5", "PM10"];
  let bestKey = null;
  let bestAqi = -1;
  keys.forEach((k) => {
    const val = data[k];
    if (val && typeof val.aqi === "number" && val.aqi > bestAqi) {
      bestAqi = val.aqi;
      bestKey = k;
    }
  });
  return bestKey;
}

/* ---------------- HEALTH ADVICE (same as before) ---------------- */

function getHealthAdvice(aqi, pm25, city) {
  if (typeof aqi !== "number" || isNaN(aqi)) {
    return {
      severity: "Unknown",
      headline: `No live AQI data available for ${city || "this location"}`,
      summary:
        "Live AQI data is not available right now. Once data is fetched, you will see detailed health guidance here.",
      doList: [
        "If you have breathing problems, keep your regular medicines handy.",
        "Avoid heavy exercise near traffic or construction dust.",
      ],
      dontList: [],
      risks: [],
      solutions: [],
      cigarettes: null,
    };
  }

  let severity = "";
  let headline = "";
  let summary = "";
  let doList = [];
  let dontList = [];
  let risks = [];
  let solutions = [];

  if (aqi <= 50) {
    severity = "Low";
    headline = `Air quality in ${city} is Good`;
    summary =
      "The air is clean and healthy. You can enjoy your normal outdoor activities with no restrictions.";
    doList = [
      "Enjoy outdoor activities freely.",
      "Keep windows open for fresh air ventilation.",
      "Great time for jogging, cycling and outdoor fitness.",
    ];
    dontList = ["No special precautions needed."];
    risks = ["No major health risks.", "A safe range for children and seniors."];
    solutions = [
      { item: "Air Purifier", status: "Not required" },
      { item: "N95 Mask", status: "Not required" },
      { item: "Stay Indoor", status: "Not necessary" },
    ];
  } else if (aqi <= 100) {
    severity = "Moderate";
    headline = `Air quality in ${city} is Moderate`;
    summary =
      "Air quality is acceptable but sensitive individuals may feel slight irritation or discomfort.";
    doList = [
      "If you have asthma or allergies, keep medicines handy.",
      "Avoid long exposure near traffic or dusty roads.",
      "Consider mild indoor workouts.",
    ];
    dontList = ["Do not ignore symptoms like mild cough or throat irritation."];
    risks = [
      "Minor risk for asthma patients.",
      "Mild breathing discomfort for elderly.",
    ];
    solutions = [
      { item: "Air Purifier", status: "Optional" },
      { item: "N95 Mask", status: "Optional" },
      { item: "Stay Indoor", status: "Not required" },
    ];
  } else if (aqi <= 150) {
    severity = "Elevated";
    headline = `Unhealthy for sensitive groups in ${city}`;
    summary =
      "Sensitive individuals (kids, elderly, heart/lung patients) may experience noticeable symptoms.";
    doList = [
      "Limit outdoor exercise.",
      "Use an N95 mask if going outdoors.",
      "Close windows during peak traffic hours.",
    ];
    dontList = [
      "Avoid outdoor sports for children.",
      "Avoid deep breathing exercises outdoors.",
    ];
    risks = [
      "High risk for asthma attacks.",
      "Breathing discomfort for kids and old people.",
      "Eyes and throat irritation common.",
    ];
    solutions = [
      { item: "Air Purifier", status: "Recommended" },
      { item: "N95 Mask", status: "Recommended" },
      { item: "Stay Indoor", status: "Recommended" },
    ];
  } else if (aqi <= 200) {
    severity = "High";
    headline = `Unhealthy air quality in ${city}`;
    summary =
      "Health effects may begin for everyone. Sensitive groups may experience more serious irritation or breathing issues.";
    doList = [
      "Reduce outdoor movement, especially morning & evening.",
      "Use air purifiers indoors.",
      "Wear N95 masks outside.",
      "Hydrate frequently to avoid dryness.",
    ];
    dontList = [
      "Avoid keeping windows open.",
      "Avoid running or cycling outdoors.",
    ];
    risks = [
      "Increased risk of bronchitis, coughing, and breathing irritation.",
      "High chance of headaches, eye irritation.",
    ];
    solutions = [
      { item: "Air Purifier", status: "Must" },
      { item: "N95 Mask", status: "Must" },
      { item: "Car Cabin Filter", status: "Recommended" },
      { item: "Stay Indoor", status: "Must" },
    ];
  } else if (aqi <= 300) {
    severity = "Very High";
    headline = `Very unhealthy air in ${city}`;
    summary =
      "Everyone may experience strong health symptoms. Prolonged exposure can lead to severe irritation and respiratory issues.";
    doList = [
      "Stay indoors with doors/windows closed.",
      "Use air purifiers continuously.",
      "Wear N95/N99 masks when stepping outside.",
      "Monitor health symptoms closely.",
    ];
    dontList = [
      "Do not let children play outside.",
      "Avoid long travel without a cabin air filter.",
    ];
    risks = [
      "High risk of asthma flare-ups.",
      "Heart patients may feel chest tightness.",
      "Strong irritation to eyes, nose, throat.",
    ];
    solutions = [
      { item: "Air Purifier", status: "Must" },
      { item: "N95/N99 Mask", status: "Must" },
      { item: "Stay Indoor", status: "Must" },
      { item: "Car Filter", status: "Must" },
    ];
  } else {
    severity = "Severe";
    headline = `Hazardous air quality in ${city}`;
    summary =
      "Extremely dangerous air. Health effects can occur even with short exposure. Emergency-level pollution.";
    doList = [
      "Stay indoors as much as possible.",
      "Use N95/N99 masks for any outdoor movement.",
      "Use air purifiers on high mode.",
      "Seek immediate help for severe symptoms.",
    ];
    dontList = [
      "Do NOT exercise outdoors.",
      "Avoid going outside without protection.",
      "Avoid burning candles/incense at home.",
    ];
    risks = [
      "Severe breathing difficulty.",
      "Very high risk for heart and lung patients.",
      "Dizziness, headaches, chest pain possible.",
    ];
    solutions = [
      { item: "Air Purifier", status: "Absolutely Required" },
      { item: "N95/N99 Mask", status: "Absolutely Required" },
      { item: "Stay Indoor", status: "Mandatory" },
      { item: "Seek Medical Help", status: "If symptoms appear" },
    ];
  }

  let cigarettes = null;
  if (typeof pm25 === "number" && pm25 > 0) {
    const perDay = pm25 / 22;
    cigarettes = {
      perDay: perDay.toFixed(1),
      perWeek: (perDay * 7).toFixed(1),
      perMonth: (perDay * 30).toFixed(1),
    };
  }

  return {
    severity,
    headline,
    summary,
    doList,
    dontList,
    risks,
    solutions,
    cigarettes,
  };
}

/* -------- STUBBLE PREDICTION + CHART (same logic as before) -------- */

function predictPollutionSource({ aqiData, regionInfo, city, overallAqi }) {
  if (!aqiData) {
    return {
      title: "Not enough data",
      stubbleLikelihood: "Unknown",
      tags: [],
      points: [
        "Live air quality data is missing, so we can’t infer the main sources.",
      ],
      disclaimer:
        "This is only a rough prediction based on location, season and pollutant pattern. It is NOT a legal report or official source attribution.",
    };
  }

  const now = new Date();
  const month = now.getMonth();
  const isStubbleSeason = month === 9 || month === 10 || month === 11;

  const state = regionInfo?.state || "";
  const country = regionInfo?.country || "";
  const cityName = city || "";

  const STUBBLE_STATES = [
    "Punjab",
    "Haryana",
    "Rajasthan",
    "Uttar Pradesh",
    "Bihar",
    "Delhi",
    "National Capital Territory of Delhi",
    "NCT of Delhi",
    "Chandigarh",
  ];

  const lowerState = state.toLowerCase();
  const lowerCity = cityName.toLowerCase();

  const countryLower = country.toLowerCase();
  const inIndia =
    countryLower === "india" ||
    countryLower === "republic of india" ||
    countryLower === "in";

  const inStubbleBelt =
    inIndia &&
    (STUBBLE_STATES.some((s) => lowerState.includes(s.toLowerCase())) ||
      /delhi|noida|ghaziabad|gurugram|gautam buddha nagar|faridabad|ludhiana|patiala|amritsar|bathinda|hisar|karnal|kurukshetra/.test(
        lowerCity
      ));

  const pm25Aqi = aqiData["PM2.5"]?.aqi ?? 0;
  const pm10Aqi = aqiData.PM10?.aqi ?? 0;
  const no2Aqi = aqiData.NO2?.aqi ?? 0;
  const o3Aqi = aqiData.O3?.aqi ?? 0;
  const so2Aqi = aqiData.SO2?.aqi ?? 0;
  const coAqi = aqiData.CO?.aqi ?? 0;

  const pmDominated =
    pm25Aqi >= no2Aqi &&
    pm25Aqi >= o3Aqi &&
    pm25Aqi >= so2Aqi &&
    pm25Aqi >= coAqi &&
    pm25Aqi >= 100;

  let title = "";
  let stubbleLikelihood = "Low";
  const tags = [];
  const points = [];

  if (inStubbleBelt && isStubbleSeason && pmDominated && overallAqi >= 150) {
    title = "High probability: Stubble burning is a major contributor today.";
    stubbleLikelihood = "High";
    tags.push(
      "Indo-Gangetic stubble belt",
      "Stubble season (Oct–Dec)",
      "PM₂.₅-heavy pollution"
    );
    points.push(
      "Location lies in a known stubble-burning region (Punjab–Haryana–UP–Bihar–Rajasthan–Delhi belt).",
      "It is currently peak burning season (October–December).",
      "PM₂.₅ is the dominant pollutant and AQI is in the Unhealthy / Very Unhealthy range – a pattern often seen when crop residue fires are active.",
      "Other gases (NO₂, SO₂, O₃) are present but not as dominant as fine particles, which fits open biomass burning."
    );
  } else if (inStubbleBelt && pmDominated && overallAqi >= 120) {
    title = "Mixed sources: Traffic, local industry and possible stubble smoke.";
    stubbleLikelihood = "Medium";
    tags.push("Stubble belt", "PM₂.₅ significant");
    points.push(
      "This region is part of the Indo-Gangetic plains where stubble burning is common.",
      "PM₂.₅ and PM₁₀ are elevated, suggesting smoke and dust are important drivers.",
      "Levels of NO₂ / CO may also indicate traffic and urban sources.",
      "On such days, pollution is usually a combination of crop residue burning + vehicles + local industries."
    );
  } else if (!inStubbleBelt && (no2Aqi > pm25Aqi || o3Aqi > pm25Aqi)) {
    title = "Likely dominated by traffic and urban/industrial emissions.";
    stubbleLikelihood = "Very Low";
    tags.push("Non-stubble region", "Traffic & industry pattern");
    points.push(
      "Location is outside the primary stubble-burning belt.",
      "Higher NO₂ / O₃ compared to PM₂.₅ suggests vehicle emissions and industrial/urban chemistry.",
      "Peak values often align with rush hour and strong sunlight rather than farm fire timelines."
    );
  } else if (!inStubbleBelt && pmDominated) {
    title = "Likely dominated by local biomass burning, dust and traffic.";
    stubbleLikelihood = "Low";
    tags.push("PM₂.₅-heavy", "Non-stubble region");
    points.push(
      "Fine particles are high, but the region is not a classic paddy stubble-burning hotspot.",
      "Sources may include local trash burning, domestic fuel, construction dust and vehicles."
    );
  } else {
    title =
      "General urban mix: traffic, domestic fuel, dust and local industry.";
    stubbleLikelihood = inStubbleBelt ? "Medium (background)" : "Low";
    if (inStubbleBelt)
      tags.push("Stubble belt (background influence possible)");
    points.push(
      "Pollution levels and pattern do not strongly match a pure stubble-burning episode.",
      "Likely a mix of everyday sources: vehicles, construction dust, local industry and household fuel.",
      "If you are in North India during winter, some background contribution from regional crop burning is still possible."
    );
  }

  const disclaimer =
    "This is only a rough prediction based on location, season and pollutant pattern. It is NOT a legal report or official source attribution.";

  return { title, stubbleLikelihood, tags, points, disclaimer };
}

/* ------------- UPDATED: MAKE SOURCE SHARES TRULY DYNAMIC ------------- */

function computeSourceShares(stubbleLikelihood, aqiData) {
  const pm25 = aqiData?.["PM2.5"]?.aqi ?? 0;
  const pm10 = aqiData?.PM10?.aqi ?? 0;
  const no2 = aqiData?.NO2?.aqi ?? 0;
  const o3 = aqiData?.O3?.aqi ?? 0;
  const so2 = aqiData?.SO2?.aqi ?? 0;
  const co = aqiData?.CO?.aqi ?? 0;

  const particleScore = pm25 + pm10;
  const gasScore = no2 + o3 + so2 + co;

  // If we somehow have no data at all, fall back to a neutral split
  if (particleScore === 0 && gasScore === 0) {
    return [
      { key: "stubble", label: "Stubble burning", value: 15 },
      { key: "traffic", label: "Traffic & vehicles", value: 30 },
      { key: "industry", label: "Industry & power", value: 20 },
      { key: "dust", label: "Dust & construction", value: 20 },
      { key: "domestic", label: "Household & others", value: 15 },
    ];
  }

  // Base scores derived from actual pollutant pattern
  let stubbleScore = particleScore * 0.6; // stubble linked strongly to particles
  let trafficScore = (no2 + co) * 1.0; // traffic -> NO2 + CO
  let industryScore = (so2 + 0.3 * no2) * 1.0; // industry/power -> SO2 + part of NO2
  let dustScore = pm10 * 0.8; // coarse particles
  let domesticScore = particleScore * 0.2 + gasScore * 0.1; // background domestic/others

  // Bias based on stubbleLikelihood (but still driven by pollutant data)
  let stubbleFactor = 0.8;
  if (stubbleLikelihood === "High") stubbleFactor = 1.4;
  else if (stubbleLikelihood === "Medium") stubbleFactor = 1.15;
  else if (stubbleLikelihood === "Very Low") stubbleFactor = 0.4;

  stubbleScore *= stubbleFactor;

  // Normalise to percentages
  const total =
    stubbleScore + trafficScore + industryScore + dustScore + domesticScore || 1;

  const toPct = (v) => Math.round((v / total) * 100);

  return [
    { key: "stubble", label: "Stubble burning", value: toPct(stubbleScore) },
    { key: "traffic", label: "Traffic & vehicles", value: toPct(trafficScore) },
    { key: "industry", label: "Industry & power", value: toPct(industryScore) },
    { key: "dust", label: "Dust & construction", value: toPct(dustScore) },
    { key: "domestic", label: "Household & others", value: toPct(domesticScore) },
  ];
}

function PollutionSourceChart({ sourceInsight, aqiData }) {
  if (!sourceInsight || !aqiData) return null;

  const shares = computeSourceShares(
    sourceInsight.stubbleLikelihood,
    aqiData
  );

  return (
    <div className="source-chart-section">
      <div className="source-chart">
        <div className="source-chart-header">
          <p className="source-chart-title">
            Estimated contribution of different sources (%)
          </p>
          <p className="source-chart-caption">
            These bars are an approximate split based on your location, season
            and pollutant pattern. It is only for awareness, not an official
            attribution.
          </p>
        </div>

        <div className="source-chart-bars">
          {shares.map((s) => (
            <div key={s.key} className="source-chart-bar-wrapper">
              <div
                className={
                  "source-chart-bar" +
                  (s.key === "stubble" ? " source-chart-bar-stubble" : "")
                }
                style={{ height: `${s.value}%` }}
              >
                <span className="source-chart-bar-value">{s.value}%</span>
              </div>
              <span className="source-chart-bar-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------- MAIN APP --------------------------- */

function App() {
  const [aqiData, setAqiData] = useState(null);
  const [coords, setCoords] = useState([31.326, 75.5762]); // Jalandhar default
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [currentCity, setCurrentCity] = useState("Jalandhar");
  const [suggestions, setSuggestions] = useState([]);
  const [regionInfo, setRegionInfo] = useState(null);

  const [cpcbStations, setCpcbStations] = useState([]);
  const [cpcbMatch, setCpcbMatch] = useState(null);

  // Load CPCB JSON once from public folder
  useEffect(() => {
    const loadCpcb = async () => {
      try {
        const res = await fetch("/cpcb_realtime.json");
        if (!res.ok) return;
        const json = await res.json();
        const stations = buildStationsFromRecords(json.records || []);
        setCpcbStations(stations);
      } catch (err) {
        console.error("Failed to load CPCB realtime JSON:", err);
      }
    };
    loadCpcb();
  }, []);

  const fetchAQIAndLocation = async (city) => {
    try {
      setLoading(true);
      setError("");
      setAqiData(null);
      setRegionInfo(null);
      setCpcbMatch(null);

      const cityParam = encodeURIComponent(city);

      const [aqiRes, geoRes] = await Promise.all([
        fetch(`https://api.api-ninjas.com/v1/airquality?city=${cityParam}`, {
          headers: { "X-Api-Key": API_KEY },
        }),
        fetch(`https://api.api-ninjas.com/v1/geocoding?city=${cityParam}`, {
          headers: { "X-Api-Key": API_KEY },
        }),
      ]);

      if (!aqiRes.ok) {
        let msg = "Failed to fetch air quality data.";
        if (aqiRes.status === 400 || aqiRes.status === 404) {
          msg = `No air quality data found for "${city}". Check spelling or try a nearby city.`;
        }
        throw new Error(msg);
      }

      const aqiJson = await aqiRes.json();
      if (aqiJson.error) {
        const lower = aqiJson.error.toLowerCase();
        if (lower.includes("city") || lower.includes("not found")) {
          throw new Error(
            `No air quality data found for "${city}". Check spelling or try a nearby city.`
          );
        }
        throw new Error(aqiJson.error);
      }
      setAqiData(aqiJson);

      let lat = null;
      let lon = null;
      let country = "";
      let state = "";

      if (geoRes.ok) {
        const geoJson = await geoRes.json();
        if (Array.isArray(geoJson) && geoJson.length > 0) {
          const first = geoJson[0];
          const { latitude, longitude, country: ctry, state: st } = first;
          if (typeof latitude === "number" && typeof longitude === "number") {
            lat = latitude;
            lon = longitude;
            setCoords([latitude, longitude]);
          }
          country = ctry || "";
          state = st || "";
          setRegionInfo({
            country,
            state,
          });
        }
      }

      if (lat != null && lon != null && cpcbStations.length > 0) {
        const bestStation = findBestCpcbStation(
          cpcbStations,
          lat,
          lon,
          city,
          state
        );
        if (bestStation) {
          const stationAqi = computeStationAqi(bestStation);
          if (stationAqi != null) {
            setCpcbMatch({
              station: bestStation.station,
              city: bestStation.city,
              state: bestStation.state,
              country: bestStation.country,
              last_update: bestStation.last_update,
              aqi: stationAqi,
            });
          }
        }
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAQIAndLocation(currentCity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCity, cpcbStations.length]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      setSuggestions([]);
      return;
    }
    const matches = CITY_SUGGESTIONS.filter((city) =>
      city.toLowerCase().includes(q)
    );
    setSuggestions(matches.slice(0, 6));
  }, [query]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setCurrentCity(query.trim());
    setSuggestions([]);
  };

  const handleSuggestionClick = (city) => {
    setQuery(city);
    setCurrentCity(city);
    setSuggestions([]);
  };

  const cpcbAqi = cpcbMatch?.aqi ?? null;
  const apiNinjasAqi = aqiData?.overall_aqi;
  const aqi = cpcbAqi ?? apiNinjasAqi ?? null;

  const { label, color } = getAqiCategory(aqi);
  const dominant = getDominantPollutant(aqiData);

  const CO = aqiData?.CO;
  const NO2 = aqiData?.NO2;
  const O3 = aqiData?.O3;
  const SO2 = aqiData?.SO2;
  const PM25 = aqiData?.["PM2.5"];
  const PM10 = aqiData?.PM10;

  const healthAdvice = getHealthAdvice(
    aqi,
    PM25?.concentration,
    currentCity ? currentCity.toUpperCase() : ""
  );

  const sourceInsight = predictPollutionSource({
    aqiData,
    regionInfo,
    city: currentCity ? currentCity.toUpperCase() : "",
    overallAqi: aqi ?? 0,
  });

  const stateName = regionInfo?.state || cpcbMatch?.state;
  const countryName = regionInfo?.country || cpcbMatch?.country;

  return (
    <div className="app">
      <div className="card">
        <h1>AQI Dashboard</h1>
        <p className="subtitle">
          Search any city and get live air quality, health tips &amp; source
          prediction
        </p>

        <form className="search-row" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Enter city name (e.g., Jalandhar, Delhi, )"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Search"}
          </button>
        </form>

        {query.trim().length >= 2 && suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((city) => (
              <div
                key={city}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(city)}
              >
                {city}
              </div>
            ))}
          </div>
        )}

        {loading && (
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            Fetching data for: {currentCity}...
          </p>
        )}

        {error && (
          <p className="error" style={{ marginTop: "10px" }}>
            {error}
          </p>
        )}

        {!loading && !error && aqiData && (
          <>
            <div className="city-row">
              <span className="city-name">
                {currentCity ? currentCity.toUpperCase() : "Unknown location"}
              </span>
              <span className="time">
                Last updated:{" "}
                {cpcbMatch?.last_update ? cpcbMatch.last_update : "just now"}
              </span>
            </div>

            {(stateName || countryName) && (
              <p className="region-line">
                {stateName && <span>{stateName}</span>}
                {stateName && countryName && <span> · </span>}
                {countryName && <span>{countryName}</span>}
              </p>
            )}

            {cpcbMatch && (
              <p className="region-line">
                Using nearest CPCB station:{" "}
                <strong>{cpcbMatch.station}</strong> ({cpcbMatch.city},{" "}
                {cpcbMatch.state})
              </p>
            )}

            <div className="aqi-main">
              <div className="aqi-value" style={{ borderColor: color }}>
                <span className="aqi-number">
                  {aqi != null ? aqi : "--"}
                </span>
                <span className="aqi-label" style={{ color }}>
                  {label}
                </span>
              </div>

              <div className="aqi-info">
                <p>
                  <strong>Dominant pollutant (API Ninjas):</strong>{" "}
                  {dominant ? dominant : "N/A"}
                </p>
                <p className="note">
                  AQI index is derived from CPCB real-time station data where
                  available. Pollutant breakdown is from API Ninjas. Lower AQI
                  is better. Values above 100 can be harmful, especially for
                  sensitive groups.
                </p>
              </div>
            </div>

            <h2>Location Map</h2>
            <div className="map-wrapper">
              <MapContainer
                center={coords}
                zoom={8}
                scrollWheelZoom={false}
                style={{ height: "320px", width: "100%", borderRadius: "16px" }}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coords}>
                  <Popup>
                    <div>
                      <strong>{currentCity.toUpperCase()}</strong>
                      <br />
                      AQI: {aqi != null ? aqi : "--"} ({label})
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <h2>Health Advice</h2>
            <div className="health-section">
              <p className="health-headline">{healthAdvice.headline}</p>
              <p className="health-summary">{healthAdvice.summary}</p>

              {healthAdvice.cigarettes && (
                <div className="cigarette-box">
                  <p className="cigarette-main">
                    Breathing the air in {currentCity.toUpperCase()} today may be
                    roughly as harmful as smoking{" "}
                    <strong>{healthAdvice.cigarettes.perDay}</strong> cigarettes
                    in a day.
                  </p>
                  <p className="cigarette-sub">
                    Approx: {healthAdvice.cigarettes.perWeek} per week ·{" "}
                    {healthAdvice.cigarettes.perMonth} per month
                  </p>
                  <p className="cigarette-note">
                    This is a rough visualisation based on PM2.5 exposure and is
                    not a medical measurement.
                  </p>
                </div>
              )}

              <div className="health-lists">
                {healthAdvice.doList.length > 0 && (
                  <div className="health-column">
                    <p className="health-subtitle">Do&apos;s</p>
                    <ul>
                      {healthAdvice.doList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {healthAdvice.dontList.length > 0 && (
                  <div className="health-column">
                    <p className="health-subtitle">Don&apos;ts</p>
                    <ul>
                      {healthAdvice.dontList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <h2>Likely pollution sources (AI-based guess)</h2>
            <div className="source-section">
              <p className="source-headline">{sourceInsight.title}</p>

              <div className="source-badges">
                <span className="source-badge source-badge-main">
                  Stubble burning likelihood:{" "}
                  <strong>{sourceInsight.stubbleLikelihood}</strong>
                </span>
                {sourceInsight.tags.map((tag) => (
                  <span key={tag} className="source-badge">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="source-list">
                {sourceInsight.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>

              <p className="source-disclaimer">{sourceInsight.disclaimer}</p>
            </div>

            <h2>Key Pollutants (concentration)</h2>
            <div className="pollutants-grid">
              <PollutantCard
                label="PM2.5"
                value={PM25?.concentration}
                unit="µg/m³"
                aqi={PM25?.aqi}
              />
              <PollutantCard
                label="PM10"
                value={PM10?.concentration}
                unit="µg/m³"
                aqi={PM10?.aqi}
              />
              <PollutantCard
                label="CO"
                value={CO?.concentration}
                unit="µg/m³"
                aqi={CO?.aqi}
              />
              <PollutantCard
                label="NO₂"
                value={NO2?.concentration}
                unit="µg/m³"
                aqi={NO2?.aqi}
              />
              <PollutantCard
                label="O₃"
                value={O3?.concentration}
                unit="µg/m³"
                aqi={O3?.aqi}
              />
              <PollutantCard
                label="SO₂"
                value={SO2?.concentration}
                unit="µg/m³"
                aqi={SO2?.aqi}
              />
            </div>

            <h2>Stubble burning prediction – visual chart</h2>
            <PollutionSourceChart
              sourceInsight={sourceInsight}
              aqiData={aqiData}
            />
          </>
        )}
      </div>
    </div>
  );
}

function PollutantCard({ label, value, unit, aqi }) {
  const hasValue = typeof value === "number";
  return (
    <div className="pollutant-card">
      <span className="pollutant-label">{label}</span>
      <span className="pollutant-value">
        {hasValue ? value.toFixed(2) : "--"}{" "}
        <span className="pollutant-unit">{hasValue ? unit : ""}</span>
      </span>
      <span className="pollutant-unit">
        {typeof aqi === "number" ? `AQI: ${aqi}` : ""}
      </span>
    </div>
  );
}

export default App;
