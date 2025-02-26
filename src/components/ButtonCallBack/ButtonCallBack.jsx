import { useState } from 'react';
import PopUp from 'components/PopUp/PopUp';
import s from './ButtonCallBack.module.scss';

const ButtonCallBack = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  return (
    <>
      <button className={s.buttonCallBack} onClick={openPopUp}>
        Зв’язатися
      </button>

      <PopUp isOpen={isPopUpOpen} onClose={closePopUp} />
    </>
  );
};

export default ButtonCallBack;
