# Monet — Quiet Luxury Storefront

Monet is a React storefront prototype for a curated home and lifestyle collection. It includes category filtering, a client-side shopping cart, and a Gemini-powered section that generates short mood-based copy.

## What works

- Browse the sample products and filter by category.
- Add products to the cart; adding an existing product increases its quantity.
- Generate short copy from one of the preset moods with Gemini.

The product catalogue is local sample data. The cart is held in React state and resets when the page reloads. There is no checkout, order processing, or product backend.

## Run locally

Requirements: Node.js and npm.

```sh
npm install
```

Create `.env.local` with:

```env
GEMINI_API_KEY=your_key
```

Then start the development server:

```sh
npm run dev
```

Create a production build with `npm run build`.

## Stack

React, TypeScript, Vite, and Google Gemini via `@google/genai`.

## API key note

The current Vite configuration exposes the Gemini key in browser code. Use a restricted development key only; this setup is not suitable for a production secret or a public deployment. A production version should call Gemini through a server-side endpoint.
