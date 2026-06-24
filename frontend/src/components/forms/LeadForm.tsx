'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/common/Button';
import { Toast } from '@/components/ui/Toast';
import { validateEmail, validateIndianPhone } from '@/lib/validations';
import type { LeadFormData } from '@/types';

interface LeadFormProps {
  defaultRequirement?: string;
  submitButtonText?: string;
  onSuccess?: (data: LeadFormData) => void;
}

const requirementOptions = [
  { value: '', label: 'Select your requirement' },
  { value: 'manpower', label: 'Textile Manpower Supply' },
  { value: 'maintenance', label: 'Maintenance Services' },
  { value: 'installation', label: 'Plant Installation' },
  { value: 'consultancy', label: 'Consultancy' },
  { value: 'training', label: 'Training & Recruitment' },
  { value: 'automation', label: 'Automation & Electronics' },
  { value: 'other', label: 'Other' },
];

const locationOptions = [
  { value: '', label: 'Select a state/region' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'tamil-nadu', label: 'Tamil Nadu' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'telangana', label: 'Telangana' },
  { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
  { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
  { value: 'west-bengal', label: 'West Bengal' },
  { value: 'other', label: 'Other' },
];

export function LeadForm({
  defaultRequirement,
  submitButtonText = 'Submit Inquiry',
  onSuccess,
}: LeadFormProps) {
  const visibleRequirementOptions = defaultRequirement && !requirementOptions.some((option) => option.value === defaultRequirement)
    ? [
        ...requirementOptions,
        {
          value: defaultRequirement,
          label: defaultRequirement
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
        },
      ]
    : requirementOptions;

  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    company: '',
    mobile: '',
    email: '',
    location: '',
    requirement: defaultRequirement || '',
    details: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!validateIndianPhone(formData.mobile)) {
      newErrors.mobile = 'Valid 10-digit mobile number required';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.requirement) newErrors.requirement = 'Requirement is required';
    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setShowToast(true);
    setIsLoading(false);

    onSuccess?.(formData);

    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        mobile: '',
        email: '',
        location: '',
        requirement: defaultRequirement || '',
        details: '',
        consent: false,
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          Your inquiry has been received. Our team will contact you shortly.
        </p>
        <p className="text-sm text-green-600">
          We appreciate your interest in Durga Dulari Enterprises.
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            required
          />
          <Input
            label="Company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            error={errors.company}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Mobile Number"
            placeholder="10-digit mobile number"
            type="tel"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            error={errors.mobile}
            required
          />
          <Input
            label="Email Address"
            placeholder="your.email@company.com"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Location / City"
            options={locationOptions}
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            error={errors.location}
            required
          />
          <Select
            label="Your Requirement"
            options={visibleRequirementOptions}
            value={formData.requirement}
            onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
            error={errors.requirement}
            required
          />
        </div>

        <Textarea
          label="Tell us more (Optional)"
          placeholder="Describe your specific requirements or challenges"
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          rows={4}
        />

        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 w-5 h-5 cursor-pointer"
          />
          <label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer">
            I agree to be contacted regarding my inquiry by Durga Dulari Enterprises.
            {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
          </label>
        </div>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : submitButtonText}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Your information is safe with us. We never spam.
        </p>
      </form>

      {showToast && (
        <Toast
          type="success"
          message="Inquiry submitted successfully! We'll be in touch shortly."
          onClose={() => setShowToast(false)}
          autoClose
          duration={4000}
        />
      )}
    </>
  );
}
