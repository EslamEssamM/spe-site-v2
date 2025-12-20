# SPE Suez Student Chapter – Theme Guide v2

This guide defines the visual identity, layout, and component system for the new SPE Suez Student Chapter website.  
Goal: keep full SPE identity compliance while making the site modern, clean, and student-focused.

The new theme must **preserve all current content and sections** (About, News, Awards, Highboard, Events, Publications, Partners, Footer) but change layout and UI components to a modern system based on this guide.

---

## 1. Brand & Identity

### 1.1 SPE brand basics

- Use the current official SPE logo without any modifications (no extra graphics, no color changes, no stretching).[web:37][web:39]
- Logo colors:
  - Use official SPE blue (PMS 293) or black only for the logo.[web:37][web:39]
  - On dark backgrounds, use the approved reversed logo (white logo with blue or black lettering) as permitted.[web:37][web:39]

### 1.2 Color palette (website UI)

Base this palette on SPE blue plus neutral and accent colors:

- **Primary (SPE Blue)**: `#0D4C92` (RGB 13, 76, 146) – from SPE graphics standards for web.[web:37]
- **Primary Alt**: `#005CB9` – optional brighter blue for buttons and links.
- **Background Dark**: `#050B1A` – hero and footer.
- **Background Light**: `#F3F5FA` – main section background.
- **Surface / Cards**: `#FFFFFF`.
- **Text Main**: `#0F172A`.
- **Text Muted**: `#6B7280`.
- **Accent 1 (Energy)**: `#00C29A` – use for tags, badges, subtle highlights.
- **Accent 2 (Highlight)**: `#FFC857` – optional for award highlights and special CTAs.

Usage rules:

- Keep primary call-to-action buttons in SPE blue or the primary alt color.
- Do not recolor the official logo with accent colors; accents are only for UI elements (buttons, chips, cards), not the logo.[web:37][web:39]

### 1.3 Typography

Use modern, readable, web-safe font stacks:

- Headings:
  - `"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
  - Weight: 600–700.
- Body:
  - `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
  - Weight: 400–500.

Sizing (approximate):

- H1: 2.5rem–3rem (hero).
- H2: 2rem (section titles).
- H3: 1.5rem (cards/blocks).
- Body: 1rem–1.125rem.
- Small / metadata: 0.875rem.

Ensure good contrast and spacing to keep long content easy to scan, avoiding dense paragraphs.[web:77][web:79]

---

## 2. Global Layout

### 2.1 Page structure

Each page should follow:

- `<header>` – sticky navbar.
- `<main>` – stacked sections, each visually separated.
- `<footer>` – global footer with resources, partners, and contact.

Apply generous vertical spacing: `padding-block: 4rem–5rem` per section.

### 2.2 Navbar

- Sticky at top, transparent on top of hero, solid dark/blue on scroll.
- Left:
  - Official SPE logo (correct version for background) + text:
    - Line 1: `SPE Suez Student Chapter`
    - Line 2 (small): `Suez University`
- Right navigation items:
  - Home
  - About
  - News
  - Events
  - Awards & Achievements
  - Highboard
  - Publications
  - Partners
  - Contact
- Right CTA button:
  - Text: `Join the Chapter`
  - Style: filled primary blue, rounded, medium size.

On mobile:

- Collapse navigation into a hamburger menu with slide-down panel.
- Logo and chapter name must remain visible.[web:77]

### 2.3 Footer

- Dark background (`#050B1A`).
- Columns:
  - Column 1: Logo + short mission sentence (1–2 lines) about SPE Suez.[page:1][web:10]
  - Column 2: Quick Links (same main nav items).
  - Column 3: Resources:
    - SPE.org
    - SPE International Student Programs
    - OnePetro
  - Column 4: Contact:
    - Email, location, and social icons (Facebook, LinkedIn, YouTube, Instagram).[page:1][web:47]
