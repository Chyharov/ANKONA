import { useState, useCallback } from 'react';
import Header from 'components/Header/Header';
import SectionPrivacy from 'components/SectionPrivacy/SectionPrivacy';
import Footer from 'components/Footer/Footer';
import translations from 'components/LanguageSelect/translations';

const PrivacyPage = () => {
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
      <Header language={language} onLanguageChange={handleLanguageChange} navSearchStyle={{ display: 'none' }} languageSelectStyle={{ display: 'none' }} navItems={navItems} />
      <main>
        <SectionPrivacy language={language}/>
      </main>
      <Footer language={language} navItems={navItems}/>
    </>
  );
};

export default PrivacyPage;
