'use client';

const NavLists = () => {
  const handleOnNavigation = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    let targetFocus;

    if (e.currentTarget) {
      if (e.currentTarget.id === 'ABOUT') {
        targetFocus = document.querySelector('#ABOUT_SECTION');
      } else if (e.currentTarget.id === 'WORK') {
        targetFocus = document.querySelector('#WORK_SECTION');
      } else {
        targetFocus = document.querySelector('#CONTACT_SECTION');
      }

      targetFocus?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul>
      <li id="ABOUT" onClick={handleOnNavigation}>
        ABOUT
      </li>
      <li id="WORK" onClick={handleOnNavigation}>
        WORK
      </li>
      <li id="CONTACT" onClick={handleOnNavigation}>
        CONTACT
      </li>
    </ul>
  );
};

export default NavLists;
