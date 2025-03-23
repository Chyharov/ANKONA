import { useState, useEffect } from 'react';
import aboutListImg from 'images/about/pict.jpg';
import aboutListImgDesk from 'images/about/pictDesk.jpg';
import s from './SectionAbout.module.scss';

const SectionAbout = () => {
  const [isBlockVisible, setIsBlockVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(aboutListImg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setImageSrc(aboutListImgDesk);
      } else {
        setImageSrc(aboutListImg);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleBlock = () => {
    setIsBlockVisible(prev => !prev);
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
                <li className={s.sectionAboutListItem}>
                  Забезпечуємо клієнтів не лише продукцією, а й надихаємо
                  дивитися на тваринництво по-новому
                </li>
                <li className={s.sectionAboutListItem}>
                  Далекоглядний підхід до роботи, націлений на майбутнє
                </li>
                <li className={s.sectionAboutListItem}>
                  Довготривале партнерство
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
              <h3 className={s.sectionAboutListTitle}>Наші інновації</h3>
              <div className={s.sectionAboutListTitleBorder}></div>
              <ul className={s.sectionAboutList}>
                <li className={s.sectionAboutListItem}>
                  Науковий та дослідницький підхід до всього, що ми робимо
                </li>
                <li className={s.sectionAboutListItem}>
                  Пошук нових, альтернативних рішень, що підвищують ефективність
                </li>
                <li className={s.sectionAboutListItem}>
                  Погляд, спрямований у майбутнє
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {!isBlockVisible && (
          <button className={s.sectionAboutBtn} onClick={toggleBlock}>
            Розгорнути
          </button>
        )}
        {isBlockVisible && (
          <div className={s.sectionAboutBlockWhyUs}>
            <h3 className={s.aboutBlockWhyUsTitle}>Чому ми?</h3>
            <ul className={s.aboutBlockWhyUsList}>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>Надійність</h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  продукція безпечна для тварин та людей
                </p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>
                  Далекоглядність
                </h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  націлені на довготривале партнерство
                </p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>Гнучкість</h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  мобільні до вирішення поточних проблем
                </p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>
                  Інноваційність
                </h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  про пошук нових рішень
                </p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>
                  Збалансованість
                </h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  про пошук балансу між витратами та заробітком
                </p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>
                  Результативність
                </h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>
                  знаємо, як досягати та підтримувати продуктивність
                </p>
              </li>
            </ul>
            <button className={s.aboutBlockWhyUsBtnClose} onClick={toggleBlock}>
              Згорнути
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionAbout;
