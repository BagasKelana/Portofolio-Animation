import styles from './style.module.scss';
import Download from '@/app/assets/svg/download';
import Github from '@/app/assets/svg/github';
import InstagramIcon from '@/app/assets/svg/instagram';
import LinkedinIcon from '@/app/assets/svg/linkedin';
import YoutubeIcon from '@/app/assets/svg/youtube';
import RoundedButton from '@/components/ui/RoundedButton';

const MediaIcon = () => {
  const downloadResume = () => {
    const fileUrl =
      '/Default_The_cute_explorer_boy_is_wearing_a_brown_shirt_under_a_0_43ef2ba5-3aa0-4035-bd6e-c144ef4de091_0 2.png';
    const fileName = 'myresume.png';

    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;

    downloadLink.click();
  };
  return (
    <section className={styles.mediaSection}>
      <div className={styles.media}>
        <LinkedinIcon className={styles.mediaIcon} />
        <InstagramIcon className={styles.mediaIcon} />
        <Github className={styles.mediaIcon} />
        <YoutubeIcon className={styles.mediaIcon} />
      </div>
      <RoundedButton title="Download" />
    </section>
  );
};

export default MediaIcon;
