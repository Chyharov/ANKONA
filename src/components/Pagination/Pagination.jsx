import { useState, useEffect } from 'react';
import arrowLeft from 'images/goods/arrowLeft.svg';
import arrowRight from 'images/goods/arrowRight.svg';
import s from './Pagination.module.scss';

const Pagination = ({ currentPage, totalPages, onPageChange, onLoadMore, hasMoreItems }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1439);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1439);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPaginationButtonsMobile = () => {
  const pages = [];
  const firstPage = 1;
  const lastPage = totalPages;
  const middlePage = Math.ceil(totalPages / 2);

  if (totalPages <= 2) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(firstPage);

    if (currentPage > 2 && currentPage < middlePage) {
      pages.push(currentPage);
    } else {
      pages.push(2);
    }

    pages.push("...");

    if (currentPage !== lastPage) {
      pages.push(currentPage >= middlePage ? currentPage : middlePage);
    } else {
      pages.push(middlePage);
    }

    pages.push("...");
    pages.push(lastPage);
  }

  return pages.map((page, index) => (
    <button
      key={index}
      className={
        page === "..." ? s.ellipsis : page === currentPage ? s.numerPaginationBtn : s.numerPaginationBtnInactive
      }
      onClick={() => typeof page === "number" && onPageChange(page)}
      disabled={page === "..."}
    >
      {page}
    </button>
  ));
};

  const renderPaginationButtonsDesktop = () => {
  const pages = [];

    if (totalPages <= 4) {
    
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 2, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 3) {
      pages.push('...');
    }

    pages.push(totalPages - 1);
    pages.push(totalPages);
  }

  return pages.map((page, index) => (
    <button
      key={index}
      className={
        page === '...' ? s.ellipsis : page === currentPage ? s.numerPaginationBtn : s.numerPaginationBtnInactive
      }
      onClick={() => typeof page === 'number' && onPageChange(page)}
      disabled={page === '...'}
    >
      {page}
    </button>
  ));
};

  return (
    <>
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

        {isMobile ? renderPaginationButtonsMobile() : renderPaginationButtonsDesktop()}

        <button
          className={s.buttonPaginationRight}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>
    </>
  );
};

export default Pagination;