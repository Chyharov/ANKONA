import { useState } from 'react';
import PopUp from 'components/PopUp/PopUp';
import translations from "components/LanguageSelect/translations";
import s from './ButtonCallBack.module.scss';

const ButtonCallBack = ({ style, language }) => {
  const t = translations.hero[language];
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  return (
    <>
      <button className={s.buttonCallBack} style={style} onClick={openPopUp}>
        {t.button}
      </button>

      <PopUp isOpen={isPopUpOpen} onClose={closePopUp} />
    </>
  );
};

export default ButtonCallBack;
