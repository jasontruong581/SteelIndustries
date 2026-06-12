---
title: KLC Steel Company Website
description: >-
  3-page bilingual (Vi/En) company intro website for KLC steel company using
  React, Vite, TypeScript, Tailwind CSS, dark mode, and a liquid-glass-inspired UI.
status: completed
priority: P2
branch: ''
tags:
  - react
  - vite
  - typescript
  - tailwind
  - steel
  - website
blockedBy: []
blocks: []
created: '2026-06-02T14:04:46.301Z'
createdBy: 'ck:plan'
source: skill
---

# KLC Steel Company Website

## Overview

Build a professional 3-page bilingual (Vi/En) company introduction website for KLC, a steel industry company. The site includes dark/light mode, simple local i18n, and image-backed product/company sections.

**Brainstorm report:** `../reports/brainstorm-260602-2100-kc-steel-website-design-report.md`

## Phases

| Phase | Name | Status | Effort |
|-------|------|--------|--------|
| 1 | [Project Setup](./phase-01-project-setup.md) | Completed | Completed |
| 2 | [Core Layout & Design System](./phase-02-core-layout-design-system.md) | Completed | Completed |
| 3 | [Home Page](./phase-03-home-page.md) | Completed | Completed |
| 4 | [Products Page](./phase-04-products-page.md) | Completed | Completed |
| 5 | [About Page](./phase-05-about-page.md) | Completed | Completed |
| 6 | [Polish & QA](./phase-06-polish-qa.md) | Completed | Completed |

## Key Decisions

- Stack: React 19 + Vite 8 + TypeScript 6 + Tailwind CSS 4 + React Router 7
- Font: Inter
- i18n: Simple local key-value structure in `src/data/i18n.ts`
- Theme: Light/dark toggle via `class="dark"` on `<html>`, persisted in localStorage
- Hero: video background with image poster fallback
- Assets: local static product and company images from `public/`
- Deployment: SPA static hosting with Vercel rewrite support

## Remaining Content Work

- Replace placeholder contact details with final address and phone
- Replace placeholder leadership names/titles with real team information
- Expand product catalog if KLC needs more than the current featured set

