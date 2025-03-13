import pigImg from 'images/blog/pig.jpg'
import s from './SectionBlog.module.scss';

const SectionBlog = () => {
  return (
    <section className={s.sectionBlog}>
          <div className={`container ${s.blogContainer}`}>
        <h2 className={s.blogTitle}>БЛОГ</h2>
        <div className={s.blogBorder}></div>

        <ul className={s.blogList}>
          <li className={s.blogList__item}>
            <img className={s.pigImg} src={pigImg} alt="pigImg" />
            <h3 className={s.blogList__itemTitle}>Сіль глюконової кислоти</h3>
            <div className={s.blogList__itemTitleBorder}></div>
            <p className={s.blogList__itemDescription}>Вплив додавання сульфату глюконової кислоти на виробничі показники поросят та свиней на відгодівлі</p>
          <button className={s.blogBtn} type='button'>Читати</button>
          </li>
        </ul>
        </div>
    </section>
  );
};

export default SectionBlog;
