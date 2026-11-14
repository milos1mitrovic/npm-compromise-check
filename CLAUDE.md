# npm-compromise-check

Checks a lockfile against known npm compromise incidents (hijacked maintainer
accounts, malicious versions that were live for a short window).

## Stack

- pnpm workspaces + Turborepo
- apps/web: React + Vite + TS
- apps/api: Express + TS (dev: tsx watch, build: tsc)
- packages/types: shared types

## Commands

- pnpm dev | build | lint | typecheck

## Conventions

- Small changes: one PR = one thing.
- No new dependencies without approval.
- Every piece of logic gets a test.
- apps/api layering: route → controller → service → repository.
