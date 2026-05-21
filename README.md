# Blog App Project

This project is a full-stack Blog Application built using the MERN stack.

## Features

- User authentication (Login/Register)
- Create, edit, and delete blog posts
- View all blogs
- Responsive frontend UI
- Backend API with database integration

## Folder Structure

```text
BlogApp/
├─ Backend/
│  ├─ config/
│  ├─ controllers/
│  ├─ middleware/
│  ├─ models/
│  ├─ routes/
│  ├─ uploads/
│  └─ server.js
│
├─ Frontend/
│  ├─ public/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ layouts/
│  │  └─ assets/
│  └─ vite.config.js
│
└─ README.md
```

## Prerequisites

- Node.js (LTS recommended)
- npm
- MongoDB Atlas or local MongoDB setup

---

# 1) Run Backend

```bash
cd Backend
npm install
npm run dev
```

Backend server runs on:

```text
http://localhost:5000
```

## Environment Variables

Create a `.env` file inside the Backend folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# 2) Run Frontend

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:5173`).

---

# Build Frontend for Production

```bash
npm run build
npm run preview
```

---

# Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- React Router

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

# Notes

- Keep `node_modules/` out of Git commits.
- Add `.env` to `.gitignore`.
- Frontend and Backend run independently.
- Make sure MongoDB connection is active before starting backend.
