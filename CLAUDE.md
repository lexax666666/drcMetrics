# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Memories
- When addressing me, please call me Mark

## Development Commands

```bash
# Install dependencies
npm install

# Run development server with Turbopack (fast refresh)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Project Architecture

This is a Next.js 15 application with App Router that provides an Amazon seller analytics dashboard. The project uses:

- **Next.js 15.3.1**: Modern React framework with App Router
- **React 18.3.1**: UI library with hooks and function components
- **TailwindCSS**: For styling with utility classes
- **Radix UI**: For accessible UI components
- **Recharts**: For data visualization
- **TypeScript**: For type safety

### Key Directories

- `/app`: Next.js App Router pages and layouts
- `/components`: Reusable React components
  - `/components/landing`: Landing page components
  - `/components/ui`: UI component library (shadcn/ui based)
- `/hooks`: Custom React hooks
- `/lib`: Utility functions
- `/public`: Static assets

### Core Features

1. **Landing Pages**: Marketing pages to promote the service
   - Homepage with hero section, features, stats, and call to action
   - Pricing page with subscription options (monthly/annual plans)

2. **Authentication**: 
   - Login page with email/password and social login options
   - Signup flow

3. **Analytics Dashboard**:
   - Performance metrics overview (ACOS, profit, revenue, fees, costs)
   - Time-series charts for performance visualization
   - SKU performance comparison tables
   - Ad campaign performance analysis

### Styling System

The project uses a combination of:

1. **TailwindCSS**: For utility-based styling
2. **CSS Modules**: For component-specific styles (e.g., join page)
3. **CSS Variables**: For theme colors and design system tokens
4. **shadcn/ui**: For UI components with consistent styling

### State Management

- React's built-in useState and useContext for local and shared state
- No global state management library is currently used

## Key Design Patterns

1. **Component Composition**: UI is built from smaller, reusable components
2. **Client Components**: Components with interactivity are marked with 'use client'
3. **CSS-in-JS with Tailwind**: Using utility classes with the cn helper function
4. **Responsive Design**: Mobile-first approach with responsive breakpoints

## Notes for Development

When working on this codebase:

1. All components using client-side interactivity must include the 'use client' directive at the top
2. Follow the existing color system using CSS variables (e.g., var(--static-text-strong))
3. Use the Button, Card, and other UI components from components/ui/ for consistent styling
4. The cn() utility from lib/utils.ts should be used to merge classNames conditionally