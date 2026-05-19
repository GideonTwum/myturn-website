# MyTurn — Landing Website

A modern, responsive landing page for **MyTurn**, a fintech/community savings platform. Frontend only — no backend, database, or authentication.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/                    # Next.js app router (layout, page, globals)
components/
  motion/               # FadeInView, StaggerContainer
  sections/             # Page sections (Hero, Groups, Apply, etc.)
  ui/                   # Button, Modal, Toast, SectionHeader
constants/              # Navigation links
data/mockData.ts        # All mock content
lib/utils.ts            # cn() helper
```

## Features

- Sticky navbar with mobile menu & smooth scroll
- Animated hero with stats counters & floating cards
- Interactive groups board with filters & modals
- Flyer showcase with lightbox preview
- Contribution plans, testimonials carousel
- Apply form with success toast/modal (no backend)
- Fully responsive, SEO metadata

## Design

Green / white / gold palette · glassmorphism · scroll animations · premium fintech aesthetic
