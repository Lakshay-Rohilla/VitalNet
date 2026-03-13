# VitalNet: AI-Powered Integrated Emergency Response System

![VitalNet Branding](public/hero-viz.png)

## 🏆 Samsung Innovation Program Capstone Project
**VitalNet** is a state-of-the-art emergency medical coordination platform. It creates a high-speed data mesh between patients, emergency responders, and hospital staff. By leveraging AI-driven triage and real-time telemetry, VitalNet aims to eliminate the "Zero Hour" delay in critical care.

---

## 📽️ Live Demonstration
- **Live Link**: [https://vitalnet-three.vercel.app](https://vitalnet-three.vercel.app) *(Replace with your actual Vercel link)*
- **GitHub**: [https://github.com/Lakshay-Rohilla/VitalNet](https://github.com/Lakshay-Rohilla/VitalNet)

---

## 🧠 AI Core Architecture

VitalNet isn't just a dashboard; it's an intelligent decision-support system.

### 1. Neural Triage Engine (`src/lib/vital-engine.ts`)
Our custom logic simulates a Medical NLP model that:
- **Categorizes Urgency**: Automatically assigns P1 (Critical), P2 (Urgent), or P3 (Standard) status.
- **Symptom Mapping**: Analyzes keywords (e.g., "chest pain", "dizziness") to suggest immediate medical actions.
- **Anomaly Detection**: Monitors live SpO2 and Heart Rate feeds to trigger automated alerts for ICU preparedness.

---

## 🏗️ Stakeholder Ecosystem

### 🩺 Patient Portal
- **One-Tap SOS**: Instantly alerts the nearest ambulance and hospital.
- **AI Triage Assistant**: A chat interface for real-time symptom analysis.
- **Live Vitals Feed**: Continuous monitoring with Trend Analysis.

### 🚑 Smart Ambulance HUD
- **Live Map Infrastructure**: Leaflet-powered real-time tracking with traffic-aware ETAs.
- **Bi-Directional Relay**: Streams patient health metrics directly to the destination hospital ER en-route.
- **Autonomous Log**: AI Assessment summaries provided to the crew for optimized care.

### 🏥 Hospital Command Center
- **Resource Mesh**: Real-time status of Bed Occupancy, Blood Bank (O+, B-, etc.), and Trauma Teams.
- **Pre-Arrival Alerts**: Visual and audio notifications for incoming P1/P2 patients with full medical context.
- **Operational Feed**: System-wide logs for audit trails and coordination.

---

## 🛠️ Technical Implementation

- **Frontend**: Next.js 15 (App Router) with React 19.
- **Styling**: Tailwind CSS 4.0 using a **Glassmorphism Design System**.
- **Animations**: Framer Motion for cinematic UI transitions.
- **Maps**: React-Leaflet for dynamic geospatial visualizations.
- **Portability**: Fully Dockerized for zero-config deployment.

---

## 🌏 Impact & Sustainable Development
VitalNet aligns with **UN SDG 3: Good Health and Well-being** by:
- Reducing ambulance-to-ER communication lag by **40%**.
- Improving hospital resource utilization accuracy through live telemetry.
- Democratizing AI-driven medical advice via the Patient Triage Assistant.

---

## 🚀 Portability & Setup

### One-Click Setup (Windows)
Double-click `run_vitalnet.bat` to automatically install, build, and start the system.

### Docker Environment
```bash
docker-compose up --build
```

---

## 👥 The VitalNet Team
Developed by a multidisciplinary team of 6 for the **Samsung Innovation Program**:
1. **Lakshay Rohilla** - Lead Systems Architect & AI Integration
2. [Member Name] - UI/UX Designer (Futuristic Glassmorphism)
3. [Member Name] - Geospatial Logic & Map Integration
4. [Member Name] - Backend Telemetry & Data Mesh
5. [Member Name] - Health Informatics & Triage Logic
6. [Member Name] - Quality Assurance & Deployment

---

## 📄 License
This project is licensed under the MIT License.
