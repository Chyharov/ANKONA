import { useState, useEffect } from 'react';
import arrowUp from 'images/goods/arrowUp.svg';
import arrowDown from 'images/goods/arrowDown.svg';
import arrowLeft from 'images/goods/arrowLeft.svg';
import arrowRight from 'images/goods/arrowRight.svg';
import s from './SectionGoods.module.scss';

const mockProducts = [
  {
    id: 1,
    name: 'Mineralfluter',
    category: 'Коні',
    manufacturer: 'AGRO-BIZEK',
  },
  { id: 2, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 3,
    name: 'SuperFeed',
    category: 'ВРХ дорослі',
    manufacturer: 'FUTTERGUT — надійна годівля',
  },
  { id: 4, name: 'SuperFeed', category: 'Свині', manufacturer: 'ETOS' },
  { id: 5, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 6,
    name: 'Mineralfluter',
    category: 'ВРХ молодняк',
    manufacturer: 'AGRO-BIZEK',
  },
  {
    id: 7,
    name: 'Mineralfluter',
    category: 'Підходе для всіх',
    manufacturer: 'Anhoff FUTTERGUT',
  },
  { id: 8, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  { id: 9, name: 'SuperFeed', category: 'ВРХ дорослі', manufacturer: 'ETOS' },
  {
    id: 10,
    name: 'SuperFeed',
    category: 'Свині',
    manufacturer: 'FUTTERGUT — надійна годівля',
  },
  { id: 11, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 12,
    name: 'Mineralfluter',
    category: 'Підходе для всіх',
    manufacturer: 'Anhoff FUTTERGUT',
  },
  {
    id: 13,
    name: 'Mineralfluter',
    category: 'Коні',
    manufacturer: 'AGRO-BIZEK',
  },
  { id: 14, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 15,
    name: 'SuperFeed',
    category: 'Підходе для всіх',
    manufacturer: 'FUTTERGUT — надійна годівля',
  },
  { id: 16, name: 'SuperFeed', category: 'Свині', manufacturer: 'ETOS' },
  { id: 17, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 18,
    name: 'Mineralfluter',
    category: 'ВРХ молодняк',
    manufacturer: 'AGRO-BIZEK',
  },
  {
    id: 19,
    name: 'Mineralfluter',
    category: 'Підходе для всіх',
    manufacturer: 'Anhoff FUTTERGUT',
  },
  { id: 20, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  { id: 21, name: 'SuperFeed', category: 'ВРХ дорослі', manufacturer: 'ETOS' },
  {
    id: 22,
    name: 'SuperFeed',
    category: 'Підходе для всіх',
    manufacturer: 'FUTTERGUT — надійна годівля',
  },
  { id: 23, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 23,
    name: 'Mineralfluter',
    category: 'Коні',
    manufacturer: 'Anhoff FUTTERGUT',
  },
  {
    id: 24,
    name: 'Mineralfluter',
    category: 'Коні',
    manufacturer: 'AGRO-BIZEK',
  },
  { id: 25, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 26,
    name: 'SuperFeed',
    category: 'ВРХ дорослі',
    manufacturer: 'FUTTERGUT — надійна годівля',
  },
  { id: 27, name: 'SuperFeed', category: 'Свині', manufacturer: 'ETOS' },
  { id: 28, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 29,
    name: 'Mineralfluter',
    category: 'ВРХ молодняк',
    manufacturer: 'AGRO-BIZEK',
  },
  {
    id: 30,
    name: 'Mineralfluter',
    category: 'Підходе для всіх',
    manufacturer: 'Anhoff FUTTERGUT',
  },
  { id: 31, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  { id: 32, name: 'SuperFeed', category: 'ВРХ дорослі', manufacturer: 'ETOS' },
  {
    id: 33,
    name: 'SuperFeed',
    category: 'Свині',
    manufacturer: 'FUTTERGUT — надійна годівля',
  },
  { id: 34, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 35,
    name: 'Mineralfluter',
    category: 'Підходе для всіх',
    manufacturer: 'Anhoff FUTTERGUT',
  },
  {
    id: 36,
    name: 'Mineralfluter',
    category: 'Коні',
    manufacturer: 'AGRO-BIZEK',
  },
  { id: 37, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 38,
    name: 'SuperFeed',
    category: 'Підходе для всіх',
    manufacturer: 'FUTTERGUT — надійна годівля',
  },
  { id: 39, name: 'SuperFeed', category: 'Свині', manufacturer: 'ETOS' },
  { id: 40, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 41,
    name: 'Mineralfluter',
    category: 'ВРХ молодняк',
    manufacturer: 'AGRO-BIZEK',
  },
  {
    id: 42,
    name: 'Mineralfluter',
    category: 'Підходе для всіх',
    manufacturer: 'Anhoff FUTTERGUT',
  },
  { id: 43, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  { id: 44, name: 'SuperFeed', category: 'ВРХ дорослі', manufacturer: 'ETOS' },
  {
    id: 45,
    name: 'SuperFeed',
    category: 'Підходе для всіх',
    manufacturer: 'FUTTERGUT — надійна годівля',
  },
  { id: 46, name: 'Feed Mix', category: 'ДРХ', manufacturer: 'JRS' },
  {
    id: 47,
    name: 'Mineralfluter',
    category: 'Коні',
    manufacturer: 'Anhoff FUTTERGUT',
  },
];

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
  const [savedFilters, setSavedFilters] = useState({
    category: new Set(),
    manufacturer: new Set(),
  });
  const [tempFilters, setTempFilters] = useState({
    category: new Set(),
    manufacturer: new Set(),
  });
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [showButtons, setShowButtons] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [showManufacturers, setShowManufacturers] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);

  const itemsPerPage = 5;

  useEffect(() => {
    setFilteredProducts(filterProducts(mockProducts, savedFilters));
  }, [savedFilters]);

  useEffect(() => {
    setVisibleCount(itemsPerPage);
    setCurrentPage(1);
  }, [savedFilters]);

  const loadMore = () => {
    setVisibleCount(prev => prev + itemsPerPage);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
    setVisibleCount(page * itemsPerPage);
  };

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

  const handleTempFilterChange = (type, value) => {
    setTempFilters(prevFilters => {
      const updatedSet = new Set(prevFilters[type]);
      updatedSet.has(value) ? updatedSet.delete(value) : updatedSet.add(value);
      setShowButtons(true);
      return { ...prevFilters, [type]: updatedSet };
    });
  };

  const applyFilters = () => {
    setSavedFilters(tempFilters);
    setShowButtons(false);
  };

  const resetFilters = () => {
    setTempFilters({ category: new Set(), manufacturer: new Set() });
    setSavedFilters({ category: new Set(), manufacturer: new Set() });
    setVisibleCount(itemsPerPage);
    setCurrentPage(1);
    setShowButtons(false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, visibleCount);
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
          aria-label="toggleButtons"
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
              <li key={cat} className={s.sectionGoodsCategoryList__item}>
                <input
                  type="checkbox"
                  checked={tempFilters.category.has(cat)}
                  onChange={() => handleTempFilterChange('category', cat)}
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
          aria-label="toggleButtons"
        >
          Фільтрувати за виробником:{' '}
          <img
            className={s.toggleBtnImg}
            src={showManufacturers ? arrowUp : arrowDown}
            alt="toggle categories"
          />
        </button>
        {showManufacturers && (
          <ul className={s.sectionGoodsCategoryList}>
            {initialManufacturers.map(man => (
              <li key={man} className={s.sectionGoodsCategoryList__item}>
                <input
                  type="checkbox"
                  checked={tempFilters.manufacturer.has(man)}
                  onChange={() => handleTempFilterChange('manufacturer', man)}
                />
                <p className={s.sectionGoodsCategoryList__itemName}>{man}</p>
              </li>
            ))}
          </ul>
        )}

        <div className={s.borderforGoodsCategoryList}></div>

        <div className={s.findCountContainer}>
          <p className={s.findTitle}>Знайдено:</p>{' '}
          <div className={s.findNumerContainer}>
            <p className={s.findNumerCount}>{filteredProducts.length}</p>
            <p className={s.findDescription}>позицій</p>
          </div>
        </div>

        {showButtons && (
          <div className={s.buttonGroup}>
            <button
              className={s.cancelButton}
              type="button"
              aria-label="cancelButton"
              onClick={resetFilters}
            >
              Скасувати
            </button>
            <button
              className={s.saveButton}
              type="button"
              aria-label="saveButton"
              onClick={applyFilters}
            >
              Зберегти
            </button>
          </div>
        )}

        <ul className={s.productList}>
          <li className={s.productListItem}>
            {filteredProducts.length > 0 ? (
              currentProducts.map(product => (
                <div key={product.id} className={s.productCard}>
                  <h4>{product.name}</h4>
                  <p>{product.category}</p>
                  <p>{product.manufacturer}</p>
                </div>
              ))
            ) : (
              <p className={s.noResults}>Немає товарів за вашим фільтром.</p>
            )}
          </li>
        </ul>

        {visibleCount < filteredProducts.length && (
          <button
            type="button"
            aria-label="loadMore"
            className={s.loadMoreButton}
            onClick={loadMore}
          >
            Переглянути ще
          </button>
        )}

        {totalPages > 1 && (
          <div className={s.pagination}>
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              type="button"
              aria-label="arrowLeft"
              className={s.buttonPagination}
            >
              <img src={arrowLeft} alt="arrowLeft" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? s.numerPaginationBtn : s.numerPaginationBtnActive}
                onClick={() => handlePageChange(i + 1)}
                type="button"
                aria-label="NumerButton"
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              type="button"
              aria-label="arrowRight"
              className={s.buttonPagination}
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
