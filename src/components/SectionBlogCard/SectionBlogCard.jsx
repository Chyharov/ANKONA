import s from './SectionBlogCard.module.scss';

const SectionBlogCard = ({ post }) => {
  return (
    <section className={s.sectionBlogCard}>
      <div className={`container ${s.blogCard__Container}`}>
        <h2 className={s.blogTitle}>{post.title}</h2>
        <div className={s.blogBorder}></div>
        <h3 className={s.blogSubTitle}>{post.description}</h3>
        <p className={s.blogDescription}>
          {post.content}
          <span className={s.blogDescriptionSpan}>{post.contentspan}</span>{' '}
          {post.contentafter}
        </p>
        <h3 className={s.blogTitleMetodoligi}>Методологія:</h3>
        <p className={s.blogDescriptionMetodoligi}>{post.metodoligi}</p>
        <img className={s.blogImage} src={post.image} alt="blogImage" />
        <h3 className={s.blogTitleResult}>
          <span className={s.blogTitleResultSpan}>Результати </span>
          {post.result}
        </h3>
        {post?.resultList?.length > 0 ? (
          <ul className={s.blogResultList}>
            {post.resultList.map((item, index) => (
              <li className={s.blogResultList__item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p>Список порожній або завантажується...</p>
              )}
              
              <h3 className={s.blogTitleConclusions}>Висновки:</h3>
              <p className={s.blogDescriptionConclusions}>{post.conclusions}</p>
      </div>
    </section>
  );
};

export default SectionBlogCard;
