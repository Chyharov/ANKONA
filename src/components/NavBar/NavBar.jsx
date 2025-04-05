import { useState, useEffect } from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import s from './NavBar.module.scss';

const NavBar = ({ style = {}, language }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1439);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1439);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={s.navBar} style={style} onClick={e => e.stopPropagation()}>
      <nav className={s.nav}>
        {isMobile ? (
          <MobileNavigation language={language} />
        ) : (
          <Navigation language={language} />
        )}
      </nav>
    </div>
  );
};

export default NavBar;
