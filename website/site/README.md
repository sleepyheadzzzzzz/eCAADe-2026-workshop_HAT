# Human–AI Teaming workshop website

This directory contains the participant website for the eCAADe 2026 workshop.
It is a Next.js application configured for production deployment on Netlify.

## Features

- public workshop overview;
- shared-passcode participant hub;
- participant sections for setup, PDF slides, codes and samples, and discussion;
- website-hosted downloads for the readiness notebook, model-training files,
  PDF slides and plugin template;
- visible participant Q&A backed by Netlify Blobs;
- separate private/anonymous feedback backed by Netlify Blobs;
- clearly labelled placeholders for the final Zoom link and compiled plugin.

## Local development

Use Node.js 22.13 or newer. Copy `.env.example` to `.env.local`, replace both
placeholder values, then run:

```bash
pnpm install
pnpm dev
```

The local preview passcode is whatever you assign to `WORKSHOP_PASSCODE`.
Never commit the real passcode or `SESSION_SECRET`. Q&A and feedback use
in-memory storage locally and persistent Netlify Blobs after deployment.

## Release note

The parent GitHub repository and bundled workshop downloads are public. The
participant passcode provides workshop navigation control, not digital-rights
management. Do not add confidential participant data or a restricted Zoom URL
to `public/`.
