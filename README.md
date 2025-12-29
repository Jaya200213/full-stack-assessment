# Full Stack Assessment Starter

This repository provides a minimal full-stack starter that pairs a Vite + React front-end with a TypeScript Express API. It is designed to evaluate a candidate's ability to extend both layers end-to-end.

## Project Layout

```
backend/   # Express API (posts endpoint)
frontend/  # Vite React client (consumes posts endpoint)
```

### Backend (Express + TypeScript)

- Starts on port `4000` by default.
- Provides `GET /api/posts`, returning sample post data.
- CORS is enabled so the Vite client can access the API during development.
- Authored in TypeScript; run `npm run dev` for watch mode or `npm run build && npm start` for a compiled build.
- Persists post data in `backend/data/posts.json`, making it easier to add future mutation endpoints.

### Frontend (Vite React)

- Starts on port `5173` by default.
- Loads posts from `VITE_API_BASE_URL` (defaults to `http://localhost:4000`).
- Displays posts in a responsive grid.

## Getting Started

### Run the backend (development)

```bash
cd backend
npm install
npm run dev
```

This starts the Express API with tsx watch mode at http://localhost:4000. Modify `data/posts.json` to tweak the sample dataset.

### Run the frontend (development)

```bash
cd frontend
npm install
npm run dev
```

When prompted by Vite, open http://localhost:5173. The client will call the backend at the default API base URL (configure an alternate URL by setting `VITE_API_BASE_URL`).


