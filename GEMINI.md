# Project Context: Joplin Tree Service (Rank & Rent Pilot)

## 1. Project Overview
**Goal:** Create a high-performance, hyper-local lead generation website for tree services in Joplin, MO. This is a "Rank & Rent" digital real estate pilot.
**Domain:** `joplinmotreeservice.com` (Purchased on Vercel)
**Phone:** `(417) 238-1333` (GoHighLevel - Forwarded)
**Strategy:** "Hub & Spoke" content architecture, maximizing local relevance (e.g., specific city ordinances, local pricing) and technical speed (100/100 Lighthouse).
**Current Status:** Development phase. Basic pages (Hero, Services) are being built.

## 2. User Preferences & Critical Rules
*   **Persona:** "Vibe Coder." The user understands high-level concepts (SEO, AI, Architecture) but relies on the agent for technical implementation (syntax, code structure).
*   **Deployment:** **STRICTLY FORBIDDEN** to deploy to Vercel or run build commands that trigger external deployments without explicit, written confirmation from the user.
*   **Content Constraints:**
    *   **NO Fireplaces:** The service does not offer firewood or fireplace services. Remove/avoid all references.
    *   **Local Only:** Content must remain hyper-specific to Joplin, MO and surrounding areas (Jasper/Newton counties).
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
    *   `layout.tsx`: Root layout with Metadata and Google Analytics (`G-P1D65SCQDD`).
*   `src/components/`: Reusable UI components (Navbar, Footer, Shadcn UI).
*   `src/content/blog/`: Markdown files for the "Knowledge Moat" (SEO articles).
*   `src/lib/constants.ts`: Global project variables (Phone, Service areas).
*   `Master_SEO_Design_Blueprint.md`: The strategic "Bible" for this project. Refer to this for content and design decisions.

## 5. Development Workflow
*   **Start Server:** `npm run dev` (Runs on http://localhost:3000)
*   **Build (Local Test):** `npm run build` (Checks for compile errors)
*   **Lint:** `npm run lint`

## 6. Current SEO Hooks (Do Not Forget)
*   **Ordinance:** City of Joplin Ordinance No. 2008-212 (Hazardous trees).
*   **Pricing:** Small trees ($250-$550), Large Oaks ($1,100-$1,800).
*   **Threats:** Oak Wilt, Emerald Ash Borer.
*   **Service Area:** Joplin, Webb City, Carl Junction, Carterville, Oronogo.
