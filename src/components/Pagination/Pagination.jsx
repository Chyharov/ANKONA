import { useEffect } from 'react';
import arrowLeft from 'images/goods/arrowLeft.svg';
import arrowRight from 'images/goods/arrowRight.svg';
import s from './Pagination.module.scss';

const Pagination = ({ currentPage, totalPages, onPageChange, onLoadMore, hasMoreItems }) => {
  useEffect(() => {
    const handleResize = () => window.innerWidth > 1439;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPaginationButtons = () => {
    const pages = [];
    const firstPage = 1;
    const lastPage = totalPages;
    let secondPage = 2;

    if (currentPage > 2 && currentPage < totalPages - 1) {
      secondPage = currentPage;
    }

    pages.push(firstPage);
    if (secondPage !== firstPage && secondPage !== lastPage) {
      pages.push(secondPage);
    }

    if (secondPage <= totalPages - 2) {
      pages.push('...');
    }

    if (totalPages > 3) {
      pages.push(lastPage - 1);
      pages.push(lastPage);
    }

    return pages.map((page, index) => (
      <button
        key={index}
        className={
          page === '...'
            ? s.ellipsis
            : page === currentPage
            ? s.numerPaginationBtn
            : s.numerPaginationBtnInactive
        }
        onClick={() => typeof page === 'number' && onPageChange(page)}
        disabled={page === '...'}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className={s.paginationContainer}>
      {hasMoreItems && (
        <button type="button" className={s.loadMoreButton} onClick={onLoadMore}>
          Переглянути ще
        </button>
      )}
      <div className={s.paginationButtons}>
        <button
          className={s.buttonPaginationLeft}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <img src={arrowLeft} alt="arrowLeft" />
        </button>

        {renderPaginationButtons()}

        <button
          className={s.buttonPaginationRight}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;