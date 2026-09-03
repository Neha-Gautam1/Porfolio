# Deployment Guide — Portfolio RAG Recruiter Assistant

This project has two independent halves that deploy separately:
- **Frontend** (React/Vite, this repo's root) → already deployed on Vercel
- **Backend** (FastAPI, `rag/`) → needs its own host (Render recommended)

The vector index (Qdrant Cloud) and LLM (Groq) are both already-hosted
services, so neither needs a deployment step of its own — you just need
their URLs/keys available to the backend wherever it runs.

---

## 1. Local setup (recap)

**Backend:**
```bash
cd rag
python -m venv .venv
.venv\Scripts\Activate.ps1          # Windows PowerShell
pip install -r requirements.txt
# create rag/.env with QDRANT_URL, QDRANT_API_KEY, GROQ_API_KEY
python ingestion/build_knowledge_base.py   # one-time (or after content changes)
python embeddings/embed.py                 # one-time (or after content changes)
uvicorn api.server:app --reload --port 8000
```

**Frontend:**
```bash
npm install
# optional: create .env with VITE_API_URL (defaults to http://localhost:8000)
npm run dev
```

**Run the automated test suite** any time you change backend logic:
```bash
cd rag
python tests/test_assistant.py
```
32 checks covering intent classification, retrieval completeness, follow-up
resolution, and hallucination safety — all pure logic, no network calls, so
it runs in under a second and needs no credentials.

---

## 2. Environment variables — what goes where

| Variable | Where it lives | Who reads it | Secret? |
|---|---|---|---|
| `QDRANT_URL` | `rag/.env` (local) → host's env var dashboard (deployed) | Python backend only | Not secret, but keep in env vars anyway |
| `QDRANT_API_KEY` | same | Python backend only | **Yes — never commit, never expose to frontend** |
| `GROQ_API_KEY` | same | Python backend only | **Yes — never commit, never expose to frontend** |
| `VITE_API_URL` | repo root `.env` (local) → Vercel project settings (deployed) | Frontend (Vite bundles this into the browser JS) | Not secret — it's just a public URL |

The backend secrets and the frontend's public URL are read by two
completely different runtimes and must stay in their separate `.env`
files — never merge them.

---

## 3. The vector index and knowledge base — no special deploy step

Qdrant Cloud is a persistent hosted service. Once you've run
`embed.py` locally and it shows `Uploaded 44 points...`, that data is
already live in the cloud — your deployed backend just needs the same
`QDRANT_URL`/`QDRANT_API_KEY` to query it. You do **not** need to re-run
embeddings as part of deployment, only when the underlying content
(resume or portfolio) actually changes.

`rag/data/knowledge_base.json` (and the resume PDF) are committed to the
repo — the deterministic intents (projects, education, experience, etc.)
read this file directly at runtime, so it needs to ship with the backend
code, not be regenerated on every deploy.

---

## 4. Backend deployment (Render.com — free tier works fine)

1. Push your latest `rag/` changes to GitHub.
2. On [render.com](https://render.com), **New → Web Service**, connect your
   `Porfolio` repo.
3. **Root Directory:** `rag`
4. **Build Command:** `pip install -r requirements.txt`
5. **Start Command:** `uvicorn api.server:app --host 0.0.0.0 --port $PORT`
6. Under **Environment**, add `QDRANT_URL`, `QDRANT_API_KEY`,
   `GROQ_API_KEY` — paste the real values here, never in a committed file.
7. Deploy. Once live, note the URL Render gives you
   (e.g. `https://neha-recruiter-assistant.onrender.com`) — you'll need it
   in the next step.

**Free tier heads-up:** Render's free web services spin down after
inactivity and take ~30-60s to wake up on the next request. That's fine
for a portfolio demo, but the first message after a while idle will be
slow — the chat's loading state already handles this gracefully, just
know it's not a bug if a recruiter's first message takes a moment.

---

## 5. Frontend deployment (Vercel — already connected)

1. In your Vercel project settings → **Environment Variables**, add:
   `VITE_API_URL` = the Render URL from step 4 above
   (e.g. `https://neha-recruiter-assistant.onrender.com`)
2. Push to `main` (or your connected branch) — Vercel redeploys
   automatically.
3. **Update CORS on the backend** to match: open `rag/api/server.py` and
   confirm your real Vercel URL is in the `allow_origins` list (it
   already includes `https://porfolio-psi-orcin.vercel.app` — update this
   if your production URL is ever different).

---

## 6. Post-deploy checklist

- [ ] Visit your live site, open the chat, ask "Show me your projects" —
      confirm real data comes back (not a CORS/network error)
- [ ] Ask a follow-up ("tell me more about the second one") — confirms
      conversational context survives a real network round-trip
- [ ] Ask something off-topic ("is Neha married?") — confirms the
      guardrail is live in production too
- [ ] Check Render's logs for any startup errors (missing env var is the
      most common one)
