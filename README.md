# 🚄 Railflux: AI-Powered Digital Twin for Intelligent Railway Traffic Control  

> **An AI Co-Pilot for Indian Railways — maximizing section throughput, minimizing delays, and building trust through Explainable AI.**  

---

## 📌 Problem Statement  
- **ID:** SIH24022 
- **Title:** Maximizing Section Throughput Using AI-Powered Precise Train Traffic Control  
- **Theme:** Transport & Logistics  
- **Category:** Software  

Indian Railways faces **congestion, cascading delays, and underutilized track capacity**. Current systems are largely reactive, lacking predictive intelligence and holistic network awareness.  

---

## 💡 Our Solution: *Railflux*  
**Railflux** is an **AI-powered Digital Twin system** that acts as an intelligent *co-pilot* for railway traffic controllers.  

🔑 **Core Components:**  
1. **Digital Twin Sandbox** – A real-time virtual replica of a railway section for risk-free AI training and scenario testing.  
2. **Hybrid AI Brain** –  
   - **Deep Reinforcement Learning (DRL):** Learns optimal routing and scheduling.  
   - **Predictive Models (LSTM):** Forecasts arrivals and delays.  
3. **Controller’s Dashboard** – A live, single-screen interface with AI suggestions, outcomes, and map visualizations.  
4. **Explainable AI Core** – A *“Why?” button* for transparent reasoning behind every AI recommendation.  

✅ **Impact:** Moves from **reactive firefighting → proactive optimization**, unlocking hidden capacity and improving reliability.  

---

## 🛠️ Technical Architecture  

| Layer        | Technology Stack |
|--------------|------------------|
| **Backend**  | Python, FastAPI, WebSockets |
| **AI/ML**    | PyTorch, TensorFlow, Scikit-learn, OpenAI Gym |
| **Frontend** | React.js (Vite), Deck.gl (maps), D3.js |
| **Database** | TimescaleDB (time-series), PostGIS |
| **DevOps**   | Docker, GitHub Actions, Vercel / Railway.app |

---

## 📊 Workflow Diagram  

```mermaid
flowchart TD

%% Define styles
classDef problem fill:#e63946,color:#fff,stroke:#b71c1c,stroke-width:2px
classDef solution fill:#1d3557,color:#fff,stroke:#003049,stroke-width:2px
classDef pillar fill:#457b9d,color:#fff,stroke:#1d3557,stroke-width:2px
classDef detail fill:#a8dadc,color:#000,stroke:#457b9d
classDef tech fill:#2a9d8f,color:#fff,stroke:#00695c,stroke-width:2px

%% Problem
P["Problem: Chronic Railway Congestion"]:::problem --> 
C["Consequence: Delays, Financial Losses, Inefficiency"]:::problem

%% Core Solution
C --> DTRAC["Railflux: AI Co-Pilot for Railway Operations"]:::solution

%% Pillar 1 - Digital Twin
DTRAC --> P1["Pillar 1 - Digital Twin"]:::pillar
P1 --> P1a["Live Replica of Tracks & Signals"]:::detail
P1a --> P1b["Safe Simulation Environment"]:::detail
P1b --> P1c["Scalable Scenario Testing"]:::detail

%% Pillar 2 - AI Engine
DTRAC --> P2["Pillar 2 - AI Engine"]:::pillar
P2 --> P2a["Optimization Algorithms"]:::detail
P2a --> P2b["Predictive Models for ETA & Delays"]:::detail
P2b --> P2c["Decision Support System"]:::detail

%% Pillar 3 - Controller Dashboard
DTRAC --> P3["Pillar 3 - Controller Dashboard"]:::pillar
P3 --> P3a["Visual Network Map"]:::detail
P3a --> P3b["Real-Time Suggestions"]:::detail
P3b --> P3c["Human-in-the-Loop Control"]:::detail

%% Pillar 4 - Explainability
DTRAC --> P4["Pillar 4 - Explainability"]:::pillar
P4 --> P4a["Why Button - Transparency Layer"]:::detail
P4a --> P4b["Simple Explanations for Decisions"]:::detail
P4b --> P4c["Trust & Adoption"]:::detail

%% Tech Stack
DTRAC --> T["Tech Stack"]:::tech
T --> T1["Backend: Python + FastAPI"]:::tech
T --> T2["AI/ML: PyTorch or TensorFlow"]:::tech
T --> T3["Frontend: React + Vite, Deck.gl, Tailwind"]:::tech
T --> T4["Database: TimescaleDB, PostGIS"]:::tech
T --> T5["DevOps: Docker, Docker Compose"]:::tech
```

---

## 🔍 Feasibility & Viability  

- **Technical Feasibility:** Proven tech (DRL, Digital Twins, FastAPI) + scalable cloud (AWS/GCP).  
- **Economic Feasibility:** Even **5% delay reduction** saves **millions** in fuel, crew hours, and capacity.  
- **Operational Feasibility:** Designed as a *decision-support tool*, ensuring low-risk phased adoption.
- 
---

## 🌍 Impact & Benefits  

**Economic:**  
- 💰 More trains per day → Increased revenue  
- ⛽ Lower fuel costs → Reduced wastage  
- ⏰ Fewer delays → Huge cost savings  

**Social:**  
- 👥 Better passenger punctuality  
- 👷 Safer operations with AI conflict prediction  

**Environmental:**  
- 🌿 Reduced emissions via optimized fuel use  

**Strategic:**  
- 🇮🇳 Boosts Indian Railways’ global competitiveness  

---

## 📚 Research & References  

- **Academic**  
  - *A Survey of Deep Reinforcement Learning for Train Scheduling* – IEEE T-ITS  
  - *Multi-Agent DRL for Railway Traffic Management* – AAMAS 2021  
- **Official Reports**  
  - [National Rail Plan 2024 – Ministry of Railways](https://indianrailways.gov.in)  
  - [data.gov.in – Indian Railways Public Data](https://data.gov.in/)  
- **Technical**  
  - [PyTorch RL Docs](https://pytorch.org) | [FastAPI Docs](https://fastapi.tiangolo.com) | [Deck.gl Docs](https://deck.gl)  
  - [Flatland Railway Traffic Simulator](https://www.aicrowd.com/challenges/flatland)  

---

## 🚀 Roadmap  

- [x] Define problem & research baseline AI models  
- [ ] Build Digital Twin sandbox prototype  
- [ ] Integrate DRL + LSTM hybrid AI brain  
- [ ] Develop Explainable AI “Why?” engine  
- [ ] Pilot on a defined railway section  
- [ ] Expand to multi-section network scaling  

---

## 👥 Team Railflux  

| Name | Role | Area |
|------|------|------|
| Sri Ram Varun Dittakavi | Team Lead | AI & Systems |
| Deepsai Yadamreddi | Backend Engineer | APIs & Integration |
| Soham Bacchuwar | Frontend Developer | UI/UX, Visualization |
| Smit Axaykumar Thakkar | Data Engineer | Simulation & DB |
| Yamini | Domain Expert | Rail Ops Research |
| Vishaka Meena | DevOps & Deployment Engineer | Cloud, CI/CD, Scalability |

---

## 📄 License  

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.  

---

🔥 **Railflux = Railways + AI + Trust.**  
We’re not just solving congestion — we’re redefining how Indian Railways thinks about traffic management.  
