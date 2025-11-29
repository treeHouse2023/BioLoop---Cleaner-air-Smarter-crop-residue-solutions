# 🌿 BioLoop – Real-Time Air Quality & Stubble Burning Intelligence Platform

BioLoop is a health-focused environmental intelligence system that provides **real-time AQI monitoring**, **pollutant-wise health interpretation**, **stubble-burning hotspot visualization**, and **awareness dashboards**.  
Designed for Punjab–NCR, the platform helps citizens, students, families, and farmers understand **air quality risks**, **smog forecasts**, and **sustainable residue solutions**.

🔗 **Live Demo:** https://bio-loop-cleaner-air-smarter-crop-r.vercel.app/  
📦 **Tech Stack:** React (Vite), Tailwind CSS, Ninja API backend, Express/Node.js, MongoDB, Leaflet.js Maps, WAQI/CPCB APIs.

---

## 🚀 Features

### 🌬 Real-Time AQI Monitoring
- City-wise AQI for all major Indian locations  
- Pollutant readings: PM2.5, PM10, O₃, CO, NO₂, SO₂  
- Color-coded health categories (Good → Hazardous)

### 🩺 Health Impact Interpretation
- Explains each pollutant in simple language  
- Shows effects on **lungs, heart, and brain**  
- Health precautions for high-risk conditions

### 🔥 Stubble Burning Hotspots
- Map layer showing regions affected by burning  
- Forecast patterns using historical datasets  
- Explains connection between burning & smog spikes

### 🗺 Interactive Map Dashboard
- Leaflet-based map with markers, popups  
- Pollution hotspots + dynamic updates  
- Smooth UI with Tailwind animations

### 📊 Survey Dashboard (Google Forms Data)
- Public awareness insights  
- Pollution perception analysis  
- Health-related responses

### 🌱 Farmer Awareness Module
- Why burning happens  
- Low-cost residue alternatives  
- Sustainable eco-product model

### 🌎 Multilingual Support
- English  
- Punjabi (coming soon)

---

## 🛠️ Tech Stack & Tools

**Frontend:**  
- React.js (Vite)  
- Tailwind CSS  
- JavaScript & JSX  
- Leaflet.js (Maps)  
- AOS Animations  

**Backend:**  
- Node.js  
- Express  
- Ninja API for routing  
- MongoDB for structured data  
- Multer (optional uploads)

**APIs Used:**  
- WAQI API (Air Quality)  
- CPCB Open Data (Pollutants & stations)  
- Custom Ninja API endpoints  

---

## 📁 Folder Structure

BioLoop/
│── public/
│── src/
│ ├── components/
│ ├── pages/
│ ├── assets/
│ ├── styles/
│ ├── hooks/
│ ├── App.jsx
│ ├── main.jsx
│ └── AQIlogic.js
│── package.json
│── vite.config.js
│── README.md


---

## 🔧 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/BioLoop.git

# Navigate to project folder
cd BioLoop

# Install dependencies
npm install

# Start development server
npm run dev
