import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "./StubbleAwareness.css";

const BURNING_REGIONS = [
  {
    name: "Punjab",
    center: [31.1, 75.3],
    share: "Very high",
    desc: "Major rice–wheat belt with high share of seasonal burning."
  },
  {
    name: "Haryana",
    center: [29.2, 76.0],
    share: "High",
    desc: "Large paddy area, contributes significantly to winter smoke."
  },
  {
    name: "Uttar Pradesh (West)",
    center: [28.6, 77.5],
    share: "Moderate–High",
    desc: "Burning in western UP adds to Delhi-NCR haze."
  },
  {
    name: "Rajasthan (North-East)",
    center: [28.0, 74.0],
    share: "Moderate",
    desc: "Dry conditions and residue burning add to regional dust & smoke."
  }
];

// NEW: quick data highlights from Punjab study (you can also show these as cards in UI)
const PUNJAB_FACTS = [
  "Punjab produces ~20 million tonnes of paddy residue every year.",
  "In 2022, over 35,000 Kharif farm fires were recorded in Punjab alone.",
  "A CEEW survey covered 1,478 farmers across 11 districts of Punjab.",
  "Nearly 13% of surveyed farmers fully burned their straw in Kharif 2022.",
  "About 58% used in-situ machines, but almost half of them still did partial burning.",
  "Around 33% of farmers tried ex-situ methods like giving straw to balers and fodder users.",
  "Only ~3% of ex-situ farmers actually got paid (about ₹1,200 per acre) for their stubble.",
  "Most others gave straw away free or even paid to get it removed.",
  "Stopping crop residue burning in Punjab could avoid an economic loss of about USD 120 million every year."
];

