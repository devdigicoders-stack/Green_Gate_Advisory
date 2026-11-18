import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Phone, 
  Mail, 
  FileCheck2,
  RefreshCw 
} from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import { submitEnquiry } from '../../services/enquiryApi';

export const SERVICE_OPTIONS = [
  "Carbon Markets",
  "CBAM",
  "ETS and Carbon Pricing",
  "Climate Finance",
  "Nature-Based Solutions",
  "Environmental and Climate Policy",
  "Corporate Climate and ESG",
  "MRV and GHG Accounting",
  "Training and Capacity Building",
  "Other"
];

// Helper to normalize query parameters or router state to canonical SERVICE_OPTIONS
function resolveServiceFromParam(param) {
  if (!param) return '';
  const clean = String(param).toLowerCase().trim();

  if (clean.includes('training') || clean.includes('capacitacion')) return 'Training and Capacity Building';
  if (clean.includes('cbam')) return 'CBAM';
  if (clean.includes('finance') || clean.includes('finanza')) return 'Climate Finance';
  if (clean.includes('carbon-market') || clean.includes('mercado') || clean === 'carbon') return 'Carbon Markets';
  if (clean.includes('ets') || clean.includes('pricing') || clean.includes('precio')) return 'ETS and Carbon Pricing';
  if (clean.includes('nature') || clean.includes('naturaleza') || clean.includes('blue-carbon')) return 'Nature-Based Solutions';
  if (clean.includes('policy') || clean.includes('politica')) return 'Environmental and Climate Policy';
  if (clean.includes('esg') || clean.includes('corporate') || clean.includes('corporativo')) return 'Corporate Climate and ESG';
  if (clean.includes('mrv') || clean.includes('accounting') || clean.includes('contabilidad')) return 'MRV and GHG Accounting';

  // Direct match against ALLOWED options
  const directMatch = SERVICE_OPTIONS.find(opt => opt.toLowerCase() === clean);
  return directMatch || '';
}

