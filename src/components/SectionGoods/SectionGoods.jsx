import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import arrowUp from 'images/goods/arrowUp.svg';
import arrowDown from 'images/goods/arrowDown.svg';
import arrowLeft from 'images/goods/arrowLeft.svg';
import arrowRight from 'images/goods/arrowRight.svg';
import noImages from 'images/goods/noMedia.jpg';
import iconHorse from 'images/goods/iconHorse.svg';
import iconPig from 'images/goods/iconPig.svg';
import iconHen from 'images/goods/iconHen.svg';
import iconCalf from 'images/goods/iconCalf.svg';
import iconCow from 'images/goods/iconCow.svg';
import iconGoat from 'images/goods/iconGoat.svg';
import iconCheckBox from 'images/goods/iconCheckBox.svg';
import { products } from 'services/Products';
import s from './SectionGoods.module.scss';

const initialCategories = [
  'ВРХ дорослі',
  'ВРХ молодняк',
  'ДРХ',
  'Коні',
  'Птиця',
  'Свині',
  'Підходе для всіх',
];

const categoryIcons = {
  'ВРХ дорослі': iconCow,
  'ВРХ молодняк': iconCalf,
  ДРХ: iconGoat,
  Коні: iconHorse,
  Птиця: iconHen,
  Свині: iconPig,
};

const initialManufacturers = [
  'AGRO-BIZEK',
  'Ahrhoff FUTTERGUT',
  'ETOS',
  'FUTTERGUT - надійна годівля',
  'JRS',
  'NUTRIBOS',
  'Schils',
  'VILOFOSS',
];

