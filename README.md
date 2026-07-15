# TraceNote Portfolio Showcase

A public, privacy-safe product demonstration for [TraceNote](https://davidwang1231.github.io/tracenote-showcase/), an evidence-first document research workspace.

![TraceNote social preview](public/og.png)

## Purpose

This site is designed for recruiters, hiring teams, and portfolio reviewers. It explains the product problem, demonstrates citation inspection with fixed fictional data, and documents the engineering decisions behind the private application.

The showcase intentionally has:

- no file-upload surface;
- no connection to the private document database;
- no model or API key requirement;
- no real candidate or employer data;
- no sign-in requirement once public access is enabled.

## Interactive demo

The embedded product simulation includes three Canadian job-search scenarios:

- tailoring a resume to a product analyst role;
- identifying experience gaps without inventing qualifications;
- selecting interview stories that are supported by portfolio evidence.

Every recommendation links to a sample citation that can be inspected in the evidence panel.

## Stack

- Next.js, React, and TypeScript
- vinext and Cloudflare Workers
- responsive CSS with no external UI framework
- fixed client-side demo data for safe public interaction

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Author

Designed and engineered by David Wang in Toronto, Canada.
