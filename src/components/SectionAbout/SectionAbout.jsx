import { useState, useEffect } from 'react';
import aboutListImg from 'images/about/pict.jpg';
import aboutListImgDesk from 'images/about/pictDesk.jpg';
import translations from 'components/LanguageSelect/translations';
import s from './SectionAbout.module.scss';

const SectionAbout = ({ language }) => {
  const t = translations.about[language];
  const [isBlockVisible, setIsBlockVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    window.innerWidth >= 1440 ? aboutListImgDesk : aboutListImg
  );
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1440;
      setIsDesktop(isLargeScreen);
      setImageSrc(isLargeScreen ? aboutListImgDesk : aboutListImg);
      setIsBlockVisible(isLargeScreen);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleBlock = () => {
    setIsBlockVisible(prev => !prev);
  };

  return (
    <section className={s.sectionAbout} id="about">
      <div className={`container ${s.sectionAboutContainer}`}>
        <h2 className={s.sectionAboutTitle}>{t.title}</h2>
        <div className={s.aboutTitleBorder}></div>
        <p className={s.sectionAboutDescription}>{t.titleDescription}</p>
        <ul className={s.aboutList}>
          <li className={s.aboutList__item}>
            <div className={s.sectionAboutListLeftBG}>
              <h3 className={s.sectionAboutListTitle}>{t.OurStrategy}</h3>
              <div className={s.sectionAboutListTitleBorder}></div>
              <ul className={s.sectionAboutList}>
                <li className={s.sectionAboutListItem}>
                  {t.OurStrategyListItem}
                </li>
                <li className={s.sectionAboutListItem}>
                  {t.OurStrategyListItemSecond}
                </li>
                <li className={s.sectionAboutListItem}>
                  {t.OurStrategyListItemThird}
                </li>
              </ul>
            </div>
          </li>
          <li className={s.aboutList__item}>
            <img
              className={s.sectionAboutListImg}
              src={imageSrc}
              alt="aboutListImg"
            />
          </li>
          <li className={s.aboutList__item}>
            <div className={s.sectionAboutListRightBG}>
              <h3 className={s.sectionAboutListTitle}>{t.OurInnovation}</h3>
              <div className={s.sectionAboutListTitleBorder}></div>
              <ul className={s.sectionAboutList}>
                <li className={s.sectionAboutListItem}>
                  {t.OurInnovationListItem}
                </li>
                <li className={s.sectionAboutListItem}>
                  {t.OurInnovationListItemSecond}
                </li>
                <li className={s.sectionAboutListItem}>
                  {t.OurInnovationListItemThird}
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {!isDesktop && !isBlockVisible && (
          <button className={s.sectionAboutBtn} onClick={toggleBlock}>
            {t.button}
          </button>
        )}

        {(isDesktop || isBlockVisible) && (
          <div className={s.sectionAboutBlockWhyUs}>
            <h3 className={s.aboutBlockWhyUsTitle}>{t.blockWhyUsTitle}</h3>
            <ul className={s.aboutBlockWhyUsListLeft}>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>
                  {t.Reliability}
                </h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  {t.ReliabilityDescription}
                </p>
              </li>
              <li className={s.aboutBlockWhyUsList__ItemTabletRight}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>
                  {t.Farsightedness}
                </h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  {t.FarsightednessDescription}
                </p>
              </li>
              <li className={s.aboutBlockWhyUsList__ItemTabletLeft}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>
                  {t.Flexibility}
                </h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  {t.FlexibilityDescription}
                </p>
              </li>
            </ul>
            <ul className={s.aboutBlockWhyUsList}>
                <li className={`${s.aboutBlockWhyUsList__Item} ${s.aboutBlockWhyUsList__ItemInnovationTablet}`}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>
                  {t.Innovativeness}
                </h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  {t.InnovativenessDescription}
                </p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>
                  {t.Balance}
                </h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  {t.BalanceDescription}
                </p>
              </li>
                <li className={`${s.aboutBlockWhyUsList__Item} ${s.aboutBlockWhyUsList__ItemResultTablet}`}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>
                  {t.Performance}
                </h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  {t.PerformanceDescription}
                </p>
              </li>
            </ul>
            {!isDesktop && (
              <button
                className={s.aboutBlockWhyUsBtnClose}
                onClick={toggleBlock}
              >
                {t.buttonBack}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionAbout;
