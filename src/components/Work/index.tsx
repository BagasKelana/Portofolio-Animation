import Spacer from './spacer/Spacer';
import StickyImages from './sticky-images/StickyImages';
import styles from './style.module.scss';
import WorkCards from './work-cards/WorkCards';

const WorksSection = () => {
  return (
    <section className={styles.worksContainer}>
      {/* <Spacer>
        <p> IT AIN{"'"}T MUCH, BUT</p>
        <p>
          IT{"'"}S <span>PURE DEDICATION</span>
        </p>
      </Spacer> */}
      <StickyImages />
      <Spacer>FEATURED PROJECT</Spacer>
      <WorkCards />
    </section>
  );
};

export default WorksSection;
