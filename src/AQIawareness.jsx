import { useState } from "react";
import "./AQIawareness.css";

const TABS = ["AQI", "PM2.5", "Ozone", "CO", "SO2", "NO2"];

const LEVELS = {
  AQI: [
    {
      color: "#22c55e",
      label: "Good",
      range: "0 – 50",
      text: "Air is clean and safe. Enjoy outdoor activities without any health concerns."
    },
    {
      color: "#eab308",
      label: "Moderate",
      range: "51 – 100",
      text: "Acceptable air quality, but some sensitive people may notice mild symptoms."
    },
    {
      color: "#f97316",
      label: "Unhealthy for Sensitive Groups",
      range: "101 – 150",
      text: "Children, elderly and people with lung / heart disease may feel discomfort. Limit long outdoor exposure."
    },
    {
      color: "#ef4444",
      label: "Unhealthy",
      range: "151 – 200",
      text: "Everyone can start feeling health effects. Avoid long or heavy outdoor activities."
    },
    {
      color: "#a855f7",
      label: "Very Unhealthy",
      range: "201 – 300",
      text: "High health risk. Prefer staying indoors, especially for sensitive groups."
    },
    {
      color: "#7f1d1d",
      label: "Hazardous",
      range: "301+",
      text: "Emergency conditions. Serious health effects even for healthy people. Stay indoors and follow health advisories."
    }
  ],
  "PM2.5": [
    {
      color: "#22c55e",
      label: "Good",
      range: "0 – 12 µg/m³",
      text: "Fine particles are at a safe level. Lungs are not under extra stress."
    },
    {
      color: "#eab308",
      label: "Moderate",
      range: "12.1 – 35.4 µg/m³",
      text: "Acceptable, but long exposure can bother people with asthma or heart disease."
    },
    {
      color: "#f97316",
      label: "Unhealthy for Sensitive Groups",
      range: "35.5 – 55.4 µg/m³",
      text: "Sensitive people should limit time near traffic and busy roads."
    },
    {
      color: "#ef4444",
      label: "Unhealthy",
      range: "55.5 – 150.4 µg/m³",
      text: "Breathing may cause coughing, irritation, and chest tightness."
    },
    {
      color: "#a855f7",
      label: "Very Unhealthy",
      range: "150.5 – 250.4 µg/m³",
      text: "Strong health impact. Wear masks outside and keep air indoors clean."
    },
    {
      color: "#7f1d1d",
      label: "Hazardous",
      range: "250.5+ µg/m³",
      text: "Extremely dangerous, especially for lungs and heart. Avoid going outside."
    }
  ],
  Ozone: [
    {
      color: "#22c55e",
      label: "Good",
      range: "0 – 50 AQI",
      text: "Ozone concentration is low. No expected health effects."
    },
    {
      color: "#eab308",
      label: "Moderate",
      range: "51 – 100 AQI",
      text: "Okay for most, but sensitive groups should avoid hard exercise outdoors."
    },
    {
      color: "#f97316",
      label: "Unhealthy for Sensitive Groups",
      range: "101 – 150 AQI",
      text: "Can trigger breathing issues for people with asthma or lung disease."
    },
    {
      color: "#ef4444",
      label: "Unhealthy",
      range: "151 – 200 AQI",
      text: "Coughing, throat irritation and breathing difficulty may increase."
    },
    {
      color: "#a855f7",
      label: "Very Unhealthy",
      range: "201 – 300 AQI",
      text: "Avoid outdoor exercise; limit time outside even for healthy people."
    },
    {
      color: "#7f1d1d",
      label: "Hazardous",
      range: "301+ AQI",
      text: "Serious health risk. Follow emergency health warnings."
    }
  ],
  CO: [
    {
      color: "#22c55e",
      label: "Good",
      range: "0 – 4.4 ppm",
      text: "No expected problems. CO levels are safe."
    },
    {
      color: "#eab308",
      label: "Moderate",
      range: "4.5 – 9.4 ppm",
      text: "Prolonged exposure may cause mild headaches or fatigue in some people."
    },
    {
      color: "#f97316",
      label: "Unhealthy for Sensitive Groups",
      range: "9.5 – 12.4 ppm",
      text: "People with heart disease might feel chest pain or discomfort."
    },
    {
      color: "#ef4444",
      label: "Unhealthy",
      range: "12.5 – 15.4 ppm",
      text: "Higher risk of dizziness, nausea and tiredness after exposure."
    },
    {
      color: "#a855f7",
      label: "Very Unhealthy",
      range: "15.5 – 30.4 ppm",
      text: "Strong health impact. Stay away from traffic-heavy, closed or badly ventilated spaces."
    },
    {
      color: "#7f1d1d",
      label: "Hazardous",
      range: "30.5+ ppm",
      text: "Very dangerous – can be life-threatening. Immediate action required."
    }
  ],
  SO2: [
    {
      color: "#22c55e",
      label: "Good",
      range: "0 – 35 ppb",
      text: "No irritation expected. Safe for regular outdoor life."
    },
    {
      color: "#eab308",
      label: "Moderate",
      range: "36 – 75 ppb",
      text: "Sensitive people with asthma may notice slight breathing problems."
    },
    {
      color: "#f97316",
      label: "Unhealthy for Sensitive Groups",
      range: "76 – 185 ppb",
      text: "Can trigger asthma attacks, coughing and throat irritation."
    },
    {
      color: "#ef4444",
      label: "Unhealthy",
      range: "186 – 304 ppb",
      text: "Outdoor activities should be limited, especially for children and elderly."
    },
    {
      color: "#a855f7",
      label: "Very Unhealthy",
      range: "305 – 604 ppb",
      text: "High risk of lung irritation and breathing trouble. Prefer staying indoors."
    },
    {
      color: "#7f1d1d",
      label: "Hazardous",
      range: "605+ ppb",
      text: "Emergency conditions. Avoid exposure and follow official advice."
    }
  ],
  NO2: [
    {
      color: "#22c55e",
      label: "Good",
      range: "0 – 53 ppb",
      text: "Nitrogen dioxide is at a safe level. No health impact expected."
    },
    {
      color: "#eab308",
      label: "Moderate",
      range: "54 – 100 ppb",
      text: "Can slightly irritate lungs of sensitive people with long exposure."
    },
    {
      color: "#f97316",
      label: "Unhealthy for Sensitive Groups",
      range: "101 – 360 ppb",
      text: "Asthma and other lung issues can get worse; avoid busy roads."
    },
    {
      color: "#ef4444",
      label: "Unhealthy",
      range: "361 – 649 ppb",
      text: "Breathing discomfort, coughing and chest tightness may increase."
    },
    {
      color: "#a855f7",
      label: "Very Unhealthy",
      range: "650 – 1249 ppb",
      text: "High risk for lungs and heart. Limit outdoor time as much as possible."
    },
    {
      color: "#7f1d1d",
      label: "Hazardous",
      range: "1250+ ppb",
      text: "Very dangerous, especially near traffic / industrial areas. Avoid exposure."
    }
  ]
};

