import type { Download } from '@/types';

export const downloads: Download[] = [
  {
    id: '1',
    title: 'Preventive Maintenance Checklist',
    description: 'Comprehensive checklist for mechanical and electrical maintenance tasks in textile mills.',
    icon: 'CheckCircle',
    downloadUrl: '/downloads/preventive-maintenance-checklist.pdf',
  },
  {
    id: '2',
    title: 'Spinning Mill KPI Dashboard',
    description: 'Excel template for tracking key performance indicators for spinning operations.',
    icon: 'BarChart3',
    downloadUrl: '/downloads/spinning-mill-kpi-dashboard.xlsx',
  },
  {
    id: '3',
    title: 'MTBF Calculator',
    description: 'Tool to calculate Mean Time Between Failures for equipment analysis.',
    icon: 'Calculator',
    downloadUrl: '/downloads/mtbf-calculator.xlsx',
  },
  {
    id: '4',
    title: 'MTTR Calculator',
    description: 'Tool to calculate Mean Time To Repair and track maintenance efficiency.',
    icon: 'Calculator',
    downloadUrl: '/downloads/mttr-calculator.xlsx',
  },
  {
    id: '5',
    title: 'Utility Audit Checklist',
    description: 'Detailed checklist for assessing water, steam, electrical, and compressed air systems.',
    icon: 'Droplets',
    downloadUrl: '/downloads/utility-audit-checklist.pdf',
  },
  {
    id: '6',
    title: 'Spinning Manpower Calculation Sheet',
    description: 'Formula and calculator for determining manpower requirements for spinning mills.',
    icon: 'Users',
    downloadUrl: '/downloads/spinning-manpower-calculator.xlsx',
  },
];

export const getDownloadById = (id: string): Download | undefined => {
  return downloads.find((download) => download.id === id);
};
