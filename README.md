# Creative CV Map

A React, TypeScript, and Vite website that presents Leonie Anderhalden's CV as a geographic journey through Sarnen, Rotkreuz, and Adliswil.

## Features

- Interactive map with selectable place cards
- Smooth scroll from each map place to the detailed CV card
- CV detail cards for origin, education, and work experience
- Skills, languages, and off-screen energy sections
- Hover-only interest photos

## Tech Stack

- React
- TypeScript
- Vite
- Lucide React icons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local site:

```text
http://127.0.0.1:5173/
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  main.tsx                 Main app, map cards, and page layout
  history_cards.tsx        Detailed CV cards shown after selecting a map place
  profile_highlights.tsx   Skills, languages, and interests sections
  styles.css               Global styling and responsive layout
  assets/interests/        Interest photos used on hover
map-identical.svg          Map image used in the geographic CV section
```

## Notes

The map and interest images are local project assets. The site does not depend on an external map service.
