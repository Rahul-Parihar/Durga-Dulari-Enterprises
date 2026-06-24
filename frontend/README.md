# Durga Dulari Enterprises - Frontend Website

A production-quality Next.js frontend for Durga Dulari Enterprises - a leading B2B provider of textile manpower, maintenance solutions, plant automation, and industrial projects across India.

## Project Overview

This is a comprehensive, feature-rich website built with modern web technologies including:

- **Next.js 14** - React framework with server-side rendering and optimization
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Responsive Design** - Mobile-first approach

## Features

### Core Pages
- **Home** - Hero section with key services and testimonials
- **Services** - 12 detailed service pages with specific details
- **Industries** - Showcase of served industries
- **Case Studies** - Real-world implementation examples
- **Training & Recruitment** - Training programs and hiring
- **Resources** - Blog articles and industry guides
- **Contact** - Comprehensive inquiry form
- **About** - Company information and mission
- **Founder** - Leadership profile

### Global Components
- **Emergency Banner** - Sticky banner for urgent support
- **Header/Navigation** - Responsive navigation with mega-menu
- **Footer** - Complete footer with contact and callback form
- **WhatsApp Button** - Floating WhatsApp chat button
- **Mobile Menu** - Mobile-responsive navigation

### Form Components
- **Lead Form** - Comprehensive inquiry form with validation
- **Contact Page** - Full contact information and forms
- **Callback Form** - Footer callback request form

### UI Components
- Custom Button, Input, Textarea, Select
- Card, Badge, Breadcrumbs components
- Accordion for FAQs
- Modal dialogs
- Toast notifications
- Section wrappers and containers

### Data Management
- Services data (12 services with full details)
- Industries data (6 served industries)
- Case studies data
- Blog/resources data (12 articles)
- Downloads/tools
- Navigation structure
- FAQs

### SEO & Technical
- Dynamic sitemap generation
- Robots.txt configuration
- Meta tags and structured data
- Fast page load times
- Optimized images

### Security & Compliance
- Form validation
- Data protection
- Compliance documentation page
- Privacy policy and terms
- GDPR-ready privacy policy

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── services/          # Services pages
│   ├── industries/        # Industries pages
│   ├── case-studies/      # Case studies pages
│   ├── contact/           # Contact page
│   ├── about/             # About page
│   ├── resources/         # Blog/resources pages
│   └── [other pages]      # Additional pages
├── components/
│   ├── common/            # Reusable common components
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   ├── ui/                # UI elements (Button, Input, etc.)
│   ├── forms/             # Form components
│   └── home/              # Home page sections
├── data/                  # Static data files
│   ├── services.ts        # Services data
│   ├── industries.ts      # Industries data
│   ├── caseStudies.ts     # Case studies
│   ├── resources.ts       # Blog resources
│   ├── navigation.ts      # Navigation structure
│   └── [other data]       # Additional data
├── lib/                   # Utility functions
│   ├── constants.ts       # App constants
│   ├── helpers.ts         # Helper functions
│   ├── validations.ts     # Form validation
│   ├── seo.ts             # SEO utilities
│   └── whatsapp.ts        # WhatsApp utilities
├── types/                 # TypeScript type definitions
│   └── index.ts           # All type definitions
└── app/
    ├── globals.css        # Global styles
    └── [pages]            # Page files
```

## Getting Started

### Prerequisites
- Node.js 18+ (recommended 20 LTS)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
cd "Durga Dulari Enterprises"
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and update:
- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - WhatsApp number for contact
- `NEXT_PUBLIC_PHONE_NUMBER` - Business phone number
- `NEXT_PUBLIC_EMAIL` - Business email

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

## Key Features Explained

### 1. Dynamic Service Pages
Each of the 12 services has:
- Detailed description and benefits
- Multi-step process
- Common pain points and solutions
- FAQs
- Related services
- CTAs

### 2. Responsive Forms
- Mobile-optimized form inputs
- Real-time validation
- Error handling
- Success messages
- Local storage for demo purposes

### 3. Global Contact Elements
- Sticky emergency banner
- Fixed WhatsApp button
- Multiple contact options throughout
- Contact form with validation

### 4. SEO Optimized
- Dynamic sitemap
- Meta tags and structured data
- Optimized page titles and descriptions
- Fast load times with Next.js optimization

### 5. Data-Driven Content
All content is managed through data files (`/src/data/`) making it easy to:
- Update service descriptions
- Add/remove services
- Manage case studies
- Update resources

## Customization

### Update Company Information
Edit `/src/lib/constants.ts`:
```typescript
export const PHONE_NUMBER = '+91-XXXXXXXXXX';
export const WHATSAPP_NUMBER = '919999999999';
export const EMAIL = 'info@example.com';
```

### Add New Services
1. Add service object to `/src/data/services.ts`
2. Service detail page will auto-generate

### Customize Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    navy: '#0B2545',
    orange: '#F4791F',
  },
}
```

### Update Navigation
Edit `/src/data/navigation.ts` to modify main navigation and footer links

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
The project can be deployed to any platform supporting Node.js 18+:
- AWS Amplify
- Google Cloud Run
- Azure App Service
- Railway
- Render

## Performance Optimization

- Next.js automatic code splitting
- Image optimization
- CSS minification
- JavaScript compression
- SEO-friendly meta tags
- Lazy loading components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## File Placeholders

Before deploying, review and update:
- `[YEARS]` - Years of operation
- `[WORKERS]` - Number of workers deployed
- `[MILLS]` - Number of mills served
- `[NUMBER]` - Various count placeholders
- `[REGION]` - Service region
- `[X]`, `[Y]`, `[Z]` - Performance metrics
- `[PERIOD]` - Time periods

## Security Notes

- Form data is stored in localStorage for demo only
- Before production: implement proper backend API
- Add authentication if needed
- Implement proper data encryption
- Ensure GDPR/privacy law compliance

## Future Enhancements

- Backend API integration
- Admin dashboard for content management
- Blog CMS integration
- Live chat support
- Video testimonials
- Request quoting system
- Inventory management
- Analytics integration

## Support

For questions or issues:
- Email: [Update with your email]
- Phone: [Update with your phone]
- WhatsApp: [Update with your WhatsApp number]

## License

All rights reserved. Durga Dulari Enterprises © 2024

---

**Note**: This is a template website. All placeholder data marked with [BRACKETS] should be replaced with actual information before deployment.
