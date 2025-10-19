
# QA Proof — Playwright

This repo is a **real, runnable proof** of QA skills. It includes:
- UI E2E test: login success & failure on a public demo site.
- API test: simple contract checks against a public API.
- **GitHub Actions CI**: runs on every push and uploads the HTML report as an artifact.

## Run locally
```bash
# Node 18+ recommended
npm i
npx playwright install --with-deps
npm test
npm run report  # open the HTML report
```

## What the tests cover
- `tests/login.spec.ts`: Valid & invalid login flows using a demo site (`the-internet.herokuapp.com/login`).
- `tests/api.spec.ts`: Basic API checks with `reqres.in` (status code, JSON schema-ish fields).

## CI
- Workflow: `.github/workflows/ci.yml`
- On each push/PR, GitHub will:
  - set up Node
  - install dependencies
  - run Playwright tests (headed disabled)
  - save the **HTML report** as a downloadable artifact

## Why this is credible
- Uses modern tooling (Playwright) with auto-waiting and traceable HTML reports.
- Splits UI vs API tests to mirror real-world suites.
- Minimal, clean, and ready to extend for any app.
