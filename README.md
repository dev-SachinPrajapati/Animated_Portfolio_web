# Sachin Prajapati 

[Live Demo](https://sachin-prajapati.vercel.app/)


# 👋 About Me

Hi, I’m **Sachin Prajapati**, a passionate **Full-Stack Developer** from Mumbai, India.  
I enjoy building **scalable web applications, real-time collaboration tools, and clean user experiences**.  
Currently pursuing a **B.E. in Information Technology** with a **minor in Data Science**, I combine strong **CS fundamentals** with hands-on experience in modern web technologies.  

🌐 Portfolio: [sachin-prajapati.vercel.app](https://sachin-prajapati.vercel.app/)  
💼 LinkedIn: [linkedin.com/in/sachin-prajapati-it](https://www.linkedin.com/in/sachin-prajapati-it/)  
💻 GitHub: [github.com/dev-SachinPrajapati](https://github.com/dev-SachinPrajapati)  

---

## 🛠️ Skills

**Languages & Frameworks:** JavaScript, TypeScript, Java, React, Next.js, Node.js, Express.js, Tailwind CSS, Redux, GSAP, Shadcn  
**Databases & Tools:** MongoDB, MySQL, Git, GitHub, Postman, REST APIs, Figma, Vercel  
**CS Fundamentals:** Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, System Design  

---

## 💼 Experience

**Frontend Developer Intern — Neuronetic Vision (Jul 2025 – Present)**  
- Built the MVP of an AI-based surveillance platform using React & Next.js.  
- Delivered responsive UI for the company’s first client-ready demo.  
- Collaborated on AWS, CI/CD workflows, and scalable deployments.  

**Full Stack Developer Intern — Intellectsia AI Services (Dec 2024 – Jan 2025)**  
- Developed MVP platform with Angular, Spring Boot & MySQL.  
- Implemented authentication, user flows, and backend services.  
- Assisted in database schema and scalable backend architecture.  

**Backend Developer Intern — Engaze (Dec 2023 – Jan 2024)**  
- Built REST APIs with Node.js and validated with Postman.  
- Debugged backend issues and enhanced system stability.  
- Supported MVP development in a collaborative environment.  

---

## 🚀 Projects

- **[DocNest](https://doc-nest-teal.vercel.app/)** — Google Docs–style real-time collaborative editor built with Next.js, Liveblocks, Lexical & TailwindCSS.  
- **[HireElite](https://hire-elite-seven.vercel.app/)** — Full-stack job portal with recruiter dashboards, authentication, and job postings (React, Node.js, Express, MongoDB).  
- **[CareerMind AI](https://career-mind-ai-pearl.vercel.app/)** — AI-driven career platform offering job suggestions, learning paths & interview prep.  

---

## 🏆 Achievements

- **Oracle Cloud Infrastructure 2025 Certified Generative AI Professional**  
- **MERN Stack Fundamentals Certification**, Great Learning (2024)  
- **GDSC ACE Team Member** (2023–24)  
- **Phoenix 2.0 Participant** (2024)  

---

## 📫 Contact

📍 Mumbai, Maharashtra, India  
📧 [captsachin8898@gmail.com](mailto:captsachin8898@gmail.com)  
📱 +91 88282 55706  
🌐 [Portfolio](https://sachin-prajapati.vercel)


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