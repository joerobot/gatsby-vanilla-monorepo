# Gatsby Vanilla Extract Monorepo Issue

## Get started

1. Install dependencies with `yarn`
2. Build design system library `cd packages/design-system` then `yarn build`
3. Develop Gatsby site with `cd apps/www` then `yarn develop`

Build fails at `./src/components/header.css.ts` with "TypeError: Cannot read properties of undefined (reading 'register')". This happens at the `eval` statement in `@vanilla-extract/integration`, called by webpack plugin.

Problem can be resolved by removing the Button component from the exports of `design-system`.
