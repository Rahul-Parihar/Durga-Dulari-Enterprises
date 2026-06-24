import { WHATSAPP_NUMBER } from './constants';

export const getWhatsAppLink = (message: string = ''): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ''}`;
};

export const getCallLink = (phone: string): string => {
  return `tel:${phone}`;
};

export const getEmailLink = (email: string, subject: string = '', body: string = ''): string => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${email}${subject ? `?subject=${encodedSubject}` : ''}${body ? `&body=${encodedBody}` : ''}`;
};

export const classNames = (...classes: (string | undefined | null | boolean)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const capitalizeWords = (str: string): string => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const slugToTitle = (slug: string): string => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const generateBreadcrumbs = (
  pathname: string,
): { label: string; href: string }[] => {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ label: 'Home', href: '/' }];

  let currentPath = '';
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      label: capitalizeWords(segment.replace(/-/g, ' ')),
      href: currentPath,
    });
  });

  return breadcrumbs;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const getImagePath = (filename: string): string => {
  return `/images/${filename}`;
};
