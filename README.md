# CKB Firm Website

This is the official website for the CKB Firm, a Chicago-based commercial law firm.

## Project Overview

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Content**: Astro Content Collections (for blog)
- **Deployment**: Production-ready for any static host (Netlify, Vercel, etc.)

## Key Features

- Fully responsive, mobile-first design
- SEO optimized with meta tags and Open Graph data
- Integrated blog with markdown-based content
- Working contact form using Astro Actions
- Sitemap generation

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

4.  **Preview the production build:**
    ```bash
    npm run preview
    ```

## File Structure

- `src/pages/`: All site pages.
- `src/layouts/`: The main site layout (`Layout.astro`).
- `src/components/`: Reusable components (Header, Footer, etc.).
- `src/content/blog/`: Markdown files for blog posts.
- `public/`: Static assets like `robots.txt`.