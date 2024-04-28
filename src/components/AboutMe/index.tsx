'use client';

import styles from './style.module.scss';
import CompetenciesSection from './competencies-section';
import AboutMeCards from './about-me-cards/AboutMeCards';

const AboutMe = () => {
  return (
    <section className={styles.aboutContainer}>
      <section className={styles.about}>
        <div className={styles.aboutTitle}>
          <div className={styles.title}>
            <span>ABOUT</span>ME
          </div>
          {/* <div className={styles.containerLineHight}>
            <RandomWordEffect word="Based In Indonesia" />
            <div className={styles.lineHighlight} />
            <RandomWordEffect word="Journey Of Life" />
            <div className={styles.lineHighlight} />
            <RandomWordEffect word="Curious People" />
          </div> */}
        </div>
        <AboutMeCards />
        <CompetenciesSection />
      </section>
    </section>
  );
};

export default AboutMe;
