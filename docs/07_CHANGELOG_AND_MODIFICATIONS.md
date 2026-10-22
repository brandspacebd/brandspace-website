# 07 - Changelog & Modification Audit
## Brandspace / Aixor Agency Next.js Static Website

This document records the exact modifications made to the original ThemeForest Aixor Agency Next.js template to achieve full Pages CMS integration and static export compatibility.

---

## 1. Summary of Changes

| Category | Files Added | Files Modified | Files Deleted |
| :--- | :--- | :--- | :--- |
| **Build & Config** | `.npmrc`, `.pages.yml`, `.github/workflows/deploy.yml` | `next.config.mjs`, `tsconfig.json`, `README.md` | — |
| **Routing & SSG** | `src/app/not-found.tsx` | Dynamic `[id]/page.tsx` routes (4 files) | `src/app/[...not-found]/page.tsx` |
| **Content & Data** | `siteSettings.json`, `homeData.json`, `FaqData.json`, `public/uploads/.gitkeep` | 15+ UI Components in `src/components/` | — |
| **Utilities** | `src/components/utilities/getImageUrl.ts` | — | — |

---

## 2. Granular Breakdown by Phase

### Phase 1: Environment & Dependencies
- **Issue:** The project uses Next.js 16 and React 19. The package `react-simple-scroll-up@0.2.3` explicitly declared a peer dependency for React 17/18. Standard `npm install` failed with an `ERESOLVE` peer dependency conflict.
- **Modification:** Created [.npmrc](../.npmrc) with `legacy-peer-deps=true`. Dependencies now install cleanly and deterministically both locally and in CI/CD.

### Phase 2: Static Export Configuration
- **Issue:** The original template relied on default Next.js server-rendered mode (`output` omitted) and image optimization endpoints incompatible with GitHub Pages.
- **Modification:** Updated [next.config.mjs](../next.config.mjs) with:
  ```javascript
  const nextConfig = {
      output: 'export',
      images: {
          unoptimized: true
      }
  };
  export default nextConfig;
  ```

### Phase 3: Route Compatibility & 404 Handling
- **Issue 1:** The catch-all route `src/app/[...not-found]/page.tsx` failed `npm run build` because Next.js cannot export dynamic catch-all paths without `generateStaticParams()`.
  - **Action:** Deleted `src/app/[...not-found]/page.tsx` and created [src/app/not-found.tsx](../src/app/not-found.tsx). Next.js exports this directly to `out/404.html`, which is natively served by GitHub Pages.
- **Issue 2:** Dynamic routes (`/service-details/[id]`, `/project-details/[id]`, `/blog-details/[id]`, `/team-details/[id]`) failed static compilation without static parameter generators.
  - **Action:** Implemented `generateStaticParams()` in all 4 dynamic route files:
    - `src/app/service-details/[id]/page.tsx` (maps from `ServicesV1Data.json`)
    - `src/app/project-details/[id]/page.tsx` (maps from `FeatureV2Data.json`)
    - `src/app/blog-details/[id]/page.tsx` (maps from `FeatureV3Data.json`)
    - `src/app/team-details/[id]/page.tsx` (maps from `TeamV1Data.json`)

### Phase 4: Media Upload Pipeline & Path Resolver
- **Issue:** Legacy template images reside in `public/assets/images/...` and are referenced by filename (e.g. `"service1.png"`). Pages CMS uploads new media to `public/uploads/` and references them as `"/uploads/custom.jpg"`. Mixing these without a resolver would break either legacy or new images.
- **Action:** Created [src/components/utilities/getImageUrl.ts](../src/components/utilities/getImageUrl.ts) which detects whether a path is already absolute (`/uploads/...`) or relative (`filename.png`), routing each safely.
- **Action:** Created `public/uploads/.gitkeep` to ensure the upload directory is tracked in Git.

### Phase 5: Content Extraction & Component Binding
- **Issue:** Global site settings (logo, contact email, phone, physical address, social links), homepage hero copy/quotes, and FAQ items were hardcoded inside JSX files.
- **Action:** Created structured JSON files:
  - `public/assets/jsonData/settings/siteSettings.json`
  - `public/assets/jsonData/homepage/homeData.json`
  - `public/assets/jsonData/faq/FaqData.json`
- **Action:** Bound components to read from these files while maintaining exact styling, layout, and animations:
  - `HeroV1.tsx` (titles, quotes, author name/role, CTA button & link)
  - `AboutV1.tsx` & `AboutV2.tsx` (about text)
  - `FooterV1.tsx` (footer logo, copyright, address, contact info)
  - `HeaderMenu.tsx`, `HeaderV2.tsx`, `HeaderV3.tsx` (header logos, contact info)
  - `FaqV1.tsx` (dynamic FAQ accordion rendering)
  - `SocialShareV1.tsx` (dynamic social profile links)
  - All image rendering cards (`SingleFeatureV1/V2/V3`, `SingleServicesV1/V2`, `SingleTeamV1`, `SingleTestimonialV1`, `SingleProcessV1`, `SingleFactV1/V2`, `PartnerV1`, `BlogDetailsContent`, `ProjectDetailsContent`, `ServiceDetailsContent`, `TeamDetailsContent`) updated to use `getImageUrl`.

### Phase 6: Pages CMS Integration (`.pages.yml`)
- Created [`.pages.yml`](../.pages.yml) configuring:
  - Media input (`public/uploads`) and output (`/uploads`).
  - Merge mode (`settings.content.merge: true`) to preserve unmanaged attributes.
  - Organized content sidebar with groups for **Site Settings**, **Homepage**, **Services**, **Projects & Portfolio**, **Blog & Articles**, **Team Members**, **Testimonials**, **FAQ**, and **Company & About**.

### Phase 7: GitHub Actions CI/CD Pipeline
- Created [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) configuring automated static site builds and GitHub Pages deployment on pushes to `main`.

---
*Authored for the Brandspace Engineering & AI Pair-Programming Team.*
