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
      <Spacer id="WORK_SECTION">
        <span>WORK</span>
        <span>SPACE</span>
      </Spacer>
      <WorkCards />
    </section>
  );
};

export default WorksSection;
