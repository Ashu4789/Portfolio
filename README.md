<div align="center">
  <img src="client/public/favicon.ico" alt="Logo" width="80" height="80">
  <h1 align="center">Premium Personal Portfolio</h1>
  <p align="center">
    An immersive, high-performance personal portfolio showcasing technical expertise with a futuristic, cyberpunk aesthetic.
    <br />
    <a href="https://github.com/Ashu4789/Portfolio"><strong>Explore the code »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Ashu4789/Portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/Ashu4789/Portfolio/issues">Request Feature</a>
  </p>
</div>

---

## 🚀 About The Project

This is a state-of-the-art personal portfolio application designed to push the boundaries of modern web design. Built as a pure frontend application, it prioritizes visual excellence, interactive storytelling, and technical depth. It features a dark-navy aesthetic with glassmorphism, dynamic animations, and several opt-in "Premium" interactive modes.

### ✨ Detailed Features

*   **🌌 Skills Galaxy (3D Visualization)**
    *   A fully interactive 3D star-field visualization of technical skills.
    *   Built with **Three.js** and **React Three Fiber**.
    *   Allows users to rotate, zoom, and interact with nodes representing different technologies and proficiencies.

*   **💻 Hacker Terminal Mode**
    *   A high-fidelity command-line interface overlay.
    *   Enables visitors to explore the portfolio using terminal commands (e.g., `visit`, `open`, `cv install`).
    *   Includes dynamic theme switching, GitHub insights, and language proficiency metrics directly accessible via CLI.

*   **📊 Performance HUD**
    *   A real-time telemetry display for a complete "Developer Experience."
    *   Monitors and displays frames per second (FPS), estimated memory usage, and component rendering metrics.

*   **🌊 Ocean Cleanup Scroll Progress**
    *   A unique, narrative-driven horizontal scroll progress bar.
    *   Features an autonomous cleaning boat that moves as you scroll, catching debris along the way, gamifying the scrolling experience.

*   **🤖 Gemini AI Chatbot**
    *   An intelligent conversational assistant integrated natively into the site.
    *   Powered by **Google Gemini AI** (`@google/genai`) to provide instant, context-aware answers about the developer's experience, projects, and skills.

*   **📅 GitHub Insights Integration**
    *   Live integration with the developer's GitHub profile.
    *   Displays a real-time contribution calendar and activity statistics to showcase coding density and consistency.

*   **🌐 Language Proficiency & Typography**
    *   Specialized visual components for showcasing linguistic skills.
    *   Features a sleek, typing-effect UI powered by `react-simple-typewriter`.

*   **✨ Immersive UI/UX & Animations**
    *   Custom interactive cursors that adapt to hover states.
    *   High-fidelity page transitions and micro-interactions powered by **Framer Motion**.
    *   Glassmorphism design language with Tailwind CSS v4.
    *   Dynamic particle backgrounds using `TSParticles`.

---

## 🛠️ Built With

### Core Frontend
*   **[React 19](https://react.dev/)** - The latest in component-based UI development.
*   **[Vite 8](https://vitejs.dev/)** - Lightning-fast next-generation frontend tooling.
*   **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS with the latest design tokens.
*   **[Framer Motion](https://www.framer.com/motion/)** - High-fidelity animations and interactions.

### Graphics & Interactivity
*   **[Three.js](https://threejs.org/)** & **[@react-three/fiber](https://github.com/pmndrs/react-three-fiber)** - 3D rendering engine.
*   **[TSParticles](https://particles.js.org/)** - Interactive particle backgrounds.
*   **[Lucide React](https://lucide.dev/)** & **[React Icons](https://react-icons.github.io/react-icons/)** - Consistent, beautiful iconography.
*   **[Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)** - Delightful celebration animations.

### Integrations
*   **[Web3Forms](https://web3forms.com/)** - Seamless, serverless contact form integration.
*   **[Google Gemini AI](https://deepmind.google/technologies/gemini/)** - Powering the intelligent chatbot experience.

---

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or higher recommended)
*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation & Setup

1.  **Clone the repository**
    ```sh
    git clone https://github.com/Ashu4789/Portfolio.git
    cd Portfolio
    ```

2.  **Install Dependencies**
    ```sh
    cd client
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the `client` directory and add your required keys:
    ```env
    VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
    VITE_GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here
    ```

4.  **Run the Application**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## 📁 Folder Structure

```text
.
├── client/                     # Core React Application
│   ├── public/                 # Static assets (Favicons, etc.)
│   ├── src/
│   │   ├── assets/             # Project-specific images and media
│   │   ├── components/         # UI Components (SkillsGalaxy, Terminal, etc.)
│   │   ├── data/               # Content data files (Projects, Skills)
│   │   ├── context/            # Global state management
│   │   ├── pages/              # Page level components
│   │   ├── App.jsx             # Main Application Logic
│   │   └── main.jsx            # Entry Point
│   ├── package.json
│   └── vite.config.js
├── LICENSE
└── README.md                   # Project Documentation
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the ISC License. See `LICENSE` for more information.

---

## 📬 Contact

**Ashutosh** - [GitHub Profile](https://github.com/Ashu4789)

Project Link: [https://github.com/Ashu4789/Portfolio](https://github.com/Ashu4789/Portfolio)

---
*Built with ❤️ to showcase technical excellence and creative design.*
