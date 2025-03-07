import futtergutLogo from 'images/tradeMarks/futtergut.svg';
import ahrhoffLogo from 'images/tradeMarks/ahrhoff.svg';
import vilifossLogo from 'images/tradeMarks/vilifoss.svg';
import etosLogo from 'images/tradeMarks/etos.svg';
import agrobizekLogo from 'images/tradeMarks/agro-bizek.svg';
import jrsLogo from 'images/tradeMarks/jrs.svg';
import s from './SectionTradeMarks.module.scss';

const SectionTradeMarks = () => {
  return (
    <section className={s.sectionTradeMarks}>
          <div className={`container ${s.tradeMarksContainer}`}>
              <h2 className={s.tradeMarksTitle}>Наші Торгові Марки</h2>
              <div className={s.tradeMarksBorder}></div>
              <ul className={s.tradeMarkList}>
                  <li className={s.tradeMarkList__item}>
                      <img className={s.tradeMarkLogo} style={{width: '162px'}} src={futtergutLogo} alt="futtergutLogo" />
                  </li>
                  <li className={s.tradeMarkList__item}>
                      <img className={s.tradeMarkLogo} style={{width: '147px'}} src={ahrhoffLogo} alt="ahrhoffLogo" />
                  </li>
                  <li className={s.tradeMarkList__item}>
                      <img className={s.tradeMarkLogo} style={{width: '232px'}} src={vilifossLogo} alt="vilifossLogo" />
                  </li>
                  <li className={s.tradeMarkList__item}>
                      <img className={s.tradeMarkLogo} style={{width: '144px'}} src={etosLogo} alt="" />
                  </li>
                  <li className={s.tradeMarkList__item}>
                      <img className={s.tradeMarkLogo} style={{width: '255px'}} src={agrobizekLogo} alt="agrobizekLogo" />
                  </li>
                  <li className={s.tradeMarkList__item}>
                      <img className={s.tradeMarkLogo} style={{width: '248px'}} src={jrsLogo} alt="jrsLogo" />
                  </li>
              </ul>
        </div>
    </section>
  );
};

export default SectionTradeMarks;
