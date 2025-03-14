import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import arrowLeft from 'images/goods/arrowLeft.svg';
import arrowRight from 'images/goods/arrowRight.svg';
import noImage from 'images/goods/noMedia.jpg';
import { blogPosts } from 'services/blogPosts';
import s from './SectionBlog.module.scss';

const itemsPerPage = 3;

const SectionBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredPosts]);

  const currentPosts = filteredPosts.slice(0, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <section className={s.sectionBlog} id='blog'>
      <div className={`container ${s.sectionBlog__Container}`}>
        <h2 className={s.blogTitle}>Блог</h2>
        <div className={s.blogBorder}></div>
        
        <ul className={s.blogList}>
          {currentPosts.length > 0 ? (
            currentPosts.map(post => (
              <li
                key={post.id}
                className={s.blogList__item}
                style={{ cursor: 'pointer' }}
              >
                <img
                  className={s.blogList__itemImg}
                  src={post.image || noImage}
                  alt={post.title}
                />
                <h4 className={s.blogList__itemTitle}>{post.title}</h4>
                <div className={s.blogList__itemTitleBorder}></div>
                <p className={s.blogList__itemDescription}>{post.description}</p>
                <Link to={`/blog/${post.id}`} className={s.blogBtn}>Читати</Link>
              </li>
            ))
          ) : (
            <p className={s.noResults}>Немає доступних статей.</p>
          )}
        </ul>
        
        {currentPosts.length < filteredPosts.length && (
          <button
            type='button'
            aria-label='loadMore'
            className={s.loadMoreButton}
            onClick={handleLoadMore}
          >
            Переглянути ще
          </button>
        )}

        {filteredPosts.length > itemsPerPage && (
          <div className={s.pagination}>
            <button
              className={s.buttonPagination}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <img src={arrowLeft} alt='arrowLeft' />
            </button>
            <button
              className={s.buttonPagination}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <img src={arrowRight} alt='arrowRight' />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionBlog;
