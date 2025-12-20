# SPE Suez Website - Complete Remake Plan

## Current Defects & Color Mismatches

### ❌ Color Inconsistencies (Critical)
Every section uses different, conflicting color schemes:

| Section | Current Colors | Problem |
|---------|---------------|---------|
| **Hero** | ✅ Fixed | Now using proper `#050B1A` → `#0D4C92` |
| **Navbar** | `from-[#0d4b93]` | Close to theme but inconsistent transparency handling |
| **About** | `from-gray-900 to-blue-900` | Wrong blue, generic gray |
| **News** | `from-gray-900 to-blue-900`, cards `from-blue-800 to-blue-600` | Inconsistent blues |
| **Awards** | `#0d4b93, #1a237e, #4a148c, #311b92` (purple/indigo) | Completely off-brand |
| **HighBoard** | `violet-600, indigo-600, slate-800` | Purple/violet not in brand |
| **Events** | `from-gray-900 via-gray-800`, purple/cyan glows | Wrong grays, off-brand accents |
| **Magazines** | `from-gray-900 to-gray-800` | Generic, not branded |
| **Sponsors** | Random gradients per sponsor | Chaotic, unprofessional |
| **Footer** | `from-gray-900 to-[#0d4b93]` | Should be solid `#050B1A` |

### ❌ UX/Design Issues

1. **No visual hierarchy** - All sections look different, no cohesive system
2. **Overuse of particles** - `react-tsparticles` everywhere feels gimmicky
3. **Inconsistent animations** - Random spring configs, no unified motion system
4. **No smooth scrolling** - Jarring section transitions
5. **Card designs vary wildly** - No reusable card component system
6. **Typography inconsistent** - Font weights, sizes vary randomly
7. **Too many gradients** - Every card has its own gradient
8. **Hover states differ** - No unified interaction design

---

## Recommended Libraries

### 1. **Lenis** - Smooth Scrolling
```bash
npm install lenis
```
- Buttery smooth scroll that's industry standard
- Used by Apple, Nike, Awwwards sites
- Works perfectly with Framer Motion

### 2. **GSAP + ScrollTrigger** (Optional enhancement)
```bash
npm install gsap @gsap/react
```
- Professional-grade scroll animations
- Pin sections, parallax, scrub animations
- Better performance than pure Framer Motion for complex sequences

### 3. **Embla Carousel** - Replace custom sliders
```bash
npm install embla-carousel-react embla-carousel-autoplay
```
- Lightweight, accessible, touch-friendly
- Better than manual carousel implementations
- Used in shadcn/ui

### 4. **Sonner** - Toast notifications
```bash
npm install sonner
```
- Beautiful, minimal toasts for future form interactions

### 5. **@formkit/auto-animate** - Subtle list animations
```bash
npm install @formkit/auto-animate
```
- One-line automatic animations for lists
- Professional, not over-the-top

---

## Section-by-Section Remake Plan

### Phase 1: Foundation
- [x] **Hero** - Complete ✅
- [ ] **Global CSS** - Theme variables ✅
- [ ] **Typography** - Google Fonts ✅

### Phase 2: Navigation & Footer
- [ ] **Navbar** - Transparent → solid on scroll, proper SPE logo rules
- [ ] **Footer** - Dark `#050B1A` background, 4-column layout per theme guide

### Phase 3: Home Page Sections (Top to Bottom)
- [ ] **Stats Strip** - NEW component (Founded 2004, Awards, Partners stats)
- [ ] **About** - Mission/activities cards on light background
- [ ] **News** - Card grid with category badges
- [ ] **Awards** - Timeline/chips design, gold/silver/bronze colors only
- [ ] **HighBoard** - Clean team grid, circular photos
- [ ] **Events** - Event cards with proper badges
- [ ] **Magazines** - Publication cards with Embla carousel
- [ ] **Sponsors** - Partner cards with consistent styling

---

## Design System to Implement

### Colors (from Theme Guide)
```css
--spe-blue: #0D4C92;
--spe-blue-alt: #005CB9;
--bg-dark: #050B1A;
--bg-light: #F3F5FA;
--surface: #FFFFFF;
--text-main: #0F172A;
--text-muted: #6B7280;
--accent-energy: #00C29A;
--accent-highlight: #FFC857;
```

### Card Style (Unified)
```css
/* All cards should use this */
.card {
  background: white; /* or rgba(255,255,255,0.08) on dark */
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}
```

### Section Backgrounds
- **Dark sections**: Solid `#050B1A` or subtle gradient to `#0D4C92`
- **Light sections**: `#F3F5FA` background
- **Alternating**: Dark → Light → Dark for visual rhythm

### Animation Guidelines
```typescript
// Standard page element entrance
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

// Standard hover
const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.2 } }
};

// Stagger children
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};
```

---

## Execution Order

1. **Install libraries** (Lenis, Embla)
2. **Create reusable components** (SectionHeader, Card variants)
3. **Navbar + Footer** (frame the page properly)
4. **Stats Strip** (new component)
5. **About** (first content section)
6. **News** → **Awards** → **HighBoard** → **Events** → **Magazines** → **Sponsors**

---

## Files to Delete/Replace

- `react-tsparticles` usage - Remove from Magazines, Events (keep very subtle if needed)
- Custom carousel logic - Replace with Embla
- All `from-gray-900` gradients - Replace with theme colors
- All purple/violet/indigo colors - Not in SPE brand

---

## Success Criteria

- [ ] Consistent color palette across ALL sections
- [ ] Smooth scroll with Lenis
- [ ] Unified card design system
- [ ] Professional, not "AI-generated" look
- [ ] Mobile-first responsive
- [ ] Accessible (semantic HTML, contrast)
- [ ] Fast (no heavy particles everywhere)
