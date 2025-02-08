import s from './SectionHero.module.scss';

const SectionHero = () => {
  return (
    <section className={s.sectionHero}>
      <div className={`container ${s.sectionHero__container}`}>
        <h1>SectionHero</h1>
      </div>
    </section>
  );
};

export default SectionHero;
