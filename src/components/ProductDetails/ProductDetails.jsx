import { useParams, useNavigate } from 'react-router-dom';
import { products } from 'services/Products';
import Header from 'components/Header/Header';
import s from './ProductDetails.module.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p className={s.notFound}>Товар не знайдено</p>;
  }

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

          <p>Виробник: {product.manufacturer}</p>
          <p>
            Категорія:{' '}
            {Array.isArray(product.category)
              ? product.category.join(', ')
              : product.category}
          </p>
          <p>Опис: {product.description}</p>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
