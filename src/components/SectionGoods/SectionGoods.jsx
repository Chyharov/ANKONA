import { useState, useEffect } from "react";
import styles from "./SectionGoods.module.scss";

const mockProducts = [
  { id: 1, name: "Mineralfluter", category: "Коні", manufacturer: "AGRO-BIZEK" },
  { id: 2, name: "Feed Mix", category: "ДРХ", manufacturer: "JRS" },
  { id: 3, name: "SuperFeed", category: "ВРХ дорослі", manufacturer: "FUTTERGUT" },
  { id: 4, name: "SuperFeed", category: "Свині", manufacturer: "ETOS" },
  { id: 5, name: "Feed Mix", category: "ДРХ", manufacturer: "JRS" },
  { id: 6, name: "Mineralfluter", category: "ВРХ молодняк", manufacturer: "AGRO-BIZEK" },
  { id: 7, name: "Mineralfluter", category: "ВРХ молодняк", manufacturer: "Anhoff FUTTERGUT" },
  { id: 8, name: "Feed Mix", category: "ДРХ", manufacturer: "JRS" },
  { id: 9, name: "SuperFeed", category: "ВРХ дорослі", manufacturer: "ETOS" },
  { id: 10, name: "SuperFeed", category: "Свині", manufacturer: "FUTTERGUT" },
  { id: 11, name: "Feed Mix", category: "ДРХ", manufacturer: "JRS" },
  { id: 12, name: "Mineralfluter", category: "Коні", manufacturer: "Anhoff FUTTERGUT" },
];

const initialCategories = ["ВРХ дорослі", "ВРХ молодняк", "ДРХ", "Коні", "Свині"];
const initialManufacturers = ["AGRO-BIZEK", "Anhoff FUTTERGUT", "ETOS", "FUTTERGUT", "JRS"];

const SectionGoods = () => {
  const [savedFilters, setSavedFilters] = useState({ category: new Set(), manufacturer: new Set() });
  const [tempFilters, setTempFilters] = useState({ category: new Set(), manufacturer: new Set() });
  const [availableCategories, setAvailableCategories] = useState(initialCategories);
  const [availableManufacturers, setAvailableManufacturers] = useState(initialManufacturers);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [showButtons, setShowButtons] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
    const [showManufacturers, setShowManufacturers] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6); // Початково 6 товарів

  useEffect(() => {
    setFilteredProducts(mockProducts); // При зміні фільтрів оновлюємо список
    setVisibleCount(6); // Скидаємо лічильник відображуваних товарів
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
    };
    
  const itemsPerPage = 6;

  useEffect(() => {
    setFilteredProducts(filterProducts(mockProducts, tempFilters));
  }, [tempFilters]);

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
    setCurrentPage(1);
    setAvailableCategories([...tempFilters.category]);
    setAvailableManufacturers([...tempFilters.manufacturer]);
    setShowButtons(false);
  };

  const resetFilters = () => {
    setTempFilters({ category: new Set(), manufacturer: new Set() });
    setFilteredProducts(mockProducts);
    setShowButtons(false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.filterPanel}>
        <h3 onClick={() => setShowCategories(!showCategories)} className={styles.toggleHeader}>
          Фільтрувати за категорією: {showCategories ? "🔼" : "🔽"}
        </h3>
        {showCategories && (
          <div className={styles.filterList}>
            {availableCategories.map(cat => (
              <label key={cat}>
                <input
                  type="checkbox"
                  checked={tempFilters.category.has(cat)}
                  onChange={() => handleTempFilterChange("category", cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        )}

        <h3 onClick={() => setShowManufacturers(!showManufacturers)} className={styles.toggleHeader}>
          Фільтрувати за виробником: {showManufacturers ? "🔼" : "🔽"}
        </h3>
        {showManufacturers && (
          <div className={styles.filterList}>
            {availableManufacturers.map(man => (
              <label key={man}>
                <input
                  type="checkbox"
                  checked={tempFilters.manufacturer.has(man)}
                  onChange={() => handleTempFilterChange("manufacturer", man)}
                />
                {man}
              </label>
            ))}
          </div>
        )}

        {showButtons && (
          <div className={styles.buttonGroup}>
            <button className={styles.cancelButton} onClick={resetFilters}>
              Скасувати
            </button>
            <button className={styles.saveButton} onClick={applyFilters}>
              Зберегти
            </button>
          </div>
        )}
      </div>

      <div className={styles.productList}>
        {currentProducts.length ? (
          currentProducts.slice(0, visibleCount).map((product) => (
            <div key={product.id} className={styles.productCard}>
              <h4>{product.name}</h4>
              <p>{product.category}</p>
              <p>{product.manufacturer}</p>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>Немає товарів за вашим фільтром.</p>
        )}
      </div>
      
        {visibleCount < filteredProducts.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          Переглянути ще
        </button>
      )}

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            ⬅️
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} className={currentPage === i + 1 ? styles.active : ""} onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
            ➡️
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionGoods;
