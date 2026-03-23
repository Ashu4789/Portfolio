# Frontend Client - Portfolio

This directory contains the frontend code for the personal portfolio application. It is built using modern web development practices to ensure high performance, responsiveness, and aesthetic appeal.

## 🚀 Tech Stack

* **[React 19](https://react.dev/)**
* **[Vite](https://vitejs.dev/)** - Lightning fast bundler
* **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
* **[Framer Motion](https://www.framer.com/motion/)** - Animation library for React
* **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

## 💻 Development Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Linting:**
   ```sh
   npm run lint
   ```

## 🏗️ Architecture Summary

The `src` folder employs a clean, component-centric architecture:
- `components/`: Contains all UI building blocks (`Hero.jsx`, `Projects.jsx`, etc.).
- `context/`: For global state management (e.g., Theme Context).
- `assets/`: For local static files (images, SVGs).
- `pages/`: Used alongside routing (if extended in the future).

*Note: For full-stack execution and backend setup, please refer to the `README.md` at the project root.*
