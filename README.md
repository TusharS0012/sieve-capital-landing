# Sivix | Signal Intelligence Landing Page

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Tech](https://img.shields.io/badge/stack-React%20%7C%20Tailwind%20%7C%20Vite-61DAFB)

> **"Collapsing the Latency of Truth."**

Sivix is a high-performance landing page for a quantitative research and technology firm specializing in "News-to-Trade" signal generation. This repository contains the source code for the institutional-grade web presence of the Sivix engine.

## 🏗 System Architecture

The site is designed to reflect the Sivix core philosophy: **Filtering noise into actionable alpha.**

- **The Sieve:** A custom-built data-stream visualization (GLSL/Canvas) representing the transformation of unstructured news into high-fidelity signals.
- **Signal Terminal:** A real-time simulated feed component showing the integration of LLM sentiment and geospatial data.
- **The Bento Grid:** A modular layout highlighting our core pillars: Geospatial Analysis, Sentiment Synthesis, and Momentum Modeling.

## 🛠 Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Components:** Radix UI / Shadcn

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/sivix-web.git](https://github.com/yourusername/sivix-web.git)
   cd sivix-web
Install dependencies:

Bash
npm install
Launch development server:

Bash
npm run dev
📂 Project Structure
Plaintext
├── src
│   ├── components
│   │   ├── hero/          # Data Sieve visualizer
│   │   ├── terminal/      # Live signal feed component
│   │   └── ui/            # Shared Radix/Shadcn primitives
│   ├── hooks/             # Custom intersection observers for scroll animations
│   ├── styles/            # Global theme and design tokens
│   └── App.tsx            # Main layout and routing
├── public/                # Assets (High-res textures & SVGs)
└── tailwind.config.js     # Custom 'Sivix' color palette & typography
🎨 Brand Identity
Primary Color: #0a0a0a (Midnight Black)

Accent Color: #00ff41 (Signal Green)

Typography: Geist Sans for headers, JetBrains Mono for data points.

🛡 License
This project is licensed under the MIT License - see the LICENSE file for details.
