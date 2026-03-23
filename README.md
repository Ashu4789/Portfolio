<div align="center">
  <img src="client/public/favicon.ico" alt="Logo" width="80" height="80">
  <h3 align="center">Full-Stack Portfolio</h3>
  <p align="center">
    A personal full-stack portfolio website showcasing projects, skills, education, and professional experience.
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
