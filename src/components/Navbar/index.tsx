import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo} />
      <nav className={styles.navMenu}>
        <ul className={`${styles.listsMenu} ulListMenu`}>
          <li>
            <span>ABOUT</span>
          </li>
          <li>
            <span>WORK</span>
          </li>
          <li>
            <span>CONTACT</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
