import React, { useState, useContext } from "react";
import { scroller } from "react-scroll";
import { SearchContext } from "components/SearchContext";
import searchIcon from "images/header/searchIcon.svg";
import searchIconInput from "images/header/searchIconInput.svg";
import s from "./NavSearch.module.scss";

const NavSearch = ({ style }) => {
  const { setSearchQuery } = useContext(SearchContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (!isSearchOpen) {
      scroller.scrollTo("search", {
        smooth: true,
        offset: -70,
        duration: 500,
      });
    }
  };

  const handleSearch = (e) => {
    setInputValue(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <button className={s.navSearch__button} style={style} onClick={toggleSearch}>
        <img className={s.searchIcon} src={searchIcon} alt="Search" />
      </button>

      {isSearchOpen && (
        <div className={s.bgShadow} onClick={toggleSearch}>
          <div className={`container ${s.searchContainer}`} onClick={(e) => e.stopPropagation()}>
            <div className={s.inputContainer}>
              <input
                type="text"
                className={s.searchInput}
                placeholder="Введіть пошуковий запит"
                value={inputValue}
                onChange={handleSearch}
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
