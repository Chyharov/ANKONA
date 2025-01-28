import logo from 'images/header/logo.svg';
import NavSearch from 'components/NavSearch/NavSearch'
import NavBar from 'components/NavBar/NavBar';
import s from './Header.module.scss';

const header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__container}>

        <img className={s.logo} src={logo} alt="logo" />

        <nav className={s.navigation__container}>
          <NavSearch />
          <select className={s.languageSelect} name="" id="">
            <option className={s.languageSelectOption} value="">УКР</option>
            <option className={s.languageSelectOption} value="">ENG</option>
          </select>

          <NavBar />
        </nav>
        
      </div>
    </header>
  )
};

export default header;
