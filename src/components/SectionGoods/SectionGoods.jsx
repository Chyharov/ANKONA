import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from 'components/SearchContext';
import arrowUp from 'images/goods/arrowUp.svg';
import arrowDown from 'images/goods/arrowDown.svg';
import iconHorse from 'images/goods/iconHorse.svg';
import iconPig from 'images/goods/iconPig.svg';
import iconHen from 'images/goods/iconHen.svg';
import iconCalf from 'images/goods/iconCalf.svg';
import iconCow from 'images/goods/iconCow.svg';
import iconGoat from 'images/goods/iconGoat.svg';
import iconCheckBox from 'images/goods/iconCheckBox.svg';
import Pagination from 'components/Pagination/Pagination';
import { products } from 'services/Products';
import translations from 'components/LanguageSelect/translations';
import s from './SectionGoods.module.scss';

const categoryIcons = [
  {
    id: 1,
    name: {
      ua: 'ВРХ дорослі',
      en: 'Adult Cattle',
    },
    icon: iconCow,
  },
  {
    id: 2,
    name: {
      ua: 'ВРХ молодняк',
      en: 'Young Cattle',
    },
    icon: iconCalf,
  },
  {
    id: 3,
    name: {
      ua: 'ДРХ',
      en: 'Small Cattle',
    },
    icon: iconGoat,
  },
  {
    id: 4,
    name: {
      ua: 'Коні',
      en: 'Horses',
    },
    icon: iconHorse,
  },
  {
    id: 5,
    name: {
      ua: 'Птиця',
      en: 'Birds',
    },
    icon: iconHen,
  },
  {
    id: 6,
    name: {
      ua: 'Свині',
      en: 'Pigs',
    },
    icon: iconPig,
  },
];

