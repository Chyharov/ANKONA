import { useState, useCallback } from 'react';
import Header from 'components/Header/Header';
import SectionPrivacy from 'components/SectionPrivacy/SectionPrivacy';
import Footer from 'components/Footer/Footer';

const PrivacyPage = () => {
  const [language, setLanguage] = useState('ua');
  
    const handleLanguageChange = useCallback(
      langCode => {
        if (langCode !== language) {
          setLanguage(langCode);
          console.log('Мова змінена на:', langCode);
        }
      },
      [language]
    );
  return (
    <>
      <Header language={language} onLanguageChange={handleLanguageChange}/>
      <main>
        <SectionPrivacy language={language}/>
      </main>
      <Footer language={language}/>
    </>
  );
};

export default PrivacyPage;