export default function ContactForm() {
  const { t } = useTranslation();
  const { locale, getLocalizedPath } = useLocale();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Resolve initial prefilled values from URL query or location state
  const initialService = resolveServiceFromParam(
    location.state?.serviceInterest || 
    location.state?.service || 
    searchParams.get('service')
  );

  const initialType = (() => {
    const rawType = location.state?.enquiryType || searchParams.get('type') || '';
    const cleanType = rawType.toLowerCase();
    if (cleanType === 'proposal') return 'proposal';
    if (cleanType === 'expert' || cleanType === 'consultant') return 'expert';
    return 'consultation';
  })();

  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    workEmail: '',
    countryOrRegion: '',
    role: '',
    serviceInterest: initialService,
    requirementDescription: '',
    preferredContactMethod: 'Email',
    phone: '',
    enquiryType: initialType,
    privacyAcknowledged: false,
    company_website_url_hp: '' // Honeypot
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);

  // Update prefilled values if navigated while mounted
  useEffect(() => {
    if (initialService && !formData.serviceInterest) {
      setFormData(prev => ({ ...prev, serviceInterest: initialService }));
    }
    if (initialType && formData.enquiryType !== initialType) {
      setFormData(prev => ({ ...prev, enquiryType: initialType }));
    }
  }, [initialService, initialType]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: val
    }));

    // Clear error for field on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = t('contact.form.fields.fullName.required', 'Full name is required.');
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = t('contact.form.fields.workEmail.required', 'Work email is required.');
    } else if (!emailRegex.test(formData.workEmail.trim())) {
      newErrors.workEmail = t('contact.form.fields.workEmail.invalid', 'Please provide a valid corporate email.');
    }

    if (!formData.countryOrRegion.trim()) {
      newErrors.countryOrRegion = t('contact.form.fields.countryOrRegion.required', 'Country / region is required.');
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = t('contact.form.fields.serviceInterest.required', 'Please select a service of interest.');
    }

    if (!formData.requirementDescription.trim() || formData.requirementDescription.trim().length < 10) {
      newErrors.requirementDescription = t('contact.form.fields.requirementDescription.minLength', 'Description must be at least 10 characters.');
    }

    if (formData.preferredContactMethod.toLowerCase() === 'phone') {
      if (!formData.phone.trim() || formData.phone.trim().length < 6) {
        newErrors.phone = t('contact.form.fields.phone.required', 'Telephone number is required.');
      }
    }

    if (!formData.privacyAcknowledged) {
      newErrors.privacyAcknowledged = t('contact.form.fields.privacy.required', 'You must acknowledge the privacy notice.');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      const firstErrorKey = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) element.focus();
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    const payload = {
      fullName: formData.fullName.trim(),
      organisation: formData.organisation.trim(),
      workEmail: formData.workEmail.trim().toLowerCase(),
      countryOrRegion: formData.countryOrRegion.trim(),
      role: formData.role.trim(),
      serviceInterest: formData.serviceInterest,
      requirementDescription: formData.requirementDescription.trim(),
      preferredContactMethod: formData.preferredContactMethod,
      phone: formData.phone.trim(),
      enquiryType: formData.enquiryType,
      privacyAcknowledged: formData.privacyAcknowledged,
      language: locale === 'es' ? 'es' : 'en',
      company_website_url_hp: formData.company_website_url_hp
    };

    const response = await submitEnquiry(payload);

    setIsSubmitting(false);

    if (response.success) {
      setSubmissionSuccess(true);
      window.scrollTo({ top: document.getElementById('contact-form-section')?.offsetTop - 80 || 0, behavior: 'smooth' });
    } else {
      if (response.validationErrors) {
        setErrors(response.validationErrors);
      }
      setServerError(response.error || t('contact.form.feedback.defaultError', 'An error occurred during submission.'));
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      organisation: '',
      workEmail: '',
      countryOrRegion: '',
      role: '',
      serviceInterest: '',
      requirementDescription: '',
      preferredContactMethod: 'Email',
      phone: '',
      enquiryType: 'consultation',
      privacyAcknowledged: false,
      company_website_url_hp: ''
    });
    setErrors({});
    setServerError(null);
    setSubmissionSuccess(false);
  };

  return (
    <section id="contact-form-section" className="w-full bg-[#f7f7f7] border-b border-[#e5e7eb] font-['Poppins',sans-serif] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-[90%] max-w-[1140px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-[4px] bg-white border border-[#e5e7eb] p-6 sm:p-10 lg:p-12 overflow-hidden"
        >
          {/* Top Brand Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#019934]" />

          <AnimatePresence mode="wait">
            {submissionSuccess ? (
              /* Success Message Screen */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 rounded-[5px] bg-[#57D182]/20 text-[#019934] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 stroke-[1.7]" />
                </div>

                <div className="space-y-3 max-w-xl mx-auto">
                  <span className="text-[12px] font-medium tracking-[0.18em] uppercase text-[#0A7A32]">
                    {t('contact.form.feedback.successTitle', 'Enquiry Confirmed')}
                  </span>
                  <h3 className="font-['Poppins',sans-serif] font-medium text-[26px] sm:text-[32px] text-[#1A5C3B] tracking-[-0.01em]">
                    {t('contact.form.feedback.successTitle', 'Enquiry Received')}
                  </h3>
                  <p className="text-[14.5px] sm:text-[15.5px] text-[#555555] leading-[1.75] font-['Poppins',sans-serif] font-light">
                    {t('contact.form.feedback.successMessage', 'Thank you for contacting Green Gate Advisory. Your enquiry has been received. Our team will review the information provided and follow up using the contact details you supplied.')}
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-7 py-3 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] text-white font-['Poppins',sans-serif] font-normal text-[14.5px] transition-colors duration-200 inline-flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4 text-white" />
                    <span>{t('contact.form.feedback.submitAnother', 'Submit Another Enquiry')}</span>
                  </button>

                  <Link
                    to={getLocalizedPath('/services')}
                    className="w-full sm:w-auto px-7 py-3 rounded-[5px] bg-transparent border border-[#019934] text-[#019934] hover:bg-[#019934] hover:text-white font-['Poppins',sans-serif] font-normal text-[14.5px] transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    <span>{t('navigation.services', 'Explore Services')}</span>
                  </Link>
                </div>
              </motion.div>
            ) : (
              /* Enquiry Form Screen */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-8"
              >
                {/* Form Header & Objective Selector */}
                <div className="space-y-4 pb-6 border-b border-[#efefef]">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.2em] uppercase text-[#0A7A32]">
                        <span className="inline-block w-[40px] h-[2px] bg-[#019934]" aria-hidden="true" />
                        <span>
                          {formData.enquiryType === 'expert'
                            ? 'Consultant & Expert Pool Registration'
                            : t('contact.form.badge', 'Enquiry Submission')}
                        </span>
                      </div>
                      <h2 className="font-['Poppins',sans-serif] font-medium text-[26px] sm:text-[32px] text-[#1A5C3B] tracking-[-0.01em] leading-snug">
                        {formData.enquiryType === 'expert'
                          ? 'Register with Our Senior Consultant Roster'
                          : t('contact.form.heading', 'Submit Your Advisory Enquiry')}
                      </h2>
                    </div>

                    {/* Enquiry Type Selector Tabs */}
                    <div className="inline-flex rounded-[4px] p-1 bg-[#F4F8F5] border border-[#e5e7eb] self-start lg:self-center flex-wrap gap-1">
                      <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, enquiryType: 'consultation' }))}
                        className={`px-4 py-2 rounded-[3px] text-[12.5px] font-medium transition-colors duration-200 ${
                          formData.enquiryType === 'consultation'
                            ? 'bg-[#1A5C3B] text-white'
                            : 'text-[#555555] hover:text-[#1A5C3B] hover:bg-white'
                        }`}
                      >
                        {t('contact.form.enquiryType.consultation', 'Consultation')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, enquiryType: 'proposal' }))}
                        className={`px-4 py-2 rounded-[3px] text-[12.5px] font-medium transition-colors duration-200 ${
                          formData.enquiryType === 'proposal'
                            ? 'bg-[#1A5C3B] text-white'
                            : 'text-[#555555] hover:text-[#1A5C3B] hover:bg-white'
                        }`}
                      >
                        {t('contact.form.enquiryType.proposal', 'Proposal Request')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, enquiryType: 'expert' }))}
                        className={`px-4 py-2 rounded-[3px] text-[12.5px] font-medium transition-colors duration-200 ${
                          formData.enquiryType === 'expert'
                            ? 'bg-[#1A5C3B] text-white'
                            : 'text-[#555555] hover:text-[#1A5C3B] hover:bg-white'
                        }`}
                      >
                        Join Expert Pool
                      </button>
                    </div>
                  </div>

                  <p className="text-[14px] sm:text-[15px] text-[#555555] leading-[1.7] font-['Poppins',sans-serif] font-light">
                    {formData.enquiryType === 'expert'
                      ? 'Submit your technical profile and credentials to collaborate with Green Gate Advisory on international compliance and carbon mandates.'
                      : t('contact.form.subtitle', 'Complete the form below to connect directly with our advisory specialists.')}
                  </p>
                </div>

                {/* Server Error Notification Banner */}
                {serverError && (
                  <div className="p-4 rounded-[4px] bg-red-50 border border-red-200 text-red-800 text-[13px] sm:text-[14px] flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <strong className="block font-medium">
                        {t('contact.form.feedback.errorTitle', 'Submission Error')}
                      </strong>
                      <p className="font-light">{serverError}</p>
                    </div>
                  </div>
                )}

                {/* Honeypot field (hidden from screenreaders and humans) */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="company_website_url_hp">Do not fill this field</label>
                  <input
                    type="text"
                    id="company_website_url_hp"
                    name="company_website_url_hp"
                    value={formData.company_website_url_hp}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B]">
                      {t('contact.form.fields.fullName.label', 'Full Name')} <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t('contact.form.fields.fullName.placeholder', 'Enter your full name')}
                      aria-required="true"
                      aria-invalid={Boolean(errors.fullName)}
                      className={`w-full px-4 py-3 rounded-[4px] border text-[14px] text-[#3C3C3C] placeholder:text-[#94a3b8] bg-white font-['Poppins',sans-serif] font-light transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#019934] ${
                        errors.fullName ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-[#d9dfe5] focus:border-[#019934]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[12px] text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Organisation */}
                  <div className="space-y-1.5">
                    <label htmlFor="organisation" className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B]">
                      {t('contact.form.fields.organisation.label', 'Organisation / Company')}
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      placeholder={t('contact.form.fields.organisation.placeholder', 'Your organisation name')}
                      className="w-full px-4 py-3 rounded-[4px] border border-[#d9dfe5] focus:border-[#019934] text-[14px] text-[#3C3C3C] placeholder:text-[#94a3b8] bg-white font-['Poppins',sans-serif] font-light transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#019934]"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="workEmail" className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B]">
                      {t('contact.form.fields.workEmail.label', 'Work Email')} <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder={t('contact.form.fields.workEmail.placeholder', 'name@organisation.com')}
                      aria-required="true"
                      aria-invalid={Boolean(errors.workEmail)}
                      className={`w-full px-4 py-3 rounded-[4px] border text-[14px] text-[#3C3C3C] placeholder:text-[#94a3b8] bg-white font-['Poppins',sans-serif] font-light transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#019934] ${
                        errors.workEmail ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-[#d9dfe5] focus:border-[#019934]'
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-[12px] text-red-600">{errors.workEmail}</p>
                    )}
                  </div>

                  {/* Country / Region */}
                  <div className="space-y-1.5">
                    <label htmlFor="countryOrRegion" className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B]">
                      {t('contact.form.fields.countryOrRegion.label', 'Country / Region')} <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      id="countryOrRegion"
                      name="countryOrRegion"
                      value={formData.countryOrRegion}
                      onChange={handleChange}
                      placeholder={t('contact.form.fields.countryOrRegion.placeholder', 'e.g., Spain, Germany, United Kingdom, Colombia')}
                      aria-required="true"
                      aria-invalid={Boolean(errors.countryOrRegion)}
                      className={`w-full px-4 py-3 rounded-[4px] border text-[14px] text-[#3C3C3C] placeholder:text-[#94a3b8] bg-white font-['Poppins',sans-serif] font-light transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#019934] ${
                        errors.countryOrRegion ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-[#d9dfe5] focus:border-[#019934]'
                      }`}
                    />
                    {errors.countryOrRegion && (
                      <p className="text-[12px] text-red-600">{errors.countryOrRegion}</p>
                    )}
                  </div>

                  {/* Role */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="role" className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B]">
                      {formData.enquiryType === 'expert'
                        ? 'Your Specialisation & Credentials'
                        : t('contact.form.fields.role.label', 'Your Role / Position (Optional)')}
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder={formData.enquiryType === 'expert'
                        ? 'e.g., Senior MRV Engineer, Article 6 Certifier, Environmental Economist'
                        : t('contact.form.fields.role.placeholder', 'e.g., Sustainability Director, Head of Compliance, Project Manager')}
                      className="w-full px-4 py-3 rounded-[4px] border border-[#d9dfe5] focus:border-[#019934] text-[14px] text-[#3C3C3C] placeholder:text-[#94a3b8] bg-white font-['Poppins',sans-serif] font-light transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#019934]"
                    />
                  </div>

                  {/* Service of Interest */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="serviceInterest" className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B]">
                      {formData.enquiryType === 'expert'
                        ? 'Primary Domain of Technical Expertise'
                        : t('contact.form.fields.serviceInterest.label', 'Service of Interest')} <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.serviceInterest)}
                      className={`w-full px-4 py-3 rounded-[4px] border text-[14px] text-[#3C3C3C] bg-white font-['Poppins',sans-serif] font-light transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#019934] ${
                        errors.serviceInterest ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-[#d9dfe5] focus:border-[#019934]'
                      }`}
                    >
                      <option value="">{formData.enquiryType === 'expert' ? 'Select primary technical practice...' : t('contact.form.fields.serviceInterest.placeholder', 'Select a primary advisory service')}</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {t(`contact.serviceOptions.${opt}`, opt)}
                        </option>
                      ))}
                    </select>
                    {errors.serviceInterest && (
                      <p className="text-[12px] text-red-600">{errors.serviceInterest}</p>
                    )}
                  </div>

                  {/* Description of Requirement */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <div className="flex justify-between items-center gap-2">
                      <label htmlFor="requirementDescription" className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B]">
                        {formData.enquiryType === 'expert'
                          ? 'Summary of Technical Experience, Track Record & Qualifications'
                          : t('contact.form.fields.requirementDescription.label', 'Brief Description of Your Requirement')} <span className="text-red-500 font-semibold">*</span>
                      </label>
                      <span className="text-[11.5px] text-[#7f7f7f] font-light flex-shrink-0">
                        {formData.requirementDescription.length} / 3000
                      </span>
                    </div>
                    <textarea
                      id="requirementDescription"
                      name="requirementDescription"
                      rows={5}
                      value={formData.requirementDescription}
                      onChange={handleChange}
                      maxLength={3000}
                      placeholder={formData.enquiryType === 'expert'
                        ? 'Please describe your relevant certifications, sector expertise, past advisory/MRV mandates, geographic coverage, or paste a link to your online profile / CV...'
                        : t('contact.form.fields.requirementDescription.placeholder', 'Please provide context regarding your organisation’s objectives, project timeline, or specific regulatory challenges...')}
                      aria-required="true"
                      aria-invalid={Boolean(errors.requirementDescription)}
                      className={`w-full px-4 py-3 rounded-[4px] border text-[14px] text-[#3C3C3C] placeholder:text-[#94a3b8] bg-white font-['Poppins',sans-serif] font-light transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#019934] leading-[1.68] ${
                        errors.requirementDescription ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-[#d9dfe5] focus:border-[#019934]'
                      }`}
                    />
                    {errors.requirementDescription && (
                      <p className="text-[12px] text-red-600">{errors.requirementDescription}</p>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredContactMethod" className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B]">
                      {t('contact.form.fields.preferredContactMethod.label', 'Preferred Contact Method')}
                    </label>
                    <select
                      id="preferredContactMethod"
                      name="preferredContactMethod"
                      value={formData.preferredContactMethod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[4px] border border-[#d9dfe5] focus:border-[#019934] text-[14px] text-[#3C3C3C] bg-white font-['Poppins',sans-serif] font-light transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#019934]"
                    >
                      <option value="Email">{t('contact.form.fields.preferredContactMethod.options.email', 'Email')}</option>
                      <option value="Phone">{t('contact.form.fields.preferredContactMethod.options.phone', 'Telephone Call')}</option>
                      <option value="Virtual Call">{t('contact.form.fields.preferredContactMethod.options.virtual', 'Virtual Conference Call')}</option>
                      <option value="No Preference">{t('contact.form.fields.preferredContactMethod.options.none', 'No Preference')}</option>
                    </select>
                  </div>

                  {/* Conditional Phone Field (revealed when Phone is selected) */}
                  {formData.preferredContactMethod === 'Phone' && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-1.5"
                    >
                      <label htmlFor="phone" className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#1A5C3B]">
                        {t('contact.form.fields.phone.label', 'Direct Telephone Number')} <span className="text-red-500 font-semibold">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contact.form.fields.phone.placeholder', '+34 600 000 000')}
                        aria-required="true"
                        aria-invalid={Boolean(errors.phone)}
                        className={`w-full px-4 py-3 rounded-[4px] border text-[14px] text-[#3C3C3C] placeholder:text-[#94a3b8] bg-white font-['Poppins',sans-serif] font-light transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#019934] ${
                          errors.phone ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-[#d9dfe5] focus:border-[#019934]'
                        }`}
                      />
                      <span className="text-[11.5px] text-[#7f7f7f] block font-light">
                        {t('contact.form.fields.phone.hint', 'Include country dialling code for international routing.')}
                      </span>
                      {errors.phone && (
                        <p className="text-[12px] text-red-600">{errors.phone}</p>
                      )}
                    </motion.div>
                  )}

                  {/* Privacy Notice Acknowledgement */}
                  <div className="sm:col-span-2 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        id="privacyAcknowledged"
                        name="privacyAcknowledged"
                        checked={formData.privacyAcknowledged}
                        onChange={handleChange}
                        aria-required="true"
                        className="mt-1 w-4 h-4 rounded-[3px] accent-[#019934] text-[#019934] focus:ring-[#019934] border-[#d9dfe5] cursor-pointer"
                      />
                      <span className="text-[13px] sm:text-[13.5px] text-[#555555] font-light leading-[1.65]">
                        {t('contact.form.fields.privacy.text', 'I acknowledge and agree to the processing of my contact information in accordance with the')}{' '}
                        <Link
                          to={getLocalizedPath('/privacy-policy')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1A5C3B] font-medium underline decoration-[#019934] underline-offset-2 hover:text-[#019934] transition-colors"
                        >
                          {t('contact.form.fields.privacy.linkText', 'Privacy Policy')}
                        </Link>
                        . <span className="text-red-500 font-semibold">*</span>
                      </span>
                    </label>
                    {errors.privacyAcknowledged && (
                      <p className="text-[12px] text-red-600 mt-1.5 pl-7">{errors.privacyAcknowledged}</p>
                    )}
                  </div>

                </div>

                {/* Submit Action Button */}
                <div className="pt-6 border-t border-[#efefef] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[12.5px] text-[#555555] font-light order-2 sm:order-1">
                    <FileCheck2 className="w-4 h-4 text-[#019934] stroke-[1.7]" />
                    <span>Independent, confidential advisory scoping</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-[5px] bg-[#1A5C3B] hover:bg-[#019934] disabled:bg-[#1A5C3B]/60 text-white font-['Poppins',sans-serif] font-normal text-[15px] transition-colors duration-200 inline-flex items-center justify-center gap-2.5 focus:outline-none order-1 sm:order-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/25 border-t-white rounded-full animate-spin" />
                        <span>{t('contact.form.buttons.submitting', 'Submitting Enquiry...')}</span>
                      </>
                    ) : (
                      <>
                        <span>
                          {formData.enquiryType === 'expert'
                            ? 'Submit Expert Application'
                            : formData.enquiryType === 'proposal'
                              ? t('contact.form.buttons.submitProposal', 'Request a Proposal')
                              : t('contact.form.buttons.submitConsultation', 'Request a Consultation')}
                        </span>
                        <Send className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}
