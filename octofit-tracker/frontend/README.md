# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# OctoFit presentation tier

This React 19 and Vite presentation tier reads the API location from
`VITE_CODESPACE_NAME`. In Codespaces, copy `.env.example` to `.env.local` and
define the variable with the value of `$CODESPACE_NAME`:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

The app then uses `https://your-codespace-name-8000.app.github.dev/api/`. When
the variable is not defined, it safely falls back to `http://localhost:8000/api/`.

Run the frontend with:

```bash
npm run dev
```
