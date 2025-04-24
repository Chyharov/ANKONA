import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Pagination from 'components/Pagination/Pagination';
import noImage from 'images/goods/noMedia.jpg';
import { blogPosts } from 'services/blogPosts';
import s from './SectionBlog.module.scss';

const MAX_DESCRIPTION_LENGTH = 108;
const MAX_TITLE_LENGTH = 23;

const SectionBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth <= 1439);

  useEffect(() => {
  const updateResponsiveFlags = () => {
    const width = window.innerWidth;
    setIsDesktop(width > 1439);
    setIsTablet(width >= 768 && width <= 1439);

    if (width <= 767) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(5);
    }
  };

  updateResponsiveFlags();
  window.addEventListener('resize', updateResponsiveFlags);
  return () => window.removeEventListener('resize', updateResponsiveFlags);
}, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredPosts]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setIsDesktop(window.innerWidth > 767);
      if (window.innerWidth <= 767) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(5);
      }
    };

    updateItemsPerPage();

    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const firstList = filteredPosts.slice(0, 2);
  const secondList = filteredPosts.slice(2, 5);
  const remainingPosts = filteredPosts.slice(5);
  const groupedPosts = [];
  for (let i = 0; i < remainingPosts.length; i += 3) {
    groupedPosts.push(remainingPosts.slice(i, i + 3));
  }
  const currentPosts = filteredPosts.slice(0, currentPage * itemsPerPage);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <section className={s.sectionBlog} id="blog">
      <div className={`container ${s.sectionBlog__Container}`}>
        <h2 className={s.blogTitle}>Блог</h2>
        <div className={s.blogBorder}></div>

        <ul className={s.blogList}>
  {(isTablet ? filteredPosts : firstList).map(post => (
    <li key={post.id} className={s.blogList__item}>
      <img
        className={s.blogList__itemImg}
        src={
          isDesktop || isTablet
            ? post.imageDesktop || noImage
            : post.image || noImage
        }
        alt={post.title}
      />
      <div className={s.blogListContainer}>
        <h4 className={s.blogList__itemTitle}>{post.title}</h4>
        <div className={s.blogList__itemTitleBorder}></div>
        <p className={s.blogList__itemDescription}>
          {truncateText(post.description, MAX_DESCRIPTION_LENGTH)}
        </p>
        <Link to={`/blog/${post.id}`} className={s.blogBtn}>
          Читати
        </Link>
      </div>
    </li>
  ))}
</ul>

        <ul className={s.blogListSecond}>
          {secondList.map(post => (
            <li key={post.id} className={s.blogListSecond__item}>
              <img
                className={s.blogListSecond__itemImg}
                src={post.image || noImage}
                alt={post.title}
              />
              <h4 className={s.blogListSecond__itemTitle}>
                {truncateText(post.title, MAX_TITLE_LENGTH)}
              </h4>
              <div className={s.blogListSecond__itemTitleBorder}></div>
              <p className={s.blogListSecond__itemDescription}>
                {truncateText(post.description, MAX_DESCRIPTION_LENGTH)}
              </p>
              <Link to={`/blog/${post.id}`} className={s.blogBtn}>
                Читати
              </Link>
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onLoadMore={handleLoadMore}
            hasMoreItems={currentPosts.length < filteredPosts.length}
            setFilteredPosts={setFilteredPosts}
          />
        )}
      </div>
    </section>
  );
};

export default SectionBlog;
