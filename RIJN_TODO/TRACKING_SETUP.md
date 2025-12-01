# Master Tracking & Handover To-Do List

**Project:** Tyler Tree Service (Rank & Rent)
**Domain:** `tylertreeremoval.com`
**Phone:** `(903) 282-4323`
**Status:** Deployment Phase

---

## 1. Supabase (Lead Capture)
*The code is already set up to use a "Shared" Supabase instance. It tags every lead with `source_domain: tylertreeremoval.com`.*

### **Action Required:**
1.  **Database Schema:** Ensure your shared Supabase project has a `leads` table with these columns:
    *   `id` (int8 / uuid)
    *   `created_at` (timestamptz)
    *   `source_domain` (text) -> *Critical for filtering leads from different sites*
    *   `customer_name` (text)
    *   `customer_phone` (text)
    *   `service_requested` (text)
    *   `details` (text)
    *   `lead_type` (text) -> e.g., 'form', 'call'
2.  **Environment Variables (Vercel):**
    *   Go to Vercel Project Settings -> Environment Variables.
    *   Add `NEXT_PUBLIC_SUPABASE_URL`: (Your Shared Project URL)
    *   Add `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (Your Shared Anon Key)

---

## 2. Google Analytics 4 (GA4)
**Measurement ID:** `G-BK1TM9DBYG` (Created)

### **Action Required (Connect via GTM):**
*Do not add more code to the website. We are using GTM to manage this cleaner.*

1.  Go to [tagmanager.google.com](https://tagmanager.google.com).
2.  Open the **Tyler Tree Service** container (`GTM-PQJL3LMM`).
3.  **Create Tag:**
    *   Click **Tags > New**.
    *   **Tag Type:** Select "Google Analytics: Google Tag".
    *   **Tag ID:** Paste `G-BK1TM9DBYG`.
    *   **Triggering:** Select "All Pages".
    *   **Name:** "GA4 Configuration".
    *   **Save & Publish:** Click the blue "Submit" button top right.

*Why? This keeps your code clean. If you paste the GA4 script into the code manually, it will double-count users.*

---

## 3. Google Search Console (The Ranking)
*   [ ] Go to [search.google.com](https://search.google.com/search-console).
*   [ ] Add Property -> Enter `tylertreeremoval.com`.
*   [ ] **Verify:** Since you bought the domain, use the **DNS Verification** method (TXT record) in your domain registrar.
*   [ ] **Submit Sitemap:**
    *   Go to "Sitemaps" on the left.
    *   Enter: `https://tylertreeremoval.com/sitemap.xml`
    *   Click Submit.

## 4. Google Business Profile (The Map Pack)
*   [ ] Create a GBP profile for "Tyler Tree Service" (or "Tyler Tree Removal").
*   [ ] **Address:** You need a verification address in Tyler (or use "Service Area Business" and hide address, but this ranks lower).
*   [ ] **Phone:** Use `(903) 282-4323`.
*   [ ] **Website:** Link to `https://tylertreeremoval.com`.

---

**Code Notes:**
*   **Lead Tagging:** `src/components/quote-form.tsx` automatically sends `source_domain` to Supabase.
*   **Phone:** Updated globally to `(903) 282-4323`.
