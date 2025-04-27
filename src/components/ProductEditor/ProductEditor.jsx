import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from 'services/Products';
import s from './ProductEditor.module.scss';

const ProductEditor = ({ language }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState(products);
  const [product, setProduct] = useState(() => {
    const original = allProducts.find(p => p.id === Number(id));
    return original ? JSON.parse(JSON.stringify(original)) : null;
  });

  if (!product) {
    return <p>Товар не знайдено</p>;
  }

  const handleChange = (field, value) => {
    setProduct(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        [language]: value,
      },
    }));
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...product.sections];
    updatedSections[index][field][language] = value;
    setProduct(prev => ({ ...prev, sections: updatedSections }));
  };

  const handleSectionItemChange = (sectionIndex, itemIndex, value) => {
    const updatedSections = [...product.sections];
    updatedSections[sectionIndex].items[language][itemIndex] = value;
    setProduct(prev => ({ ...prev, sections: updatedSections }));
  };

  const addSection = () => {
    setProduct(prev => ({
      ...prev,
      sections: [
        ...prev.sections,
        { title: { [language]: '' }, items: { [language]: [''] } },
      ],
    }));
  };

  const addItemToSection = (sectionIndex) => {
    const updatedSections = [...product.sections];
    updatedSections[sectionIndex].items[language].push('');
    setProduct(prev => ({ ...prev, sections: updatedSections }));
  };

  const saveChanges = () => {
    const updatedProducts = allProducts.map(p =>
      p.id === product.id ? product : p
    );

    setAllProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    
    alert('Зміни збережено!');
    navigate(-1);
  };

  return (
    <section className={s.sectionProductEditor}>
      <div className='container'>

      <h2>Редагування продукту</h2>

      <label>
        Назва:
        <input
          type="text"
          value={product.name[language] || ''}
          onChange={e => handleChange('name', e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />
      </label>

      <label>
        Опис:
        <textarea
          value={product.description[language] || ''}
          onChange={e => handleChange('description', e.target.value)}
          rows={4}
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />
      </label>

      <h3>Секції</h3>
      {product.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <label>
            Назва секції:
            <input
              type="text"
              value={section.title[language] || ''}
              onChange={e => handleSectionChange(sectionIndex, 'title', e.target.value)}
              style={{ display: 'block', width: '100%', marginBottom: '8px' }}
            />
          </label>

          <h4>Пункти</h4>
          {section.items[language]?.map((item, itemIndex) => (
            <input
              key={itemIndex}
              type="text"
              value={item}
              onChange={e => handleSectionItemChange(sectionIndex, itemIndex, e.target.value)}
              style={{ display: 'block', width: '100%', marginBottom: '6px' }}
            />
          ))}

          <button onClick={() => addItemToSection(sectionIndex)} style={{ marginTop: '5px' }}>
            Додати пункт
          </button>
        </div>
      ))}

      <button onClick={addSection} style={{ marginBottom: '20px' }}>
        Додати секцію
      </button>
      <br />
      <button onClick={saveChanges} style={{ padding: '10px 20px' }}>
        Зберегти зміни
        </button>
              </div>
    </section>
  );
};

export default ProductEditor;
