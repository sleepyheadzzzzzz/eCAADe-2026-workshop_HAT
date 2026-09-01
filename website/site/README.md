# Human–AI Teaming workshop website

This directory contains the participant website for the eCAADe 2026 workshop.
It is a Vinext/React site prepared for OpenAI Sites and Cloudflare Workers.

## Features

- public workshop overview;
- shared-passcode participant hub;
- participant sections for setup, PDF slides, codes and samples, and discussion;
- direct links to the readiness notebook, model-training files and plugin template;
- visible participant Q&A backed by D1;
- separate private/anonymous feedback backed by D1;
- clearly labelled placeholders for the final Zoom link and compiled plugin.

## Local development

Use Node.js 22.13 or newer. Copy `.dev.vars.example` to `.dev.vars`, replace
both placeholder values, then run:

```bash
pnpm install
pnpm dev
```

The local preview passcode is whatever you assign to `WORKSHOP_PASSCODE`.
Never commit the real passcode or `SESSION_SECRET`.

## Release note

The parent GitHub repository is currently public. Do not copy restricted PDFs,
meeting links, participant data or proprietary plugin binaries into `public/`.
Use protected server routes/private storage for restricted downloads, or make
the repository private before adding them.
