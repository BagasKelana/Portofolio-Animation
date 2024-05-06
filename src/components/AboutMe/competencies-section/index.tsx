'use client';

import Card from '@/components/ui/Card/Card';
import styles from './page.module.scss';

const mySkillsAssets = [
  {
    title: 'Responsive Design',
    img: '/myskills-Images/58479.jpg',
    backgroundColor: '#00000'
  },
  {
    title: 'Troubleshooting',
    img: '/myskills-Images/1688969506602.png',
    backgroundColor: '#00000'
  },
  {
    title: 'Web Animation',
    img: '/myskills-Images/16683378_5794854.jpg',
    backgroundColor: '#00000'
  }
];

const CompetenciesSection = () => {
  return (
    <div className={styles.competenciesContainer}>
      <div className={styles.competenciesTitle}>CAPABILITIES</div>
      <div className={styles.containerCompetencies}>
        {mySkillsAssets.map((asset) => (
          <Card
            className="competenciesCard"
            key={asset.title}
            backgroundUrl={asset.img}
            imgUrl={asset.img}
          >
            {asset.title}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompetenciesSection;
