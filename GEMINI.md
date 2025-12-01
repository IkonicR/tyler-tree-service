# Project Context: Tyler Tree Service (Rank & Rent Pilot)

## 1. Project Overview
**Goal:** Create a high-performance, hyper-local lead generation website for tree services in Tyler, TX. This is a "Rank & Rent" digital real estate pilot.
**Domain:** `tylertreeremoval.com` (Purchased)
**Phone:** `(903) 282-4323` (Purchased)
**Tracking:**
*   **GTM:** `GTM-PQJL3LMM` (Container Installed)
*   **GA4:** `G-BK1TM9DBYG` (Analytics Property)
*   **Supabase URL:** `https://sagjrsjocoojpxjuxlwz.supabase.co`
*   **Supabase Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (See .env.local)
**Strategy:** "Hub & Spoke" content architecture, maximizing local relevance (e.g., Piney Woods ecosystem, Tyler ordinances) and technical speed (100/100 Lighthouse).
**Current Status:** Deployment phase. Site is live on Vercel (Production).

## 2. User Preferences & Critical Rules
*   **Persona:** "Vibe Coder." The user understands high-level concepts (SEO, AI, Architecture) but relies on the agent for technical implementation.
*   **Deployment:** Vercel deployments are authorized.
*   **Content Constraints:**
    *   **Pine Country:** Focus on Loblolly Pines and Shortleaf Pines, not just Oaks.
    *   **Local Only:** Content must remain hyper-specific to Tyler, TX and Smith County.
    *   **Safety First:** Emphasize "Zero-Impact" removal and "Licensed & Insured."
*   **Interaction Style:** Explain *why* technical choices are made, but handle the *how* autonomously. Keep the "To-Do" list updated religiously.

## 3. Tech Stack & Architecture
*   **Framework:** Next.js 16 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4 (using `@tailwindcss/postcss`)
*   **UI Library:** Shadcn/UI (Radix Primitives), Lucide React Icons
*   **Animation:** CSS Transitions & Tailwind Animate (Zero-runtime, high performance). NO Framer Motion.
*   **Content:** MDX (via `next-mdx-remote`) for blog posts.
*   **Fonts:** Geist & Geist Mono (via `next/font`).

## 4. Key Files & Directories
*   `src/app/`: Main application routes (Home, Services, Blog).
    *   `layout.tsx`: Root layout with Metadata and Google Analytics.
*   `src/components/`: Reusable UI components (Navbar, Footer, Shadcn UI).
*   `src/content/blog/`: Markdown files for the "Knowledge Moat" (SEO articles).
*   `src/lib/constants.ts`: Global project variables (Phone, Service areas).
*   `Tyler_SEO_Strategy.md`: The strategic "Bible" for this project.

## 5. Development Workflow
*   **Start Server:** `npm run dev` (Runs on http://localhost:3000)
*   **Build (Local Test):** `npm run build` (Checks for compile errors)
*   **Lint:** `npm run lint`

## 6. Current SEO Hooks (Do Not Forget)
*   **Ordinance:** City of Tyler Tree Preservation Ordinance (Chapter 19).
*   **Pricing:** Small trees ($300-$600), Large Pines/Oaks ($1,200+).
*   **Threats:** Pine Bark Beetles, Hypoxylon Canker.
*   **Service Area:** Tyler, Whitehouse, Lindale, Bullard, Flint, Chapel Hill.
