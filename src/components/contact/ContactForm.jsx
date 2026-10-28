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
    <section id="contact-form-section" className="py-12 sm:py-18 lg:py-20 bg-sage/30 border-b border-sand-border/70 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-none bg-white border border-sand-border p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden"
        >
          {/* Top Brand Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#019935]" />
          
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
                <div className="w-16 h-16 rounded-none bg-[#019935]/10 text-[#019935] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-3 max-w-xl mx-auto">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-gold-dark">
                    {t('contact.form.feedback.successTitle', 'Enquiry Confirmed')}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest tracking-tight">
                    {t('contact.form.feedback.successTitle', 'Enquiry Received')}
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal leading-relaxed font-sans font-light">
                    {t('contact.form.feedback.successMessage', 'Thank you for contacting Green Gate Advisory. Your enquiry has been received. Our team will review the information provided and follow up using the contact details you supplied.')}
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-none bg-[#019935] hover:bg-[#02B840] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow inline-flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4 text-gold" />
                    <span>{t('contact.form.feedback.submitAnother', 'Submit Another Enquiry')}</span>
                  </button>

                  <Link
                    to={getLocalizedPath('/services')}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-none bg-sage/60 hover:bg-forest/5 text-forest font-sans font-semibold text-xs tracking-wider uppercase border border-sand-border transition-all inline-flex items-center justify-center"
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
                <div className="space-y-4 pb-6 border-b border-sand-border/70">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none text-[11px] font-bold tracking-widest uppercase bg-forest/5 text-forest border border-forest/15">
                        <span className="w-1.5 h-1.5 rounded-none bg-[#019935]"></span>
                        <span>
                          {formData.enquiryType === 'expert' 
                            ? 'Consultant & Expert Pool Registration' 
                            : t('contact.form.badge', 'Enquiry Submission')}
                        </span>
                      </div>
                      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest tracking-tight pt-2">
                        {formData.enquiryType === 'expert'
                          ? 'Register with Our Senior Consultant Roster'
                          : t('contact.form.heading', 'Submit Your Advisory Enquiry')}
                      </h2>
                    </div>

                    {/* Enquiry Type Selector Tabs */}
                    <div className="inline-flex rounded-none p-1 bg-sage/50 border border-sand-border self-start lg:self-center flex-wrap gap-1 shadow-xs">
                      <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, enquiryType: 'consultation' }))}
                        className={`px-3.5 py-2 rounded-none text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                          formData.enquiryType === 'consultation'
                            ? 'bg-[#019935] text-white shadow-xs'
                            : 'text-charcoal-muted hover:text-forest hover:bg-white/70'
                        }`}
                      >
                        {t('contact.form.enquiryType.consultation', 'Consultation')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, enquiryType: 'proposal' }))}
                        className={`px-3.5 py-2 rounded-none text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                          formData.enquiryType === 'proposal'
                            ? 'bg-[#019935] text-white shadow-xs'
                            : 'text-charcoal-muted hover:text-forest hover:bg-white/70'
                        }`}
                      >
                        {t('contact.form.enquiryType.proposal', 'Proposal Request')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, enquiryType: 'expert' }))}
                        className={`px-3.5 py-2 rounded-none text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                          formData.enquiryType === 'expert'
                            ? 'bg-[#019935] text-white shadow-xs'
                            : 'text-charcoal-muted hover:text-forest hover:bg-white/70'
                        }`}
                      >
                        Join Expert Pool
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {formData.enquiryType === 'expert'
                      ? 'Submit your technical profile and credentials to collaborate with Green Gate Advisory on international compliance and carbon mandates.'
                      : t('contact.form.subtitle', 'Complete the form below to connect directly with our advisory specialists.')}
                  </p>
                </div>

                {/* Server Error Notification Banner */}
                {serverError && (
                  <div className="p-4 rounded-none bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <strong className="block font-semibold">
                        {t('contact.form.feedback.errorTitle', 'Submission Error')}
                      </strong>
                      <p>{serverError}</p>
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
                    <label htmlFor="fullName" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-forest font-sans">
                      {t('contact.form.fields.fullName.label', 'Full Name')} <span className="text-red-500 font-bold">*</span>
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
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-none border text-sm text-charcoal bg-white font-sans transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#019935] ${
                        errors.fullName ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-sand-border focus:border-[#019935]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 font-sans">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Organisation */}
                  <div className="space-y-1.5">
                    <label htmlFor="organisation" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-forest font-sans">
                      {t('contact.form.fields.organisation.label', 'Organisation / Company')}
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      placeholder={t('contact.form.fields.organisation.placeholder', 'Your organisation name')}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-none border border-sand-border focus:border-[#019935] text-sm text-charcoal bg-white font-sans transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#019935]"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="workEmail" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-forest font-sans">
                      {t('contact.form.fields.workEmail.label', 'Work Email')} <span className="text-red-500 font-bold">*</span>
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
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-none border text-sm text-charcoal bg-white font-sans transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#019935] ${
                        errors.workEmail ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-sand-border focus:border-[#019935]'
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-xs text-red-600 font-sans">{errors.workEmail}</p>
                    )}
                  </div>

                  {/* Country / Region */}
                  <div className="space-y-1.5">
                    <label htmlFor="countryOrRegion" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-forest font-sans">
                      {t('contact.form.fields.countryOrRegion.label', 'Country / Region')} <span className="text-red-500 font-bold">*</span>
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
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-none border text-sm text-charcoal bg-white font-sans transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#019935] ${
                        errors.countryOrRegion ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-sand-border focus:border-[#019935]'
                      }`}
                    />
                    {errors.countryOrRegion && (
                      <p className="text-xs text-red-600 font-sans">{errors.countryOrRegion}</p>
                    )}
                  </div>

                  {/* Role */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="role" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-forest font-sans">
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
                      className="w-full px-4 py-3 sm:py-3.5 rounded-none border border-sand-border focus:border-[#019935] text-sm text-charcoal bg-white font-sans transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#019935]"
                    />
                  </div>

                  {/* Service of Interest */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="serviceInterest" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-forest font-sans">
                      {formData.enquiryType === 'expert'
                        ? 'Primary Domain of Technical Expertise'
                        : t('contact.form.fields.serviceInterest.label', 'Service of Interest')} <span className="text-red-500 font-bold">*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.serviceInterest)}
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-none border text-sm text-charcoal bg-white font-sans transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#019935] ${
                        errors.serviceInterest ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-sand-border focus:border-[#019935]'
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
                      <p className="text-xs text-red-600 font-sans">{errors.serviceInterest}</p>
                    )}
                  </div>

                  {/* Description of Requirement */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="requirementDescription" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-forest font-sans">
                        {formData.enquiryType === 'expert'
                          ? 'Summary of Technical Experience, Track Record & Qualifications'
                          : t('contact.form.fields.requirementDescription.label', 'Brief Description of Your Requirement')} <span className="text-red-500 font-bold">*</span>
                      </label>
                      <span className="text-[11px] text-charcoal-muted font-mono">
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
                      className={`w-full px-4 py-3 sm:py-3.5 rounded-none border text-sm text-charcoal bg-white font-sans transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#019935] leading-relaxed ${
                        errors.requirementDescription ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-sand-border focus:border-[#019935]'
                      }`}
                    />
                    {errors.requirementDescription && (
                      <p className="text-xs text-red-600 font-sans">{errors.requirementDescription}</p>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredContactMethod" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-forest font-sans">
                      {t('contact.form.fields.preferredContactMethod.label', 'Preferred Contact Method')}
                    </label>
                    <select
                      id="preferredContactMethod"
                      name="preferredContactMethod"
                      value={formData.preferredContactMethod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-none border border-sand-border focus:border-[#019935] text-sm text-charcoal bg-white font-sans transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#019935]"
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
                      <label htmlFor="phone" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-forest font-sans">
                        {t('contact.form.fields.phone.label', 'Direct Telephone Number')} <span className="text-red-500 font-bold">*</span>
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
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-none border text-sm text-charcoal bg-white font-sans transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#019935] ${
                          errors.phone ? 'border-red-400 bg-red-50/20 focus:border-red-500' : 'border-sand-border focus:border-[#019935]'
                        }`}
                      />
                      <span className="text-[11px] text-charcoal-muted block font-sans">
                        {t('contact.form.fields.phone.hint', 'Include country dialling code for international routing.')}
                      </span>
                      {errors.phone && (
                        <p className="text-xs text-red-600 font-sans">{errors.phone}</p>
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
                        className="mt-1 w-4 h-4 rounded-none text-[#019935] focus:ring-[#019935] border-sand-border cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm text-charcoal-muted font-sans leading-relaxed">
                        {t('contact.form.fields.privacy.text', 'I acknowledge and agree to the processing of my contact information in accordance with the')}{' '}
                        <Link
                          to={getLocalizedPath('/privacy-policy')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-deep-green font-semibold underline hover:text-forest"
                        >
                          {t('contact.form.fields.privacy.linkText', 'Privacy Policy')}
                        </Link>
                        . <span className="text-red-500 font-bold">*</span>
                      </span>
                    </label>
                    {errors.privacyAcknowledged && (
                      <p className="text-xs text-red-600 font-sans mt-1.5 pl-7">{errors.privacyAcknowledged}</p>
                    )}
                  </div>

                </div>

                {/* Submit Action Button */}
                <div className="pt-6 border-t border-sand-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-charcoal-muted font-sans order-2 sm:order-1">
                    <FileCheck2 className="w-4 h-4 text-gold-dark" />
                    <span>Independent, confidential advisory scoping</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-none bg-[#019935] hover:bg-[#02B840] disabled:bg-[#019935]/60 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-gold order-1 sm:order-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
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
                        <Send className="w-4 h-4 text-gold" />
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
