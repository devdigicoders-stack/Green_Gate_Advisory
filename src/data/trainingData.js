import { 
  Compass, 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  FileText, 
  Landmark, 
  AlertTriangle, 
  Globe, 
  Trees, 
  BarChart3, 
  Users,
  Building2,
  Factory,
  GraduationCap,
  Target,
  Layers,
  CheckCircle2,
  ListFilter
} from 'lucide-react';

/**
 * Eleven potential training topics from PDF Section 8.
 * Scoped collaboratively based on institutional needs without fabricated pricing or schedules.
 */
export const TRAINING_TOPICS = [
  {
    id: 'carbon-markets-fundamentals',
    number: '01',
    key: 'fundamentals',
    icon: Compass,
    serviceSlug: 'carbon-market-advisory'
  },
  {
    id: 'voluntary-carbon-project-development',
    number: '02',
    key: 'vcmDevelopment',
    icon: Sparkles,
    serviceSlug: 'carbon-market-advisory'
  },
  {
    id: 'ets-carbon-pricing-mechanisms',
    number: '03',
    key: 'etsPricing',
    icon: Scale,
    serviceSlug: 'ets-carbon-pricing-article-6'
  },
  {
    id: 'cbam-embedded-emissions',
    number: '04',
    key: 'cbamEmissions',
    icon: ShieldCheck,
    serviceSlug: 'cbam-advisory'
  },
  {
    id: 'climate-finance-proposals',
    number: '05',
    key: 'proposalWriting',
    icon: FileText,
    serviceSlug: 'climate-finance-advisory'
  },
  {
    id: 'multilateral-funds-orientation',
    number: '06',
    key: 'multilateralFunds',
    icon: Landmark,
    serviceSlug: 'climate-finance-advisory'
  },
  {
    id: 'loss-and-damage-programming',
    number: '07',
    key: 'lossAndDamage',
    icon: AlertTriangle,
    serviceSlug: 'climate-finance-advisory'
  },
  {
    id: 'article-6-cooperative-approaches',
    number: '08',
    key: 'article6',
    icon: Globe,
    serviceSlug: 'ets-carbon-pricing-article-6'
  },
  {
    id: 'nature-based-solutions-land',
    number: '09',
    key: 'natureBased',
    icon: Trees,
    serviceSlug: 'nature-based-solutions'
  },
  {
    id: 'mrv-transparency-ghg-accounting',
    number: '10',
    key: 'mrvAccounting',
    icon: BarChart3,
    serviceSlug: 'corporate-climate-esg'
  },
  {
    id: 'climate-policy-negotiations',
    number: '11',
    key: 'policyNegotiations',
    icon: Users,
    serviceSlug: 'climate-policy-advisory'
  }
];

/**
 * Six potential client audiences for capacity building from PDF Section 8.
 */
export const TRAINING_AUDIENCES = [
  {
    id: 'governments',
    number: '01',
    key: 'governments',
    icon: Building2
  },
  {
    id: 'regulators',
    number: '02',
    key: 'regulators',
    icon: Scale
  },
  {
    id: 'businesses',
    number: '03',
    key: 'businesses',
    icon: Factory
  },
  {
    id: 'project-developers',
    number: '04',
    key: 'developers',
    icon: Sparkles
  },
  {
    id: 'ngos-international',
    number: '05',
    key: 'ngos',
    icon: Globe
  },
  {
    id: 'sustainability-professionals',
    number: '06',
    key: 'professionals',
    icon: GraduationCap
  }
];

/**
 * Six-step proposed planning approach for training programmes from PDF Section 8.
 */
export const TRAINING_APPROACH_STEPS = [
  {
    number: '01',
    key: 'learningRequirements',
    icon: Target
  },
  {
    number: '02',
    key: 'audienceBackground',
    icon: Users
  },
  {
    number: '03',
    key: 'technicalTopics',
    icon: ListFilter
  },
  {
    number: '04',
    key: 'learningObjectives',
    icon: CheckCircle2
  },
  {
    number: '05',
    key: 'programmeFormat',
    icon: Layers
  },
  {
    number: '06',
    key: 'feedbackNextSteps',
    icon: Compass
  }
];
