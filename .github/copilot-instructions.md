# SPE Website Development Guide

## Project Overview
SPE (Society of Petroleum Engineers) student chapter website built with React, TypeScript, Vite, TanStack Router, and shadcn/ui. Features magazine archives, event listings, team profiles, and news sections.

## Tech Stack & Architecture

### Core Framework
- **Build Tool**: Vite with React + TypeScript
- **Routing**: TanStack Router (file-based routing, auto-generated route tree)
- **Styling**: Tailwind CSS + shadcn/ui components (New York style variant)
- **UI Library**: Radix UI primitives wrapped with shadcn/ui
- **Animations**: Framer Motion for page transitions and interactions

### Key Dependencies
- `react-pdf` for magazine PDF viewing
- `lucide-react` for icons
- `canvas-confetti` for celebratory effects
- `@react-three/fiber` and `@react-three/drei` for 3D elements

## Development Commands

```bash
# Development server
npm run dev

# Build (TypeScript check + Vite build)
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure Patterns

### Routing Convention
TanStack Router auto-generates `src/routeTree.gen.ts` from files in `src/routes/`:
- `__root.tsx` - Root layout with Navbar/Footer
- `index.tsx` - Home page route
- `magazine.$id.tsx` - Dynamic magazine reader route
- File-based routing means route changes require restart to regenerate route tree

### Component Organization
```
src/components/
├── sections/         # Page sections (Hero, About, Events, Magazines, etc.)
├── shared/          # Reusable components (ThemeProvider, ModeToggle)
├── ui/              # shadcn/ui components (lowercase imports!)
└── [feature].tsx    # Feature components (announcement, enhanced-magazines-section)
```

### Data Management
Centralized data in `src/data/`:
- `magazines.ts` - Magazine catalog with PDF URLs (Criterion & Echo series)
- `events.ts` - Event information with past images
- `news.ts` - News articles
- All data is **statically defined TypeScript objects**, no API calls

### Import Aliases
Always use `@/` alias (configured in `vite.config.ts` and `tsconfig.json`):
```typescript
import { Button } from "@/components/ui/Button";  // Note: capital B
import { magazines } from "@/data/magazines";
import { cn } from "@/utils/css";
```

## Critical Conventions

### shadcn/ui Component Naming
**Important**: UI components use **PascalCase filenames but lowercase imports**:
```typescript
// Files: Button.tsx, DropdownMenu.tsx, Tooltip.tsx
import { Button } from "@/components/ui/Button";     // Capital B
import { Card } from "@/components/ui/card";         // Lowercase c
import { Badge } from "@/components/ui/badge";       // Lowercase b
```

### Styling Approach
1. **Utility-first Tailwind** for layouts and spacing
2. **CSS Variables** for theme colors (defined in `src/index.css`):
   ```css
   --primary: 215 80% 50%;  /* SPE blue theme */
   --foreground: hsl(var(--foreground));
   ```
3. **`cn()` helper** for conditional classes:
   ```typescript
   import { cn } from "@/utils/css";
   className={cn("base-class", condition && "conditional-class")}
   ```

### Theme System
- Dark mode is **default theme** (`defaultTheme="dark"` in `main.tsx`)
- Theme stored in localStorage (`vite-ui-theme` key)
- Toggle via `ModeToggle` component (uses `useTheme()` hook)

### PDF Handling
Magazine PDFs require special setup in `MagazinePage.tsx`:
```typescript
// Always set worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = 
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

// Load PDF as ArrayBuffer for rendering
const response = await fetch(pdfUrl);
const arrayBuffer = await response.arrayBuffer();
setPdfData(arrayBuffer);
```

## Public Assets Structure
```
public/
├── events/           # Event photos and logos
├── magazines/        # Magazine cover images (legacy)
├── pdfs/
│   ├── Criterion/
│   │   ├── covers/   # Criterion magazine covers (.webp)
│   │   └── *.pdf     # Criterion PDFs
│   └── Echo/
│       ├── covers/   # Echo magazine covers (.webp)
│       └── *.pdf     # Echo PDFs
└── sponsors/         # Sponsor logos
```

## Common Patterns

### Page Sections
Home page (`src/pages/Home.tsx`) composes multiple section components:
```typescript
<section id="about"><AboutSection /></section>
<section id="events"><EventsSectionWithParticles /></section>
```

### Magazine Data Structure
```typescript
interface Magazine {
  id: number;
  title: string;
  year: number;
  issue: string;
  cover: string;        // Path to cover image
  pdfUrl: string;       // Path to PDF
  description: string;
  editor: string;
  pageCount: number;
  color?: string;       // Tailwind gradient classes
}
```

### TanStack Router Navigation
```typescript
import { Link, useParams } from "@tanstack/react-router";

// Link to routes
<Link to="/magazines">View All</Link>

// Get route params
const { id } = useParams({ from: "/magazine/$id" });
```

## Deployment
- **Platform**: Vercel
- **Config**: `vercel.json` contains SPA fallback rewrite
- **Build output**: `dist/` directory
- PDF files must be accessible from `public/pdfs/` in production

## Code Style
- **No semicolons** in JSX/TSX files (inconsistent in project)
- **Double quotes** for strings
- **Tabs** for indentation
- **Strict TypeScript** mode enabled
- Unused locals/parameters disallowed

## When Adding Features

1. **New UI components**: Add to `src/components/ui/` using shadcn/ui CLI or manually
2. **New routes**: Create files in `src/routes/`, restart dev server to regenerate route tree
3. **New sections**: Create in `src/components/sections/`, import in `Home.tsx`
4. **Static data**: Add to `src/data/` as TypeScript exports
5. **Assets**: Place in `public/` directory, reference with absolute paths like `/pdfs/file.pdf`
