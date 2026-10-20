# 00 - Full Project Master Documentation
## BrandSpace / Aixor Agency Next.js Static Website & Pages CMS

> **Welcome, Developer or AI Agent!**  
> This master document provides a comprehensive, end-to-end overview of the BrandSpace (Aixor Agency) website. If you are a new AI coding agent or software engineer resuming work on this repository, **read this document and the accompanying guides in `docs/` first**. You will understand the entire system architecture, content schema, design system, deployment pipeline, and development conventions without having to reverse-engineer the codebase.

---

## 1. Project Overview & Business Goal

- **Repository Name:** `brandspacebd/brandspace-website`
- **Owner / Organization:** BrandSpace (`emailtobrandspace@gmail.com`)
- **Base Template:** Aixor Agency Next.js Template (purchased from ThemeForest)
- **Primary Objective:** Convert a premium agency Next.js template into a completely content-editable, Git-based client website powered by **Pages CMS**, deployable as an ultra-fast, zero-maintenance static export on **GitHub Pages**, without maintaining any backend server, custom API, VPS, database, or exposed access tokens.

### Key Architectural Pillars
1. **Zero Server / Zero Database:** No Node.js runtime servers, no VPS, no databases (MongoDB, PostgreSQL, Supabase, Firebase). Zero maintenance cost and near-zero attack surface.
2. **Git-Based Headless CMS:** Content is stored directly in Git repository files (JSON format) inside `public/assets/jsonData/`.
3. **Hosted Pages CMS Interface:** Content editing is conducted via the official hosted app at [https://app.pagescms.org/](https://app.pagescms.org/). There is **NO** custom `/admin` dashboard or local CMS server.
4. **Email-Invited Client Collaborators:** Nontechnical clients are invited by email as collaborators in Pages CMS. They can only edit exposed copy and images; they never receive GitHub repository access.
5. **Static Site Generation (SSG):** Next.js builds the entire site into pre-rendered static HTML/CSS/JS in `out/` via `output: 'export'`.
6. **Automated CI/CD:** Any content edit committed by Pages CMS automatically triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys the static site to GitHub Pages.

---

## 2. Technology Stack Summary

| Layer | Technology | Version | Purpose & Notes |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | `16.0.0` (Turbopack) | React framework with App Router, static export (`output: 'export'`). |
| **UI Library** | React / React DOM | `19.2.0` | Latest React engine with Turbopack acceleration. |
| **Language** | TypeScript | `5.9.3` | Full type safety, strict typing across components and data imports. |
| **CSS Framework** | Bootstrap | `5.3.8` | Responsive layout, grid system, interactive modals and off-canvas menus. |
| **Animations** | GSAP & AOS | `3.13.0` & `2.3.4` | Smooth entrance animations, scroll animations, text effects. |
| **CMS** | Pages CMS | Hosted (`app.pagescms.org`) | Serverless, Git-based CMS configured via root [`.pages.yml`](../.pages.yml). |
| **Media Storage** | Local Git (`public/uploads/`) | Formats: JPG, PNG, WebP, SVG, GIF | Dedicated upload directory mapped to public URL `/uploads/`. |
| **Image Resolution**| `getImageUrl.ts` | Custom Utility | Seamlessly routes between legacy `/assets/images/...` and `/uploads/...`. |
| **CI / CD** | GitHub Actions | `deploy.yml` | Automatic build and deployment to GitHub Pages on pushes to `main`. |
| **Hosting Target** | GitHub Pages | Static Web Hosting | Serves pre-built static export from `out/` directory. |

---

## 3. Repository Directory Structure

```plaintext
BrandSpace-Website/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions static export deployment workflow
├── .npmrc                          # Sets legacy-peer-deps=true for React 19 compatibility
├── .pages.yml                      # Pages CMS configuration (collections, fields, media)
├── docs/                           # Complete developer & agent documentation suite
│   ├── 00_FULL_PROJECT_DOCUMENTATION.md
│   ├── 01_ARCHITECTURE_AND_TECH_STACK.md
│   ├── 02_PAGES_CMS_SCHEMA_AND_CONTENT.md
│   ├── 03_MEDIA_PIPELINE_AND_IMAGE_HANDLING.md
│   ├── 04_ROUTING_AND_STATIC_EXPORT.md
│   ├── 05_DEPLOYMENT_CI_CD_GITHUB_PAGES.md
│   ├── 06_SECURITY_AND_COLLABORATOR_ACCESS.md
│   ├── 07_CHANGELOG_AND_MODIFICATIONS.md
│   ├── 08_AGENT_DEVELOPMENT_GUIDELINES.md
│   └── 09_FUTURE_EXPANSION_ROADMAP.md
├── next.config.mjs                 # Next.js config: output: 'export', images: { unoptimized: true }
├── package.json                    # Project dependencies and build scripts
├── package-lock.json               # Locked dependency tree
├── tsconfig.json                   # TypeScript configuration
├── README.md                       # Repository overview and Pages CMS setup instructions
├── public/
│   ├── assets/
│   │   ├── css/                    # Template stylesheets, Bootstrap, animations
│   │   ├── images/                 # Original theme icons, banners, team/project assets
│   │   ├── js/                     # Client helper scripts
│   │   ├── video/                  # Video hero background files
│   │   └── jsonData/               # ALL EDITABLE CONTENT FILES MANAGED BY PAGES CMS:
│   │       ├── awards/AwardsV1Data.json
│   │       ├── fact/FactData.json
│   │       ├── faq/FaqData.json
│   │       ├── feature/FeatureV1Data.json (Featured Projects)
│   │       ├── feature/FeatureV2Data.json (All Projects Portfolio)
│   │       ├── feature/FeatureV3Data.json (Blog & Articles)
│   │       ├── homepage/homeData.json (Hero, quotes, about, CTA)
│   │       ├── partner/PartnerData.json (Client logos)
│   │       ├── process/ProcessV1Data.json (Work process steps)
│   │       ├── services/ServicesV1Data.json (Services grid & detail)
│   │       ├── services/ServicesV2Data.json (Company values)
│   │       ├── settings/siteSettings.json (Global site settings, logos, contacts)
│   │       ├── team/TeamV1Data.json (Team members)
│   │       └── testimonial/TestimonialData.json (Client testimonials)
│   └── uploads/                    # Target directory for CMS-uploaded media (.gitkeep tracked)
├── src/
│   ├── app/                        # Next.js App Router (pages and dynamic routes)
│   │   ├── layout.tsx              # Root HTML shell, fonts, global CSS imports
│   │   ├── page.tsx                # Homepage root (renders Home1)
│   │   ├── not-found.tsx           # Custom 404 page (exports out/404.html for GitHub Pages)
│   │   ├── about/page.tsx          # About Us page
│   │   ├── blog/page.tsx           # Blog listing page
│   │   ├── blog-details/[id]/      # Dynamic blog detail page (with generateStaticParams)
│   │   ├── contact/page.tsx        # Contact Us page
│   │   ├── faq/page.tsx            # Frequently Asked Questions page
│   │   ├── home/page.tsx           # Alternative Home 1 route
│   │   ├── home-2/page.tsx         # Alternative Home 2 route
│   │   ├── projects/page.tsx       # Projects / Portfolio listing page
│   │   ├── project-details/[id]/   # Dynamic project detail page (with generateStaticParams)
│   │   ├── services/page.tsx       # Services listing page
│   │   ├── service-details/[id]/   # Dynamic service detail page (with generateStaticParams)
│   │   ├── team/page.tsx           # Team listing page
│   │   └── team-details/[id]/      # Dynamic team detail page (with generateStaticParams)
│   └── components/                 # Reusable UI components
│       ├── about/                  # About section components
│       ├── blog/                   # Blog listing and detail components
│       ├── faq/                    # Accordion FAQ components
│       ├── feature/                # Project cards and feature grids
│       ├── footer/                 # Global footer component
│       ├── header/                 # Header menus, navbars, off-canvas drawers
│       ├── hero/                   # Hero banners and text animations
│       ├── partner/                # Client logo carousels
│       ├── process/                # Step-by-step process components
│       ├── project/                # Project detail layout components
│       ├── services/               # Services cards and detail layouts
│       ├── social/                 # Social icons share components
│       ├── team/                   # Team member cards and detail views
│       ├── testimonial/            # Testimonial sliders/cards
│       └── utilities/
│           └── getImageUrl.ts      # Core image path resolver
```

---

## 4. Documentation Navigation Index

To dive into specific aspects of the codebase, consult the following dedicated guides:

1. [**01_ARCHITECTURE_AND_TECH_STACK.md**](./01_ARCHITECTURE_AND_TECH_STACK.md): Full analysis of Next.js 16, Turbopack, React 19, Bootstrap, GSAP, and static site compilation.
2. [**02_PAGES_CMS_SCHEMA_AND_CONTENT.md**](./02_PAGES_CMS_SCHEMA_AND_CONTENT.md): Complete specification of `.pages.yml`, JSON data files, field rules, and editing workflows.
3. [**03_MEDIA_PIPELINE_AND_IMAGE_HANDLING.md**](./03_MEDIA_PIPELINE_AND_IMAGE_HANDLING.md): Deep dive into image uploads, `getImageUrl.ts`, and asset integrity.
4. [**04_ROUTING_AND_STATIC_EXPORT.md**](./04_ROUTING_AND_STATIC_EXPORT.md): How static routing, dynamic routes (`[id]`), `generateStaticParams()`, and 404 handling operate.
5. [**05_DEPLOYMENT_CI_CD_GITHUB_PAGES.md**](./05_DEPLOYMENT_CI_CD_GITHUB_PAGES.md): Complete setup for GitHub Actions, GitHub Pages, custom domains, and repository push.
6. [**06_SECURITY_AND_COLLABORATOR_ACCESS.md**](./06_SECURITY_AND_COLLABORATOR_ACCESS.md): Client email collaborator management, zero-trust security, and access boundaries.
7. [**07_CHANGELOG_AND_MODIFICATIONS.md**](./07_CHANGELOG_AND_MODIFICATIONS.md): Chronological, granular breakdown of every change made to the ThemeForest template.
8. [**08_AGENT_DEVELOPMENT_GUIDELINES.md**](./08_AGENT_DEVELOPMENT_GUIDELINES.md): Practical rules, build commands, pitfalls, and tips for incoming AI coding agents.
9. [**09_FUTURE_EXPANSION_ROADMAP.md**](./09_FUTURE_EXPANSION_ROADMAP.md): Blueprints for adding serverless contact forms, CMS-driven blog MDX, search, analytics, and multilingual support.

---

## 5. Quick Reference Commands

```bash
# 1. Install dependencies (requires legacy-peer-deps for React 19 compatibility)
npm install --legacy-peer-deps

# 2. Run local development server
npm run dev

# 3. Test production static export build (generates out/ folder)
npm run build

# 4. Check git status
git status
```

---
*Authored for the BrandSpace Engineering & AI Pair-Programming Team.*
