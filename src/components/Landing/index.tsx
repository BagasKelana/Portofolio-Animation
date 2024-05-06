import LandingContent from './landing-content/LandingContent';
import styles from './style.module.scss';

export default function Landing() {
  return (
    <section id="CONTAINER_LANDING" className={styles.landingContainer}>
      <LandingContent />
    </section>
  );
}
