import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from 'images/header/logo.svg';
import logoDesk from 'images/header/logoDesk.svg';
import NavSearch from 'components/NavSearch/NavSearch';
import NavBar from 'components/NavBar/NavBar';
import LanguageSelect from 'components/LanguageSelect/LanguageSelect';
import s from './Header.module.scss';

const Header = ({ navSearchStyle, languageSelectStyle, navBarStyle, style, language, onLanguageChange, navItems }) => {
  const [currentLogo, setCurrentLogo] = useState(window.innerWidth >= 1440 ? logoDesk : logo);

  useEffect(() => {
    const handleResize = () => {
      setCurrentLogo(window.innerWidth >= 1440 ? logoDesk : logo);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <Link to='/'>
          <img className={s.logo} src={currentLogo} alt="logo" />
        </Link>
        <nav className={s.navigation__container} style={style}>
          <NavSearch style={navSearchStyle} language={language}/>
          <LanguageSelect style={languageSelectStyle} onChange={onLanguageChange} />
          <NavBar style={navBarStyle} language={language} navItems={navItems} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
