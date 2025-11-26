// src/AboutBioLoop.jsx
import "./AboutBioLoop.css";

function AboutBioLoop() {
  return (
    <div className="app">
      <div className="card about-wrapper">
        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="about-hero-text">
            <h1 className="about-title">
              <span className="about-title-pill">BL</span> BioLoop
            </h1>
            <h2 className="about-subtitle">
              Closing the loop between{" "}
              <strong>farms, air quality and rural livelihoods.</strong>
            </h2>
            <p className="about-lead">
              BioLoop is a <strong>clean-air, crop-residue management model</strong> that
              helps farmers stop stubble burning and turn their waste into value-added
              products – biodegradable plates, fibre boards, compost and clean fuel – while
              protecting lungs and creating rural income.
            </p>

            <div className="about-badges">
              <span className="about-badge">Stop Burning</span>
              <span className="about-badge">Use Every Straw</span>
              <span className="about-badge">Breathe Cleaner Air</span>
            </div>
          </div>

          {/* Hero image with a high‑quality web image */}
          <div className="about-hero-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1661808770389-30a3ed35b7fe?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Farmer field and crop residue being collected"
            />
          </div>
        </section>

        {/* WHY THE NAME “BIOLOOP” */}
        <section className="about-section">
          <h2 className="about-heading">Why the Name “BioLoop”?</h2>
          <p className="about-text">
            The name <strong>BioLoop</strong> comes from the idea of creating a{" "}
            <strong>closed, circular loop</strong> around biological waste. Instead of
            letting crop residue end in fire and smoke, we keep it moving in a positive
            cycle that repeats every season.
          </p>

          <div className="loop-grid">
            <div className="loop-step">
              <div className="loop-step-number">01</div>
              <h3>Residue on the field</h3>
              <p>
                After harvest, straw is normally burned to quickly clear land for the next
                crop.
              </p>
              <img
                className="loop-img"
              src="https://imgs.search.brave.com/klIP5YMAhluMCs-yk6hhSClkskQcZCDZGEPYhcvT414/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lb3Mu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzExL3JpY2Ut/cGxhbnQtcmVzaWR1/ZXMuanBnLndlYnA"

                alt="Crop residue left on farm field"
              />
            </div>

            <div className="loop-step">
              <div className="loop-step-number">02</div>
              <h3>BioLoop collects it</h3>
              <p>
                Farmers <strong>book a pickup</strong> instead of burning. Residue is
                collected and transported to processing units.
              </p>
              <img
                className="loop-img"
                src="https://imgs.search.brave.com/fVGpWEx4_zScopuGuPEB45EOYKKxdvs39fdO1MhvF_g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9rajFi/Y2RuLmItY2RuLm5l/dC9tZWRpYS8zOTgz/MS9mYXJtZXJzLnBu/Zw"
                alt="Workers loading straw and crop residue onto trucks"
              />
            </div>

            <div className="loop-step">
              <div className="loop-step-number">03</div>
              <h3>Residue becomes products</h3>
              <p>
                Straw is converted into <strong>plates, boards, compost and briquettes</strong> – replacing plastics and fossil fuels.
              </p>
              <img
                className="loop-img"
                src="https://imgs.search.brave.com/AWa8DV-PwzzDhCc3Nm8Y5yhxKEiztANS_is1Bh8-Mmk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vYnVyZG5pay9i/dXJkbmlrMjIwOS9i/dXJkbmlrMjIwOTAw/MDE0LzE5MTA0NTYw/NS1pbmRvb3ItZ3Jl/ZW4tcGxhbnQtYW5k/LWVjby1mcmllbmRs/eS1wYXBlci10YWJs/ZXdhcmUtd2l0aC1y/ZWN5Y2xpbmctc2ln/bnMtdGhlLWNvbmNl/cHQtb2YtemVyby13/YXN0ZS5qcGc_dmVy/PTY"
                alt="Biodegradable plates and eco-friendly products"
              />
            </div>

            <div className="loop-step">
              <div className="loop-step-number">04</div>
              <h3>Income & cleaner air</h3>
              <p>
                Farmers earn from waste, cities breathe cleaner air, and the{" "}
                <strong>loop restarts next season</strong>.
              </p>
              <img
                className="loop-img"
                src="https://imgs.search.brave.com/5y7bKgwW30fLYCc8EohOLLCyGcXaFe0xJ1hhE_0s8GQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzkyLzY5Lzcx/LzM2MF9GXzY5MjY5/NzExN19VMDAzSExK/S1E1b2FNSENEcmxM/R3I2VVhBUEJnU1Jn/Yy5qcGc"
                alt="Cleaner rural air and sustainable farming"
              />
            </div>
          </div>
        </section>

        {/* MANAGEMENT PROBLEM */}
        <section className="about-section">
          <h2 className="about-heading">Management Problem We Are Solving</h2>

          <div className="about-two-col">
            <div>
              <h3 className="about-subheading">Stubble burning is not a habit, it’s a gap in the system</h3>
              <p className="about-text">
                Every October–November, large parts of North India burn crop residue in
                the open. This is a <strong>management and supply-chain failure</strong>,
                not just a farmer choice:
              </p>
              <ul className="about-list">
                <li>No organised system to <strong>collect crop residue</strong> from farms.</li>
                <li>No simple way for farmers to <strong>book a pickup</strong> or sell residue.</li>
                <li>Very weak link between <strong>farm waste, industry demand and health data</strong>.</li>
                <li>Result: smoke, toxic AQI spikes, hospital visits, soil damage and economic loss.</li>
              </ul>
            </div>

            <div className="about-highlight-box">
              <p className="about-highlight-number">30–40%</p>
              <p className="about-highlight-text">
                of peak winter pollution in Delhi-NCR on some days can come from stubble
                burning.
              </p>
              <p className="about-highlight-note">
                A few weeks of burning create months of smog, asthma, eye irritation and
                reduced visibility for millions of people.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT BIOLOOP DOES TODAY */}
        <section className="about-section">
          <h2 className="about-heading">What BioLoop Does Today</h2>

          <div className="about-feature-grid">
            <div className="about-feature-card">
              <h3>AQI Awareness & Health</h3>
              <p>
                We provide a <strong>live AQI dashboard</strong> with simple language,
                colours and health tips so families know when the air is safe, moderate
                or dangerous.
              </p>
              <img
                className="feature-img"
                src="https://imgs.search.brave.com/GaDbpZ_upUJneHZ8OKMo7K0Gs69L3Sr1QssCPcdFe94/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE1/ODU5NjkxNC92ZWN0/b3IvY29sb3Itc2Nh/bGUtYXFpLWFpci1x/dWFsaXR5LWluZGV4/LWxpbmVhci1zZW5z/b3Itc2NhbGUtYWly/LXB1cml0eS1pbmRp/Y2F0b3ItYWlyLXBv/bGx1dGlvbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VUJG/RTBKM25UMktZR1Fz/bTVNbGxPaGo1ejhP/cmdGVjlqcktHZE9X/N1VpVT0"
                alt="Air quality monitoring and pollution awareness"
              />
            </div>

            <div className="about-feature-card">
              <h3>Farmer Booking System</h3>
              <p>
                A clean, mobile-friendly form where farmers can <strong>book crop residue pickup</strong> instead of burning. So that they can earn more Profits.
              </p>
              <img
                className="feature-img"
                src="https://imgs.search.brave.com/ZhaQuMzkxE4B4xXa_SwlcEwnuECW_rNghu1xL_jNsXo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQ3/MTMzMTAwL3Bob3Rv/L29sZC1mYXJtZXIt/aG9sZGluZy1kaWdp/dGFsLXRhYmxldC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/S0JiQnFpTDZFek5T/a1hKVlcyUXV3Wkt4/LXRKejZKYVJ6VzZ1/VUU2RkdOYz0"
                alt="Farmer using mobile app to book services"
              />
            </div>

            <div className="about-feature-card">
              <h3>Prototypes from Real Residue</h3>
              <p>
                BioLoop experiments with small prototypes – <strong>plates, compost,
                briquettes and fibre sheets</strong> – made from actual farm residue.
              </p>
              <img
                className="feature-img"
                src="https://imgs.search.brave.com/1Z8o5ycEK5ni-EpIQIQMLAXIoyvtSkN-sC6J0ORyThI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aWlt/Zy50aXN0YXRpYy5j/b20vZnAvMS8wMDQv/ODk2L2NvcnJ1Z2F0/ZWQtY2FyZGJvYXJk/LXNoZWV0cy01MTAu/anBn"
                alt="Eco-friendly prototypes being prepared"
              />
            </div>

            <div className="about-feature-card">
              <h3>Field Visits & Storytelling</h3>
              <p>
                We document <strong>farmer voices, field visits and real visuals</strong> showing the impact. Spreading Awareness about Stubble Burning
              </p>
              <img
                className="feature-img"
                src="https://imgs.search.brave.com/n89lFVs8y7JrgMB6JlkAgfq3VsQ9zcwt6iRHptEspCI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zY21z/aHlkLmVkdS5pbi9h/c3NldHMvaW1hZ2Vz/L0ZpZWxkLVZpc2l0/LUFncmljdWx0dXJl/LUZhcm02LmdpZg.jpeg"
                alt="Team interacting with rural farmers"
              />
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="about-gallery">
          <img
            src="https://plus.unsplash.com/premium_photo-1661964145435-34a2d63f0c6f?q=80&w=1208&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Field visit with farmers"
          />
          <img
            src="https://images.unsplash.com/photo-1727021024931-90c226e8448d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Crop residue plates and prototypes"
          />
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=60"
            alt="Teamwork on sustainability projects"
          />
        </section>
      </div>
    </div>
  );
}

export default AboutBioLoop;
