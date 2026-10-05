# Reliant — Landing Page

Static Landing Page for **Reliant**, the product built by startup **InnovaCorp** for the course  
**1ASI0729 Desarrollo de Aplicaciones Open Source** (UPC).

Reliant is a digital solution focused on monitoring, traceability and decision support for specialized industrial processes.

The Landing Page presents the main value proposition of Reliant and provides information about its services, available plans and the startup behind the solution.

This repository contains only the static Landing Page (`HTML5` + `CSS3`). The RESTful API and the Frontend Web Application live in their own repositories inside the team's GitHub organization.

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (responsive design) |
| Responsive Design | CSS Media Queries |
| Versioning | Git + GitHub, GitFlow, Conventional Commits, Semantic Versioning |
| Deployment | GitHub Pages |

No build step is required: it is a static site that can be opened directly or served with any static file server, such as GitHub Pages or `npx serve`.

## Project Structure

```text
reliant-website/
├── index.html                  # Landing Page entry point
├── planes.html                 # Reliant plans
├── servicios.html              # Services and benefits
├── quienessomos.html           # Information about Reliant and InnovaCorp
├── styles/
│   └── styles.css              # Main styles and responsive design
├── img/
│   ├── descarga.png
│   ├── icono1.png
│   ├── icono2.png
│   ├── icono3.png
│   ├── logo.png
│   ├── mision.png
│   ├── redes.png
│   ├── supervisor.png
│   ├── supervisor2.png
│   ├── supervisor3.png
│   ├── user.png
│   ├── valor.png
│   └── vision.png
├── legal/
│   ├── terms.html              # Terms & Conditions
│   └── privacy.html            # Privacy Policy
├── .gitignore
├── CHANGELOG.md
└── README.md
```

## Website Pages

### Home — `index.html`

The Home page introduces Reliant and presents the main value proposition of the solution.

It highlights the main benefits of the platform:

- **Real-time monitoring** — visualization of relevant process information.
- **Complete traceability** — centralized monitoring of operational records.
- **Data-driven decisions** — conversion of process information into useful evidence.
- **Process visibility** — access to the most relevant information about monitored operations.

The page also provides navigation to the main sections of the website.

### Plans — `planes.html`

The Plans page presents Reliant's available plans and the benefits offered according to the needs of the target users.

It allows visitors to understand the available alternatives and identify the proposal that best fits their operational requirements.

### Services — `servicios.html`

The Services page presents Reliant's main capabilities and the benefits provided by the solution.

The content focuses on:

- Process monitoring.
- Traceability.
- Operational visibility.
- Information management.
- Data-driven decision-making.

### About Us — `quienessomos.html`

The About Us page introduces **Reliant** and the startup **InnovaCorp**.

It presents the project's identity through:

- Mission.
- Vision.
- Values.

The section communicates the purpose of Reliant and the principles that guide the development of the solution.

## Running Locally

Just open `index.html` in a browser, or serve it locally:

```bash
npx serve .
```

or:

```bash
python3 -m http.server 8080
```

## Git Branching Model — GitFlow

This repository follows **GitFlow** (Vincent Driessen's branching model) for all source control activity:

| Branch | Purpose |
|---|---|
| `main` | Production-ready code only. Every stable version is deployed from this branch. |
| `develop` | Integration branch. Reflects the latest delivered development. |
| `feature/<name>` | One branch per feature, created from `develop`, merged back into `develop`. |
| `release/<version>` | Release stabilization, created from `develop`, merged into `main` and `develop`. |
| `hotfix/<version>` | Urgent production fixes, created from `main`, merged into `main` and `develop`. |

### Naming Conventions

- Feature branches: `feature/<short-kebab-case-description>`  
  Examples: `feature/update-landing-page`, `feature/services-page`, `feature/plans-page`

- Release branches: `release/<semver>`  
  Example: `release/1.0.0`

- Hotfix branches: `hotfix/<semver>`  
  Example: `hotfix/1.0.1`

### Conventional Commits

All commit messages follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<optional scope>): <short summary>

[optional body]
```

Common types used in this repository:

- `feat`
- `fix`
- `docs`
- `style`
- `refactor`
- `test`
- `chore`

Examples:

```text
feat(landing): update Reliant landing page
feat(services): add services page
feat(plans): add plans page
feat(about): add mission vision and values
fix(navigation): correct services page link
docs(readme): update project structure
chore(config): update repository configuration
```

### Semantic Versioning

Releases are tagged following [Semantic Versioning 2.0.0](https://semver.org/) (`MAJOR.MINOR.PATCH`).

Example:

```text
1.0.0
```

The version number is updated according to the scope of each release:

- **MAJOR** — incompatible or significant structural changes.
- **MINOR** — new functionality added in a backward-compatible manner.
- **PATCH** — backward-compatible bug fixes or minor corrections.

## Deployment

The Landing Page is deployed using **GitHub Pages**.

The production-ready version is deployed from the `main` branch.

Repository:

[GitHub Repository — Reliant Website](ADD_REPOSITORY_URL_HERE)

Deployed Landing Page:

[Reliant Landing Page](ADD_GITHUB_PAGES_URL_HERE)

## Terms & Conditions and Privacy Policy

Every page footer should provide access to:

- [Terms & Conditions](legal/terms.html)
- [Privacy Policy](legal/privacy.html)

These documents establish the conditions of use and privacy considerations associated with the Reliant digital experience.

## Team

| Name | Role | GitHub |
|---|---|---|
| _TBD_ | Team Leader | _TBD_ |
| _TBD_ | Collaborator | _TBD_ |
| _TBD_ | Collaborator | _TBD_ |
| _TBD_ | Collaborator | _TBD_ |
| _TBD_ | Collaborator | _TBD_ |

_Update this table with the team's real names, roles and GitHub usernames._

## Course Context

- Course: **1ASI0729 Desarrollo de Aplicaciones Open Source — UPC**
- Startup: **InnovaCorp**
- Product: **Reliant**
- Product Type: **Static Landing Page**
- Technologies: **HTML5 + CSS3**
- Version Control: **Git + GitHub**
- Branching Model: **GitFlow**
- Commit Convention: **Conventional Commits**
- Versioning Strategy: **Semantic Versioning 2.0.0**
- Deployment: **GitHub Pages**