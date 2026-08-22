# 🛡️ CyberMatrix Academy by Ninad Pawar.

> **Next-Generation Enterprise Cybersecurity Training & VAPT Platform**  
> *Architected for Elite Operatives, Security Researchers, and Next-Gen Learners.*

---

## 🚀 Overview
**CyberMatrix Academy** is an open-source, high-performance web application built for cybersecurity education, penetration testing (VAPT) simulation, and bug bounty tracking. It features an interactive **AI Student Guide Agent**, role-based access control (RBAC), community-driven curriculum updates, and a futuristic Cyan Matrix aesthetic.

---

## 🛠️ Tech Stack & Architecture
* **Frontend & Framework:** Next.js 16 (App Router), TypeScript, Tailwind CSS
* **Database & ORM:** PostgreSQL (Managed via Supabase) with Prisma ORM
* **State & Security:** Row-Level Security (RLS), Server Actions, Lucide Icons
* **DevOps & CI/CD:** Docker, Docker Compose, GitHub Actions Security Pipeline

---

## 📂 Project Directory Structure

```text
cybermatrix-academy/
├── .github/
│   └── workflows/
│       └── security-pipeline.yml          # Automated CI/CD & SAST Scanning
├── apps/
│   └── web/                               # Next.js 16 Frontend & API App
│       ├── src/
│       │   ├── app/                       # App Router (Auth, Dashboards, Courses, CTF)
│       │   ├── components/                # Reusable UI (MatrixCanvas, StudentAIAssistant)
│       │   ├── actions/                   # Next.js Server Actions
│       │   └── lib/                       # Supabase Client Configuration
│       ├── Dockerfile
│       └── package.json
├── packages/
│   └── database/                          # Prisma ORM Database Package
│       ├── prisma/
│       │   └── schema.prisma              # PostgreSQL Database Models
│       └── package.json
├── docker-compose.yml                     # Docker Stack Configuration
└── package.json                           # Monorepo Workspace Root