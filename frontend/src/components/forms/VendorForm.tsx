import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/common/Button';
import { Toast } from '@/components/ui/Toast';
import { validateEmail, validateIndianPhone, validateRequired, validateGSTNumber } from '@/lib/validations';

export interface VendorFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  gstNumber: string;
  servicesOffered: string;
  locationsCovered: string;
  description: string;
  consent: boolean;
}

interface VendorFormProps {
  onSuccess?: () => void;
}

const SERVICE_OPTIONS = [
  { value: '', label: 'Select Primary Service' },
  { value: 'manpower', label: 'Manpower Supply' },
  { value: 'maintenance', label: 'Maintenance Services' },
  { value: 'automation', label: 'Automation & Electronics' },
  { value: 'consultancy', label: 'Consultancy' },
  { value: 'training', label: 'Training & Recruitment' },
  { value: 'spares', label: 'Spare Parts Supply' },
  { value: 'other', label: 'Other Services' },
];

const LOCATION_OPTIONS = [
  { value: '', label: 'Select Service Area' },
  { value: 'tamil-nadu', label: 'Tamil Nadu' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'ap-tg', label: 'Andhra Pradesh & Telangana' },
  { value: 'pan-india', label: 'Pan India' },
  { value: 'international', label: 'International' },
];

export function VendorForm({ onSuccess }: VendorFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [formData, setFormData] = useState<VendorFormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    gstNumber: '',
    servicesOffered: '',
    locationsCovered: '',
    description: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!validateRequired(formData.companyName)) newErrors.companyName = 'Company name is required';
    if (!validateRequired(formData.contactPerson)) newErrors.contactPerson = 'Contact person name is required';
    if (!validateEmail(formData.email)) newErrors.email = 'Valid email is required';
    if (!validateIndianPhone(formData.phone)) newErrors.phone = 'Valid phone number is required';
    if (formData.gstNumber && !validateGSTNumber(formData.gstNumber)) {
      newErrors.gstNumber = 'Valid GST number is required (15 characters)';
    }
    if (!validateRequired(formData.servicesOffered)) newErrors.servicesOffered = 'Service category is required';
    if (!validateRequired(formData.locationsCovered)) newErrors.locationsCovered = 'Service area is required';
    if (!formData.consent) newErrors.consent = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({ type: 'error', message: 'Please fill all required fields correctly' });
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubmitted(true);
      setToast({ type: 'success', message: 'Vendor registration submitted successfully!' });

      onSuccess?.();

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          gstNumber: '',
          servicesOffered: '',
          locationsCovered: '',
          description: '',
          consent: false,
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setToast({ type: 'error', message: 'Failed to submit registration. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-neutral-text mb-2">Registration Submitted!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for registering as a vendor. Our team will verify your details and contact you soon.
        </p>
        <p className="text-sm text-gray-500">Expected response time: 2-3 business days</p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          error={errors.companyName}
          required
          placeholder="Your company name"
        />

        <Input
          label="Contact Person Name"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          error={errors.contactPerson}
          required
          placeholder="Name of primary contact"
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="company@email.com"
        />

        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          placeholder="+91-XXXXXXXXXX"
        />

        <Input
          label="GST Number"
          name="gstNumber"
          value={formData.gstNumber}
          onChange={handleChange}
          error={errors.gstNumber}
          placeholder="15-character GST number"
          hint="Optional - required for GST registered businesses"
        />

        <Select
          label="Primary Service Category"
          name="servicesOffered"
          value={formData.servicesOffered}
          onChange={handleChange}
          options={SERVICE_OPTIONS}
          error={errors.servicesOffered}
          required
        />

        <Select
          label="Service Area"
          name="locationsCovered"
          value={formData.locationsCovered}
          onChange={handleChange}
          options={LOCATION_OPTIONS}
          error={errors.locationsCovered}
          required
        />

        <Textarea
          label="Company Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Brief description of your company and services..."
          rows={4}
        />

        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            id="vendor-consent"
            className="mt-1"
          />
          <label htmlFor="vendor-consent" className="text-sm text-gray-700">
            I agree to the vendor terms and conditions and certify that all information provided is accurate and complete.
          </label>
        </div>
        {errors.consent && <p className="text-sm text-red-600 -mt-2">{errors.consent}</p>}

        <Button type="submit" fullWidth loading={loading}>
          Submit Vendor Registration
        </Button>
      </form>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
