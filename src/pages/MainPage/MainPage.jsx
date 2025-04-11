import { useState, useCallback } from 'react';
import { SearchProvider } from 'components/SearchContext';
import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import SectionAbout from 'components/SectionAbout/SectionAbout';
import SectionGoods from 'components/SectionGoods/SectionGoods';
import SectionTradeMarks from 'components/SectionTradeMarks/SectionTradeMarks';
import SectionTeam from 'components/SectionTeam/SectionTeam';
import Footer from 'components/Footer/Footer';

const MainPage = () => {
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
    <SearchProvider>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <SectionHero language={language} />
        <SectionAbout language={language} />
        <SectionGoods language={language} />
        <SectionTradeMarks language={language} />
        <SectionTeam language={language} />
      </main>
      <Footer language={language} />
    </SearchProvider>
  );
};

export default MainPage;
