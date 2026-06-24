export const COLORS = {
  primary: {
    navy: '#0B2545',
    orange: '#F4791F',
  },
  neutral: {
    light: '#E7EEF5',
    text: '#2B2B2B',
    white: '#FFFFFF',
  },
};

export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+91-XXXXXXXXXX';
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'info@example.com';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const COMPANY_NAME = 'Durga Dulari Enterprises';

export const BUSINESS_HOURS = {
  weekday: '8:00 AM - 6:00 PM IST',
  weekend: 'Closed',
  support: '24×7 Emergency Support Available',
};

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Training', href: '/training-recruitment' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICE_ROUTES = [
  'textile-manpower-supply',
  'mechanical-maintenance',
  'electrical-maintenance',
  'utility-operations',
  'plant-installation',
  'plant-shifting',
  'amc-services',
  'textile-consultancy',
  'textile-electronics-automation',
  'textile-spares-procurement',
  'sick-mill-revival',
  'projects-division',
];

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
  phone: `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
  email: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
};
