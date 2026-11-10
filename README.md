# Urbanfarmz — Community Farming Website

A modern, high-performance, single-page website for **Urbanfarmz Community Farming**, built with React, TypeScript, Tailwind CSS, and Vite.

## 🌿 Website Architecture & Sections

1. **Section 1: Hero**
   - Left-aligned headline: *"YOUR OWN FARM. WITHOUT OWNING LAND."*
   - Full-bleed background video (`section-1.mp4`) with a 50% dark overlay.
   - Clean top header featuring only the centered `Urbanfarmz Community Farming Logo1`.
   - Call to action buttons: "Book Your Farm Visit" & "Explore The Concept".

2. **Section 2: The Concept**
   - Theme: *"A little piece of farmland. A whole lot of happiness."*
   - Embedded showcase video (`section-2.mp4`) with custom interactive controls.
   - Animated highlight typography: **YOUR SPACE. YOUR PLANTS. YOUR HARVEST.**

3. **Section 3: How It Works**
   - Headline: *"FROM A TINY SEED TO YOUR FAMILY TABLE."*
   - Five visually connected stages with step badges and high-resolution visuals (`Section 3 - 1` through `Section 3 - 5`):
     - STEP 01: Choose Your Patch
     - STEP 02: Choose What To Grow
     - STEP 03: Plant Your Seeds
     - STEP 04: We Help Care For Your Crops
     - STEP 05: Enjoy Your Harvest

4. **Section 4: More Than Just Farming**
   - Headline: *"MORE THAN GROWING VEGETABLES. GROWING MEMORIES."*
   - Story 01: Kids learning farming (`Section 4 - 1.png`)
   - Story 02: Family picnic and relaxation (`Section 4 - 2.png`)

5. **Section 5: New-Age Farming: Organic Growing Powered by AI**
   - Headline: *"ORGANIC GROWING. SMART MONITORING. POWERED BY AI."*
   - Feature 01: Controlled Growing Environment (Net house, drip irrigation, cocopeat).
   - Feature 02: Organic Farming Practices (Natural compost, bio-nutrients, transparent crop care).
   - Feature 03: AI Crop Monitoring (01-04 highlights: Crop Progress, Visual Monitoring, Smart Insights, Farm History).
   - Feature 04: Interactive Weekly Farm Update Mockup (Interactive week tabs 1-5, video walkthrough preview, AI observations, growth stage meter, disclaimer).
   - Feature 05: Complete Transparency Every Week (5-stage visual pipeline: Video capture → AI analysis → Agronomist review → Report generation → Member delivery).

6. **Section 6: Membership Plans**
   - *"FIND THE SPACE THAT GROWS WITH YOU."*
   - **Starter Patch**: 250 sq. ft. — ₹3,000 / month (₹9,000 for 3 months)
   - **Family Patch**: 500 sq. ft. — ₹5,500 / month (₹16,500 for 3 months)
   - **Pro Patch**: 1,000 sq. ft. — ₹10,000 / month (₹30,000 for 3 months)
   - Transparent One-Time Setup Investment disclosure clearly listed.

7. **Section 7: Interactive FAQ**
   - 10 accordion questions covering membership, visits, guidance, AI monitoring, and organic practices.

8. **Section 8: Final Call to Action**
   - Large headline: *"COME BACK TO YOUR ROOTS."*
   - Full-bleed golden hour farm visual.
   - Dual CTAs: [BOOK YOUR FARM VISIT] and [ENQUIRE ON WHATSAPP].
   - Animated brand reveal and logo signature.

9. **Footer**
   - Brand logo, tagline, Kanakapura Road Bengaluru location, Google Maps directions, quick links, and copyright.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd urbanfarmz-website
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open **http://localhost:5174** in your browser.

Or simply double-click `start-website.bat` in the project root.

### 3. Production Build
```bash
npm run build
npm run preview
```
The optimized production bundle will be created in `dist/`.

---

## ⚙️ Configuration (`src/config/siteConfig.ts`)

All contact details, social URLs, and API endpoints are centralized in `src/config/siteConfig.ts`:

```typescript
export const siteConfig = {
  brandName: "Urbanfarmz",
  tagline: "Community Farming",
  locationDisplay: "Kanakapura Road, Bengaluru",
  
  // WhatsApp & Phone
  whatsappNumber: "+919876543210", // Numeric format for wa.me links
  whatsappDisplay: "+91 98765 43210",
  contactEmail: "hello@urbanfarmz.in",
  
  // Social & Maps
  instagramUrl: "https://www.instagram.com/urbanfarmz",
  websiteUrl: "https://urbanfarmz.in",
  googleMapsUrl: "https://maps.google.com/?q=Kanakapura+Road,+Bengaluru,+Karnataka",

  // API endpoint for enquiries
  formApiEndpoint: "", // Set to your live endpoint when ready
};
```

---

## 📂 Replacing Media Assets

All media assets reside in `urbanfarmz-website/public/assets/`:

- `logo.png` — Urbanfarmz Community Farming Logo
- `section-1-new.mp4` / `section-1.mp4` — Background video for Hero Section
- `section-2.mp4` — Concept showcase video for Section 2
- `section-3-1.jpg` to `section-3-5.jpg` — How It Works stage images
- `section-4-1.png` — Kids learning farming image
- `section-4-2.png` — Family picnic image
- `section-final-bg.jpg` — Section 8 Community Farming net house background visual
- `community-garden-golden.png` — Alternate golden hour farm visual
- `tomato-vine.png` — Net house plant visual for AI mockup