const SectionGoods = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: new Set(),
    manufacturer: new Set(),
  });

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategories, setShowCategories] = useState(false);
  const [showManufacturers, setShowManufacturers] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    setFilteredProducts(filterProducts(products, filters));
    setCurrentPage(1);
  }, [filters]);

  const filterProducts = (products, filters) => {
    let filtered = products;

    const hasAllCategories = filters.category.has('Підходе для всіх');

    if (!hasAllCategories && filters.category.size) {
      filtered = filtered.filter(p => {
        const productCategories = Array.isArray(p.category)
          ? p.category
          : [p.category];
        return productCategories.some(
          cat => filters.category.has(cat) || cat === 'Підходе для всіх'
        );
      });
    }

    if (filters.manufacturer.size) {
      filtered = filtered.filter(p =>
        Array.isArray(p.manufacturer)
          ? p.manufacturer.some(m => filters.manufacturer.has(m))
          : filters.manufacturer.has(p.manufacturer)
      );
    }

    return filtered;
  };

  const handleFilterChange = (type, value) => {
    setFilters(prevFilters => {
      const updatedSet = new Set(prevFilters[type]);
      updatedSet.has(value) ? updatedSet.delete(value) : updatedSet.add(value);
      return { ...prevFilters, [type]: updatedSet };
    });
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const currentProducts = filteredProducts.slice(0, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

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

    if (
      middlePage !== firstPage &&
      middlePage !== secondPage &&
      middlePage !== lastPage
    ) {
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
        onClick={() => typeof page === 'number' && handlePageChange(page)}
        disabled={page === '...'}
      >
        {page}
      </button>
    ));
  };

  return (
    <section className={s.sectionGoods}>
      <div className={`container ${s.sectionGoods__Container}`}>
        <h2 className={s.sectionGoodsTitle}>Товари</h2>
        <div className={s.sectionGoodsBorder}></div>

        <button
          onClick={() => setShowCategories(!showCategories)}
          className={s.sectionGoodsCategoryBtn}
          type="button"
        >
          Фільтрувати за категорією тварин:
          <img
            className={s.toggleBtnImg}
            src={showCategories ? arrowUp : arrowDown}
            alt="toggle categories"
          />
        </button>

        {!showCategories && filters.category.size > 0 && (
          <ul className={s.sectionGoodsCategoryList}>
            {[...filters.category].map(cat => (
              <li
                key={cat}
                className={`${s.sectionGoodsCategoryList__item} ${s.selectedCategory}`}
                style={{ cursor: 'pointer' }}
              >
                <label className={s.customCheckbox}>
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={() => handleFilterChange('category', cat)}
                  />
                  <span className={s.checkmark}>
                    <img
                      src={iconCheckBox}
                      alt="Checked"
                      className={s.checkIcon}
                    />
                  </span>
                  {categoryIcons[cat] && (
                    <div className={s.sectionGoodsCategoryList__itemImg}>
                      <img
                        src={categoryIcons[cat]}
                        alt={cat}
                        className={`${s.categoryIcon} ${s.selectedIcon}`}
                      />
                    </div>
                  )}
                  <p
                    className={`${s.sectionGoodsCategoryList__itemName} ${
                      s.selectedCategoryText
                    } ${cat === 'Підходе для всіх' ? s.centeredText : ''}`}
                  >
                    {cat}
                  </p>
                </label>
              </li>
            ))}
          </ul>
        )}

        {showCategories && (
          <ul className={s.sectionGoodsCategoryList}>
            {initialCategories.map(cat => {
              const isChecked = filters.category.has(cat);

              return (
                <li
                  key={cat}
                  className={`${s.sectionGoodsCategoryList__item} ${
                    isChecked ? s.selectedCategory : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  <label className={s.customCheckbox}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleFilterChange('category', cat)}
                    />
                    <span className={s.checkmark}>
                      {isChecked && (
                        <img
                          src={iconCheckBox}
                          alt="Checked"
                          className={s.checkIcon}
                        />
                      )}
                    </span>
                    {categoryIcons[cat] && (
                      <div className={s.sectionGoodsCategoryList__itemImg}>
                        <img
                          src={categoryIcons[cat]}
                          alt={cat}
                          className={`${s.categoryIcon} ${
                            isChecked ? s.selectedIcon : ''
                          }`}
                        />
                      </div>
                    )}
                    <p
                      className={`${s.sectionGoodsCategoryList__itemName} ${
                        isChecked ? s.selectedCategoryText : ''
                      } ${cat === 'Підходе для всіх' ? s.centeredText : ''}`}
                    >
                      {cat}
                    </p>
                  </label>
                </li>
              );
            })}
          </ul>
        )}

        <button
          onClick={() => setShowManufacturers(!showManufacturers)}
          className={s.sectionGoodsCategoryBtn}
          type="button"
        >
          Фільтрувати за виробником:{' '}
          <img
            className={s.toggleBtnImg}
            src={showManufacturers ? arrowUp : arrowDown}
            alt="toggle manufacturers"
          />
        </button>

        {!showManufacturers && filters.manufacturer.size > 0 && (
          <ul className={s.sectionGoodsCategoryList}>
            {[...filters.manufacturer].map(man => (
              <li
                key={man}
                className={`${s.sectionGoodsCategoryList__item} ${s.selectedCategory}`}
                style={{ cursor: 'pointer' }}
              >
                <label className={s.customCheckbox}>
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={() => handleFilterChange('manufacturer', man)}
                  />
                  <span className={s.checkmark}>
                    <img
                      src={iconCheckBox}
                      alt="Checked"
                      className={s.checkIcon}
                    />
                  </span>
                  {categoryIcons[man] && (
                    <div className={s.sectionGoodsCategoryList__itemImg}>
                      <img
                        src={categoryIcons[man]}
                        alt={man}
                        className={`${s.categoryIcon} ${s.selectedIcon}`}
                      />
                    </div>
                  )}
                  <p
                    className={`${s.sectionGoodsCategoryList__itemName} ${s.selectedCategoryText}`}
                  >
                    {man}
                  </p>
                </label>
              </li>
            ))}
          </ul>
        )}

        {showManufacturers && (
          <ul className={s.sectionGoodsCategoryList}>
            {initialManufacturers.map(man => {
              const isChecked = filters.manufacturer.has(man);

              return (
                <li
                  key={man}
                  className={`${s.sectionGoodsCategoryList__item} ${
                    isChecked ? s.selectedCategory : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  <label className={s.customCheckbox}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleFilterChange('manufacturer', man)}
                    />
                    <span className={s.checkmark}>
                      {isChecked && (
                        <img
                          src={iconCheckBox}
                          alt="Checked"
                          className={s.checkIcon}
                        />
                      )}
                    </span>
                    <p
                      className={`${s.sectionGoodsCategoryList__itemName} ${
                        isChecked ? s.selectedCategoryText : ''
                      }`}
                    >
                      {man === 'FUTTERGUT - надійна годівля' ? (
                        <>
                          FUTTERGUT{' '}
                          <span
                            className={s.sectionGoodsCategoryList__itemNameSpan}
                          >
                            — надійна годівля
                          </span>
                        </>
                      ) : (
                        man
                      )}
                    </p>
                  </label>
                </li>
              );
            })}
          </ul>
        )}

        <div className={s.borderforGoodsCategoryList}></div>

        <div className={s.findCountContainer}>
          <p className={s.findTitle}>Знайдено:</p>
          <div className={s.findNumerContainer}>
            <p className={s.findNumerCount}>{filteredProducts.length}</p>
            <p className={s.findDescription}>позицій</p>
          </div>
        </div>

        <ul className={s.productList}>
          {filteredProducts.length > 0 ? (
            currentProducts.map(product => {
              let categories = Array.isArray(product.category)
                ? product.category
                : [product.category];
              if (categories.includes('Підходе для всіх')) {
                categories = Object.keys(categoryIcons);
              }

              const categoryIconsList = categories
                .map(cat => categoryIcons[cat])
                .filter(Boolean);

              return (
                <li
                  className={s.productListItem}
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={s.productCard}>
                    <h4 className={s.productListItemTitle}>{product.name}</h4>
                    <p className={s.productListItemManufacturer}>
                      {Array.isArray(product.manufacturer)
                        ? product.manufacturer.join(', ')
                        : product.manufacturer}
                    </p>
                    <p className={s.productListItemCategoryNone}>
                      {categories.join(', ')}
                    </p>
                    <p className={s.productListItemDescription}>
                      {product.description}
                    </p>
                  </div>

                  <div className={s.iconManufacturerContainer}>
                    {categoryIconsList.map((icon, index) => (
                      <div className={s.iconManufacturerContainerBorder}>
                        <img
                          key={index}
                          className={s.iconManufacturer}
                          src={icon}
                          alt="category icon"
                        />
                      </div>
                    ))}
                  </div>

                  <img
                    className={s.productListItemImg}
                    src={noImages}
                    alt="noImages"
                  />
                </li>
              );
            })
          ) : (
            <p className={s.noResults}>Немає товарів за вашим фільтром.</p>
          )}
        </ul>

        {currentProducts.length < filteredProducts.length &&
          currentPage < totalPages && (
            <button
              type="button"
              aria-label="loadMore"
              className={s.loadMoreButton}
              onClick={handleLoadMore}
            >
              Переглянути ще
            </button>
          )}

        {filteredProducts.length > itemsPerPage && (
          <div className={s.pagination}>
            <button
              className={s.buttonPagination}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <img src={arrowLeft} alt="arrowLeft" />
            </button>

            {renderPaginationButtons()}

            <button
              className={s.buttonPagination}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <img src={arrowRight} alt="arrowRight" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionGoods;
