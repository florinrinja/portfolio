# My Portfolio

A full-stack portfolio website built with Next.js (frontend) and Express (backend) in a monorepo architecture.

## 🏗️ Project Structure

```
my-portfolio/
├── frontend/              # Next.js 14 application
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   ├── package.json
│   └── tsconfig.json
├── backend/              # Express API server
│   ├── src/
│   │   └── index.ts     # Express server
│   ├── package.json
│   └── tsconfig.json
├── package.json          # Root workspace config
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm (comes with Node.js)

⚠️ **First Time Setup?** Read [SETUP.md](./SETUP.md) for detailed installation instructions and troubleshooting.

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install all dependencies (frontend + backend)
```bash
npm install
```

This will install dependencies for both workspaces automatically.

### Development

**Run both frontend and backend:**
```bash
npm run dev
```

**Run frontend only:**
```bash
npm run dev:frontend
```
- Frontend will be available at `http://localhost:3000`

**Run backend only:**
```bash
npm run dev:backend
```
- Backend API will be available at `http://localhost:5000`

## 📦 Available Scripts

From the **root directory**:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start both frontend and backend in development mode |
| `npm run dev:frontend` | Start only the frontend |
| `npm run dev:backend` | Start only the backend |
| `npm run build:frontend` | Build frontend for production |
| `npm start:backend` | Start backend in production mode |

## 🎨 Frontend (Next.js)

### Tech Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Google Fonts** - DM Serif Display + Work Sans

### Features
- ✨ Minimalist design with light/dark mode
- 📱 Fully responsive
- 🎭 Smooth scroll animations
- 🌓 System theme preference detection
- ⚡ Optimized fonts and images

### Sections
1. Hero - Introduction
2. About - Bio and stats
3. Skills - Technical skills grid
4. Education - Academic timeline
5. Experience - Work history timeline
6. Works (3 sections) - Project showcases

### Customization

**Update content:**
- Edit components in `frontend/components/`
- Modify data arrays within each component

**Change colors:**
- Edit CSS variables in `frontend/app/globals.css`

**Change fonts:**
- Update font imports in `frontend/app/layout.tsx`

See `frontend/README.md` for detailed customization guide.

## 🔧 Backend (Express)

### Tech Stack
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin requests
- **dotenv** - Environment variables

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | Get projects (placeholder) |
| POST | `/api/contact` | Contact form (placeholder) |

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
NODE_ENV=development
```

See `backend/.env.example` for all available variables.

## 🛠️ Development Workflow

### Adding Dependencies

**For frontend:**
```bash
npm install <package> --workspace=frontend
```

**For backend:**
```bash
npm install <package> --workspace=backend
```

### Building for Production

**Build frontend:**
```bash
npm run build:frontend
```

**Build backend:**
```bash
cd backend
npm run build
```

## 📝 Next Steps (Phase 2)

### Frontend
- [ ] Replace placeholder content with real data
- [ ] Add project images
- [ ] Create contact form component
- [ ] Add blog/case studies section
- [ ] Connect to backend API

### Backend
- [ ] Implement contact form email service
- [ ] Add database integration
- [ ] Create projects CRUD API
- [ ] Add authentication (optional)
- [ ] Set up email notifications

### DevOps
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Railway/Render
- [ ] Set up CI/CD pipeline
- [ ] Add monitoring and analytics

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel
```

### Backend (Railway/Render/Heroku)
- Push to GitHub
- Connect repository to hosting platform
- Set environment variables
- Deploy

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📧 Contact

Add your contact information here once deployed.
