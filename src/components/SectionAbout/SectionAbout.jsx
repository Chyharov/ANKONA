import { useState, useEffect } from 'react';
import aboutListImg from 'images/about/pict.jpg';
import aboutListImgDesk from 'images/about/pictDesk.jpg';
import s from './SectionAbout.module.scss';

const SectionAbout = () => {
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
      setIsBlockVisible(isLargeScreen); // Завжди показувати блок на великих екранах
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleBlock = () => {
    setIsBlockVisible((prev) => !prev);
  };

  return (
    <section className={s.sectionAbout} id="about">
      <div className={`container ${s.sectionAboutContainer}`}>
        <h2 className={s.sectionAboutTitle}>Ми спеціалісти сучасної годівлі</h2>
        <div className={s.aboutTitleBorder}></div>
        <p className={s.sectionAboutDescription}>
          Ми впроваджуємо раціональну годівлю як інструмент стратегічного
          управління у тваринництві
        </p>
        <ul className={s.aboutList}>
          <li className={s.aboutList__item}>
            <div className={s.sectionAboutListLeftBG}>
              <h3 className={s.sectionAboutListTitle}>Наша стратегія</h3>
              <div className={s.sectionAboutListTitleBorder}></div>
              <ul className={s.sectionAboutList}>
                <li className={s.sectionAboutListItem}>Забезпечуємо клієнтів не лише продукцією, а й надихаємо дивитися на тваринництво по-новому</li>
                <li className={s.sectionAboutListItem}>Далекоглядний підхід до роботи, націлений на майбутнє</li>
                <li className={s.sectionAboutListItem}>Довготривале партнерство</li>
              </ul>
            </div>
          </li>
          <li className={s.aboutList__item}>
            <img className={s.sectionAboutListImg} src={imageSrc} alt="aboutListImg" />
          </li>
          <li className={s.aboutList__item}>
            <div className={s.sectionAboutListRightBG}>
              <h3 className={s.sectionAboutListTitle}>Наші інновації</h3>
              <div className={s.sectionAboutListTitleBorder}></div>
              <ul className={s.sectionAboutList}>
                <li className={s.sectionAboutListItem}>Науковий та дослідницький підхід до всього, що ми робимо</li>
                <li className={s.sectionAboutListItem}>Пошук нових, альтернативних рішень, що підвищують ефективність</li>
                <li className={s.sectionAboutListItem}>Погляд, спрямований у майбутнє</li>
              </ul>
            </div>
          </li>
        </ul>

        {!isDesktop && !isBlockVisible && (
          <button className={s.sectionAboutBtn} onClick={toggleBlock}>
            Розгорнути
          </button>
        )}

        {(isDesktop || isBlockVisible) && (
          <div className={s.sectionAboutBlockWhyUs}>
            <h3 className={s.aboutBlockWhyUsTitle}>Чому ми?</h3>
            <ul className={s.aboutBlockWhyUsListLeft}>
              <li className={s.aboutBlockWhyUsList__Item}><h4 className={s.aboutBlockWhyUsList__ItemTitle}>Надійність</h4><p className={s.aboutBlockWhyUsList__ItemDescription}>Продукція безпечна для тварин та людей</p></li>
              <li className={s.aboutBlockWhyUsList__Item}><h4 className={s.aboutBlockWhyUsList__ItemTitle}>Далекоглядність</h4><p className={s.aboutBlockWhyUsList__ItemDescription}>Націлені на довготривале партнерство</p></li>
              <li className={s.aboutBlockWhyUsList__Item}><h4 className={s.aboutBlockWhyUsList__ItemTitle}>Гнучкість</h4><p className={s.aboutBlockWhyUsList__ItemDescription}>Мобільні до вирішення поточних проблем</p></li>
            </ul>
            <ul className={s.aboutBlockWhyUsList}>
              <li className={s.aboutBlockWhyUsList__Item}><h4 className={s.aboutBlockWhyUsList__ItemTitle}>Інноваційність</h4><p className={s.aboutBlockWhyUsList__ItemDescription}>Про пошук нових рішень</p></li>
              <li className={s.aboutBlockWhyUsList__Item}><h4 className={s.aboutBlockWhyUsList__ItemTitle}>Збалансованість</h4><p className={s.aboutBlockWhyUsList__ItemDescription}>Про пошук балансу між витратами та заробітком</p></li>
              <li className={s.aboutBlockWhyUsList__Item}><h4 className={s.aboutBlockWhyUsList__ItemTitle}>Результативність</h4><p className={s.aboutBlockWhyUsList__ItemDescription}>Знаємо, як досягати та підтримувати продуктивність</p></li>
            </ul>
            {!isDesktop && (
              <button className={s.aboutBlockWhyUsBtnClose} onClick={toggleBlock}>
                Згорнути
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionAbout;
