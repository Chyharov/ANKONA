import React, { useState } from 'react';
import searchIcon from 'images/header/searchIcon.svg';
import s from './NavSearch.module.scss';

const NavSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
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
        aria-label="Search"
        onClick={toggleSearch}
      >
        <img className={s.searchIcon} src={searchIcon} alt="Search" />
      </button>

      {isSearchOpen && (
        <div className={s.bgShadow} onClick={handleOutsideClick}>
          <input
            type="text"
            className={s.searchInput}
            placeholder="Type to search..."
          />
        </div>
      )}
    </>
  );
};

export default NavSearch;
