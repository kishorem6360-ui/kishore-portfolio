# Kishore M — Personal Portfolio

A modern, full-stack personal portfolio website built with React + Vite (frontend) and Node.js + Express (backend).

🔗 **Live Demo:** [View Portfolio](https://kishore-portfolio.replit.app)

---

## 👤 About

- **Name:** Kishore M
- **Role:** Aspiring Data Analyst | BCA Student
- **College:** Kristu Jayanti University
- **Email:** kishorem6360@gmail.com
- **Phone:** +91 7353643967
- **GitHub:** [kishorem6360-ui](https://github.com/kishorem6360-ui)
- **LinkedIn:** [kishore-m-419763382](https://www.linkedin.com/in/kishore-m-419763382/)

---

## ✨ Features

- **Hero Section** — Animated typing tagline, circular profile image with upload
- **About** — Professional intro focused on data analytics
- **Education** — BCA at Kristu Jayanti University
- **Skills** — Animated progress bars (SQL, Python, Data Analysis, Photography, Videography)
- **Projects** — Cards with hover effects, tools used, GitHub links
- **Contact** — Clickable email/phone, social links, contact form with backend storage
- **Dark Mode** — Default dark theme with light mode toggle
- **Animations** — Framer Motion scroll reveals, typing effect, skill bar animations
- **Sticky Navbar** — Shrinks on scroll, smooth navigation

---

## 🛠️ Tech Stack

### Frontend
- React 19 + Vite
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- React Hook Form + Zod (form validation)
- TanStack React Query (API data fetching)

### Backend
- Node.js + Express 5
- PostgreSQL + Drizzle ORM
- Multer (file uploads)
- OpenAPI 3.1 spec with Orval codegen

---

## 📁 Project Structure

```
kishore-portfolio/
├── frontend/               # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/   # Hero, About, Education, Skills, Projects, Contact
│   │   │   ├── navbar.tsx
│   │   │   └── section-wrapper.tsx
│   │   ├── hooks/          # Custom hooks (typing, profile upload)
│   │   ├── pages/
│   │   └── index.css       # Theme + Tailwind config
│   ├── public/
│   ├── index.html
│   └── package.json
│
├── backend/                # Express API server
│   ├── src/
│   │   ├── routes/
│   │   │   ├── profile.ts  # GET /profile-image, POST /upload-profile
│   │   │   ├── contact.ts  # POST /contact
│   │   │   └── health.ts   # GET /healthz
│   │   ├── app.ts
│   │   └── index.ts
│   └── package.json
│
├── shared/
│   ├── db/                 # Drizzle ORM schema (contacts + profile tables)
│   └── openapi.yaml        # OpenAPI 3.1 API specification
│
└── README.md
```

---

## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/healthz` | Health check |
| GET | `/api/profile-image` | Get profile image URL |
| POST | `/api/upload-profile` | Upload new profile image (multipart/form-data) |
| POST | `/api/contact` | Submit contact form message |

---

## 🏃 Running Locally

### Prerequisites
- Node.js 18+
- PostgreSQL database
- pnpm

### Frontend
```bash
cd frontend
pnpm install
pnpm dev
```

### Backend
```bash
cd backend
pnpm install
DATABASE_URL=your_postgres_url pnpm dev
```

---

## 📄 License

MIT — feel free to use this as a template for your own portfolio!