function AQIawareness() {
  const [activeTab, setActiveTab] = useState("AQI");

  const currentLevels = LEVELS[activeTab];

  return (
    <div className="app">
      <div className="card aqi-awareness">
        {/* Page intro */}
        <section className="aqi-hero">
          <h1>What is Air Quality Index (AQI)?</h1>
          <p className="aqi-lead">
            The <strong>Air Quality Index (AQI)</strong> is a simple number that
            tells you how polluted the air is and how it can affect your health.
            It combines many pollutants – like PM2.5, PM10, Ozone, CO, SO₂ and
            NO₂ – into one easy-to-read score.
          </p>

          <div className="aqi-hero-grid">
            <div className="aqi-hero-card">
              <h3>Why should you care?</h3>
              <ul>
                <li>High AQI = more polluted air = higher health risk.</li>
                <li>
                  Children, elderly people and heart / lung patients are{" "}
                  <strong>affected first</strong>.
                </li>
                <li>
                  Knowing AQI helps you decide when to{" "}
                  <strong>avoid outdoor exercise, wear a mask</strong> or stay
                  indoors.
                </li>
              </ul>
            </div>

            <div className="aqi-hero-card">
              <h3>How AQI is calculated</h3>
              <p>
                Monitors measure pollutant levels in the air. Each pollutant
                gets its own index value. The <strong>highest</strong> of these
                becomes the <strong>overall AQI</strong> for that location.
              </p>
              <p className="aqi-note">
                Example: If PM2.5 is “Unhealthy” and others are “Moderate”, the
                overall AQI will show “Unhealthy”.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs for AQI / PM / Ozone / CO / SO2 / NO2 */}
        <section className="aqi-tabs-section">
          <div className="aqi-tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={
                  "aqi-tab-button" +
                  (activeTab === tab ? " aqi-tab-button-active" : "")
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="aqi-tab-content">
            <h2 className="aqi-tab-title">
              {activeTab === "AQI" ? "Overall AQI Levels" : `${activeTab} Levels`}
            </h2>

            {activeTab === "AQI" && (
              <p className="aqi-tab-description">
                Overall AQI tells you the <strong>general air quality</strong>{" "}
                of your city. It merges all key pollutants into a single score
                from <strong>0 (Good)</strong> to <strong>500 (Hazardous)</strong>.
              </p>
            )}

            {activeTab === "PM2.5" && (
              <p className="aqi-tab-description">
                <strong>PM2.5</strong> are ultra-fine dust particles smaller
                than 2.5 micrometres. They go deep into lungs and even enter the
                bloodstream – making them one of the most dangerous pollutants.
              </p>
            )}

            {activeTab === "Ozone" && (
              <p className="aqi-tab-description">
                <strong>Ground-level Ozone (O₃)</strong> is created when
                sunlight reacts with vehicle and industrial emissions. It can
                cause chest pain, coughing and throat irritation.
              </p>
            )}

            {activeTab === "CO" && (
              <p className="aqi-tab-description">
                <strong>Carbon Monoxide (CO)</strong> is a colourless, odourless
                gas mostly from vehicle exhausts. High CO reduces the oxygen
                your blood can carry.
              </p>
            )}

            {activeTab === "SO2" && (
              <p className="aqi-tab-description">
                <strong>Sulfur Dioxide (SO₂)</strong> mainly comes from burning
                coal and heavy fuels. It irritates the respiratory system and
                can trigger asthma.
              </p>
            )}

            {activeTab === "NO2" && (
              <p className="aqi-tab-description">
                <strong>Nitrogen Dioxide (NO₂)</strong> is produced by vehicles
                and industry. It inflames the airways and lowers our resistance
                to lung infections.
              </p>
            )}

            {/* Table of levels for the active pollutant */}
            <div className="aqi-table">
              {currentLevels.map((row) => (
                <div key={row.label} className="aqi-row">
                  <div className="aqi-row-left">
                    <span
                      className="aqi-color-dot"
                      style={{ backgroundColor: row.color }}
                    />
                    <div>
                      <div className="aqi-row-label">{row.label}</div>
                      <div className="aqi-row-range">{row.range}</div>
                    </div>
                  </div>
                  <div className="aqi-row-text">{row.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick “How to use AQI in daily life” tips */}
        <section className="aqi-daily-tips">
          <h2>How to use AQI in daily life</h2>
          <div className="aqi-tips-grid">
            <div className="aqi-tip-card">
              <h3>Green / Yellow (0–100)</h3>
              <p>Safe for most people. Perfect time for jogging, sports and outdoor work.</p>
            </div>
            <div className="aqi-tip-card">
              <h3>Orange / Red (101–200)</h3>
              <p>
                Sensitive groups should reduce outdoor time. If you have asthma,
                keep inhaler handy and avoid heavy exercise.
              </p>
            </div>
            <div className="aqi-tip-card">
              <h3>Purple / Maroon (201+)</h3>
              <p>
                Everyone should limit outdoor exposure. Use masks, keep windows
                closed and run air purifiers if available.
              </p>
            </div>
          </div>
        </section>

        {/* NEW: Brief IQAir source + India snapshot */}
        <section className="aqi-source-section">
          <h2>Where do these AQI numbers come from?</h2>

          <div className="aqi-source-grid">
            <div className="aqi-source-card">
              <h3>Data source – IQAir</h3>
              <p>
                Live and historical air quality data used in BioLoop is referenced from{" "}
                <strong>IQAir’s India air quality platform</strong>, which aggregates readings
                from hundreds of monitoring stations and contributors across the country.
              </p>
              <ul>
                <li>Real-time AQI and PM2.5 levels for Indian cities.</li>
                <li>Daily “most polluted” and “cleanest” city rankings.</li>
                <li>Annual reports on country and city-wise air quality.</li>
              </ul>
              <p className="aqi-source-note">
                For exact current values, always check the live IQAir map instead of relying
                only on screenshots or static examples.
              </p>
            </div>

            <div className="aqi-source-card">
              <h3>India snapshot (example from IQAir)</h3>
              <ul>
                <li>India’s annual PM2.5 levels are several times higher than WHO guidelines.</li>
                <li>North India cities like Delhi, Noida, Ghaziabad often appear in the
                    “most polluted” list during winter.</li>
                <li>Southern and coastal cities like Bengaluru or Gangtok can show
                    comparatively cleaner air on the same day.</li>
              </ul>
              <a
                className="aqi-source-link"
                href="https://www.iqair.com/india"
                target="_blank"
                rel="noreferrer"
              >
                View live India AQI on IQAir ↗
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AQIawareness;
