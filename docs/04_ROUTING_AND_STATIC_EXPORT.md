# 04 - Routing & Static Export Engine
## BrandSpace / Aixor Agency Next.js Static Website

This document explains the routing topology of the application, how dynamic routes are pre-rendered at build time, and how 404 error handling is implemented for GitHub Pages.

---

## 1. Route Topology Overview

The site is built with Next.js App Router (`src/app/`). All 33 routes are compiled into static HTML files during `npm run build`:

```plaintext
Route (app)
┌ ○ /                           (Homepage)
├ ○ /_not-found                 (Native 404 Error Handler -> out/404.html)
├ ○ /about                      (About Us Page)
├ ○ /blog                       (Blog Listing Page)
├ ● /blog-details/[id]          (Dynamic SSG: /blog-details/1, /2, /3, etc.)
├ ○ /contact                    (Contact Page)
├ ○ /faq                        (FAQ Page)
├ ○ /home                       (Home 1 Variant)
├ ○ /home-2                     (Home 2 Variant)
├ ○ /projects                   (Projects / Portfolio Listing Page)
├ ● /project-details/[id]       (Dynamic SSG: /project-details/1, /2, /3, etc.)
├ ○ /services                   (Services Listing Page)
├ ● /service-details/[id]       (Dynamic SSG: /service-details/1, /2, /3, /4)
├ ○ /team                       (Team Listing Page)
└ ● /team-details/[id]          (Dynamic SSG: /team-details/1, /2, /3, etc.)

○  (Static)  Prerendered as static HTML
●  (SSG)     Prerendered dynamic route using generateStaticParams()
```

---

## 2. Dynamic Route Pre-rendering (`generateStaticParams`)

In static export mode (`output: 'export'`), Next.js cannot render dynamic routes on demand at runtime because there is no Node.js server. Every possible ID parameter must be declared ahead of time via `generateStaticParams()`.

### 2.1 Services: `src/app/service-details/[id]/page.tsx`
```typescript
import ServicesV1Data from "@/../public/assets/jsonData/services/ServicesV1Data.json";

export async function generateStaticParams() {
    return ServicesV1Data.map((service) => ({
        id: service.id.toString(),
    }));
}
```

### 2.2 Projects: `src/app/project-details/[id]/page.tsx`
```typescript
import FeatureV2Data from "@/../public/assets/jsonData/feature/FeatureV2Data.json";

export async function generateStaticParams() {
    return FeatureV2Data.map((project) => ({
        id: project.id.toString(),
    }));
}
```

### 2.3 Blog Posts: `src/app/blog-details/[id]/page.tsx`
```typescript
import FeatureV3Data from "@/../public/assets/jsonData/feature/FeatureV3Data.json";

export async function generateStaticParams() {
    return FeatureV3Data.map((blog) => ({
        id: blog.id.toString(),
    }));
}
```

### 2.4 Team Members: `src/app/team-details/[id]/page.tsx`
```typescript
import TeamV1Data from "@/../public/assets/jsonData/team/TeamV1Data.json";

export async function generateStaticParams() {
    return TeamV1Data.map((team) => ({
        id: team.id.toString(),
    }));
}
```

### How New CMS Items Are Handled
When a client creates a new service, project, blog post, or team member in Pages CMS, they enter a unique numerical ID (e.g. `5`). When Pages CMS commits the updated JSON file, GitHub Actions runs `npm run build`. Next.js executes `generateStaticParams()`, reads the new entry, and automatically pre-renders the corresponding static HTML page (e.g. `out/service-details/5.html`).

---

## 3. GitHub Pages 404 Error Handling

### The Problem with Catch-All `[...not-found]`
The original ThemeForest template included a catch-all route: `src/app/[...not-found]/page.tsx`.
- In Next.js App Router, catch-all dynamic routes (`[...catchAll]`) cannot be statically exported unless every conceivable URL permutation is defined in `generateStaticParams()`.
- Running `npm run build` with `[...not-found]` causes the build to fail with:  
  `Page "[...not-found]" is missing "generateStaticParams()" so it cannot be used with "output: export"`.

### The Solution: Native `not-found.tsx`
We deleted the catch-all dynamic route and replaced it with Next.js's standard root not-found component:
- File: [src/app/not-found.tsx](../src/app/not-found.tsx)

```typescript
import HeaderV1 from '@/components/header/HeaderV1';
import FooterV1 from '@/components/footer/FooterV1';
import NotFoundContent from '@/components/notFound/NotFoundContent';

export default function NotFound() {
    return (
        <>
            <HeaderV1 />
            <NotFoundContent />
            <FooterV1 />
        </>
    );
}
```

### Why This is Ideal for GitHub Pages
When Next.js exports `src/app/not-found.tsx`, it creates **`out/404.html`**.  
GitHub Pages natively looks for `404.html` in the root of the deployed site and serves it automatically whenever a visitor requests a non-existent route. This provides seamless, styled error handling with zero server configuration.

---
*Authored for the BrandSpace Engineering & AI Pair-Programming Team.*
