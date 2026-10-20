# 08 - AI Agent & Developer Guidelines
## BrandSpace / Aixor Agency Next.js Static Website

> **Instructions for Incoming Coding Agents:**  
> When you are handed this project or are pair-programming with the user, follow the strict conventions and safeguards documented below.

---

## 1. Prime Directives

1. **Preserve Visual & Aesthetic Integrity:**  
   The Aixor Agency template is a high-value, bespoke design. Never replace existing components with generic UI or remove animations (GSAP, AOS, CountUp). Never rewrite page layouts unless explicitly instructed by the user.
2. **Strict Static Compatibility:**  
   The site MUST build via `npm run build` using Next.js `output: 'export'`. Do not introduce server components requiring runtime Node.js functionality (e.g. `cookies()`, dynamic server actions, or server-side API routes).
3. **No External Backends or Databases:**  
   Do NOT install Decap CMS, TinaCMS, Sanity, Contentful, WordPress, Supabase, Firebase, or an Express/Node backend. Pages CMS is the exclusive content interface.
4. **Never Expose Secrets:**  
   Never embed GitHub Personal Access Tokens (PATs) or private keys in client-side code, `.env` files, or `.pages.yml`.

---

## 2. Essential Commands

```bash
# Installing dependencies
npm install --legacy-peer-deps

# Running the development server
npm run dev

# Testing static export build (ALWAYS RUN BEFORE COMMITTING)
npm run build

# Staging and committing
git add -A
git commit -m "Your descriptive commit message"
```

---

## 3. Critical Platform Gotchas & Quirks

### 3.1 PowerShell Square Bracket Wildcards
- **The Issue:** On Windows PowerShell, square brackets `[` and `]` are treated as pattern-matching wildcards. Running commands like `Remove-Item 'src/app/[...not-found]'` or `Get-Item 'src/app/[id]'` will fail or target unexpected files.
- **The Rule:** Always use the `-LiteralPath` parameter when running PowerShell filesystem commands on dynamic route folders:
  ```powershell
  # Correct way to delete or move bracketed folders in PowerShell:
  Remove-Item -LiteralPath 'src\app\[...not-found]' -Recurse -Force
  ```

### 3.2 React 19 Peer Dependency Resolution
- Next.js 16 uses React 19. Certain UI packages in the template (`react-simple-scroll-up`) declare peer dependencies for React 17/18.
- `.npmrc` is already configured with `legacy-peer-deps=true`.
- Always include `--legacy-peer-deps` if invoking `npm install` or `npm ci` in scripts.

### 3.3 Dynamic Routes & `generateStaticParams()`
- Any new dynamic route folder created under `src/app/` (e.g. `src/app/categories/[id]/page.tsx`) MUST export an `async function generateStaticParams()`.
- Failing to do so will immediately break `npm run build` with an export validation error.

### 3.4 Image Resolution Rule
- When adding or modifying components that render images, **always** wrap the image source with `getImageUrl`:
  ```tsx
  import { getImageUrl } from "@/components/utilities/getImageUrl";
  <Image src={getImageUrl(item.thumb, "/assets/images/subfolder/")} ... />
  ```
- This ensures compatibility with both legacy assets and `/uploads/...` CMS assets.

---

## 4. Modifying Content Files & `.pages.yml`

When adding a new content section or modifying an existing one:
1. **JSON Data First:** Edit or create the JSON file inside `public/assets/jsonData/`. Ensure valid JSON formatting and include an `id` field for array items.
2. **Component Integration:** Import the data into the component and render it with safe defaults.
3. **Pages CMS Schema:** Add the field or collection to `.pages.yml`.
   - For single object JSON: `type: file`, `format: json`, `list: false`.
   - For array JSON: `type: file`, `format: json`, `list: true`.
   - Provide clear `label` and `description` attributes.
4. **Build Verification:** Run `npm run build`. The build must exit with code 0 and generate all pages in `out/`.

---
*Authored for the BrandSpace Engineering & AI Pair-Programming Team.*