- Bottom bar:
  - Copyright.
  - Small line: “SPE Suez Student Chapter – Suez University Chapter 5948”.[web:60]

---

## 3. Home Page Layout

Refactor the current home (spesuez.com) into these sections, reusing all existing content but with new layout.[page:1]

### 3.1 Hero – “First Impression”

- Background: dark blue gradient from `#050B1A` to `#0D4C92`.
- Left content:
  - H1: “Empowering Future Energy Leaders at Suez University”.
  - Short paragraph (2–3 lines) summarizing mission, focus on technical, soft skills, and community.[page:1][web:6]
  - Primary button: `Join the Chapter`.
  - Secondary button (ghost): `Explore Events`.
- Right content:
  - “Next Flagship Event” card:
    - Title, date, type (e.g., PACE, SPEak, summit) based on current content.[page:1][web:10]
    - Small badge: “Upcoming”.
    - Secondary CTA: `View details`.

### 3.2 Key Stats Strip

Immediately under hero, add a horizontal stats bar:

- Cards (3–4):

  - “Founded 2004” – with small icon.[web:60]
  - “Presidential & Outstanding Student Chapter Awards (multiple years)” – referencing actual award years (e.g., 2014, 2015, 2017, 2019, 2020, 2022).[page:1][web:44][web:52]
  - “Flagship events, magazines & partnerships with leading energy companies” – referencing PACE, ECHO, Criterion, SLB, Apache, Baker Hughes, etc.[page:1][web:10][web:72]

Each stat card: icon, bold number/title, short descriptive text.

### 3.3 About / Mission Highlight

A dedicated section summarizing content already on the home page:

- H2: “About SPE Suez”.
- 1–2 paragraphs about the chapter’s mission, values, and role at Suez University and within SPE International.[page:1][web:6][web:60]
- A small link/button: `Learn more about us` → About page.

### 3.4 News & Announcements

Refactor current textual news/competitions into card layout:

- Grid of cards:
  - Category badge: `Competition`, `Partnership`, `Announcement`, etc.
  - Title, short excerpt (max 2–3 lines), and date.
  - Primary button: `Read more` (link to internal or external).
- Provide “View all news” link to dedicated News page (or anchor).[page:1]

### 3.5 Flagship Events

Use current “Our Flagship Events” content but in a modern card/grid:

- H2: “Our Flagship Events”.
- Horizontal scroll or 3-column grid of event cards with:
  - Event name (e.g., PACE, SPEak, summits).
  - Short description.
  - Badge for category (e.g., Career, Technical, Soft Skills).
  - CTA: `View details`.[page:1][web:10][web:71]

### 3.6 Awards & Achievements Highlight

Take “Our Stellar Achievements” and make them visually strong:

- H2: “Awards & Achievements”.
- Two layers:

  1. Summary card:
     - “Recognized as one of SPE’s most awarded student chapters, with multiple Presidential and Outstanding Chapter awards.”[page:1][web:44][web:52]

  2. Award chips/timeline:
     - Chips for each award and year (e.g., “Presidential Award 2014”, “Outstanding Student Chapter 2019”, etc.).[page:1][web:44][web:52]
     - Optionally, a horizontal timeline.

### 3.7 Publications & Partners Preview

- Two-column section:

  - Left: “Our Publications”:
    - Show latest issues of Echo, Criterion as cards with cover thumbnail, issue title, and “Read PDF” buttons.[page:1][web:71][web:72]

  - Right: “Our Partners & Sponsors”:
    - Row/slider of partner logos (DataCamp, SLB, BGS, Baker Hughes, Apache, etc.) with small captions like “Technical Sponsor”, “Printing Sponsor”.[page:1][web:10][web:72]

Link down to full Publications and Partners pages.

---

## 4. Inner Pages

### 4.1 About Page

Content structure:

