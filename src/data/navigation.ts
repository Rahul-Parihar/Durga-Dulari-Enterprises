export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}

export const mainNavigation: NavLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
    submenu: [
      { label: 'Textile Manpower Supply', href: '/services/textile-manpower-supply' },
      { label: 'Mechanical Maintenance', href: '/services/mechanical-maintenance' },
      { label: 'Electrical Maintenance', href: '/services/electrical-maintenance' },
      { label: 'Utility Operations', href: '/services/utility-operations' },
      { label: 'Plant Installation', href: '/services/plant-installation' },
      { label: 'Plant Shifting', href: '/services/plant-shifting' },
      { label: 'AMC Services', href: '/services/amc-services' },
      { label: 'Textile Consultancy', href: '/services/textile-consultancy' },
      { label: 'Textile Electronics & Automation', href: '/services/textile-electronics-automation' },
      { label: 'Textile Spares Procurement', href: '/services/textile-spares-procurement' },
      { label: 'Sick Mill Revival', href: '/services/sick-mill-revival' },
      { label: 'Projects Division', href: '/services/projects-division' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'Training',
    href: '/training-recruitment',
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerLinks = {
  services: [
    { label: 'Textile Manpower Supply', href: '/services/textile-manpower-supply' },
    { label: 'Mechanical Maintenance', href: '/services/mechanical-maintenance' },
    { label: 'Electrical Maintenance', href: '/services/electrical-maintenance' },
    { label: 'Utility Operations', href: '/services/utility-operations' },
    { label: 'Plant Installation', href: '/services/plant-installation' },
    { label: 'Consultancy', href: '/services/textile-consultancy' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Founder', href: '/founder' },
    { label: 'Careers', href: '/careers' },
    { label: 'Compliance', href: '/compliance' },
  ],
  resources: [
    { label: 'Blog & Resources', href: '/resources' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Training & Recruitment', href: '/training-recruitment' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Compliance', href: '/compliance' },
  ],
};
