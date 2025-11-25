# Master Tracking & Handover To-Do List

**Project:** Joplin Tree Service (Rank & Rent)
**Status:** Code Complete / Deployment Ready
**Date:** November 21, 2025

---

## 1. Domain & Hosting (The Launch)
*   [ ] **Buy Domain:** Purchase `joplintreeservice.com` (or similar) from Namecheap/GoDaddy.
*   [ ] **Connect to Vercel:**
    *   Go to Vercel Dashboard -> Settings -> Domains.
    *   Add your new domain.
    *   Update DNS records (A Record / CNAME) at your registrar as Vercel instructs.

## 2. Google Tracking Setup (The Data)
*Since the code (`GTM-5RDQFS6B`) is already installed, you just need to configure the dashboard.*

### A. Google Analytics 4 (GA4)
*   [ ] Go to [analytics.google.com](https://analytics.google.com).
*   [ ] Create a new Property: "Joplin Tree Service".
*   [ ] Go to **Admin > Data Streams**.
*   [ ] Copy the **Measurement ID** (`G-XXXXXXXXXX`).

### B. Google Tag Manager (GTM) Configuration
*   [ ] Go to [tagmanager.google.com](https://tagmanager.google.com).
*   [ ] Open the "Joplin Tree Service" container.
*   [ ] **Create Tag:**
    *   Click **Tags > New**.
    *   Type: **Google Analytics: Google Tag**.
    *   Tag ID: Paste your `G-XXXXXXXXXX`.
    *   Trigger: **All Pages**.
    *   Save as "GA4 Config".
*   [ ] **Create Phone Call Trigger:**
    *   Click **Triggers > New**.
    *   Type: **Just Links**.
    *   Select **"Some Link Clicks"**.
    *   Condition: `Click URL` contains `tel:`.
    *   Save as "Phone Call Trigger".
*   [ ] **Create Phone Call Event:**
    *   Click **Tags > New**.
    *   Type: **GA4 Event**.
    *   Measurement ID: Paste `G-XXXXXXXXXX`.
    *   Event Name: `generate_lead`.
    *   Trigger: Select "Phone Call Trigger".
    *   Save.
*   [ ] **PUBLISH:** Click the blue "Submit" button to make it live.

## 3. Google Search Console (The Ranking)
*   [ ] Go to [search.google.com](https://search.google.com/search-console).
*   [ ] Add Property -> Enter your Domain (`joplintreeservice.com`).
*   [ ] Verify ownership (DNS method is easiest since you just bought the domain).
*   [ ] **Submit Sitemap:**
    *   Go to "Sitemaps" on the left.
    *   Enter: `https://joplintreeservice.com/sitemap.xml`
    *   Click Submit. (This tells Google to index your site instantly).

## 4. Google Business Profile (The Map Pack)
*   [ ] Create a GBP profile for "Joplin Tree Service" (if you have a verification address).
*   [ ] Add the website URL.
*   [ ] Upload the "Real" photos (Hero, Truck, etc.) to the profile.

---

**Code Handover Notes:**
*   **Images:** Located in `public/assets/`.
*   **Content:** Edit text in `src/app/page.tsx` (Home) or `src/app/[service]/page.tsx`.
*   **Phone Number:** Change globally in `src/lib/constants.ts`.
