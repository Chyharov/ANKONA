import { useEffect, useState } from 'react';
import horseHeroImage from 'images/hero/horseHeroImage.jpg';
import horseHeroImageTablet from 'images/hero/horseHeroImageTablet.jpg';
import horseHeroImageDesktop from 'images/hero/horseHeroImageDesktop.jpg';
import ankonaText from 'images/hero/ankonaText.svg';
import ankonaTextTablet from 'images/hero/ankonaTextTablet.svg';
import ankonaTextDesktop from 'images/hero/ankonaTextDesktop.svg';
import ButtonCallBack from 'components/ButtonCallBack/ButtonCallBack';
import translations from 'components/LanguageSelect/translations';
import s from './SectionHero.module.scss';

const SectionHero = ({ language }) => {
  const t = translations.hero[language];
  const [screenSize, setScreenSize] = useState(
    window.innerWidth >= 1440
      ? 'desktop'
      : window.innerWidth >= 768
      ? 'tablet'
      : 'mobile'
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1440) setScreenSize('desktop');
      else if (width >= 768) setScreenSize('tablet');
      else setScreenSize('mobile');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getHeroImage = () => {
    switch (screenSize) {
      case 'desktop':
        return horseHeroImageDesktop;
      case 'tablet':
        return horseHeroImageTablet;
      default:
        return horseHeroImage;
    }
  };

  const getHeroText = () => {
    switch (screenSize) {
      case 'desktop':
        return ankonaTextDesktop;
      case 'tablet':
        return ankonaTextTablet;
      default:
        return ankonaText;
    }
  };

  return (
    <section className={s.sectionHero}>
      <div className={s.heroPhotoContainer}>
        <div className={s.horseHeroImageContainer}>
          <img
            className={s.horseHeroImage}
            src={getHeroImage()}
            alt="horseHeroImage"
          />
        </div>
        <img
          className={s.ankonaText}
          src={getHeroText()}
          alt="ankonaText"
        />
      </div>
      <div className={`container ${s.sectionHero__container}`}>
        <div className={s.heroBorder}>
          <div className={s.heroBorderDot}></div>
        </div>
        <p className={s.heroDescription}>{t.title}</p>
        <div className={s.heroBorderDesk}>
          <div className={s.heroBorderDotDesk}></div>
        </div>
        <ButtonCallBack language={language} />
      </div>
    </section>
  );
};


export default SectionHero;
