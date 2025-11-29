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

BioLoop/
│── public/
│── src/
│ ├── components/
│ ├── pages/
│ ├── assets/
│ ├── utils/
│ ├── AQIlogic.js
│ ├── App.jsx
│ └── main.jsx
│── datasets/
│ ├── all_sitestatus20251127212414.xlsx
│ ├── AQI_REPORT_TILL_2025.csv
│── README.md
│── package.json
│── vite.config.js

---

# Installation

```bash
git clone https://github.com/your-username/BioLoop.git
cd BioLoop
npm install
npm run dev

````

##Presentation Deck

The complete project presentation is available at the link below:

Canva Presentation:
https://www.canva.com/design/DAGzRPmHyzs/s0-vU-6qfEegfDPa2Nwlvw/view?utm_content=DAGzRPmHyzs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf517cfe8f3

This presentation includes:

Problem statement

Real-time AQI system architecture

Stubble-burning research

Health impact analysis

Survey outcomes

Business & sustainability model

##Field Visit Photographs

![WhatsApp Image 2025-11-28 at 10 53 09_9dedd610](https://github.com/user-attachments/assets/d1bb83e4-e75a-49c3-b03e-0c967b72b135)
![WhatsApp Image 2025-11-28 at 10 54 43_bb4a0794](https://github.com/user-attachments/assets/ed962762-819c-4399-ba0c-3b2ccdedf3b7)
![WhatsApp Image 2025-11-28 at 10 54 45_fe3029e2](https://github.com/user-attachments/assets/212bd410-529e-4a76-a679-df8fcada027c)
![WhatsApp Image 2025-11-28 at 10 54 56_9d1ae65f](https://github.com/user-attachments/assets/7e325313-c5a6-4b49-a6f4-9bb6c3e806b0)
![WhatsApp Image 2025-11-27 at 18 17 43_eeb49e74](https://github.com/user-attachments/assets/8165d7da-8036-4918-bc59-0c030e880c06)
![WhatsApp Image 2025-11-27 at 18 17 42_73fc83dc](https://github.com/user-attachments/assets/210925ec-e9cd-47fc-9f63-93d30b0096bd)

##Contributors

Nishant Chauhan – Full-Stack Development, AQI Engine

Raghav Sharma – Data Analysis, Survey & Field Research

Mehak Sharma – Documentation & Farmer Outreach

License

This project is part of the Hack for Social Cause – Ministry of Youth Affairs & Sports (VBYLD 2026).
For academic and research use.




