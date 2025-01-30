import { useState, useRef } from "react";
import s from "./LanguageSelect.module.scss";

const languages = [
  { code: "uk", label: "УКР" },
  { code: "en", label: "ENG" }
];

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={s.languageSelect} ref={dropdownRef}>
      <button className={s.selected} onClick={toggleDropdown}>
        {selectedLanguage.label} <span className={s.arrow}>&#9662;</span>
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
