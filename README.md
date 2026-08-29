# ASTABRATA React + Tailwind

Versi React dari dashboard ASTABRATA berdasarkan desain referensi.

## Stack
- React 18
- Vite
- Tailwind CSS 4
- lucide-react

## Menjalankan

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

## Struktur

```text
astabrata-react/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── index.css
    └── assets/
        ├── crest.jpg
        ├── brand.jpg
        ├── map-dashboard.jpg
        └── map-profile.jpg
```

Dashboard dan Profil dibuat sebagai komponen React dalam `src/main.jsx`, dengan navigasi sidebar, filter, tab peta, tombol aksi, dan responsive layout.
