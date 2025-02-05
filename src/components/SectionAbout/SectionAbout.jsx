import sectionAboutListImg from 'images/about/pict.jpg'
import s from './SectionAbout.module.scss';

const SectionAbout = () => {
  return (
    <section className={s.sectionAbout}>
      <div className={`container ${s.sectionAboutContainer}`}>
        <h2 className={s.sectionAboutTitle}>Ми спеціалісти сучасної годівлі</h2>
        <div className={s.aboutTitleBorder}></div>
        <p className={s.sectionAboutDescription}>
          Ми впроваджуємо раціональну годівлю як інструмент стратегічного
          управління у тваринництві
        </p>
        <div className={s.sectionAboutListBG}>
          <h3 className={s.sectionAboutListTitle}>
            Наша стратегія
          </h3>
          <div className={s.sectionAboutListTitleBorder}></div>
          <ul className={s.sectionAboutList}>
            <li className={s.sectionAboutListItem}>
              Забезпечуємо клієнтів не лише продукцією, а й надихаємо дивитися
              на тваринництво по-новому
            </li>
            <li className={s.sectionAboutListItem}>Далекоглядний підхід до роботи, націлений на майбутнє</li>
            <li className={s.sectionAboutListItem}>Довготривале партнерство</li>
          </ul>
        </div>
        <img className={s.sectionAboutListImg} src={sectionAboutListImg} alt="sectionAboutListImg" />
        <div className={s.sectionAboutListBG} style={{marginBottom: '16px', paddingTop: '36px', paddingBottom: '36px'}}>
          <h3 className={s.sectionAboutListTitle}>Наші інновації</h3>
          <div className={s.sectionAboutListTitleBorder}></div>
          <ul className={s.sectionAboutList}>
            <li className={s.sectionAboutListItem}>Науковий та дослідницький підхід до всього, що ми робимо</li>
            <li className={s.sectionAboutListItem}>
              Пошук нових, альтернативних рішень, що підвищують ефективність
            </li>
            <li className={s.sectionAboutListItem}>Погляд, спрямований у майбутнє</li>
          </ul>
        </div>
        <button className={s.sectionAboutBtn}>Розгорнути</button>
      </div>
    </section>
  );
};

export default SectionAbout;
