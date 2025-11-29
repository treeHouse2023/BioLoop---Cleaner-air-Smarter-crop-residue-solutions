# BioLoop – Real-Time Air Quality & Stubble Burning Intelligence System

BioLoop is a health-centered environmental intelligence platform designed to help citizens, students, and farmers understand real-time AQI, pollution impact, and stubble-burning hotspots, while offering sustainable alternatives through crop-residue recycling.

With live AQI data, pollutant-wise health interpretation, forecasting, farmer awareness modules, and verified government datasets, BioLoop delivers a full clean-air ecosystem tailored for the Punjab–NCR region.

**Live Demo:**  
https://bio-loop-cleaner-air-smarter-crop-r.vercel.app/

**Tech Stack:**  
React (Vite), Tailwind CSS, Ninja API, Node.js, Express, MongoDB, Leaflet Maps, WAQI/CPCB APIs

---

## Key Features

### Real-Time AQI Monitoring
- AQI for 4000+ Indian districts and cities  
- PM2.5, PM10, O₃, CO, NO₂, SO₂ readings  
- Color-coded categories (Good → Hazardous)  
- Health meaning for each pollutant  

### Health Intelligence
- Lung, heart, and brain impact interpretation  
- Precautionary guidance for high-risk groups  
- Alerts during severe smog  

### Stubble-Burning Hotspot Mapping
- Punjab–Haryana burning corridor analysis  
- Satellite-based historical data integration  
- AQI correlation with burning intensity  

### Survey Dashboard
- Insights from students, citizens & farmers  
- Health-symptom trends  
- AQI awareness levels  

### Farmer Awareness Module
- Why burning happens  
- Low-cost residue alternatives  
- Benefits of crop-residue recycling  

### Circular Economy Model
Crop residue converted into:
- Biodegradable plates  
- Organic manure  
- Cardboard sheets  
- Eco-friendly packaging  

---

# Government Data Integration & Research Datasets

## 1. CPCB AQI Station List (4000+ locations)
Files Included:
- `AQI_REPORT_TILL_2025.csv`
- `all_sitestatus20251127212414.xlsx`

Contains:
- Station IDs  
- District + city coverage  
- Pollutants monitored  
- Lat/Long + station status  

Used for:
- AQI mapping  
- Nearest-station suggestions  
- GIS visualizations  

---

## 2. National AQI Dataset (Till 2025)
File Included:
- `datasets/AQI_REPORT_TILL_2025.csv`

Contains:
- Daily AQI values  
- Pollutant-level readings  
- Seasonal and regional variations  

Used for:
- Forecasting  
- Trend analysis  
- Smog pattern detection  

---

## 3. Stubble-Burning Data (Satellite + Govt Sources)
Integrated from:
- NASA FIRMS  
- MoEFCC official reports  

Used for:
- Hotspot mapping  
- Temporal burning analysis  
- AQI correlation interpretation  

---

## 4. Google Form Survey Data
Includes:
- AQI awareness  
- Health-effects reporting  
- Pollution-season behavior  

---

## 5. Field Visit Dataset (Punjab Villages)
Collected through:
- Direct farmer interviews  
- On-ground observations  
- Photographic documentation  

Used to validate:
- Practical constraints  
- Awareness gaps  
- Feasibility of solutions  

---

# Tech Stack

### Frontend
- React.js (Vite)  
- Tailwind CSS  
- Leaflet.js  
- JavaScript / JSX  

### Backend
- Node.js  
- Express  
- Ninja API  
- MongoDB  

### APIs Used
- WAQI API  
- CPCB Open Data  
- Custom Express Endpoints  

---

# Folder Structure

