import ankonaLogo from 'images/tradeMarks/Ankona.svg';
import ahrhoffLogo from 'images/tradeMarks/ahrhoff.svg';
import vilifossLogo from 'images/tradeMarks/vilifoss.svg';
import etosLogo from 'images/tradeMarks/etos.svg';
import agrobizekLogo from 'images/tradeMarks/agro-bizek.svg';
import jrsLogo from 'images/tradeMarks/jrs.svg';
import translations from 'components/LanguageSelect/translations';
import s from './SectionTradeMarks.module.scss';

const SectionTradeMarks = ({language}) => {
  const t = translations.tradeMarks[language];
  return (
    <section className={s.sectionTradeMarks} id="tradeMarks">
      <div className={`container ${s.tradeMarksContainer}`}>
        <h2 className={s.tradeMarksTitle}>{t.title}</h2>
        <div className={s.tradeMarksBorder}></div>
        <ul className={s.tradeMarkList}>
          <div className={s.tradeMarkList__itemContainer}>
          <li className={s.tradeMarkList__item}>
            <img
              className={s.tradeMarkLogoankonaLogo}
              src={ankonaLogo}
              alt="ankonaLogo"
            />
          </li>
          <li className={s.tradeMarkList__item}>
            <img
              className={s.tradeMarkLogoahrhoffLogo}
              src={ahrhoffLogo}
              alt="ahrhoffLogo"
            />
          </li>
          <li className={s.tradeMarkList__item}>
            <img
              className={s.tradeMarkLogovilifossLogo}
              src={vilifossLogo}
              alt="vilifossLogo"
            />
          </li>
          </div>
          <div className={s.tradeMarkList__itemContainer}>
          <li className={s.tradeMarkList__item}>
            <img
              className={s.tradeMarkLogoetosLogo}
              src={etosLogo}
              alt="etosLogo"
            />
          </li>
          <li className={s.tradeMarkList__item}>
            <img
              className={s.tradeMarkLogoagrobizekLogo}
              src={agrobizekLogo}
              alt="agrobizekLogo"
            />
          </li>
          <li className={s.tradeMarkList__item}>
            <img
              className={s.tradeMarkLogojrsLogo}
              src={jrsLogo}
              alt="jrsLogo"
            />
          </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default SectionTradeMarks;
