# Slab 1 - CodeXIntern

A professional front-end internship project featuring three React applications: a Text Translator, a Random String Generator, and a client-side routing demo. Built with React, TailwindCSS, and React Router.

---

## Description

This project demonstrates modern front-end development practices using React and TailwindCSS. It includes:
- A Text Translator app powered by RapidAPI (Google Translate API)
- A Random String Generator with customizable options
- Client-side routing with a responsive navigation bar

---

## Live Demo

> https://code-xinten.vercel.app/

---

## Features

### 1. Text Translator App
- Translate English text into multiple languages (Hindi, Marathi, etc.)
- Language selector and input box
- Uses RapidAPI (Google Translate API)
- Loading state and result display

### 2. Random String Generator
- Generate random alphanumeric strings
- Select string length
- Toggle inclusion of symbols
- Built with React hooks: useState, useEffect, useCallback

### 3. Client-side Routing
- Navigation using react-router-dom
- Pages: Home, Translator, Generator
- Responsive navbar linking all pages

---

## Technologies Used
- React
- TailwindCSS
- React Router DOM
- RapidAPI (Google Translate API)

---

## Installation Instructions

1. **Clone the repository:**
   ```zsh
   git clone <your-repo-url>
   cd "Slab 1"
   ```
2. **Install dependencies:**
   ```zsh
   npm install
   ```
3. **Set up API keys:**
   - Create a `.env` file in the root directory
   - Add your RapidAPI key:
     ```env
     VITE_RAPIDAPI_KEY=your_rapidapi_key_here
     ```
4. **Start the development server:**
   ```zsh
   npm run dev
   ```
5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or as indicated in the terminal)

---

## Folder Structure

```
Slab 1/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── RandomStringGenerator.jsx
│   │   └── Translator.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── RandomStringPage.jsx
│       └── TranslatorPage.jsx
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── ...
```

---

## Screenshots

> Add screenshots here
> ![Home Page](screenshots/home.png)
> ![Translator](screenshots/translator.png)
> ![Random String Generator](screenshots/generator.png)

---

## Credits
- [RapidAPI - Google Translate API](https://rapidapi.com/googlecloud/api/google-translate1)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

---

## License

This project is licensed under the MIT License.
