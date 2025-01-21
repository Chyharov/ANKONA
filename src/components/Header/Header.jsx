import logo from 'images/header/logo.svg';
import searchIcon from 'images/header/searchIcon.svg';
import burgerMenu from 'images/header/burgerMenu.svg';
import s from './Header.module.scss';

const header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__container}>

        <img className={s.logo} src={logo} alt="logo" />

        <div className={s.navigation__container}>
          <img className={s.searchIcon} src={searchIcon} alt="searchIcon" />
          <select className={s.languageSelect} name="" id="">
            <option value="">УКР</option>
            <option value="">ENG</option>
          </select>

          <img className={s.burgerMenu} src={burgerMenu} alt="burgerMenu" />
        </div>
        
      </div>
    </header>
  )
};

export default header;
