# nextjs-container

Student profile app built with Next.js 16, containerized with Docker, and shipped via GitHub Actions CI/CD.

## Stack

- **Next.js 16** (App Router, standalone output)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- **Docker** (multi-stage build)
- **GitHub Actions** (CI on PR, CD on merge to main)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Docker

Build and run locally:

```bash
docker build -t nextjs-container .
docker run -p 3000:3000 nextjs-container
```

## CI/CD

| Trigger | Workflow | What it does |
|---|---|---|
| Pull Request → `main` | `ci.yml` | Lint + build check |
| Push to `main` | `docker-publish.yml` | Build & push image to Docker Hub |

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token (not your password) |

Add them under **Settings → Secrets and variables → Actions** in your repository.

## Branch strategy

All features are developed on feature branches and merged via Pull Requests:

```
main
 └── feature/<feature-name>   ← develop here, open PR to main
```
