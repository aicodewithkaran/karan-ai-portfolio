# 🚀 AI Portfolio Template — Dark & Premium Interactive Web Application

A high-performance, dark glassmorphic portfolio and personal website template tailored for **AI/ML Engineers, Automation Specialists, and Technical Consultants**. Built with **Vite, React 19, Tailwind CSS v4, Lucide Icons, and Calendly Integration**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.0-cyan.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-purple.svg)
![Vite](https://img.shields.io/badge/Vite-6.0-yellow.svg)

---

## 🌟 Key Features

- **Obsidian Dark Mode & Glassmorphic UI**: High-contrast `#0b0f17` background, backdrop blur (`blur(16px)`), cyan/violet glowing mesh, and subtle 3D hover elevations.
- **Cybernetic Boot Loader Sequence (`BootScreen.jsx`)**: High-tech initial OS loading screen with neural status logs and progress bar.
- **Outcome-Led Client Framing**: Problem-first headline positioning targeting legal teams, HR/recruiting agencies, and document-heavy operations.
- **Interactive Testimonials & Reviews Engine (`Testimonials.jsx`)**: 
  - Dynamic 1-5 star rating selector.
  - Client review submission modal.
  - `localStorage` persistence so visitor feedback remains active.
  - Infinite auto-scrolling marquee carousel when reviews increase.
- **Calendly 1-on-1 Strategy Meeting Modal (`CalendlyModal.jsx`)**: Seamless embedded appointment scheduler.
- **AI Resume Assistant Chat Modal (`AIChatModal.jsx`)**: Interactive candidate Q&A chatbot widget.
- **Interactive Cursor Spotlight Glow (`CursorSpotlight.jsx`)**: Smooth mouse pointer radial spotlight tracking.
- **Live Streamlit App Showcase**: Embedded links and sleep/wake guidance notes for Streamlit hosted projects.

---

## 📂 Project Structure & Files to Commit

```text
.
├── index.html              # Core HTML entrypoint & font preloads
├── package.json            # Dependencies & build scripts
├── vite.config.js          # Vite + @tailwindcss/vite configuration
├── vercel.json             # Vercel SPA rewrite configuration
├── .env.example            # Environment variables template
├── .gitignore              # Configured Git exclusions
├── public/                 # Static assets & pdf resume
└── src/
    ├── main.jsx            # React root entry
    ├── App.jsx             # Main container & global hotkey orchestration
    ├── index.css           # Tailwind v4 import & custom glassmorphism styles
    ├── utils/
    │   └── sfx.js          # Web Audio API futuristic sound generator
    └── components/
        ├── BootScreen.jsx         # Cyber OS loader screen
        ├── CursorSpotlight.jsx    # Mouse tracking spotlight
        ├── Navbar.jsx             # Glassmorphic header & navigation
        ├── Hero.jsx               # Headline, rotating outcomes & target audience
        ├── Experience.jsx         # Career roadmap & Razonica 0-1 startup experience
        ├── Projects.jsx           # ShieldScan AI & Candidex AI project showpieces
        ├── Testimonials.jsx       # Interactive 1-5 star review system
        ├── Skills.jsx             # Categorized tech stack & UI/UX tab
        ├── CalendlyModal.jsx      # Calendly appointment scheduler modal
        ├── AIChatModal.jsx        # Resume Q&A assistant modal
        ├── Footer.jsx             # Contact links & centered copyright
        └── SocialIcons.jsx        # GitHub & LinkedIn SVG helpers
```

---

## 🛠️ Environment Variables Configuration

Copy `.env.example` to `.env` or `.env.local` for local development:

```bash
cp .env.example .env.local
```

### Environment Variables List:

| Variable Name | Required? | Description |
| :--- | :--- | :--- |
| `VITE_CALENDLY_URL` | Recommended | Your custom Calendly meeting booking URL |
| `VITE_CONTACT_EMAIL` | Optional | Your direct business contact email |
| `VITE_LINKEDIN_URL` | Optional | Your LinkedIn profile URL |
| `VITE_GITHUB_URL` | Optional | Your GitHub profile URL |

---

## 🚀 Local Quickstart Guide

### Prerequisites
- Node.js `v18.0` or higher
- npm / yarn / pnpm

### Setup Steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<YOUR_GITHUB_USERNAME>/ai-portfolio-template.git
   cd ai-portfolio-template
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000/`.

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

---

## 📤 Deploying to Vercel (Step-by-Step)

### Recommended Repository Name:
`ai-portfolio-template` or `karan-ai-portfolio`

### Command Line Steps to Create & Push Repository:

```bash
# 1. Initialize Git repository
git init

# 2. Add files & create initial commit
git add .
git commit -m "Initial commit: AI/ML Engineer Portfolio Template"

# 3. Rename branch to main
git branch -M main

# 4. Add your remote GitHub repository URL
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/ai-portfolio-template.git

# 5. Push code to GitHub
git push -u origin main
```

### Deploying via Vercel Dashboard:

1. Go to [Vercel Dashboard](https://vercel.com).
2. Click **"Add New..."** ➔ **"Project"**.
3. Import your `ai-portfolio-template` GitHub repository.
4. Framework Preset: **Vite**.
5. Set Environment Variables:
   - `VITE_CALENDLY_URL` = `https://calendly.com/your-username`
   - `VITE_CONTACT_EMAIL` = `your-email@example.com`
6. Click **Deploy**!

---

## 📄 License

This project is open-source under the [MIT License](LICENSE). Feel free to customize and use it for your personal portfolio or client projects!
