 ✨ React Mini Code Editor

**A fast, in-browser code playground for HTML, CSS, and JavaScript — built with React, Vite, and CodeMirror.**

This project offers a lightweight, responsive, and extendable code editor that supports real-time previewing, syntax highlighting, and formatting. Ideal for learning, quick prototyping, and personal projects.

> 🚧 Actively under development – more features like theme toggle, local storage, and multi-language support coming soon!

-------------------------------------------

 🚀 Features

- 🎨 Syntax highlighting for HTML, CSS, JavaScript (CodeMirror 6)
- 🧠 Autocompletion & linting
- ✍️ Format code with Prettier
- 💾 Download HTML/CSS/JS code individually
- 🔄 Real-time preview using a sandboxed iframe
- ⚡ Built with Vite for blazing-fast startup
- 🧩 Modular React component structure
- 🎨 MUI for styled UI components

-------------------------------------------

 🛠️ Tech Stack

- **React**
- **CodeMirror 6**
- **Vite**
- **Prettier**
- **Material UI (MUI)**

-------------------------------------------

 📁 Project Structure

```
src/
├── components/
│   ├── Code.jsx       # Manages all editors and live result
│   ├── Editor.jsx     # CodeMirror editor instance with formatting/download
│   ├── Result.jsx     # Iframe live preview
│   ├── Header.jsx     # Top AppBar with logo
│   └── Home.jsx       # Main layout entry
```

-------------------------------------------

🧪 Getting Started

```bash
npm install
npm run dev
```

Visit: `http://localhost:5173`

------------------------------------------

📦 Build for Production

```bash
npm run build
```

------------------------------------------

🧭 TO DO

- [ ] 💾 Save code in localStorage
- [ ] 🌙 Light/Dark mode toggle
- [ ] 🌍 Multi-language editor support (e.g., Python, Markdown)
- [ ] 🔗 Shareable URLs
- [ ] 🧩 Resizable layout panels
- [ ] 📤 Export as ZIP

-----------------------------------------

 🏷 Keywords

`react` · `codemirror` · `code-editor` · `vite` · `html` · `css` · `javascript` · `frontend


