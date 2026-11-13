# Reliant — Landing Page

Static Landing Page for **Reliant**, the product built by startup **InnovaCorp** for the course
**1ASI0729 Desarrollo de Aplicaciones Open Source** (UPC).

Reliant monitors, traces and documents **HVOF thermal-spray recuperation processes**, serving two target segments:

- **Recuperation Supplier** — companies that operate HVOF systems and recover industrial components.
- **Asset Owner** — mining/industrial companies that own the components and need verifiable quality evidence.

Live site: https://upc-pre-202620-1asi0729-7753-innovacorp.github.io/reliant-website/
Web application: https://reliant-web-application-hsa3asb7axaph6hf.chilecentral-01.azurewebsites.net/

This repository contains only the static Landing Page (`HTML5` + `CSS3` + `JavaScript`). The
RESTful API and the Frontend Web Application (Angular) live in their own repositories inside the
team's GitHub organization: [`reliant-platform`](https://github.com/upc-pre-202620-1asi0729-7753-innovacorp/reliant-platform) and [`reliant-webapp`](https://github.com/upc-pre-202620-1asi0729-7753-innovacorp/reliant-webapp).

## Sections

| Section | Content |
|---|---|
| Hero | Value proposition with segment-specific calls to action that open the web application sign-up (`/iam/sign-up?organizationType=RECUPERATION_SUPPLIER` or `ASSET_OWNER`). |
| Highlights | Real-time monitoring, full traceability and data-driven decisions. |
| Services | Monitor, Traceability, Diagnosis, Reports. |
| Why Reliant | Benefits over manual process records. |
| Segments | Recuperation Supplier and Asset Owner cards with their main capabilities. |
| Plans | Monthly plans per segment. |
| How it works | Four steps from sign-up to certified recuperation. |
| About us | About the Product and About the Team videos, mission, vision and values. |
| Contact | Call to action, e-mail and footer with social links and legal pages. |

### About videos

The About the Product / About the Team sections embed YouTube videos. Paste the video IDs in `assets/js/script.js`:

```js
var ABOUT_VIDEOS = {
  product: "<youtube-id>",
  team: "<youtube-id>"
};
```

While an ID is empty the section shows a "Video coming soon" placeholder.

## Tech stack

| Layer        | Technology            |
|--------------|------------------------|
| Markup       | HTML5 (semantic)       |
| Styling      | CSS3 (custom properties, responsive), Poppins via Google Fonts |
| Behavior     | JavaScript (vanilla)  |
| Versioning   | Git + GitHub, GitFlow, Conventional Commits, Semantic Versioning |

No build step is required: it is a static site that can be opened directly or served with any
static file server (e.g. GitHub Pages, Netlify, `npx serve`).

## Project structure

```
reliant-landing-page/
├── index.html                 # Landing page entry point
├── assets/
│   ├── css/
│   │   └── styles.css         # All styles (mobile-first)
│   ├── js/
│   │   ├── script.js          # Navigation, smooth scroll, segment CTAs
│   │   └── i18n.js            # English/Spanish translations and language switcher
│   └── img/                   # Logo, hero photos and icons
├── legal/
│   ├── terms.html              # Terms & Conditions
│   └── privacy.html            # Privacy Policy
├── .gitignore
└── README.md
```

## Running locally

Just open `index.html` in a browser, or serve it locally:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Git branching model — GitFlow

This repository follows **GitFlow** (Vincent Driessen's branching model) for all source control
activity:

| Branch            | Purpose                                                                 |
|--------------------|--------------------------------------------------------------------------|
| `main`             | Production-ready code only. Every commit on `main` is a tagged release. |
| `develop`          | Integration branch. Always reflects the latest delivered development.   |
| `feature/<name>`   | One branch per feature, created from `develop`, merged back into `develop`. |
| `release/<version>`| Release stabilization, created from `develop`, merged into `main` **and** `develop`. |
| `hotfix/<version>` | Urgent production fixes, created from `main`, merged into `main` **and** `develop`. |

### Naming conventions

- Feature branches: `feature/<short-kebab-case-description>`
  (e.g. `feature/landing-page-hero-section`, `feature/segment-cta-links`)
- Release branches: `release/<semver>` (e.g. `release/1.0.0`)
- Hotfix branches: `hotfix/<semver>` (e.g. `hotfix/1.0.1`)

### Conventional Commits

All commit messages follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <short summary>

[optional body]
```

Common types used in this repo: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

Examples:

```
feat(landing): add hero section with segment selector
feat(landing): add call-to-action for Asset Owner segment
fix(landing): correct mobile navigation toggle
docs(readme): document GitFlow workflow
chore(config): add .gitignore
```

### Semantic Versioning

Releases are tagged following [Semantic Versioning 2.0.0](https://semver.org/)
(`MAJOR.MINOR.PATCH`), starting at `0.1.0` for the first Landing Page version delivered in AV1.

## Terms & Conditions and Privacy Policy

Every page footer links to:

- [Terms & Conditions](legal/terms.html)
- [Privacy Policy](legal/privacy.html)

## Team

| Name | Code |
|------|------|
| Navarro Aldoradin, Carolina Celeste | u20241b962 |
| Rivera Aguilar, Scarlet Josefina | u20241f577 |
| Fernandez Seer, Mario Alonso | u202317807 |

## Course context

- Course: 1ASI0729 Desarrollo de Aplicaciones Open Source — UPC
- Deliverables: AV1 (Sprint Review — Semana 4) first version; TB1 (2.0.0) i18n; AV2 (2.1.0) redesign, plans, About videos and web application links.
