import AutoGraph from '../../auto-graph';
import MediaIcon from '../../media-icon';
import TechStack from '../../tech-stack';
import styles from './style.module.scss';

const LeftCards = () => {
  return (
    <section className={styles.leftCard}>
      <div className={styles.myBackground}>
        <p>
          Hi, I&apos;m <span>M Hilal Bagas Kelana</span> creative web developer,
          based in Lamongan, East Java, Indonesia. Currently freelancing for
          website development.
        </p>
        <MediaIcon />
      </div>
      <TechStack />
      <AutoGraph />
    </section>
  );
};

export default LeftCards;
