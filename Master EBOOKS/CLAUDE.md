# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ebook marketing project with landing pages for various products. Contains static HTML/CSS landing pages optimized for conversion, deployed on Vercel. Also includes specialized marketing agents in `.claude/agents/` for content creation and strategy.

## Key Projects

- **Root (`/`)**: Ayurveda Express landing page - main ebook landing
- **`ayurveda-en-tu-mesa/`**: Multiple Ayurveda landing page variants
- **`DANUCCI/`**: Danucci brand landing pages and assets (images in `Imagenes/`)
- **`1idea1ebook/`**: InstaEbook.com landing page

## Build & Deploy

- **Development**: `npm start` or `npx serve .` - serves static files locally
- **Deploy**: `vercel` - deploys to Vercel (auto-detects static files)
- **No build step**: Pure HTML/CSS/JS, no bundler required

## Architecture

- Static landing pages with inline CSS styles (no external stylesheets except Google Fonts)
- Mobile-first responsive design
- Conversion-optimized structure (CTAs, testimonials, FAQs)
- Vercel routing configured in `vercel.json`

## Marketing Agents

Located in `.claude/agents/`. Specialized agents for:
- Marketing strategy (`marketing-ceo.md`)
- Content creation (`creative-director.md`, `ebook-bestseller-architect.md`)
- Ads (`meta-ads-expert.md`, `google-trends-analyst.md`)
- Conversion optimization (`cro-expert.md`, `neuro-ventas-optimizer.md`)
- Landing pages (`landing-page-architect.md`)

## Landing Page Structure

Most landing pages follow this pattern:
1. Hero with CTA
2. Benefits/problem section
3. Product features
4. Social proof (testimonials)
5. FAQ accordion
6. Final CTA

## Files to Know

- `index.html` - Main landing page
- `vercel.json` - Vercel routing config
- `package.json` - Dev dependencies (serve)