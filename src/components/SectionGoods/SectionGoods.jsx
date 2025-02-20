import { useState, useEffect } from 'react';
import arrowUp from 'images/goods/arrowUp.svg';
import arrowDown from 'images/goods/arrowDown.svg';
import arrowLeft from 'images/goods/arrowLeft.svg';
import arrowRight from 'images/goods/arrowRight.svg';
import noImages from 'images/goods/noMedia.jpg';
import { products } from 'services/Events';
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

const initialManufacturers = [
  'AGRO-BIZEK',
  'Anhoff FUTTERGUT',
  'ETOS',
  'FUTTERGUT — надійна годівля',
  'JRS',
  'NUTRIBOS',
  'Schils',
  'VILOFOSS',
];

const SectionGoods = () => {
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
    if (filters.category.size) {
      filtered = filtered.filter(p => filters.category.has(p.category));
    }
    if (filters.manufacturer.size) {
      filtered = filtered.filter(p => filters.manufacturer.has(p.manufacturer));
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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
          Фільтрувати за категорією тварин:{' '}
          <img
            className={s.toggleBtnImg}
            src={showCategories ? arrowUp : arrowDown}
            alt="toggle categories"
          />
        </button>

        {showCategories && (
          <ul className={s.sectionGoodsCategoryList}>
            {initialCategories.map(cat => (
              <li
                key={cat}
                className={`${s.sectionGoodsCategoryList__item} ${
                  filters.category.has(cat) ? s.selectedCategory : ''
                }`}
                onClick={() => handleFilterChange('category', cat)}
              >
                <input
                  type="checkbox"
                  checked={filters.category.has(cat)}
                  readOnly
                />
                <p className={s.sectionGoodsCategoryList__itemName}>{cat}</p>
              </li>
            ))}
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

        {showManufacturers && (
          <ul className={s.sectionGoodsCategoryList}>
            {initialManufacturers.map(man => (
              <li
                key={man}
                className={`${s.sectionGoodsCategoryList__item} ${
                  filters.manufacturer.has(man) ? s.selectedCategory : ''
                }`}
                onClick={() => handleFilterChange('manufacturer', man)}
              >
                <input
                  type="checkbox"
                  checked={filters.manufacturer.has(man)}
                  readOnly
                />
                <p className={s.sectionGoodsCategoryList__itemName}>{man}</p>
              </li>
            ))}
          </ul>
        )}

        <ul className={s.productList}>
          {filteredProducts.length > 0 ? (
            currentProducts.map(product => (
              <li className={s.productListItem} key={product.id}>
                <div className={s.productCard}>
                  <h4>{product.name}</h4>
                  <p>{product.category}</p>
                  <p>{product.manufacturer}</p>
                </div>
                <img src={noImages} alt="noImages" />
              </li>
            ))
          ) : (
            <p className={s.noResults}>Немає товарів за вашим фільтром.</p>
          )}
        </ul>

        <button
          type="button"
          aria-label="loadMore"
          className={s.loadMoreButton}
        >
          Переглянути ще
        </button>

        {totalPages > 1 && (
          <div className={s.pagination}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <img src={arrowLeft} alt="arrowLeft" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={
                  currentPage === i + 1
                    ? s.numerPaginationBtn
                    : s.numerPaginationBtnInactive
                }
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
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
