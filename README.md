# Gemeente Zuidplas – Berichten Beheer

Een Express + React CRUD-website voor de gemeente Zuidplas, waarmee medewerkers berichten (aankondigingen, nieuws, vergaderingen en evenementen) kunnen beheren.

![Berichten overzicht](https://github.com/user-attachments/assets/245369bc-dfd1-4d9b-b28f-8722ec801f53)

## Functionaliteit

- **Overzicht** – alle berichten in een tabel, filtreerbaar op categorie en publicatiestatus
- **Aanmaken** – nieuw bericht invoeren met titel, inhoud, categorie, datum en publicatiestatus
- **Bewerken** – bestaand bericht wijzigen via hetzelfde formulier
- **Verwijderen** – bericht verwijderen met bevestigingsdialoog

## Technische stack

| Laag | Technologie |
|------|------------|
| Backend | Node.js · Express 5 · better-sqlite3 |
| Frontend | React (Create React App) |
| Database | SQLite (`backend/zuidplas.db`) |

## Project structuur

```
TLE3/
├── backend/
│   ├── server.js           # Entrypoint (poort 3001)
│   └── src/
│       ├── app.js          # Express app + CORS
│       ├── database.js     # SQLite schema + seed data
│       └── routes/
│           └── berichten.js  # CRUD routes /api/berichten
└── frontend/
    └── src/
        ├── api.js                        # fetch-wrapper
        ├── App.js / App.css              # Hoofd-app + stijlen
        └── components/
            ├── BerichtenLijst.js         # Overzichtspagina
            └── BerichtFormulier.js       # Aanmaken/bewerken formulier
```

## Installatie & uitvoeren

### Backend

```bash
cd backend
npm install
npm start          # http://localhost:3001
```

### Frontend

```bash
cd frontend
npm install
npm start          # http://localhost:3000
```

## API

| Methode | Pad | Omschrijving |
|---------|-----|--------------|
| `GET` | `/api/berichten` | Alle berichten ophalen (optioneel `?categorie=` / `?gepubliceerd=`) |
| `GET` | `/api/berichten/:id` | Enkel bericht ophalen |
| `POST` | `/api/berichten` | Nieuw bericht aanmaken |
| `PUT` | `/api/berichten/:id` | Bericht bijwerken |
| `DELETE` | `/api/berichten/:id` | Bericht verwijderen |
| `GET` | `/api/health` | Health check |