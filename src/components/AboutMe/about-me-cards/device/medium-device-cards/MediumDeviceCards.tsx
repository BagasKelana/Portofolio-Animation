import {
  EDUCATION,
  EXPERIENCES,
  INTERNSHIPS_LIST
} from '@/app/assets/object-assets/ObjectAssets';
import AbilitiesSlider from '../../../abilities-slider';
import AutoGraph from '../../../auto-graph';
import MediaIcon from '../../../media-icon';
import TechStack from '../../../tech-stack';
import ExperienceContainer from '../../experience-container/ExperienceContainer';
import ExperienceItems from '../../experience-container/experience-items/ExperienceItems';
import styles from './style.module.scss';
import Image from 'next/image';
import myPhoto from '@/my-photo.png';
import LiveEmojiAnimation from '../../../emoji-component';
import CarouselGallery from '../../../carousel-gallery';

const MediumDeviceCards = () => {
  return (
    <>
      <section className={styles.leftCard}>
        <div className={styles.myBackground}>
          <p>
            Hi, I&apos;m <span>M Hilal Bagas Kelana</span> creative web
            developer, based in Lamongan, East Java, Indonesia. Currently
            freelancing for website development.
          </p>
          <MediaIcon />
        </div>
        <ExperienceContainer key={'INTERNSHIPS'} title="INTERNSHIPS">
          <ExperienceItems experienceLists={INTERNSHIPS_LIST} />
        </ExperienceContainer>
        <ExperienceContainer
          key={'EXPERIENCE (Base on Projects)'}
          title="EXPERIENCE (Base on Projects)"
        >
          <ExperienceItems experienceLists={EXPERIENCES} />
        </ExperienceContainer>
        <TechStack />
        <AutoGraph />
      </section>
      <section className={styles.rightCard}>
        <div className={styles.photoContainer}>
          <Image
            data-scroll
            data-scroll-speed={0.1}
            src={myPhoto}
            alt="my photo"
          />
          <LiveEmojiAnimation />
        </div>
        <ExperienceContainer
          key={'EDUCATION & TRAINING'}
          title="EDUCATION & TRAINING"
        >
          <ExperienceItems experienceLists={EDUCATION} />
        </ExperienceContainer>
        <CarouselGallery />
        <div>
          <AbilitiesSlider />
        </div>
      </section>
    </>
  );
};

export default MediumDeviceCards;
