import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import searchIcon from 'images/header/searchIcon.svg';
import searchIconInput from 'images/header/searchIconInput.svg';
import s from './NavSearch.module.scss';

const NavSearch = ({ style }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchAndScroll = () => {
    setIsSearchOpen(true); // Відкриваємо пошук

    // Прокручуємо до секції "goods"
    scroller.scrollTo('goods', {
      smooth: true,
      offset: -70,
      duration: 500,
    });
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleOutsideClick = event => {
    if (event.target === event.currentTarget) {
      closeSearch();
    }
  };

  return (
    <>
      <button
        className={s.navSearch__button}
        style={style}
        aria-label="Search"
        onClick={toggleSearchAndScroll}
      >
        <img className={s.searchIcon} src={searchIcon} alt="Search" />
      </button>
      {isSearchOpen && (
        <div className={s.bgShadow} onClick={handleOutsideClick}>
          <div className={`container ${s.searchContainer}`}>
            <div className={s.inputContainer}>
              <input
                type="text"
                className={s.searchInput}
                placeholder="Введіть пошуковий запит"
              />
              <img className={s.searchIconInput} src={searchIconInput} alt="searchIconInput" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavSearch;
