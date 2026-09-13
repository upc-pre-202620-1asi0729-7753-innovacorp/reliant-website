# Reliant — Landing Page

Static Landing Page for **Reliant**, the product built by startup **InnovaCorp** for the course
**1ASI0729 Desarrollo de Aplicaciones Open Source** (UPC).

Reliant supports the recovery of industrial/mining components, connecting two target segments:

- **Recuperation Supplier** — companies that recover/recondition industrial components.
- **Asset Owner** — companies that own the industrial assets and need components recovered.

This repository contains only the static Landing Page (`HTML5` + `CSS3` + `JavaScript`). The
RESTful API and the Frontend Web Application (Angular) live in their own repositories inside the
team's GitHub organization (see links below once created).

## Tech stack

| Layer        | Technology            |
|--------------|------------------------|
| Markup       | HTML5 (semantic)       |
| Styling      | CSS3 (mobile-first, responsive) |
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
│   │   └── script.js          # Navigation, smooth scroll, segment CTAs
│   └── img/                   # Images / icons (SVG placeholders)
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

| Name | Role | GitHub |
|------|------|--------|
| _TBD_ | Team Leader | _TBD_ |
| _TBD_ | Collaborator | _TBD_ |
| _TBD_ | Collaborator | _TBD_ |

_Update this table with your team's real names, roles and GitHub usernames before your first commit._

## Course context

- Course: 1ASI0729 Desarrollo de Aplicaciones Open Source — UPC
- Deliverable: AV1 (Sprint Review — Semana 4) — first version of the Landing Page implemented and deployed.
