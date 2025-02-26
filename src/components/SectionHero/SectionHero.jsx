import horseHeroImage from 'images/hero/horseHeroImage.jpg';
import ankonaText from 'images/hero/ankonaText.svg';
import ButtonCallBack from 'components/ButtonCallBack/ButtonCallBack';
import s from './SectionHero.module.scss';

const SectionHero = () => {
  return (
    <section className={s.sectionHero}>
      <div className={s.heroPhotoContainer}>
        <img
          className={s.horseHeroImage}
          src={horseHeroImage}
          alt="horseHeroImage"
        />
        <img className={s.ankonaText} src={ankonaText} alt="ankonaText" />
      </div>
      <div className={`container ${s.sectionHero__container}`}>
        <div className={s.heroBorder}>
          <div className={s.heroBorderDot}></div>
        </div>
        <p className={s.heroDescription}>Нова стратегія раціональної годівлі</p>
        <ButtonCallBack />
      </div>
    </section>
  );
};

export default SectionHero;
