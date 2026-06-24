import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/common/Button';
import { Toast } from '@/components/ui/Toast';
import { validateEmail, validateIndianPhone, validateRequired } from '@/lib/validations';

export interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  location: string;
  message: string;
}

interface CareerFormProps {
  onSuccess?: () => void;
}

const POSITION_OPTIONS = [
  { value: '', label: 'Select Position' },
  { value: 'operator', label: 'Machine Operator' },
  { value: 'maintenance', label: 'Maintenance Technician' },
  { value: 'supervisor', label: 'Supervisor' },
  { value: 'engineer', label: 'Process Engineer' },
  { value: 'manager', label: 'Plant Manager' },
  { value: 'other', label: 'Other' },
];

const EXPERIENCE_OPTIONS = [
  { value: '', label: 'Select Experience Level' },
  { value: 'fresher', label: '0-1 years (Fresher)' },
  { value: '1-3', label: '1-3 years' },
  { value: '3-5', label: '3-5 years' },
  { value: '5-10', label: '5-10 years' },
  { value: '10+', label: '10+ years' },
];

const LOCATION_OPTIONS = [
  { value: '', label: 'Select Location' },
  { value: 'tamil-nadu', label: 'Tamil Nadu' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
  { value: 'telangana', label: 'Telangana' },
  { value: 'other', label: 'Other India' },
];

export function CareerForm({ onSuccess }: CareerFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [formData, setFormData] = useState<CareerFormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    location: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!validateRequired(formData.name)) newErrors.name = 'Name is required';
    if (!validateEmail(formData.email)) newErrors.email = 'Valid email is required';
    if (!validateIndianPhone(formData.phone)) newErrors.phone = 'Valid 10-digit phone number is required';
    if (!validateRequired(formData.position)) newErrors.position = 'Position is required';
    if (!validateRequired(formData.experience)) newErrors.experience = 'Experience level is required';
    if (!validateRequired(formData.location)) newErrors.location = 'Location is required';

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
      setToast({ type: 'success', message: 'Application submitted successfully!' });

      onSuccess?.();

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          location: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setToast({ type: 'error', message: 'Failed to submit application. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-neutral-text mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for applying to Durga Dulari Enterprises. We'll review your application and contact you soon.
        </p>
        <p className="text-sm text-gray-500">Redirecting...</p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          placeholder="Your full name"
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="your@email.com"
        />

        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          placeholder="10-digit number"
        />

        <Select
          label="Position Applying For"
          name="position"
          value={formData.position}
          onChange={handleChange}
          options={POSITION_OPTIONS}
          error={errors.position}
          required
        />

        <Select
          label="Experience Level"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          options={EXPERIENCE_OPTIONS}
          error={errors.experience}
          required
        />

        <Select
          label="Preferred Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          options={LOCATION_OPTIONS}
          error={errors.location}
          required
        />

        <Textarea
          label="Message (Optional)"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us why you're interested in joining us..."
          rows={4}
        />

        <Button type="submit" fullWidth loading={loading}>
          Submit Application
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
