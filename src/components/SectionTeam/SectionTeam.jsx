import polykovAndriy from 'images/team/polykovAndriy.jpg';
import hodirevSerhiy from 'images/team/hodirevSerhiy.jpg';
import hodirevaNatalia from 'images/team/hodirevaNatalia.jpg';
import soloshenkoAndrii from 'images/team/soloshenkoAndrii.jpg';
import komarVolodymyr from 'images/team/komarVolodymyr.jpg';
import yanenkoYana from 'images/team/yanenkoYana.jpg';
import s from './SectionTeam.module.scss';

const SectionTeam = () => {
  return (
    <section className={s.sectionTeam}>
      <div className={`container ${s.teamContainer}`}>
        <h2 className={s.teamTitle}>Наша команда</h2>
        <div className={s.teamBorder}></div>
        <ul className={s.teamList}>
          <li className={s.teamList__item}>
            <img
              className={s.teamList__itemPhoto}
              src={polykovAndriy}
              alt="teamMemberPhoto"
            />
            <div className={s.teamNameContainer}>
              <h3 className={s.teamList__itemTitle}>Поляков Андрій Юрійович</h3>
              <p className={s.teamList__itemDescription}>Директор</p>
            </div>
          </li>
          <li className={s.teamList__item}>
            <img
              className={s.teamList__itemPhoto}
              src={hodirevSerhiy}
              alt="teamMemberPhoto"
            />
            <div className={s.teamNameContainer}>
              <h3 className={s.teamList__itemTitle}>
                Ходирєв Сергій Вікторович
              </h3>
              <p className={s.teamList__itemDescription}>
                Керівник/технолог напрямку ВРХ
              </p>
            </div>
          </li>
          <li className={s.teamList__item}>
            <img
              className={s.teamList__itemPhoto}
              src={hodirevaNatalia}
              alt="teamMemberPhoto"
            />
            <div className={s.teamNameContainer}>
              <h3 className={s.teamList__itemTitle}>
                Ходирєва Наталія Вікторівна
              </h3>
              <p className={s.teamList__itemDescription}>
                Керівник відділу з продажів напрямку ВРХ
              </p>
            </div>
          </li>
          <li className={s.teamList__item}>
            <img
              className={s.teamList__itemPhoto}
              src={soloshenkoAndrii}
              alt="teamMemberPhoto"
            />
            <div className={s.teamNameContainer}>
              <h3 className={s.teamList__itemTitle}>
                Солошенко Андрій
              </h3>
              <p className={s.teamList__itemDescription}>
                Консультант з годівлі свиней
              </p>
            </div>
          </li>
          <li className={s.teamList__item}>
            <img
              className={s.teamList__itemPhoto}
              src={komarVolodymyr}
              alt="teamMemberPhoto"
            />
            <div className={s.teamNameContainer}>
              <h3 className={s.teamList__itemTitle}>
                Комар Володимир
              </h3>
              <p className={s.teamList__itemDescription}>
                Консультант з годівлі свиней
              </p>
            </div>
          </li>
          <li className={s.teamList__item}>
            <img
              className={s.teamList__itemPhoto}
              src={yanenkoYana}
              alt="teamMemberPhoto"
            />
            <div className={s.teamNameContainer}>
              <h3 className={s.teamList__itemTitle}>
                Яненко Яна
              </h3>
              <p className={s.teamList__itemDescription}>
                Керівник роздрібного відділу
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionTeam;
