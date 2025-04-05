import { useEffect, useState } from 'react';
import horseHeroImage from 'images/hero/horseHeroImage.jpg';
import horseHeroImageDesktop from 'images/hero/horseHeroImageDesktop.jpg';
import ankonaText from 'images/hero/ankonaText.svg';
import ankonaTextDesktop from 'images/hero/ankonaTextDesktop.svg';
import ButtonCallBack from 'components/ButtonCallBack/ButtonCallBack';
import translations from "components/LanguageSelect/translations";
import s from './SectionHero.module.scss';

const SectionHero = ({ language }) => {
    const t = translations.hero[language];
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <section className={s.sectionHero}>
      <div className={s.heroPhotoContainer}>
        <div className={s.horseHeroImageContainer}>
        <img
          className={s.horseHeroImage}
          src={isDesktop ? horseHeroImageDesktop : horseHeroImage}
          alt="horseHeroImage"
          />
          </div>
        <img className={s.ankonaText} src={isDesktop ? ankonaTextDesktop : ankonaText} alt="ankonaText" />
      </div>
      <div className={`container ${s.sectionHero__container}`}>
        <div className={s.heroBorder}>
          <div className={s.heroBorderDot}></div>
        </div>
        <p className={s.heroDescription}>{t.title}</p>
        <div className={s.heroBorderDesk}>
          <div className={s.heroBorderDotDesk}></div>
        </div>
        <ButtonCallBack language={language}/>
      </div>
    </section>
  );
};

export default SectionHero;
