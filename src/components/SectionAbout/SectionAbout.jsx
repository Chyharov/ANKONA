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
        <div>
          <h3>
            Ми впроваджуємо раціональну годівлю як інструмент стратегічного
            управління у тваринництві
          </h3>
          <ul>
            <li>
              Забезпечуємо клієнтів не лише продукцією, а й надихаємо дивитися
              на тваринництво по-новому
            </li>
            <li>Далекоглядний підхід до роботи, націлений на майбутнє</li>
            <li>Довготривале партнерство</li>
          </ul>
        </div>
        <img src="" alt="" />
        <div>
          <h3>Наші інновації</h3>
          <ul>
            <li>Науковий та дослідницький підхід до всього, що ми робимо</li>
            <li>
              Пошук нових, альтернативних рішень, що підвищують ефективність
            </li>
            <li>Погляд, спрямований у майбутнє</li>
          </ul>
        </div>
        <button>Розгорнути</button>
      </div>
    </section>
  );
};

export default SectionAbout;
