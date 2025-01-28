import searchIcon from 'images/header/searchIcon.svg';
import s from './NavSearch.module.scss';

const NavSearch = () => {
  return (
      <>
        <img className={s.searchIcon} src={searchIcon} alt="searchIcon" />
      </>
  )
};

export default NavSearch;
