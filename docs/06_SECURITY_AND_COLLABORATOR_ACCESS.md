# 06 - Security & Collaborator Access Model
## BrandSpace / Aixor Agency Next.js Static Website

This document outlines the security architecture, customer access boundaries, and Pages CMS collaborator invitation workflow.

---

## 1. Zero-Trust Customer Access Model

Traditional CMS setups often risk security vulnerabilities by giving nontechnical clients direct access to GitHub repositories, exposing database credentials, or embedding personal access tokens in frontend code.

This project enforces a **strict Zero-Trust architecture**:

```plaintext
[Agency Owner]
      │
      ├─ Administers GitHub Private Repository (Source Code, Workflows, Settings)
      └─ Installs Pages CMS GitHub App & Configures .pages.yml
               │
               ▼
[Pages CMS Hosted Application (https://app.pagescms.org/)]
               │
               │ (Invites via email)
               ▼
[Client / Content Collaborator]
      │
      ├─ Logs in via Email Magic Link
      ├─ Edits ONLY configured copy & images in .pages.yml
      ├─ CANNOT view Git repository or source code
      ├─ CANNOT view or edit GitHub Actions workflows
      ├─ CANNOT view environment variables or secrets
      └─ CANNOT invite additional users or alter CMS schemas
```

---

## 2. Hard Security Boundaries

1. **No GitHub Access for Customers:** Clients are never invited as GitHub repository collaborators. They do not need a GitHub account.
2. **No Embedded Access Tokens:** The frontend contains zero Personal Access Tokens (PATs), zero API keys, and zero database connection strings.
3. **No Local / Custom Admin Endpoints:** There is no `/admin` route or custom authentication system inside the Next.js app. Pages CMS operates entirely via its official hosted domain `https://app.pagescms.org/`.
4. **Media Upload Restrictions:** The media configuration in `.pages.yml` strictly restricts uploads to image MIME categories and extensions (`jpg`, `jpeg`, `png`, `webp`, `svg`, `gif`), blocking arbitrary binary or script execution.
5. **Schema Protection:** Clients cannot edit application configuration files (`package.json`, `next.config.mjs`, `tsconfig.json`) or application code in `src/`. Only files in `public/assets/jsonData/` declared in `.pages.yml` are exposed.

---

## 3. Step-by-Step Collaborator Invitation Workflow

### Step 1: Connect Your Repository to Pages CMS
1. Go to **[https://app.pagescms.org/](https://app.pagescms.org/)** and log in with your agency GitHub account.
2. Click **Connect Repository** (or **Add Repository**).
3. Authorize the **Pages CMS GitHub App** on your account:
   - Select **Only select repositories**.
   - Choose `brandspacebd/brandspace-website`.
4. Select the default branch: `main`.

### Step 2: Invite the Customer by Email
1. Inside your repository dashboard at `https://app.pagescms.org/`, click **Settings** (gear icon in the sidebar).
2. Select **Collaborators**.
3. Click **Invite Collaborator**.
4. Enter the customer's email address.
5. Send the invitation.

### Step 3: Client Experience
1. The customer receives an invitation email from Pages CMS containing an instant login link.
2. They open the link and access the simplified, clean content dashboard.
3. In the sidebar, they see organized categories:
   - **Site Settings** (brand name, logos, email, social links)
   - **Homepage** (hero quotes, author, CTA, about text)
   - **Services** (service titles, pricing, showcase photos)
   - **Projects & Portfolio** (featured and portfolio projects)
   - **Blog & Articles** (articles, author, publication date)
   - **Team Members** (names, roles, bios, headshots)
   - **Testimonials** (client reviews and avatars)
   - **Frequently Asked Questions (FAQ)**
   - **Company & About** (values, process, stats, awards, logos)
4. When they make changes and click **Save**, Pages CMS creates a Git commit on `main`, automatically triggering the deployment pipeline.

---
*Authored for the BrandSpace Engineering & AI Pair-Programming Team.*
