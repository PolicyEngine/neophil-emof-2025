# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository organizes PolicyEngine's application to the NEO Philanthropy Economic Mobility and Opportunity Fund. The grant supports research and data projects advancing economic mobility through a participatory grantmaking process.

## Previous Support

PolicyEngine has previously received a $200,000 general operating support grant from NEO Philanthropy, demonstrating our strong partnership and alignment with their mission.

## Grant Details

- **Award**: $100,000 - $300,000 (one-year grant)
- **Total Fund**: $2.3 million
- **LOI Deadline**: October 31, 2025
- **Grant Start**: April-May 2026
- **Focus**: Economic mobility research, data projects, and knowledge gap analysis

## Repository Structure

- `docs/`: Application documents and responses
  - `loi/`: Letter of Intent materials
  - `responses/`: Full application responses (if invited after LOI)
  - `budget/`: Budget documentation
- `materials/`: Reference materials including grant guidelines
- `scripts/`: Python scripts for content assembly and site synchronization
- `site/`: React + Vite microsite for reviewing application progress

## Key Commands

### Site Development
```bash
# From site/ directory
npm install                     # Install dependencies
npm run dev                     # Start development server
npm run build                   # Build for production
```

### Content Assembly
```bash
# From root directory
python3 scripts/sync_content.py  # Sync content to site
```

## Development Workflow

1. Edit application sections in `docs/`
2. Run sync script to update site content
3. Review progress using the local development site
4. Commit changes and push

## Grant Focus Areas

This application should emphasize:

**Sustainability and Capacity Building**:
- Strengthening organizational infrastructure
- Supporting existing economic mobility work
- Maintaining project momentum

**Innovation and Imagination** (if applicable):
- Bold, forward-thinking projects
- Testing and scaling novel ideas
- Economic mobility knowledge gaps

**Priority Areas**:
- Underrepresented communities
- Communities of color
- Indigenous and Tribal communities
- Leaders with lived experience
- Organizations in the American South

## Content Development Guidelines

- Focus on economic mobility and opportunity
- Highlight research and data projects
- Emphasize knowledge gap analysis
- Include organizational sustainability needs
- Address participatory grantmaking process
- Show commitment to diverse voices and communities

## PolicyEngine Context

PolicyEngine is a nonprofit organization that builds open-source tools to analyze the impacts of public policy on society. Our work directly addresses economic mobility by:

- Making tax and benefit policy accessible and understandable
- Analyzing policy impacts on households across income distributions
- Supporting evidence-based policymaking
- Democratizing access to policy analysis tools

## Site Navigation

The review site includes these key sections:
- **Home**: Overview and grant summary
- **LOI**: Letter of Intent content
- **Application**: Full application (if invited)
- **Budget**: Project budget details
- **Organization**: PolicyEngine background
- **Timeline**: Project timeline and milestones

## Deployment

- Site auto-deploys to GitHub Pages on pushes to `main`
- CI/CD validates builds on pull requests

This repository provides a foundation for developing a comprehensive grant application to the NeoPhill Economic Mobility and Opportunity Fund.
