import { Link } from 'react-router-dom';
import s from './SectionBlogCard.module.scss';

const SectionBlogCard = ({ post }) => {
  return (
    <section className={s.sectionBlogCard}>
      <div className={`container ${s.blogCard__Container}`}>
        {post.title && <h2 className={s.blogTitle}>{post.title}</h2>}
        <div className={s.blogBorder}></div>

        {post.description &&
            (Array.isArray(post.description) ? (
              post.description.map((desc, index) => (
                <h3 key={index} className={s.blogSubTitle}>
                  {desc}
                </h3>
              ))
            ) : (
              <h3 className={s.blogSubTitle}>{post.description}</h3>
          ))}
        
        <div className={s.imageContainer}>
          <div className={s.imageContainerDescription}>
          

          {post.content && (
            <p className={s.blogDescription}>
              {post.content}
              {post.contentspan && (
                <span className={s.blogDescriptionSpan}>
                  {post.contentspan}
                </span>
              )}
              {post.contentafter && ` ${post.contentafter}`}
            </p>
          )}

          {post.metodoligi && (
            <>
              <h3 className={s.blogTitleMetodoligi}>Методологія:</h3>
              <p className={s.blogDescriptionMetodoligi}>{post.metodoligi}</p>
            </>
          )}
          </div>
          {post.image && (
            <img className={s.blogImage} src={post.image} alt="blogImage" />
          )}
        </div>

        {post.result && (
          <h3 className={s.blogTitleResult}>
            <span className={s.blogTitleResultSpan}>Результати </span>
            {post.result}
          </h3>
        )}

        {post.resultList?.length > 0 && (
          <ul className={s.blogResultList}>
            {post.resultList.map((item, index) => (
              <li className={s.blogResultList__item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}

        {post.afterResult && (
          <p className={s.afterResult}>{post.afterResult}</p>
        )}

        {post.conclusions && (
          <>
            <h3 className={s.blogTitleConclusions}>Висновки:</h3>
            <p className={s.blogDescriptionConclusions}>{post.conclusions}</p>
          </>
        )}

        {post.link && (
          <Link
            to={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className={s.blogLinkTo}
          >
            Джерело
          </Link>
        )}

        {post.additationInfo && post.blogAddInfoLink && post.blogAddInfo && (
          <p className={s.additationInfo}>
            {post.additationInfo}
            <Link
              to={post.blogAddInfoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={s.blogAddInfoLink}
            >
              {post.blogAddInfo}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default SectionBlogCard;
