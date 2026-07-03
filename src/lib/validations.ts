export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateIndianPhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Indian phone numbers should be 10 digits or 12 with 91 prefix
  return cleaned.length === 10 || (cleaned.length === 12 && cleaned.startsWith('91'));
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateGSTNumber = (gst: string): boolean => {
  // Basic GST validation - 15 alphanumeric characters
  const gstRegex = /^[0-9A-Z]{15}$/;
  return gstRegex.test(gst.toUpperCase());
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91-${cleaned}`;
  } else if (cleaned.length === 12) {
    return `+${cleaned}`;
  }
  return phone;
};

export const formatForWhatsApp = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `91${cleaned}`;
  }
  return cleaned;
};
