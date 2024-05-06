import styles from './style.module.scss';

import Github from '@/app/assets/svg/github';
import InstagramIcon from '@/app/assets/svg/instagram';
import LinkedinIcon from '@/app/assets/svg/linkedin';
import YoutubeIcon from '@/app/assets/svg/youtube';
import RoundedButton from '@/components/ui/RoundedButton';

const MediaIcon = () => {
  return (
    <section className={styles.mediaSection}>
      <div className={styles.media}>
        <LinkedinIcon className={styles.mediaIcon} />
        <InstagramIcon className={styles.mediaIcon} />
        <Github className={styles.mediaIcon} />
        <YoutubeIcon className={styles.mediaIcon} />
      </div>
      <a
        href="/Default_The_cute_explorer_boy_is_wearing_a_brown_shirt_under_a_0_43ef2ba5-3aa0-4035-bd6e-c144ef4de091_0 2.png"
        target="_blank"
        rel="noopener noreferrer"
        download="BagasLamaResume.png"
      >
        <RoundedButton title="Resume" />
      </a>
    </section>
  );
};

export default MediaIcon;
