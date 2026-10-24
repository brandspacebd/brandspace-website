# 02 - Pages CMS Schema & Content Architecture
## Brandspace / Aixor Agency Next.js Static Website

This document details how **Pages CMS** connects to the repository, how the configuration file [`.pages.yml`](../.pages.yml) is structured, and how each content section in the CMS maps to local JSON files and React components.

---

## 1. Pages CMS Architecture

[Pages CMS](https://pagescms.org/) is an open Git-based content management system. Key operational attributes:
- **Hosted Interface:** Access is managed through [https://app.pagescms.org/](https://app.pagescms.org/). No local admin servers exist.
- **Git Provider:** Connects directly via the official **Pages CMS GitHub App**.
- **Working Branch:** Operates on the default deployment branch (`main`).
- **Configuration File:** Read from the root file [`.pages.yml`](../.pages.yml).

### Top-Level Configuration Structure
```yaml
media:
  input: public/uploads
  output: /uploads
  categories: [image]
  extensions: [jpg, jpeg, png, webp, svg, gif]

settings:
  content:
    merge: true
  commit:
    templates:
      create: "Create {path} (via Pages CMS)"
      update: "Update {path} (via Pages CMS)"
      delete: "Delete {path} (via Pages CMS)"

content:
  # Collections, single files, and groups defined here
```

### Why `settings.content.merge: true` is Critical
In Pages CMS, setting `merge: true` ensures that when an editor saves changes to a JSON file, any existing properties or legacy metadata not explicitly listed in `.pages.yml` are **preserved** rather than stripped out. This protects internal template parameters (such as `delay`, `activeClass`, or future flags).

---

## 2. Complete Content Model & File Mapping

The table below documents every content section configured in `.pages.yml`, its file location, data structure, and the React components that consume it:

| CMS Collection Name | File Path | Data Structure | Consuming React Components / Routes | Key Fields |
| :--- | :--- | :--- | :--- | :--- |
| **Navbar: Site Settings & Global Branding** | `public/assets/jsonData/settings/siteSettings.json` | Single Object (`list: false`) | `HeaderMenu.tsx`, `HeaderV2.tsx`, `HeaderV3.tsx`, `FooterV1.tsx` | `siteName`, `logo`, `footerLogo`, `email`, `phone`, `address`, `copyright`, `socialLinks` |
| **1. Home: Hero Banner, Quotes & Intro** | `public/assets/jsonData/homepage/homeData.json` | Single Object (`list: false`) | `HeroV1.tsx`, `AboutV1.tsx`, `AboutV2.tsx` | `hero` (titles, quotes, author, CTA), `about`, `aboutPage`, `projects` |
| **2. The Works: Featured (Homepage Showcase)** | `public/assets/jsonData/feature/FeatureV1Data.json` | Array (`list: true`) | `FeatureV1.tsx`, `src/app/project-details/[id]/page.tsx` | `id`, `projectName`, `info`, `subTitle1`, `subTitle2`, `thumb`, `date` |
| **2. The Works: All Portfolio Items & Case Studies** | `public/assets/jsonData/feature/FeatureV2Data.json` | Array (`list: true`) | `SingleFeatureV2.tsx`, `src/app/projects/page.tsx` | `id`, `name`, `info`, `textFirst`, `textLast`, `thumb`, `date`, `description` |
| **3. About Us: 4 Stat Cards & Images** | `public/assets/jsonData/fact/FactData.json` | Array (`list: true`) | `SingleFactV1.tsx`, `SingleFactV2.tsx` | `id`, `title`, `end`, `thumb` |
| **3. About Us: Core Company Values** | `public/assets/jsonData/services/ServicesV2Data.json` | Array (`list: true`) | `SingleServicesV2.tsx`, `src/app/about/page.tsx` | `id`, `title`, `text`, `thumb` |
| **3. About Us: Work Process Steps** | `public/assets/jsonData/process/ProcessV1Data.json` | Array (`list: true`) | `SingleProcessV1.tsx` | `id`, `number`, `name`, `designation`, `description`, `thumb`, `alt` |
| **4. Meet The Team: Our Core Team (Leadership & Specialists)** | `public/assets/jsonData/team/TeamV1Data.json` | Array (`list: true`) | `SingleTeamV1.tsx`, `src/app/core-team/page.tsx`, `src/app/team-details/[id]/page.tsx` | `id`, `name`, `designation`, `text`, `thumb` |
| **4. Meet The Team: Our Creative Network (Global Creators)** | `public/assets/jsonData/team/CreativeNetworkData.json` | Array (`list: true`) | `SingleTeamV1.tsx`, `src/app/creative-network/page.tsx` | `id`, `name`, `designation`, `text`, `thumb` |
| **5. Our Ventures: Juniorspace, Khyap, Gardenspace** | `public/assets/jsonData/ventures/VenturesData.json` | Single Object (`list: false`) | `src/app/concerns/juniorspace`, `khyap`, `gardenspace` | `juniorspace`, `khyap`, `gardenspace` (name, tagline, badge, description, button) |
| **6. Explore: Our Clients & Partner Logos** | `public/assets/jsonData/partner/PartnerData.json` | Array (`list: true`) | `PartnerV1.tsx`, `src/app/clients/page.tsx` | `id`, `thumb` |
| **6. Explore: All Services & Categories** | `public/assets/jsonData/services/ServicesV1Data.json` | Array (`list: true`) | `src/app/services/page.tsx`, `service-details/[id]` | `id`, `name`, `icon`, `thumb`, `thumbFull1`, `thumbFull2`, `text`, `price` |
| **7. Explore: Stories & Insights (Articles)** | `public/assets/jsonData/feature/FeatureV3Data.json` | Array (`list: true`) | `src/app/stories/page.tsx`, `blog-details/[id]` | `id`, `title`, `title2`, `author`, `date`, `comment`, `thumb`, `thumbFull`, `content` |
| **7. Explore: Press Releases & Coverage** | `public/assets/jsonData/press/PressReleasesData.json` | Array (`list: true`) | `src/app/press-releases/page.tsx` | `id`, `title`, `date`, `category`, `summary`, `source`, `link` |
| **7. Explore: Credentials Flipbook & Dossier** | `public/assets/jsonData/credentials/CredentialsData.json` | Single Object (`list: false`) | `CredentialsEmbed.tsx`, `src/app/credentials/page.tsx` | `subtitle`, `title`, `toolbarTitle`, `flipbookUrl` |
| **7. Explore: Credentials & Awards** | `public/assets/jsonData/awards/AwardsV1Data.json` | Array (`list: true`) | `AwardsV1.tsx`, `src/app/credentials/page.tsx` | `id`, `title`, `date` |
| **8. Explore: Agency Rate Card Packages** | `public/assets/jsonData/pricing/RateCardData.json` | Single Object (`list: false`) | `RateCardSection.tsx`, `src/app/rate-card/page.tsx` | `subtitle`, `title`, `description`, `packages` (id, number, title, features) |
| **8. Explore: Retainer Fee Calculator Rates** | `public/assets/jsonData/pricing/RetainerCalculatorData.json` | Single Object (`list: false`) | `RetainerCalculatorSection.tsx`, `/retainer-calculator` | `subtitle`, `title`, `services` (id, name, baseHours, hourlyRate, description) |
| **8. Explore: Careers (Current Openings)** | `public/assets/jsonData/careers/CareersData.json` | Array (`list: true`) | `src/app/careers/page.tsx` | `id`, `title`, `department`, `location`, `type`, `experience`, `description` |
| **9. Connect: Contact Page Details** | `public/assets/jsonData/contact/ContactData.json` | Single Object (`list: false`) | `ContactV1.tsx`, `src/app/contact/page.tsx` | `subtitle`, `title`, `description`, `officeHours`, `responseTime` |
| **Global: Client Testimonials & Reviews** | `public/assets/jsonData/testimonial/TestimonialData.json` | Array (`list: true`) | `SingleTestimonialV1.tsx`, `src/app/clients/page.tsx` | `id`, `name`, `designation`, `text`, `thumb` |
| **Global: Frequently Asked Questions (FAQ)** | `public/assets/jsonData/faq/FaqData.json` | Single Object with Array (`items`) | `FaqV1.tsx`, `src/app/faq/page.tsx` | `subtitle`, `title`, `description`, `items` (`id`, `number`, `question`, `answer`) |


---

## 3. Schema Structure Types in Pages CMS

### 3.1 Single File Objects (`type: file`, `list: false`)
Used for configuration files where the root JSON structure is an object `{ ... }`.
```yaml
- name: site-settings
  label: Site Settings
  type: file
  path: public/assets/jsonData/settings/siteSettings.json
  format: json
  fields:
    - name: siteName
      label: Website Name
      type: string
    - name: logo
      label: Header Logo
      type: image
```

### 3.2 List File Arrays (`type: file`, `list: true`)
Used when the root of the JSON file is an array `[ { ... }, { ... } ]`. Pages CMS renders a repeatable card list where editors can add, reorder, edit, and delete entries.
```yaml
- name: services
  label: Services
  type: file
  path: public/assets/jsonData/services/ServicesV1Data.json
  format: json
  list: true
  fields:
    - name: id
      label: Service ID
      type: number
      required: true
    - name: name
      label: Service Title
      type: string
```

### 3.3 Content Groups (`type: group`)
Used to organize related files in the Pages CMS sidebar into collapsible sections without altering their underlying file locations:
```yaml
- name: projects-group
  label: Projects & Portfolio
  type: group
  items:
    - name: featured-projects
      label: Featured Projects (Homepage)
      type: file
      path: public/assets/jsonData/feature/FeatureV1Data.json
      ...
    - name: all-projects
      label: All Projects (Portfolio Grid)
      type: file
      path: public/assets/jsonData/feature/FeatureV2Data.json
      ...
```

---

## 4. Best Practices for Modifying the Schema

If you need to add a new editable field:
1. **Update the JSON Data File First:** Add the new property with a default value to the relevant JSON file in `public/assets/jsonData/`.
2. **Update the Component:** Update the corresponding React component in `src/components/` to render the property (use fallback values, e.g. `data.newField || "Default Text"`).
3. **Update `.pages.yml`:** Add the field under the appropriate collection with clear `label` and `description` attributes.
4. **Test the Static Build:** Run `npm run build` to confirm TypeScript passes and pages compile without error.

---
*Authored for the Brandspace Engineering & AI Pair-Programming Team.*
