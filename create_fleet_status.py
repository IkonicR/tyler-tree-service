import os

content = """# Rank & Rent Fleet Status

## 1. Joplin Tree Service (Joplin, MO)
*   **Domain:** `joplinmotreeservice.com`
*   **Phone:** `(417) 238-1333`
*   **Status:** 🟢 **LIVE**
*   **Content:** 20/20 SEO Blogs
*   **Tracking:** GTM (`GTM-5RDQFS6B`), Search Console (Submitted).
*   **Notes:** Rocky soil focus. Emerald Ash Borer content strategy.

## 2. Tyler Tree Service (Tyler, TX)
*   **Domain:** `tylertreeremoval.com`
*   **Phone:** `(903) 282-4323`
*   **Status:** 🟢 **LIVE**
*   **Content:** 20/20 SEO Blogs
*   **Tracking:** GTM (`GTM-PQJL3LMM`), GA4 (`G-BK1TM9DBYG`), Search Console (Submitted).
*   **Notes:** Pine tree focus. Historic District (Azalea) ordinances.
"""

file_path = os.path.join('..', '..', '_Rank_and_Rent_Central', 'FLEET_STATUS.md')

with open(file_path, 'w') as f:
    f.write(content)

print(f"Created {file_path}")
