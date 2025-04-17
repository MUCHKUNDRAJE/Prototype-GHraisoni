# 🌡️ Coolpulse – Mapping Microclimates to Beat the Heat!

## 🔍 Problem Statement

**Design a platform that:**
- Maps microclimates in a city,
- Identifies urban heat islands,
- Suggests eco-friendly design interventions to cool down these zones.

---

## 🌆 About Coolpulse

Coolpulse is a community-powered web app designed to **visualize urban heat patterns** and promote **eco-conscious cooling interventions**. By using real-time temperature and land use data, our platform identifies **Urban Heat Islands (UHIs)** and enables city planners, environmentalists, and citizens to take informed action.

---

## 🧠 Features

- 📍 **Interactive Heatmaps**: Shows city zones with temperature variations and land use overlays.
- 🏙️ **Urban Heat Island Detection**: Highlights the hottest and most uncomfortable areas in the city.
- 🌱 **Cooling Suggestions**: Provides customized eco-friendly interventions (like vertical gardens, reflective roofs, water bodies).
- 🗣️ **Community Feedback**: Users can mark uncomfortable areas and suggest their own cooling ideas.
- 🔍 **Data Insights**: Land use correlations with heat zones for analysis and awareness.

---

## 📸 Screenshots

### 🚀 Landing Page

### Screenshot
![image](https://github.com/user-attachments/assets/d225e813-224f-4023-bdb5-6a9611405f5b)

### gif
![Untitled design (1)](https://github.com/user-attachments/assets/371c4e45-3e42-45b4-afb1-5ac6f5868378)


- Welcomes users to the platform.
- Brief explanation of microclimate mapping.
- Navigation to explore heatmaps and contribute feedback.

### 🔥 Heatmap Interface

![Screenshot 2025-04-17 073942](https://github.com/user-attachments/assets/0a458ccb-3c9d-460e-9c01-5e9d435b554c)

### Areawise Distribution

![Untitled design](https://github.com/user-attachments/assets/3a0e1b6b-e03e-48ac-8fd5-c42265335521)


- Real-time temperature overlay.
- Layers for land use and urban vegetation.
- Clicking zones shows specific temperature data and suggestions.

### 🧊 Cooling Suggestions Page

![Screenshot 2025-04-17 080322](https://github.com/user-attachments/assets/ece80430-d3b9-4aff-af3f-0be5d6847bbe)


- Shows actionable ideas like tree planting, roof painting, green spaces.
- Links to local policies and implementations.

### 🗣️ Community Input Page

![Screenshot 2025-04-17 073607](https://github.com/user-attachments/assets/3783ca5f-51c2-4570-94d5-4ee725c7f45c)


- Citizens can highlight discomfort zones.
- Suggest improvements or vote on existing proposals.

---

## 💡 Social Justification

With climate change accelerating, cities are becoming **hotter and less livable**. Urban Heat Islands (UHIs) disproportionately affect lower-income neighborhoods due to lack of green infrastructure. Coolpulse aims to:

- Democratize climate data for everyone,
- Empower citizens to participate in city cooling,
- Help policy makers make data-backed environmental decisions,
- Promote **climate justice** by focusing on the most vulnerable areas.

---

## 🚧 Tech Stack

- **Frontend**: React.js , Three.js
- **Backend**: django 
- **Map Rendering**: Leaflet.js 
- **Data Handling**: OpenWeather API
- **Database**: Supabase
- **Community Input**: Form with backend storage

---

## 🏁 Getting Started

```bash
git clone https://github.com/your-team/Coolpulse.git
cd Coolpulse
npm install
npm start





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
