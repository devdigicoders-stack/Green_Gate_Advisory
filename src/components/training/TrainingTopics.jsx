import { useTranslation } from 'react-i18next';
import SectionHeader from '../common/SectionHeader';
import TrainingCard from './TrainingCard';
import { TRAINING_TOPICS } from '../../data/trainingData';

export default function TrainingTopics() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-sage/40 border-b border-sand-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeader
          badge={t('training.topics.badge', 'Curriculum Modules')}
          title={t('training.topics.heading', 'Eleven Potential Training Topics')}
          subtitle={t('training.topics.subtitle', 'Modular technical subjects tailored to your organisation\'s operational, compliance, or project development priorities.')}
        />

        {/* 11 Topics Editorial Syllabus Rows (2-col Desktop, 1-col Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {TRAINING_TOPICS.map((topic, idx) => (
            <TrainingCard key={topic.id} topic={topic} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
