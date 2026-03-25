# Kishore M — Personal Portfolio

A modern, full-stack personal portfolio website built with React + Vite (frontend) and Node.js + Express (backend), backed by a live PostgreSQL database.

---

## 🔗 Live Links

| | Link |
|---|---|
| 🌐 **Portfolio Website** |🔗 **Live Demo:** [View Portfolio](https://kishore-portfolio.replit.app)|
| 🗄️ **Database Admin Panel** | https://e820d008-8184-4b4d-aa47-67cc0d7eb2d0-00-1acjnp7gl5cza.janeway.replit.dev/admin |

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
- **Contact** — Clickable email/phone, social links, contact form with database storage
- **Database Admin Panel** — Live view of PostgreSQL tables, schema, API endpoints, and all contact form submissions
- **Dark Mode** — Default dark theme with light mode toggle
- **Animations** — Framer Motion scroll reveals, typing effect, skill bar animations
- **Sticky Navbar** — Shrinks on scroll, smooth navigation
- **Mobile Responsive** — Works perfectly on all screen sizes

---

## 🗄️ Database (PostgreSQL)

Powered by **Replit PostgreSQL** with **Drizzle ORM**.

### Tables

**`contacts`** — Stores contact form submissions
| Column | Type | Description |
|---|---|---|
| id | serial (PK) | Auto-increment ID |
| name | text | Sender's name |
| email | text | Sender's email |
| message | text | Message content |
| created_at | timestamp | Submission time |

**`profile`** — Stores profile image
| Column | Type | Description |
|---|---|---|
| id | serial (PK) | Auto-increment ID |
| image_url | text | Path to uploaded image |

> View live database data at: `/admin`

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
- Multer (profile image file uploads)
- OpenAPI 3.1 spec with Orval codegen

---

## 🚀 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/healthz` | Server health check |
| GET | `/api/profile-image` | Fetch current profile photo URL |
| POST | `/api/upload-profile` | Upload new profile photo (multipart/form-data) |
| POST | `/api/contact` | Submit contact form → saved to PostgreSQL |
| GET | `/api/admin/contacts` | Get all contact messages from database |

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
│   │   ├── hooks/          # Custom hooks (typing animation, profile upload)
│   │   ├── pages/
│   │   │   ├── home.tsx    # Main portfolio page
│   │   │   └── admin.tsx   # Database admin panel
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
│   │   │   ├── admin.ts    # GET /admin/contacts
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

## 📄 License

MIT — feel free to use this as a template for your own portfolio!
