import { useState } from 'react';
import sectionAboutListImg from 'images/about/pict.jpg';
import s from './SectionAbout.module.scss';

const SectionAbout = () => {
  const [isBlockVisible, setIsBlockVisible] = useState(false);

  const toggleBlock = () => {
    setIsBlockVisible(prev => !prev);
  };

  return (
    <section className={s.sectionAbout} id='about'>
      <div className={`container ${s.sectionAboutContainer}`}>
        <h2 className={s.sectionAboutTitle}>Ми спеціалісти сучасної годівлі</h2>
        <div className={s.aboutTitleBorder}></div>
        <p className={s.sectionAboutDescription}>
          Ми впроваджуємо раціональну годівлю як інструмент стратегічного
          управління у тваринництві
        </p>
        <div className={s.sectionAboutListBG}>
          <h3 className={s.sectionAboutListTitle}>Наша стратегія</h3>
          <div className={s.sectionAboutListTitleBorder}></div>
          <ul className={s.sectionAboutList}>
            <li className={s.sectionAboutListItem}>
              Забезпечуємо клієнтів не лише продукцією, а й надихаємо дивитися
              на тваринництво по-новому
            </li>
            <li className={s.sectionAboutListItem}>
              Далекоглядний підхід до роботи, націлений на майбутнє
            </li>
            <li className={s.sectionAboutListItem}>Довготривале партнерство</li>
          </ul>
        </div>
        <img
          className={s.sectionAboutListImg}
          src={sectionAboutListImg}
          alt="sectionAboutListImg"
        />
        <div
          className={s.sectionAboutListBG}
          style={{
            marginBottom: '16px',
            paddingTop: '36px',
            paddingBottom: '36px',
          }}
        >
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
                <p className={s.aboutBlockWhyUsList__ItemDescription}>продукція безпечна для тварин та людей</p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>Далекоглядність</h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>націлені на довготривале партнерство</p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>Гнучкість</h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>мобільні до вирішення поточних проблем</p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>Інноваційність</h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>про пошук нових рішень</p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>Збалансованість</h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>про пошук балансу між витратами та заробітком</p>
              </li>
              <li className={s.aboutBlockWhyUsList__Item}>
                <h4 className={s.aboutBlockWhyUsList__ItemTitle}>Результативність</h4>
                <p className={s.aboutBlockWhyUsList__ItemDescription}>знаємо, як досягати та підтримувати продуктивність</p>
              </li>
            </ul>
            <button className={s.aboutBlockWhyUsBtnClose} onClick={toggleBlock}>Згорнути</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionAbout;
