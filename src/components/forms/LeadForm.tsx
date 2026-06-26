'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/common/Button';
import { Toast } from '@/components/ui/Toast';
import { validateEmail, validateIndianPhone } from '@/lib/validations';
import { services } from '@/data/services';
import { Check, ChevronDown } from 'lucide-react';
import type { LeadFormData } from '@/types';

interface Option {
  value: string;
  label: string;
}

interface LeadFormProps {
  defaultRequirement?: string;
  submitButtonText?: string;
  onSuccess?: (data: LeadFormData) => void;
}

const requirementOptions = [
  { value: '', label: 'Select your requirement' },
  ...services.map((service) => ({
    value: service.slug,
    label: service.title,
  })),
  { value: 'training-recruitment', label: 'Training & Recruitment' },
  { value: 'other', label: 'Other' },
];

const locationOptions = [
  { value: '', label: 'Select a state/region' },
  { value: 'andaman-and-nicobar-islands', label: 'Andaman and Nicobar Islands' },
  { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
  { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
  { value: 'assam', label: 'Assam' },
  { value: 'bihar', label: 'Bihar' },
  { value: 'chandigarh', label: 'Chandigarh' },
  { value: 'chhattisgarh', label: 'Chhattisgarh' },
  { value: 'dadra-and-nagar-haveli-and-daman-and-diu', label: 'Dadra and Nagar Haveli and Daman and Diu' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'goa', label: 'Goa' },
  { value: 'gujarat', label: 'Gujarat' },
  { value: 'haryana', label: 'Haryana' },
  { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
  { value: 'jammu-and-kashmir', label: 'Jammu and Kashmir' },
  { value: 'jharkhand', label: 'Jharkhand' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'kerala', label: 'Kerala' },
  { value: 'ladakh', label: 'Ladakh' },
  { value: 'lakshadweep', label: 'Lakshadweep' },
  { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'manipur', label: 'Manipur' },
  { value: 'meghalaya', label: 'Meghalaya' },
  { value: 'mizoram', label: 'Mizoram' },
  { value: 'nagaland', label: 'Nagaland' },
  { value: 'odisha', label: 'Odisha' },
  { value: 'puducherry', label: 'Puducherry' },
  { value: 'punjab', label: 'Punjab' },
  { value: 'rajasthan', label: 'Rajasthan' },
  { value: 'sikkim', label: 'Sikkim' },
  { value: 'tamil-nadu', label: 'Tamil Nadu' },
  { value: 'telangana', label: 'Telangana' },
  { value: 'tripura', label: 'Tripura' },
  { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
  { value: 'uttarakhand', label: 'Uttarakhand' },
  { value: 'west-bengal', label: 'West Bengal' },
  { value: 'other', label: 'Other' },
];

const leadRecipientEmail = 'anandcoder0@gmail.com';

function FormDropdown({
  label,
  placeholder,
  value,
  options,
  error,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  options: Option[];
  error?: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();

    const dropdown = event.currentTarget;
    const nextScrollTop = dropdown.scrollTop + event.deltaY;
    const maxScrollTop = dropdown.scrollHeight - dropdown.clientHeight;

    if (nextScrollTop >= 0 && nextScrollTop <= maxScrollTop) {
      event.preventDefault();
      dropdown.scrollTop = nextScrollTop;
    }
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <label className="block text-sm font-medium text-neutral-text mb-2">
        {label}<span className="text-red-500">*</span>
      </label>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`relative w-full px-4 py-3 pr-10 border rounded-lg font-body bg-white text-left transition-all duration-200 focus:outline-none focus:border-primary-navy focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-100' : 'border-gray-300 focus:ring-blue-100'
        }`}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={selectedOption?.value ? 'text-gray-900' : 'text-gray-500'}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>

      {isOpen && (
        <div
          data-lenis-prevent-wheel
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-64 overflow-y-auto overscroll-contain rounded-lg border border-gray-200 bg-white shadow-xl"
          onWheel={handleDropdownWheel}
          onWheelCapture={(event) => event.stopPropagation()}
        >
          <div role="listbox" className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={option.value === value}
                className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-orange-50 ${
                  option.value === value ? 'bg-orange-50 text-primary-orange font-semibold' : 'text-gray-700'
                }`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                <span>{option.label}</span>
                {option.value === value && <Check size={16} />}
              </button>
            ))}
          </div>
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export function LeadForm({
  defaultRequirement,
  submitButtonText = 'Submit Inquiry',
  onSuccess,
}: LeadFormProps) {
  const visibleRequirementOptions = defaultRequirement && !requirementOptions.some((option) => option.value === defaultRequirement)
    ? [
        ...requirementOptions.slice(0, -1),
        {
          value: defaultRequirement,
          label: defaultRequirement
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
        },
        requirementOptions[requirementOptions.length - 1],
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

  const getOptionLabel = (options: Option[], value: string) => {
    return options.find((option) => option.value === value)?.label || value;
  };

  const buildEmailBody = () => {
    const locationLabel = getOptionLabel(locationOptions, formData.location);
    const requirementLabel = getOptionLabel(visibleRequirementOptions, formData.requirement);

    return [
      'New inquiry received from Durga Dulari Enterprises website:',
      '',
      `Full Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Mobile Number: ${formData.mobile}`,
      `Email Address: ${formData.email}`,
      `Location / City: ${locationLabel}`,
      `Requirement: ${requirementLabel}`,
      `Tell us more: ${formData.details.trim() || 'Not provided'}`,
      `Consent: ${formData.consent ? 'Yes' : 'No'}`,
    ].join('\n');
  };

  const buildGmailComposeLink = (subject: string, body: string) => {
    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      tf: '1',
      to: leadRecipientEmail,
      su: subject,
      body,
    });

    return `https://mail.google.com/mail/u/0/?${params.toString()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    const subject = `New Inquiry from ${formData.name} - ${formData.company}`;
    window.open(buildGmailComposeLink(subject, buildEmailBody()), '_blank', 'noopener,noreferrer');

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
          Your email draft is ready for {leadRecipientEmail}. Please press Send in Gmail to complete the inquiry.
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
          <FormDropdown
            label="Location / City"
            placeholder="Select a state/region"
            options={locationOptions}
            value={formData.location}
            onChange={(location) => setFormData({ ...formData, location })}
            error={errors.location}
          />
          <FormDropdown
            label="Your Requirement"
            placeholder="Select your requirement"
            options={visibleRequirementOptions}
            value={formData.requirement}
            onChange={(requirement) => setFormData({ ...formData, requirement })}
            error={errors.requirement}
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
