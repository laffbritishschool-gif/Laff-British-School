# Laff British Montessori School — Backend API

This repository now contains **backend/API code only**. The public website and student/admin frontend will live in a separate frontend repository and connect to this API over HTTPS.

## Stack

- Node.js + Express + TypeScript
- Helmet for security headers
- CORS for the separate frontend
- Rate limiting
- Zod environment validation
- Render Web Service deployment

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

Health check:

```text
GET /health
```

API base:

```text
/api/v1
```

## Architecture

```text
Frontend repository
       |
       | HTTPS / REST API
       v
Laff British School Backend
       |
       v
Database / Auth / Storage / Payments
```

The backend will contain authentication, RBAC, students, classes, subjects, teachers, results, attendance, assignments, fees, payments, timetable, announcements, news, sessions, settings, audit logs and the secure public result-checking API.

**Important:** no frontend files are kept in this repository.
