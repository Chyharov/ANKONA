import { useState, useEffect, useRef } from "react";
import iconSelectLaunguage from 'images/header/iconSelectLaunguage.svg';
import s from "./LanguageSelect.module.scss";

const languages = [
  { code: "ua", label: "УКР" },
  { code: "en", label: "ENG" }
];

// Функція для отримання мови з localStorage, якщо є
const getInitialLanguage = () => {
  const saved = localStorage.getItem('language');
  return saved ? languages.find(lang => lang.code === saved) : languages[0]; // за замовчуванням українська
};

const LanguageSelect = ({ style, onChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(getInitialLanguage()); // ініціалізація мови
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen); // Перемикання випадаючого списку

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang); // Зміна вибраної мови
    localStorage.setItem('language', lang.code); // Зберігаємо в localStorage
    setIsOpen(false);
    onChange?.(lang.code); // Сповіщаємо про зміну мови
  };

  // Оновлення мови при зміні вибору
  useEffect(() => {
    onChange?.(selectedLanguage.code); // Повідомляємо про поточну мову
  }, [selectedLanguage, onChange]);

  return (
    <div className={s.languageSelect} style={style} ref={dropdownRef}>
      <button className={s.selected} onClick={toggleDropdown}>
        <p className={s.currentLanguage}>{selectedLanguage.label}</p>
        <img className={s.iconSelectLaunguage} src={iconSelectLaunguage} alt="Select language" />
      </button>
      {isOpen && (
        <ul className={s.dropdown}>
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`${s.option} ${lang.code === selectedLanguage.code ? s.active : ""}`}
              onClick={() => selectLanguage(lang)} // Вибір мови
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