const SectionGoods = ({ language }) => {
  const { searchQuery } = useContext(SearchContext);
  const t = translations.goods[language];
  const initialCategories = t.categories;
  const initialManufacturers = t.manufacturers;
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: new Set(),
    manufacturer: new Set(),
  });

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategories, setShowCategories] = useState(
    window.innerWidth > 1439
  );
  const [showManufacturers, setShowManufacturers] = useState(
    window.innerWidth > 1439
  );
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filterProducts = useCallback((products, filters) => {
  let filtered = products;

  const hasAllCategories = filters.category.has('Підходе для всіх');

  if (!hasAllCategories && filters.category.size) {
    filtered = filtered.filter(p => {
      const productCategories = Array.isArray(p.category?.[language])
        ? p.category[language]
        : [p.category[language]];

      return productCategories.some(
        cat => filters.category.has(cat) || cat === 'Підходе для всіх'
      );
    });
  }

  if (filters.manufacturer.size) {
    filtered = filtered.filter(p =>
      filters.manufacturer.has(p.manufacturer?.[language])
    );
  }
  return filtered;
}, [language]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1439) {
        setShowCategories(true);
        setShowManufacturers(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
  setFilteredProducts(filterProducts(products, filters));
  setCurrentPage(1);
}, [filters, filterProducts]);

  useEffect(() => {
  const updateItemsPerPage = () => {
    const width = window.innerWidth;

    if (width <= 767) {
      setItemsPerPage(5);
    } else if (width >= 768 && width <= 1439) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(12);
    }
  };

  updateItemsPerPage(); // викликаємо при завантаженні
  window.addEventListener('resize', updateItemsPerPage); // і при зміні розміру

  return () => window.removeEventListener('resize', updateItemsPerPage); // при демонтажі
}, []);


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

  useEffect(() => {
  let filtered = filterProducts(products, filters);

  if (searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();

    filtered = filtered.filter(product => {
      const nameMatch = product.name[language]
        ?.toLowerCase()
        .includes(lowerQuery);

      const categoryMatch = Array.isArray(product.category)
        ? product.category.some(
            cat =>
              typeof cat === 'string' &&
              cat.toLowerCase().includes(lowerQuery)
          )
        : typeof product.category === 'string' &&
          product.category.toLowerCase().includes(lowerQuery);

      const manufacturer = product.manufacturer;
      const manufacturerMatch =
        typeof manufacturer === 'string'
          ? manufacturer.toLowerCase().includes(lowerQuery)
          : Array.isArray(manufacturer[language])
          ? manufacturer[language].some(m =>
              m.toLowerCase().includes(lowerQuery)
            )
          : manufacturer[language]?.toLowerCase().includes(lowerQuery);

      const descriptionMatch = product.description[language]
        ?.toLowerCase()
        .includes(lowerQuery);

      return (
        nameMatch || categoryMatch || manufacturerMatch || descriptionMatch
      );
    });
  }

  setFilteredProducts(filtered);
}, [filters, searchQuery, language, filterProducts]);

  const getCategoryIcon = (categoryName, lang) => {
    const found = categoryIcons.find(
      iconObj => iconObj.name[lang] === categoryName
    );
    return found?.icon || null;
  };

  return (
    <section className={s.sectionGoods} id="goods">
      <div className={`container ${s.sectionGoods__Container}`}>
        <h2 className={s.sectionGoodsTitle}>{t.title}</h2>
        <div className={s.sectionGoodsBorder}></div>
        <h3 className={s.titleFilterbyCategorie}>{t.titleFilterByCategorie}</h3>
        <button
          onClick={() => setShowCategories(!showCategories)}
          className={s.sectionGoodsCategoryBtn}
          type="button"
        >
          {t.titleFilterByCategorie}
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
                  <label className={s.customCheckboxCategoryList}>
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
                    {getCategoryIcon(cat, language) && (
                      <div className={s.sectionGoodsCategoryList__itemImg}>
                        <img
                          src={getCategoryIcon(cat, language)}
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

        <h3 className={s.titleFilterbyVendor}>{t.titleFilterByVendor}</h3>

        <button
          onClick={() => setShowManufacturers(!showManufacturers)}
          className={s.sectionGoodsManufacturesBtn}
          type="button"
        >
          {t.titleFilterByVendor}{' '}
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
                    <span className={s.checkmarkCategoryList}>
                      {isChecked && (
                        <img
                          src={iconCheckBox}
                          alt="Checked"
                          className={s.checkIcon}
                        />
                      )}
                    </span>
                    <p
                      className={`${
                        s.sectionGoodsCategoryList__itemNameCategoryList
                      } ${isChecked ? s.selectedCategoryText : ''}`}
                    >
                      {man === 'FUTTERGUT - надійна годівля' ? (
                        <>
                          FUTTERGUT{' '}
                          <span
                            className={s.sectionGoodsCategoryList__itemNameSpan}
                          >
                            —{' '}
                            {language === 'en'
                              ? 'reliable feeding'
                              : 'надійна годівля'}
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

        <div className={s.borderforGoodsCategoryList} id="search"></div>

        <div className={s.findCountContainer}>
          <p className={s.findTitle}>{t.Found}</p>
          <div className={s.findNumerContainer}>
            <p className={s.findNumerCount}>{filteredProducts.length}</p>
            <p className={s.findDescription}>{t.positions}</p>
          </div>
        </div>

        <ul className={s.productList}>
          {filteredProducts.length > 0 ? (
            currentProducts.map(product => {
              const categories = Array.isArray(product.category?.[language])
                ? product.category[language]
                : [product.category[language]];
              if (categories.includes('Підходе для всіх', 'Suitable for all')) {
                categories[language] = Object.keys(categoryIcons);
              }

              const hasAllCategories =
                categories.includes('Підходе для всіх') ||
                categories.includes('Suitable for all');

              const categoryIconsList = hasAllCategories
                ? categoryIcons.map(c => c.icon)
                : categories
                    .map(cat => {
                      const category = categoryIcons.find(
                        c => c.name.ua === cat || c.name.en === cat
                      );
                      return category ? category.icon : null;
                    })
                    .filter(Boolean);

              return (
                <li
                  className={s.productListItem}
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    className={s.productListItemImg}
                    src={product.imageDesktop}
                    alt="productImage"
                  />
                  <div className={s.productCard}>
                    <h4 className={s.productListItemTitle}>
                      {product.name[language]}
                    </h4>
                    <p className={s.productListItemManufacturer}>
                      {Array.isArray(product.manufacturer?.[language])
                        ? product.manufacturer[language].join(' / ')
                        : product.manufacturer?.[language] || ''}
                    </p>
                    <p className={s.productListItemCategoryNone}>
                      {categories.join(', ')}
                    </p>
                    <p className={s.productListItemDescription}>
                      {product.description[language]}
                    </p>
                  </div>

                  <div className={s.iconManufacturerContainer}>
                    {categoryIconsList.length > 0 ? (
                      categoryIconsList.map((icon, index) => (
                        <div
                          key={index}
                          className={s.iconManufacturerContainerBorder}
                        >
                          <img
                            className={s.iconManufacturer}
                            src={icon}
                            alt="category icon"
                          />
                        </div>
                      ))
                    ) : (
                      <div style={{ display: 'flex' }}>
                        {[
                          iconCow,
                          iconCalf,
                          iconGoat,
                          iconHorse,
                          iconPig,
                          iconHen,
                        ].map((icon, index) => (
                          <div
                            key={index}
                            className={s.iconManufacturerContainerBorder}
                          >
                            <img
                              key={index}
                              className={s.iconManufacturer}
                              src={icon}
                              alt="category icon"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })
          ) : (
            <p className={s.noResults}>Немає товарів за вашим фільтром.</p>
          )}
        </ul>

        {filteredProducts.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onLoadMore={handleLoadMore}
            hasMoreItems={currentProducts.length < filteredProducts.length}
          />
        )}
      </div>
    </section>
  );
};

export default SectionGoods;
