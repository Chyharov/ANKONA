import logo from 'images/header/logo.svg';
import NavSearch from 'components/NavSearch/NavSearch';
import NavBar from 'components/NavBar/NavBar';
import LanguageSelect from 'components/LanguageSelect/LanguageSelect';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <img className={s.logo} src={logo} alt="logo" />

        <nav className={s.navigation__container}>
          <NavSearch />
          <LanguageSelect />
          <NavBar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
