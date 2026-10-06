# VertexOS

A polished home-lab operating system dashboard prototype inspired by the design mockups in the Images directory.

## Overview

This project turns the VertexOS concept into a working frontend prototype with:
- a dark luxury dashboard aesthetic
- glassmorphism panels and gradients
- home overview, files, settings, and app store flows
- interactive app install modal
- responsive desktop-first layout

## Tech stack

- React
- TypeScript
- Vite
- CSS

## Local development

Run these commands from the project root:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Then open the Vite dev server in the browser, usually at:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
```

## Project status

This is currently a front-end prototype that recreates the intended VertexOS product direction from the mockups and is ready to be extended with real backend or desktop integrations.

## Notes

The design is intentionally built to match the reference visuals while remaining modular enough for future additions such as real service health checks, app installs, and file-system views.
