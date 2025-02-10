import { useState } from 'react';
import horseHeroImage from 'images/hero/horseHeroImage.jpg';
import ankonaText from 'images/hero/ankonaText.svg';
import PopUp from 'components/PopUp/PopUp';
import s from './SectionHero.module.scss';

const SectionHero = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  return (
    <section className={s.sectionHero}>
      <div className={s.heroPhotoContainer}>
        <img
          className={s.horseHeroImage}
          src={horseHeroImage}
          alt="horseHeroImage"
        />
        <img className={s.ankonaText} src={ankonaText} alt="ankonaText" />
      </div>
      <div className={`container ${s.sectionHero__container}`}>
        <div className={s.heroBorder}>
          <div className={s.heroBorderDot}></div>
        </div>
        <p className={s.heroDescription}>Нова стратегія раціональної годівлі</p>
        <button className={s.heroButton} onClick={openPopUp}>
          Зв’язатися
        </button>
      </div>

      <PopUp isOpen={isPopUpOpen} onClose={closePopUp} />
    </section>
  );
};

export default SectionHero;
