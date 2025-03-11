import s from './SectionBlog.module.scss';

const SectionBlog = () => {
  return (
    <section className={s.sectionBlog}>
          <div className={`container ${s.blogContainer}`}>
              <h2>БЛОГ</h2>
        </div>
    </section>
  );
};

export default SectionBlog;
