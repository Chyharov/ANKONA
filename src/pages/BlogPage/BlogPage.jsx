import { useState, useCallback } from 'react';
import Header from 'components/Header/Header';
import SectionBlog from 'components/SectionBlog/SectionBlog';
import Footer from 'components/Footer/Footer';
import translations from 'components/LanguageSelect/translations';

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

  const t = translations.navlink[language];
  const navItems = [
    {
      type: 'route',
      to: '/',
      label: t.main,
      delay: 0.05,
    },
  ];

  return (
    <>
      <Header
        navSearchStyle={{ display: 'none' }}
        languageSelectStyle={{ display: 'none' }}
        style={{ width: '130px' }}
        language={language}
        onLanguageChange={handleLanguageChange}
        navItems={navItems}
      />
      <main>
        <SectionBlog language={language} />
      </main>
      <Footer language={language} navItems={navItems}/>
    </>
  );
};

export default BlogPage;
