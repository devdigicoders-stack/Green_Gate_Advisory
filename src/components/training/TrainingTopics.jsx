import { useTranslation } from 'react-i18next';
import SectionHeader from '../common/SectionHeader';
import TrainingCard from './TrainingCard';
import { TRAINING_TOPICS } from '../../data/trainingData';

export default function TrainingTopics() {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-28 bg-sage/40 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('training.topics.badge', 'Curriculum Modules')}
          title={t('training.topics.heading', 'Eleven Potential Training Topics')}
          subtitle={t('training.topics.subtitle', 'Modular technical subjects tailored to your organisation\'s operational, compliance, or project development priorities.')}
        />

        {/* 11 Topics Responsive Grid (3-col Desktop, 2-col Tablet, 1-col Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINING_TOPICS.map((topic, idx) => (
            <TrainingCard key={topic.id} topic={topic} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
