import { useParams, useNavigate } from 'react-router-dom';
import { products } from 'services/Products';
import Header from 'components/Header/Header';
import ButtonCallBack from 'components/ButtonCallBack/ButtonCallBack';
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
        <div className={`container ${s.productDetailsContainer}`}>
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

          <h3 className={s.categoryGoods}>Категорія тварин:</h3>
          <ul className={s.iconManufacturerList}>
            {categoryIconsList.map((icon, index) => (
              <li key={index} className={s.iconManufacturerList__item}>
                <img
                  className={s.iconManufacturer}
                  src={icon}
                  alt="category icon"
                />
              </li>
            ))}
          </ul>
          <ul className={s.categoryList}>
            {Array.isArray(product.category) ? (
              product.category.map((cat, index) => (
                <li className={s.categoryList__item} key={index}>
                  <p className={s.categoryDescription}>{cat}</p>
                </li>
              ))
            ) : (
              <li className={s.categoryList__item}>
                <p className={s.categoryDescription}>{product.category}</p>
              </li>
            )}
          </ul>

          <h3 className={s.productDetailsName}>{product.name}</h3>
          <p className={s.productDetailsManufacturer}>{product.manufacturer}</p>
          <p
            className={s.productDetailsDescription}
            style={{ padding: '8px', marginBottom: '4px' }}
          >
            {product.description}
          </p>

          <div className={s.productDetailsBorder}></div>

          <h3
            className={s.categoryGoods}
            style={{ padding: '8px', margin: '0px' }}
          >
            Можуть бути представлені:
          </h3>
          <ul className={s.categoryGoodsList}>
            <li className={s.categoryGoodsList__item}>
              <p className={s.productDetailsDescription}>стандартна лінійка</p>
            </li>
            <li className={s.categoryGoodsList__item}>
              <p className={s.productDetailsDescription}>
                індивідуальні рецептури
              </p>
            </li>
          </ul>

          <div className={s.productDetailsBorder}></div>
          <h3
            className={s.categoryGoods}
            style={{ padding: '8px', margin: '0px' }}
          >
            Дозування:
          </h3>
          <ul className={s.categoryGoodsList}>
            <li className={s.categoryGoodsList__item}>
              <p className={s.productDetailsDescription}>
                50-250 г/гол/добу (залежить від рецептури)
              </p>
            </li>
          </ul>
          <div className={s.productDetailsBorder}></div>
          <h3
            className={s.categoryGoods}
            style={{ padding: '8px', margin: '0px' }}
          >
            Фасовка:
          </h3>
          <ul className={s.categoryGoodsList} style={{ marginBottom: '20px' }}>
            <li className={s.categoryGoodsList__item}>
              <p className={s.productDetailsDescription}>мішок 25 кг</p>
            </li>
          </ul>
          <ButtonCallBack />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
