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

### ✨ Premium Features

*   **🌌 Skills Galaxy**: A fully interactive 3D star-field visualization of technical skills built with **Three.js** and **React Three Fiber**.
*   **💻 Hacker Terminal Mode**: A command-line interface overlay that allows visitors to explore the portfolio through terminal commands.
*   **📊 Performance HUD**: A real-time telemetry display showing FPS, memory usage, and site metrics for a complete "Developer Experience."
*   **🌊 Ocean Cleanup Scroll Progress**: A unique, narrative-driven horizontal progress bar featuring an autonomous cleaning boat and catchable debris.
*   **🤖 Gemini AI Chatbot**: An intelligent assistant integrated with **Google Gemini AI** to provide instant answers about the developer.
*   **📅 GitHub Insights**: Integrated **GitHub Calendar** and stats to showcase real-time coding activity and contribution density.
*   **🌐 Language Proficiency**: A specialized visual component for showcasing linguistic skills and proficiency levels.

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
*   **[Lucide React](https://lucide.dev/)** - Consistent, beautiful iconography.

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
    Create a `.env` file in the `client` directory and add your keys:
    ```env
    VITE_WEB3FORMS_ACCESS_KEY=your_key_here
    VITE_GOOGLE_GEMINI_API_KEY=your_key_here
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
│   │   ├── App.jsx             # Main Application Logic
│   │   └── main.jsx            # Entry Point
│   ├── package.json
│   └── vite.config.js
├── LICENSE
└── README.md                   # Project Documentation
```

---

## 📜 License

Distributed under the ISC License. See `LICENSE` for more information.

---

## 📬 Contact

**Ashutosh** - [GitHub Profile](https://github.com/Ashu4789)

Project Link: [https://github.com/Ashu4789/Portfolio](https://github.com/Ashu4789/Portfolio)

---
*Built with ❤️ to showcase technical excellence and creative design.*
    <br />
    <a href="https://github.com/Ashu4789/Portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Ashu4789/Portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/Ashu4789/Portfolio/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## 🚀 About The Project

This is a comprehensive, full-stack portfolio application designed to present a professional online identity. It provides a seamless user experience with smooth scrolling, dynamic animations, and a modern UI powered by Tailwind CSS v4 and Framer Motion. The backend is designed using Node.js and Express to manage dynamic content, such as project data and contact messages, with MongoDB as the primary database and Cloudinary for media asset management.

### ✨ Features
* **Modern UI/UX**: Clean, responsive layout with dark mode support and custom cursors.
* **Component-Based Architecture**: Modular React components for About, Skills, Projects, Education, and more.
* **Smooth Animations**: Integrated with Framer Motion for scroll-triggered and interactive animations.
* **Dynamic Backend Integration**: Ready backend skeleton using Express and MongoDB.
* **Media Management**: Uses Cloudinary and Multer for optimized image handling.
* **Secure and Robust**: Implements environment variable protection and CORS.

### 🛠️ Built With

#### Frontend
* **[React 19](https://react.dev/)**
* **[Vite](https://vitejs.dev/)**
* **[Tailwind CSS v4](https://tailwindcss.com/)**
* **[Framer Motion](https://www.framer.com/motion/)**
* **[Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)**

#### Backend (Configured via Root)
* **[Node.js](https://nodejs.org/)** & **[Express](https://expressjs.com/)**
* **[MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)**
* **[Cloudinary](https://cloudinary.com/)** (Media management)
* **[Multer](https://www.npmjs.com/package/multer)** (File uploads)

<!-- GETTING STARTED -->
## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed on your local machine:
* Node.js (v18 or higher)
* npm
  ```sh
  npm install npm@latest -g
  ```
* MongoDB (Local instance or MongoDB Atlas URI)

### Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/Ashu4789/Portfolio.git
   cd Portfolio
   ```

2. **Install Backend Dependencies** (Root directory)
   ```sh
   npm install
   ```

3. **Install Frontend Dependencies** (`client` directory)
   ```sh
   cd client
   npm install
   ```

4. **Set up Environment Variables**
   * Create a `.env` file in the **root** space for backend secrets:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     ```
   * Create a `.env` file in the **client** space for frontend variables (if needed):
     ```env
     VITE_API_URL=http://localhost:5000
     ```

5. **Run the Application**
   * **Start Backend Server:** (From the root directory)
     ```sh
     npm run dev
     # or `nodemon index.js` if the dev script is updated.
     ```
   * **Start Frontend Client:** (From the `client` directory)
     ```sh
     npm run dev
     ```

Your frontend will normally run on `http://localhost:5173/` and backend on `http://localhost:5000/`.

<!-- FOLDER STRUCTURE -->
## 📁 Folder Structure

```text
.
├── client/                     # React Frontend Application (Vite)
│   ├── public/                 # Static public assets
│   ├── src/
│   │   ├── assets/             # Images, fonts, etc.
│   │   ├── components/         # Reusable React components (Navbar, Hero, etc.)
│   │   ├── context/            # React Contexts (e.g., ThemeContext)
│   │   ├── pages/              # Page level components
│   │   ├── App.jsx             # Main Application Component
│   │   └── main.jsx            # Entry Point
│   ├── package.json
│   └── vite.config.js
├── node_modules/               # Backend dependencies
├── .gitignore
├── LICENSE
├── package.json                # Backend core package config
└── README.md                   # Main Project Documentation
```

<!-- CONTRIBUTING -->
## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## 📜 License

Distributed under the ISC License. See `LICENSE` for more information.

<!-- CONTACT -->
## 📬 Contact

**Ashutosh** - [GitHub Profile](https://github.com/Ashu4789)

Project Link: [https://github.com/Ashu4789/Portfolio](https://github.com/Ashu4789/Portfolio)

---
*Documented with ❤️ to maintain industry standards.*
