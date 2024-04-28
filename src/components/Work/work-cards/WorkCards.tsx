import styles from './style.module.scss';

const WorkCards = () => {
  return (
    <div className={styles.workCardsContainer}>
      <div className={styles.workCards}>
        <div
          style={{ backgroundImage: `url(/myskills-Images/58479.jpg)` }}
          className={styles.workCard}
        />
        <div
          style={{
            backgroundImage: `url(/myskills-Images/16683378_5794854.jpg)`
          }}
          className={styles.workCard}
        />
        <div
          style={{ backgroundImage: `url(/myskills-Images/2149416723.jpg)` }}
          className={styles.workCard}
        />
        <div
          style={{
            backgroundImage: `url(/myskills-Images/1688969506602.png)`
          }}
          className={styles.workCard}
        />
      </div>
    </div>
  );
};

export default WorkCards;
