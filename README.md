# NEO Philanthropy Economic Mobility and Opportunity Fund Application

PolicyEngine's application to the NEO Philanthropy Economic Mobility and Opportunity Fund.

## Grant Overview

- **Funder**: NEO Philanthropy
- **Fund**: Economic Mobility and Opportunity Fund
- **Award Range**: $100,000 - $300,000
- **Duration**: 1 year (April/May 2026 start)
- **LOI Deadline**: October 31, 2025
- **Application Opens**: October 6, 2025

## Focus Areas

The fund supports two types of projects:

1. **Sustainability and Capacity Building**: Strengthen organizational infrastructure and maintain existing work momentum
2. **Innovation and Imagination**: Fund bold, forward-thinking projects that test and scale novel ideas about economic mobility

## Eligibility

- U.S. based 501(c)(3) nonprofit
- Annual operating budget under $2 million
- Work addressing economic mobility knowledge gaps
- Located in 50 U.S. states or D.C.
- Priority to underrepresented communities (communities of color, Indigenous/Tribal communities, leaders with lived experience, organizations in the American South)

## Repository Structure

```
neophil-emof-2025/
├── docs/              # Application documents and responses
│   ├── loi/          # Letter of Intent materials
│   ├── responses/    # Full application responses
│   └── budget/       # Budget documentation
├── materials/         # Reference materials and grant documents
├── scripts/           # Assembly and content management scripts
└── site/             # React microsite for proposal review
```

## Development

### View the Application Site

```bash
cd site
npm install
npm run dev
```

Visit http://localhost:5173 to view the microsite.

### Update Content

Edit markdown files in `docs/` and run the sync script:

```bash
python3 scripts/sync_content.py
```

## Key Dates

- **October 6, 2025**: LOI applications open
- **October 31, 2025**: LOI deadline
- **April-May 2026**: Grant period begins

## Links

- [Grant Announcement](https://neophilanthropy.org/economic-mobility-and-opportunity-fund-opens-new-grant-application/)
- [NeoPhill Philanthropy](https://neophilanthropy.org/)
