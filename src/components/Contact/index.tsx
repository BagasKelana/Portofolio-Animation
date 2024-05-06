import InstagramIcon from '@/app/assets/svg/instagram';
import styles from './style.module.scss';
import Github from '@/app/assets/svg/github';
import LinkedinIcon from '@/app/assets/svg/linkedin';
import YoutubeIcon from '@/app/assets/svg/youtube';
import staticPhoto from '@/IMG_0990.jpg';
import CurveLine from '@/components/ui/CurveLine/CurveLine';
import ImageEffect from '../ui/ImageEffect/ImageEffect';

const ContactMe = () => {
  return (
    <div id="CONTACT_CONTAINER" className={styles.contactMeContainer}>
      <section className={styles.connectSection}>
        <div id="CONTACT_SECTION" className={styles.connectTitle}>
          <div className={styles.para1}>
            <span>Let{"'"}s</span>
            <ImageEffect img={staticPhoto} />
          </div>
          <div className={styles.para2}>
            <span>Connect</span>
          </div>
        </div>
        <CurveLine />
        <section className={styles.contactMe}>
          <div>hilalbagas@gmail.com / +62-82141606613</div>
          <section>
            <ul>
              <li>
                <LinkedinIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <Github />
              </li>
              <li>
                <YoutubeIcon />
              </li>
            </ul>
          </section>
        </section>
      </section>
      <section className={styles.footerSection}>
        <div>@2024 Bagas Kelana</div>
        <div>Powered by Vercel, Next.js, and AI Image Generation.</div>
      </section>
    </div>
  );
};

export default ContactMe;
