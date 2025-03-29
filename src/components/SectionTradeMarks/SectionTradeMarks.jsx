import futtergutLogo from 'images/tradeMarks/futtergut.svg';
import ahrhoffLogo from 'images/tradeMarks/ahrhoff.svg';
import vilifossLogo from 'images/tradeMarks/vilifoss.svg';
import etosLogo from 'images/tradeMarks/etos.svg';
import agrobizekLogo from 'images/tradeMarks/agro-bizek.svg';
import jrsLogo from 'images/tradeMarks/jrs.svg';
import s from './SectionTradeMarks.module.scss';

const SectionTradeMarks = () => {
  return (
    <section className={s.sectionTradeMarks} id="tradeMarks">
      <div className={`container ${s.tradeMarksContainer}`}>
        <h2 className={s.tradeMarksTitle}>Наші Торгові Марки</h2>
        <div className={s.tradeMarksBorder}></div>
        <ul className={s.tradeMarkList}>
          <li className={s.tradeMarkList__item}>
            <img
              className={s.tradeMarkLogofuttergutLogo}
              src={futtergutLogo}
              alt="futtergutLogo"
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
        </ul>
      </div>
    </section>
  );
};

export default SectionTradeMarks;
