import { useState, useRef } from "react";
import iconSelectLaunguage from 'images/header/iconSelectLaunguage.svg'
import s from "./LanguageSelect.module.scss";

const languages = [
  { code: "ua", label: "УКР" },
  { code: "en", label: "ENG" }
];

const LanguageSelect = ({ style }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={s.languageSelect} style={style} ref={dropdownRef}>
      <button className={s.selected} onClick={toggleDropdown}>
        <p className={s.currentLanguage}>{selectedLanguage.label}</p> <img className={s.iconSelectLaunguage} src={iconSelectLaunguage} alt="iconSelectLaunguage" />
      </button>
      {isOpen && (
        <ul className={s.dropdown}>
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`${s.option} ${lang.code === selectedLanguage.code ? s.active : ""}`}
              onClick={() => selectLanguage(lang)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
