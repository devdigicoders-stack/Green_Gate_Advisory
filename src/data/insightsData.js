import { 
  ShieldCheck, 
  Sparkles, 
  Scale, 
  Landmark, 
  Globe, 
  Trees, 
  BarChart3, 
  FileText,
  FileSpreadsheet,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

/**
 * Eight source-approved Insights Categories from PDF Section 7.
 * Used for interactive filtering, navigation, and structured discovery.
 */
export const INSIGHTS_CATEGORIES = [
  {
    id: 'all',
    translationKey: 'all',
    icon: Globe
  },
  {
    id: 'cbam-eu-regulation',
    translationKey: 'cbam',
    icon: ShieldCheck,
    serviceSlug: 'cbam-advisory'
  },
  {
    id: 'vcm-carbon-projects',
    translationKey: 'vcm',
    icon: Sparkles,
    serviceSlug: 'carbon-market-advisory'
  },
  {
    id: 'ets-carbon-pricing',
    translationKey: 'ets',
    icon: Scale,
    serviceSlug: 'ets-carbon-pricing-article-6'
  },
  {
    id: 'climate-finance-guidance',
    translationKey: 'climateFinance',
    icon: Landmark,
    serviceSlug: 'climate-finance-advisory'
  },
  {
    id: 'article-6-cooperation',
    translationKey: 'article6',
    icon: Globe,
    serviceSlug: 'ets-carbon-pricing-article-6'
  },
  {
    id: 'nature-based-solutions',
    translationKey: 'natureBased',
    icon: Trees,
    serviceSlug: 'nature-based-solutions'
  },
  {
    id: 'corporate-ghg-esg',
    translationKey: 'corporateEsg',
    icon: BarChart3,
    serviceSlug: 'corporate-climate-esg'
  },
  {
    id: 'climate-policy-adaptation',
    translationKey: 'climatePolicy',
    icon: FileText,
    serviceSlug: 'climate-policy-advisory'
  }
];

/**
 * Six PDF-recommended Downloadable Resources.
 * All resources maintain `available: false` until client confirmation,
 * preventing fake download links or dead clicks per strict editorial instructions.
 */
export const DOWNLOADABLE_RESOURCES = [
  {
    id: 'cbam-exporter-checklist',
    translationKey: 'cbamChecklist',
    format: 'PDF Checklist',
    icon: FileSpreadsheet,
    available: false,
    downloadUrl: null,
    serviceSlug: 'cbam-advisory'
  },
  {
    id: 'carbon-project-eligibility-checklist',
    translationKey: 'carbonProjectChecklist',
    format: 'Technical Diagnostic',
    icon: Sparkles,
    available: false,
    downloadUrl: null,
    serviceSlug: 'carbon-market-advisory'
  },
  {
    id: 'climate-finance-readiness-checklist',
    translationKey: 'climateFinanceChecklist',
    format: 'Readiness Framework',
    icon: CheckCircle2,
    available: false,
    downloadUrl: null,
    serviceSlug: 'climate-finance-advisory'
  },
  {
    id: 'climate-finance-concept-guide',
    translationKey: 'conceptNoteGuide',
    format: 'Planning Guide',
    icon: BookOpen,
    available: false,
    downloadUrl: null,
    serviceSlug: 'climate-finance-advisory'
  },
  {
    id: 'ets-readiness-checklist',
    translationKey: 'etsChecklist',
    format: 'Compliance Checklist',
    icon: Scale,
    available: false,
    downloadUrl: null,
    serviceSlug: 'ets-carbon-pricing-article-6'
  },
  {
    id: 'corporate-emissions-template',
    translationKey: 'emissionsTemplate',
    format: 'Data Collection Template',
    icon: FileText,
    available: false,
    downloadUrl: null,
    serviceSlug: 'corporate-climate-esg'
  }
];

/**
 * Article repository structure.
 * Per strict PDF guidelines, Green Gate Advisory does not fabricate published
 * news, authors, or dates. When approved articles are delivered, they are added here.
 */
export const APPROVED_ARTICLES = [];