function StubbleAwareness() {
  return (
    <div className="app">
      <div className="card stubble-wrapper">
        {/* HERO */}
        <section className="stubble-hero">
          <div className="stubble-hero-text">
            <h1>What is Stubble Burning?</h1>
            <p className="stubble-lead">
              Stubble burning is the practice of <strong>setting crop residue on fire</strong>{" "}
              after harvesting, mainly in rice–wheat belts. It looks like a quick solution
              to clear fields – but it fills the air with smoke, dust and toxic gases.
            </p>
            <p className="stubble-tagline">
              BioLoop wants to replace this smoke with{" "}
              <strong>clean air, healthier lungs and better income for farmers.</strong>
            </p>

            {/* NEW: quick stat strip under hero */}
            <div className="stubble-stat-strip">
              <div className="stubble-stat-pill">
                <span className="stubble-stat-number">30–40%</span>
                <span className="stubble-stat-label">
                  of peak winter PM2.5 in Delhi-NCR on some days can come from stubble burning.
                </span>
              </div>
              <div className="stubble-stat-pill">
                <span className="stubble-stat-number">3×</span>
                <span className="stubble-stat-label">
                  higher risk of acute respiratory problems near intense burning.
                </span>
              </div>
              <div className="stubble-stat-pill">
                <span className="stubble-stat-number">35,000+</span>
                <span className="stubble-stat-label">
                  farm fire incidents recorded in Punjab in one Kharif season.
                </span>
              </div>
            </div>
          </div>

          {/* Replace images with your real paths */}
          <div className="stubble-hero-images">
           
            <img
              src="https://imgs.search.brave.com/xNVDzjnKEnRnbozBpVlIGhl6eB1ehSHnFDdy8PSg5hU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzgxLzgzLzMx/LzM2MF9GXzc4MTgz/MzEyM191QUZQb2Zm/SnczZkRTbFV0a3U4/NndnUmNtV1FEU29l/Ry5qcGc"
              alt="Stubble burning in a farm"
            />
          </div>
        </section>

        {/* NEW: Punjab data-based awareness band */}
        <section className="stubble-section stubble-section--facts">
          <h2 className="stubble-heading">What does data from Punjab tell us?</h2>
          <p className="stubble-map-text">
            The Council on Energy, Environment and Water (CEEW) surveyed{" "}
            <strong>1,478 farmers in 11 districts of Punjab</strong> to understand how
            crop residue is actually managed on the ground. A few key insights:
          </p>
          <div className="stubble-facts-grid">
            {PUNJAB_FACTS.map((fact) => (
              <div key={fact} className="stubble-fact-card">
                <p>{fact}</p>
              </div>
            ))}
          </div>
          <p className="stubble-source-note">
            Source: CEEW report – “How can Punjab Increase the Adoption of Crop Residue
            Management Methods? Survey Insights from 11 Districts of the State” (2024).
          </p>
        </section>

        {/* WHAT & WHY */}
        <section className="stubble-section">
          <h2 className="stubble-heading">Why do farmers burn stubble?</h2>

          <div className="stubble-grid-2">
            <div>
              <h3 className="stubble-subheading">The management problem</h3>
              <p>
                Stubble burning is not just a “habit”. It is a{" "}
                <strong>logistics and time-pressure problem</strong>:
              </p>
              <ul className="stubble-list">
                <li>
                  Only a <strong>short gap</strong> (15–20 days) between paddy harvest and
                  wheat sowing.
                </li>
                <li>
                  Removing, baling or transporting residue{" "}
                  <strong>needs machines, labour and money</strong>.
                </li>
                <li>
                  No easy way to <strong>sell or book pickup</strong> of crop residue.
                </li>
                <li>
                  Burning is <strong>free, fast and visible</strong> – so it becomes the default choice.
                </li>

                {/* NEW extra bullets from survey */}
                <li>
                  Many farmers <strong>do not get timely access</strong> to Super Seeders / Happy Seeders
                  or straw-management machines when they need them.
                </li>
                <li>
                  Rental apps and schemes exist, but <strong>most farmers still depend on personal
                  networks</strong> (friends, relatives, local operators) to get machines.
                </li>
              </ul>
            </div>

            <div className="stubble-highlight-box">
              <p className="stubble-highlight-title">What gets released in the air?</p>
              <ul className="stubble-list">
                <li>PM2.5 & PM10 – tiny dust that goes deep into lungs</li>
                <li>CO, NO₂, SO₂ – harmful gases that irritate eyes & throat</li>
                <li>Black carbon – increases warming and climate change</li>
                <li>Ozone-forming gases – worsen ground-level O₃ in cities</li>

                {/* NEW small note*/}
                <li>
                  During peak burning, stubble smoke can contribute up to{" "}
                  <strong>30% of post-harvest PM2.5 in Delhi-NCR</strong>.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* HEALTH & ENVIRONMENT IMPACT */}
        <section className="stubble-section">
          <h2 className="stubble-heading">How does stubble burning affect us?</h2>

          <div className="stubble-grid-3">
            <div className="stubble-card">
              <h3>Air & Health</h3>
              <p>
                Smoke travels hundreds of kilometres and can push AQI from{" "}
                <strong>Moderate to Severe / Hazardous</strong>.
              </p>
              <ul className="stubble-list">
                <li>More asthma attacks and coughing, especially in children.</li>
                <li>Breathlessness for elderly and heart / lung patients.</li>
          
              </ul>
              {/* NEW micro-CTA */}
             
                <img
                src="https://imgs.search.brave.com/-7lwhSD5Lp5k48v6SM1LIuf788MPXc7SPcpzHP6CVlo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA4/NDU2MTc3OC9waG90/by93b21hbi13ZWFy/aW5nLWEtcmVhbC1h/bnRpLXNtb2ctZmFj/ZS1tYXNrLWFuZC1j/aGVja2luZy1jdXJy/ZW50LWFpci1wb2xs/dXRpb24td2l0aC1z/bWFydC1waG9uZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/N1FseW9yang4SEhp/ZmZfaHFzUVNsQUtQ/clVvLXd1R0IxQWt5/VVJtYmRGND0"
                alt="City covered in smog from burning"
                className="stubble-small-image"
              />
            </div>

            <div className="stubble-card">
              <h3>Soil & Farm</h3>
              <ul className="stubble-list">
               <li>Destroys earthworms and helpful soil microbes.</li>
                <li>Reduces soil organic carbon and fertility.</li>
                <li>Makes soil hard & less able to hold water.</li>
                <li>Increases need for fertilizers and irrigation cost.</li>
                
              </ul>
              {/* NEW note: long-term cost */}
           
                <img
                src="https://imgs.search.brave.com/SPF6FfvMly07WoTpe7P5MtGfrNdnaNzvIc42Ien6LGc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM0/Mzc0NTc1L3Bob3Rv/L3lvdW5nLWZhcm1l/ci1pbi1mcm9udC1v/Zi1zcHJpbmtsZXJz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz00SERtbkdOdEZ2/YlV5MW44QjJPb0Nk/WlVtTW1leGdLQUJi/T3FqMzhNc3pFPQ"
                alt="City covered in smog from burning"
                className="stubble-small-image"
              />
            </div>

            <div className="stubble-card">
              <h3>Climate & Visibility</h3>
              <ul className="stubble-list">
                <li>Releases greenhouse gases (CO₂, methane, nitrous oxide).</li>
                <li>Black carbon settles on ice & snow, causing faster melting.</li>
                <li>Thick smog reduces road & flight visibility and safety.</li>
              </ul>
                  <br/>
              <img
                src="https://imgs.search.brave.com/rObrebAA4K2Esfba_4HnseNIdLrXw2ZH4FBngjigF7Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2ZyLm9yZy9p/bWFnZS9mZXRjaC90/X3RnaC1tYXhfMjYw/MHgyNjAwL2h0dHBz/Oi8vYnVpbGQudGhp/bmtnbG9iYWxoZWFs/dGgub3JnLy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wMS9T/bW9nMjBSdXNzaWEu/anBn"
                alt="City covered in smog from burning"
                className="stubble-small-image"
              />
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="stubble-section">
          <h2 className="stubble-heading">Where is stubble burning most common?</h2>
          <p className="stubble-map-text">
            In India, stubble burning is mostly seen in the{" "}
            <strong>Indo-Gangetic plains</strong> – especially Punjab, Haryana,
            parts of western Uttar Pradesh and neighbouring regions. These fires
            often send smoke towards Delhi-NCR and nearby cities.
          </p>

          <div className="stubble-map-wrapper">
            <MapContainer
              center={[29.5, 76.0]}
              zoom={6}
              scrollWheelZoom={false}
              className="stubble-map"
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {BURNING_REGIONS.map((region) => (
                <CircleMarker
                  key={region.name}
                  center={region.center}
                  radius={14}
                  pathOptions={{
                    color: "#ef4444",
                    fillColor: "#ef4444",
                    fillOpacity: 0.45
                  }}
                >
                  <Tooltip direction="top">
                    <strong>{region.name}</strong>
                    <br />
                    Intensity: {region.share}
                    <br />
                    {region.desc}
                  </Tooltip>
                </CircleMarker>
              ))}
            </MapContainer>

            <div className="stubble-map-legend">
              <div className="legend-dot" />
              <div>
                <div className="legend-title">High stubble-burning belt</div>
                <div className="legend-text">
                  Red circles highlight regions with frequent crop residue
                  burning during October–November.
                </div>
              </div>
            </div>
          </div>

          {/* NEW mini text: what happens downwind */}
          <p className="stubble-map-text stubble-map-text--secondary">
            When thousands of fires light up together, the smoke doesn’t stay on the farm –
            it <strong>rides the wind</strong>, mixes with city emissions and turns into
            thick grey smog over entire regions.
          </p>
        </section>

        {/* WHAT CAN WE DO */}
        <section className="stubble-section">
          <h2 className="stubble-heading">What can be done instead of burning?</h2>

          <div className="stubble-grid-3">
            <div className="stubble-card">
              <h3>1. Collection & BioLoop model</h3>
              <p>
                Farmers book pickup of crop residue through{" "}
                <strong>BioLoop’s booking form</strong>. Residue is collected
                and used to make:
              </p>
              <ul className="stubble-list">
                <li>Plates, cups and packaging boards</li>
                <li>Bio-bricks and fibre panels</li>
                <li>Compost and soil-enriching products</li>
              </ul>
              {/* NEW: link idea */}
              <p className="stubble-mini-note">
                The goal is simple: <strong>“Don’t burn – book your residue.”</strong>{" "}
                Turning waste into products makes fields cleaner and villages richer.
              </p>
            </div>

            <div className="stubble-card">
              <h3>2. Smart mechanisation</h3>
              <ul className="stubble-list">
                <li>Happy Seeder / Super Seeder for sowing without burning.</li>
                <li>Straw management systems and balers.</li>
                <li>Custom hiring centres to make machines affordable.</li>
              </ul>
              {/* NEW: survey-based note */}
              <p className="stubble-mini-note">
                Punjab already has <strong>tens of thousands of Super Seeders and Happy Seeders</strong>.
                The challenge now is making access fast, fair and affordable for every farmer.
              </p>
            </div>

            <div className="stubble-card">
              <h3>3. Awareness & Incentives</h3>
              <ul className="stubble-list">
                <li>Village-level awareness on health impact of smoke.</li>
                <li>Rewards for “zero-burning” villages.</li>
                <li>Linking farmers to buyers of residue-based products.</li>
              </ul>
              {/* NEW: behaviour + policy note */}
              <p className="stubble-mini-note">
                Behaviour change needs <strong>trust + proof + support</strong> – proof that
                yields don’t fall, support to try new methods, and trust that the system
                will reward zero burning.
              </p>
            </div>
          </div>

          <p className="stubble-closing">
            <strong>Every fire avoided</strong> means cleaner lungs for children,
            safer air for cities, and healthier soil for farmers. BioLoop’s goal
            is to make “Don’t burn – book your residue” the easiest choice.
          </p>
        </section>

        {/* NEW: simple FAQ section for awareness */}
        <section className="stubble-section stubble-faq-section">
          <h2 className="stubble-heading">Quick FAQs on stubble burning</h2>
          <div className="stubble-grid-2">
            <div className="stubble-card">
              <h3>Is this only a Punjab problem?</h3>
              <p>
                No. Punjab is a major hotspot, but <strong>Haryana, western Uttar Pradesh,
                parts of Rajasthan and other states</strong> also face crop residue burning.
                Winds then carry the pollution across state borders.
              </p>
            </div>
            <div className="stubble-card">
              <h3>Are farmers the only ones responsible?</h3>
              <p>
                Farmers are at the end of a system with{" "}
                <strong>tight sowing windows, costly machines and weak markets</strong> for
                residue. The real solution needs support from{" "}
                <strong>governments, industry, researchers, and citizens</strong>, not blame.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StubbleAwareness;
