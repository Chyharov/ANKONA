import { useState, useCallback } from 'react';
import Header from 'components/Header/Header';
import ProductDetails from 'components/ProductDetails/ProductDetails';
import Footer from 'components/Footer/Footer';

const ProductDetailsPage = () => {
  const [language, setLanguage] = useState('ua');
  
    const handleLanguageChange = useCallback((langCode) => {
      if (langCode !== language) {
        setLanguage(langCode);
        console.log('Мова змінена на:', langCode);
      }
    }, [language]);
  return (
    <>
      <Header navSearchStyle={{ display: 'none' }} style={{ width: '130px' }} language={language} onLanguageChange={handleLanguageChange}/>
      <main>
        <ProductDetails language={language}/>
      </main>
      <Footer language={language}/>
    </>
  );
};

export default ProductDetailsPage;
