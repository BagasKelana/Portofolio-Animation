import NavMenu from './nav-menu/NavMenu';
import styles from './style.module.scss';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <NavMenu />
    </header>
  );
};

export default Navbar;
