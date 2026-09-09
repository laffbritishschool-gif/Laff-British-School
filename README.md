# Laff British Montessori School

School website and secure student-service frontend, with the existing Express backend kept in the repository root.

## Frontend

The `frontend/` app is a Next.js static-export website using TypeScript and custom CSS in the school colours: blue and yellow.

Included public pages:
- Home
- About Us
- Principal’s Message
- Academics
- Admissions
- School News
- Events
- Gallery
- Staff
- Contact Us
- Secure Result Checker
- Student Login
- Student Dashboard
- Student ID Card

The result checker and ID card screens are intentionally prepared for backend integration. They do not invent or expose student records before the secure API is connected.

## Backend

The existing Express + TypeScript API remains at the repository root. It is currently a foundation with health checking, security middleware, CORS, rate limiting and environment validation. The full school management API will be implemented next.

## Local frontend development

```bash
cd frontend
npm install
npm run dev
```

Static production build:

```bash
npm run build
```

The static output is generated in `frontend/out`.

## Environment

Copy `frontend/.env.example` to `frontend/.env.local` and set the backend API URL when the API is deployed.

## Roadmap

1. Connect Supabase PostgreSQL/Auth/Storage.
2. Implement authenticated roles: Super Admin, Admin, Teacher and Student.
3. Implement students, classes, subjects, teachers and session/term management.
4. Implement result entry, grading, publication, imports and printable result sheets.
5. Connect the public result checker with rate limiting, PIN/token support and audit logging.
6. Generate secure student ID cards with photo, school details and verification QR code.
7. Add attendance, assignments, timetable, fees and Paystack payment verification.
8. Deploy frontend and backend separately on Render.
