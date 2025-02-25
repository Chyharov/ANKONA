import { useParams } from 'react-router-dom';
import { products } from 'services/Products';
import s from './ProductDetails.module.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p className={s.notFound}>Товар не знайдено</p>;
  }

  return (
    <div className={s.productDetails}>
      <h2>{product.name}</h2>
      <p>Виробник:{product.manufacturer}</p>
      <p>Категорія:{Array.isArray(product.category) ? product.category.join(', ') : product.category}</p>
      <p>Опис:{product.description}</p>
    </div>
  );
};

export default ProductDetails;
