import { useParams, useNavigate } from 'react-router-dom';
import { products } from 'services/Products';
import Header from 'components/Header/Header';
import iconHorse from 'images/goods/iconHorse.svg';
import iconPig from 'images/goods/iconPig.svg';
import iconHen from 'images/goods/iconHen.svg';
import iconCalf from 'images/goods/iconCalf.svg';
import iconCow from 'images/goods/iconCow.svg';
import iconGoat from 'images/goods/iconGoat.svg';
import s from './ProductDetails.module.scss';

const categoryIcons = {
  'ВРХ дорослі': iconCow,
  'ВРХ молодняк': iconCalf,
  ДРХ: iconGoat,
  Коні: iconHorse,
  Птиця: iconHen,
  Свині: iconPig,
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p className={s.notFound}>Товар не знайдено</p>;
  }

  const categoryIconsList = Array.isArray(product.category)
    ? product.category.map(cat => categoryIcons[cat]).filter(Boolean)
    : categoryIcons[product.category]
    ? [categoryIcons[product.category]]
    : [];

  return (
    <>
      <Header />
      <section className={s.sectionProductDetails}>
        <div className={`container ${s.sectionProductDetails__Container}`}>
          <div className={s.buttonBackContainer}>
            <button onClick={() => navigate(-1)} className={s.buttonBack}>
              Товар
            </button>
            <div className={s.decorationBorder}></div>
            <h2 className={s.sectionProductDetailsTitle}>{product.name}</h2>
          </div>
          <img
            className={s.imgProductDetails}
            src={product.image}
            alt={product.name}
          />

          <p>Категорія тварин:</p>
          <div className={s.iconManufacturerContainer}>
            {categoryIconsList.map((icon, index) => (
              <div key={index} className={s.iconManufacturerContainerBorder}>
                <img
                  className={s.iconManufacturer}
                  src={icon}
                  alt="category icon"
                />
              </div>
            ))}
          </div>
          <p>
            {' '}
            {Array.isArray(product.category)
              ? product.category.join(', ')
              : product.category}
          </p>

          <h3>{product.name}</h3>
          <p>{product.manufacturer}</p>
          <p>{product.description}</p>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
