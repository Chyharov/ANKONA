import { useState, useCallback } from 'react';
import Header from 'components/Header/Header';
import SectionBlog from 'components/SectionBlog/SectionBlog';
import Footer from 'components/Footer/Footer';

const BlogPage = () => {
  const [language, setLanguage] = useState('ua');
  
    const handleLanguageChange = useCallback(
      langCode => {
        if (langCode !== language) {
          setLanguage(langCode);
        }
      },
      [language]
    );
  return (
    <>
      <Header navSearchStyle={{ display: 'none' }} languageSelectStyle={{ display: 'none' }} style={{ width: '130px' }} language={language} onLanguageChange={handleLanguageChange}/>
      <main>
        <SectionBlog language={language}/>
      </main>
      <Footer language={language}/>
    </>
  );
};

export default BlogPage;
