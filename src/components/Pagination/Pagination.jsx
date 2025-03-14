import arrowLeft from 'images/goods/arrowLeft.svg';
import arrowRight from 'images/goods/arrowRight.svg';
import s from './Pagination.module.scss';

const Pagination = ({ currentPage, totalPages, onPageChange, onLoadMore, hasMoreItems }) => {
  const renderPaginationButtons = () => {
    const pages = [];
    const firstPage = 1;
    const secondPage = 2;
    const lastPage = totalPages;
    const middlePage = Math.ceil(totalPages / 2);

    pages.push(firstPage);
    pages.push(secondPage);

    if (middlePage > secondPage + 1) {
      pages.push('...');
    }

    if (middlePage !== firstPage && middlePage !== secondPage && middlePage !== lastPage) {
      pages.push(middlePage);
    }

    if (middlePage < lastPage - 1) {
      pages.push('...');
    }

    if (lastPage !== firstPage && lastPage !== secondPage) {
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
      <div className={s.paginationButtons}>
        <button
          className={s.buttonPagination}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <img src={arrowLeft} alt="arrowLeft" />
        </button>

        {renderPaginationButtons()}

        <button
          className={s.buttonPagination}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>

      {hasMoreItems && (
        <button
          type="button"
          className={s.loadMoreButton}
          onClick={onLoadMore}
        >
          Переглянути ще
        </button>
      )}
    </div>
  );
};

export default Pagination;
