---
title: K&C Steel Company Website
description: >-
  3-page bilingual (Vi/En) company intro website for K&C steel company — React +
  Vite + TypeScript + Tailwind, dark mode, liquid-glass design
status: pending
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

# K&C Steel Company Website

## Overview

Build a professional 3-page bilingual (Vi/En) company introduction website for K&C, a steel industry company. Modern liquid-glass design inspired by reference hero spec, with dark/light mode toggle and hard-coded product data.

**Brainstorm report:** `../reports/brainstorm-260602-2100-kc-steel-website-design-report.md`

## Phases

| Phase | Name | Status | Effort |
|-------|------|--------|--------|
| 1 | [Project Setup](./phase-01-project-setup.md) | Pending | Completed |
| 2 | [Core Layout & Design System](./phase-02-core-layout-design-system.md) | Pending | Completed |
| 3 | [Home Page](./phase-03-home-page.md) | Pending | Completed |
| 4 | [Products Page](./phase-04-products-page.md) | Pending | Completed |
| 5 | [About Page](./phase-05-about-page.md) | Pending | Completed |
| 6 | [Polish & QA](./phase-06-polish-qa.md) | Pending | Completed |

## Key Decisions

- Stack: React 18 + Vite + TypeScript + Tailwind CSS v3 + React Router v6
- Font: Inter (Google Fonts, weights 300/400/500/600)
- i18n: Simple JSON key-value in `src/data/i18n.ts` — no external lib
- Theme: Light default, dark mode via `class="dark"` on `<html>`, persisted in localStorage
- Liquid-glass: Custom CSS class `.liquid-glass` with `::before` gradient border mask
- Content: Hard-coded; products and contact info filled later

## Dependencies

None — greenfield project.
