# CSC 307 React App

This repository contains my CSC 307 React project setup for the IE0 lab.

## Project Structure

- `package.json`: root workspace configuration
- `packages/react-frontend`: Vite React frontend app

## Getting Started

1. Install dependencies with `npm install`
2. Start the app with `npm --workspace react-frontend run dev`

## Notes

- The repo uses npm workspaces with `packages/*`
- `node_modules` is excluded with `.gitignore`
- Root `npm run dev` and `npm start` run the frontend workspace. To run the backend, use `npm run backend:dev`, `npm run backend:start`, the equivalent `npm --workspace express-backend ...` command, or run `npm run dev` / `npm start` from `packages/express-backend`.
