import { WHATSAPP_NUMBER } from './constants';

export const generateWhatsAppMessage = (type: 'lead' | 'support' | 'consultation' | 'inquiry' = 'inquiry'): string => {
  const messages: Record<string, string> = {
    lead: 'Hi, I am interested in your services. Please provide more information.',
    support: 'Machine breakdown. Need urgent support.',
    consultation: 'I would like to schedule a free consultation.',
    inquiry: 'Hello, I have a query about your services.',
  };
  return messages[type] || messages.inquiry;
};

export const getWhatsAppContactLink = (message: string = ''): string => {
  if (!WHATSAPP_NUMBER) {
    return '#';
  }
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ''}`;
};

export const openWhatsAppChat = (message: string = ''): void => {
  const link = getWhatsAppContactLink(message);
  if (link !== '#') {
    window.open(link, '_blank');
  }
};
