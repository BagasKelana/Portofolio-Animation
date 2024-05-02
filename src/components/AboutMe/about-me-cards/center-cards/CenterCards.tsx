import Image from 'next/image';

import styles from './style.module.scss';
import myPhoto from '@/my-photo.png';
import LiveEmojiAnimation from '../../emoji-component';
import CarouselGallery from '../../carousel-gallery';
import ExperienceContainer from '../experience-container/ExperienceContainer';
import ExperienceItems from '../experience-container/experience-items/ExperienceItems';
import { EDUCATION } from '@/app/assets/object-assets/ObjectAssets';

const CenterCards = () => {
  return (
    <section className={styles.centerCard}>
      <div className={styles.photoContainer}>
        <Image
          data-scroll
          data-scroll-speed={0.1}
          src={myPhoto}
          alt="my photo"
          priority
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
    </section>
  );
};

export default CenterCards;
