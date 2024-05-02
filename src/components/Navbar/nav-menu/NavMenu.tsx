'use client';

import NavLists from '@/components/ui/NavLists/NavLists';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

const NavMenu = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;

    const tween = gsap.to(navbar, {
      duration: 0.3,
      ease: 'power1.inOut',
      yPercent: -200,
      scrollTrigger: {
        trigger: '#CONTAINER_LANDING',
        start: 'top+=50 top',
        endTrigger: '#CONTACT_CONTAINER',
        end: 'bottom-=50 bottom',
        toggleActions: 'play reverse play reverse'
      }
    });

    return () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, []);
  return (
    <nav ref={navbarRef} className={styles.navMenu}>
      <NavLists />
    </nav>
  );
};

export default NavMenu;
