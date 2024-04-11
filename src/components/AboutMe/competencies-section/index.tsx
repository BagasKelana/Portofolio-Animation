'use client';

import styles from './page.module.scss';
import { Test1 } from '@/app/assets/static-images/images';

const CompetenciesSection = () => {
  return (
    <div className={styles.competenciesContainer}>
      <div className={styles.competenciesTitle}>MY-SKILLS</div>
      <div className={styles.containerCompetencies}>
        {Test1.map((image) => (
          <div key={image.src} className={styles.competenciesCard}>
            <div
              style={{
                backgroundImage: `url(${image.src})`
              }}
              className={styles.innerCard}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetenciesSection;
