import InstagramIcon from '@/app/assets/svg/instagram';
import styles from './style.module.scss';
import Github from '@/app/assets/svg/github';
import LinkedinIcon from '@/app/assets/svg/linkedin';
import YoutubeIcon from '@/app/assets/svg/youtube';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.socialMenu}>
        <ul className={styles.listsMenu}>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <Github />
          </li>
          <li>
            <LinkedinIcon />
          </li>
          <li>
            <YoutubeIcon />
          </li>
        </ul>
      </nav>
      <div className={styles.nameText}>BAGAS KELANA</div>
    </footer>
  );
};

export default Footer;
