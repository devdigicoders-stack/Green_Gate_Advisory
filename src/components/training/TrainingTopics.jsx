import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import TrainingCard from './TrainingCard';
import { TRAINING_TOPICS } from '../../data/trainingData';

export default function TrainingTopics() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-sage/40 border-b border-sand-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            badge={t('training.topics.badge', 'Curriculum Modules')}
            title={t('training.topics.heading', 'Eleven Potential Training Topics')}
            subtitle={t('training.topics.subtitle', 'Modular technical subjects tailored to your organisation\'s operational, compliance, or project development priorities.')}
          />
        </motion.div>

        {/* 11 Topics Interactive 3D Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINING_TOPICS.map((topic, idx) => (
            <TrainingCard key={topic.id} topic={topic} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
