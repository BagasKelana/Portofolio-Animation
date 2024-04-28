import {
  EXPERIENCES,
  INTERNSHIPS_LIST
} from '@/app/assets/object-assets/ObjectAssets';
import AbilitiesSlider from '../../abilities-slider';
import ExperienceContainer from '../experience-container/ExperienceContainer';
import ExperienceItems from '../experience-container/experience-items/ExperienceItems';
import styles from './style.module.scss';

const RightCards = () => {
  return (
    <section className={styles.rightCard}>
      <ExperienceContainer key={'INTERNSHIPS'} title="INTERNSHIPS">
        <ExperienceItems experienceLists={INTERNSHIPS_LIST} />
      </ExperienceContainer>
      <ExperienceContainer
        key={'EXPERIENCE (Base on Projects)'}
        title="EXPERIENCE (Base on Projects)"
      >
        <ExperienceItems experienceLists={EXPERIENCES} />
      </ExperienceContainer>
      <div>
        <AbilitiesSlider />
      </div>
    </section>
  );
};

export default RightCards;
