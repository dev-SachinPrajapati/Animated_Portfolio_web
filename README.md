# DocNest

[Live Demo](https://sachin-prajapati.vercel.app/)

> A Google Docs–style collaborative editor built to showcase realtime features, a clean UI, and reusable architecture.

---

## 👋 About Me

Hi, I’m **Sachin Prajapati** — a Full-Stack Developer passionate about building **scalable web apps, real-time experiences, and clean UI/UX**.  
💻 Skilled in **Next.js, TypeScript, Tailwind, Liveblocks, and modern web tools**.  
🌐 Portfolio: [sachin-prajapati.vercel.app](https://sachin-prajapati.vercel.app/)

---

## 📖 Project Overview

DocNest is a real-time collaborative document editor built with modern web tools. It demonstrates realtime presence, collaborative editing, document management, inline comments, and notification features — all wrapped in a responsive, accessible UI.

This repository is intended to showcase full-stack skills including realtime architecture, component reusability, and deployment-ready configuration.

---

## ⚙️ Tech Stack

- Next.js (React + SSR)
- TypeScript
- Tailwind CSS
- Liveblocks (realtime collaboration & presence)
- Lexical Editor (rich text editing)
- ShadCN (UI primitives)
- Clerk / NextAuth (authentication — replace with your provider)
- Vercel (deployment)

---

## 🔋 Key Features

- Authentication (GitHub / Clerk) and session management  
- Real-time collaborative text editor with multi-user cursors  
- Create, list, share, and delete documents  
- Share documents via link or email with view/edit permissions  
- Inline comments, threaded discussions  
- Active collaborator presence indicators  
- Notifications for shares, comments and collaborator activity  
- Responsive layout for desktop & mobile  

---

## 🚀 Getting Started

> These steps assume you have Node.js (v16+) and npm/yarn installed.

### 1. Clone the repo

```bash
- git clone https://github.com/yourusername/docnest.git
- cd docnest
- npm install
```

### 3. Environment Variables

Create a `.env.local` file at the project root and add the variables you need. Example variables (update according to your auth provider and realtime service):

```env
# Next.js
NEXT_PUBLIC_VERCEL_URL=

# Liveblocks
LIVEBLOCKS_PUBLIC_KEY=

# Clerk (if using Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# NextAuth / GitHub (if using NextAuth instead)
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_URL=

# Database (example for Prisma)
DATABASE_URL=
```

```bash
npm run dev
or
yarn dev

```