- H1: “About SPE Suez”.
- Sections:

  1. “Who We Are”
     - Full mission & vision text from existing site.[page:1][web:6]
  2. “Our Story”
     - Short timeline: founding year, becoming active, major milestones, award highlights.[page:1][web:60]
  3. “What We Do”
     - Bullet list of key activities: technical events, soft skills development, competitions, community work.[page:1][web:6]
  4. “Our Values”
     - 3–4 icons + short value statements.

### 4.2 News Page

- Build a simple, filterable news list:

  - Filters: `All`, `Competitions`, `Partnerships`, `Announcements`.
  - Cards with:
    - Title, category, date.
    - Short summary.
    - Link for full post / external article.[page:1]

### 4.3 Events Page

- Sections:

  - Upcoming Events:
    - Card list similar to home hero event but for all upcoming.
  - Past Events:
    - Cards with title, date, type, short recap summary, and optional image.

### 4.4 Awards & Achievements Page

- Repeat awards & achievements in more detail:

  - Awards summary.
  - Cards per award type (Presidential, Outstanding, Gold Standard, etc., depending on chapter history).[page:1][web:44][web:52]
  - Short text explaining what each award means for visitors unfamiliar with SPE.

### 4.5 Highboard Page

Replace current text-only layout with card-based team grid:

- Grid layout:

  - For each board member:
    - Circular photo placeholder.
    - Name.
    - Role (e.g., President, IT Manager, etc.).
    - Optional LinkedIn icon.[page:1]

- Group board into sections: Executive Board, Heads, Vice-Heads if content exists.

### 4.6 Publications Page

Use current magazines section but move to a clean grid:

- H1: “Publications”.
- Cards:

  - Cover thumbnail (or placeholder).
  - Title (Echo, Criterion, issue name).
  - Short tagline.
  - Buttons: `Read PDF`, `View archive`.[page:1][web:71][web:72]

### 4.7 Partners Page

- Grid or slider of partner cards:

  - Logo.
  - Description of collaboration.
  - CTA: `Visit website` (external link).[page:1][web:10]

---

## 5. Component System

Create reusable components; Copilot should prefer these over one-off markup.

Core components:

- `Layout` – wraps pages with Navbar and Footer.
- `Navbar` – sticky top navigation.
- `Footer` – global footer.
- `SectionHeader` – title + subtitle, centered or left.
- `Button` – primary, secondary, ghost variants.
- `StatsCard` – for key metrics.
- `EventCard` – for events.
- `NewsCard` – for news/announcements.
- `AwardChip` / `AwardCard` – for awards and years.
- `PublicationCard` – for magazines.
- `PartnerCard` – for partner logos and descriptions.
- `TeamCard` – for Highboard.

Styling guidelines:

- Cards: white background, subtle border (`rgba(15, 23, 42, 0.06)`), rounded corners (0.75–1rem), soft shadow, hover elevation.
- Buttons:
  - Primary: solid SPE blue, white text, rounded, medium padding.
  - Secondary: outlined with blue border, white or light background.
  - Ghost: text-only with underline on hover.

---

## 6. UX & Accessibility

- Use semantic HTML tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Ensure sufficient color contrast between text and background.[web:79]
- Make the site mobile-first and responsive.
- Avoid long unbroken paragraphs; use headings, lists, and cards for scan-friendly reading.[web:77]

---

## 7. Implementation Instructions for Copilot

When generating or refactoring components/pages:

1. Preserve all existing content and information architecture from the current spesuez.com (sections, text types, and links), but reflow them into the new layout, sections, and components described above.[page:1]
2. Always use the color palette, typography, and layout patterns defined here.
3. Always use the official SPE logo assets according to the SPE graphics standards and logo FAQs (color, background, and style rules).[web:37][web:39]
4. Prefer reusable components over inline styling and duplicate markup.
5. Keep the code accessible, responsive, and easy to maintain.

> Treat this file as the single source of truth for UI/UX and branding decisions in this project.
