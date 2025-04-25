import { useState, useCallback } from 'react';
import { SearchProvider } from 'components/SearchContext';
import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import SectionAbout from 'components/SectionAbout/SectionAbout';
import SectionGoods from 'components/SectionGoods/SectionGoods';
import SectionTradeMarks from 'components/SectionTradeMarks/SectionTradeMarks';
import SectionTeam from 'components/SectionTeam/SectionTeam';
import Footer from 'components/Footer/Footer';
import translations from 'components/LanguageSelect/translations';

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

  const t = translations.navlink[language];
  const navItems = [
    {
      type: 'scroll',
      to: 'about',
      label: t.about,
      delay: 0.05,
    },
    {
      type: 'scroll',
      to: 'goods',
      label: t.goods,
      delay: 0.1,
    },
    {
      type: 'scroll',
      to: 'tradeMarks',
      label: t.tradeMarks,
      delay: 0.2,
    },
    {
      type: 'scroll',
      to: 'team',
      label: t.team,
      delay: 0.3,
    },
    {
      type: 'route',
      to: '/blog',
      label: t.blog,
      delay: 0.4,
    }
  ];

  return (
    <SearchProvider>
      <Header language={language} onLanguageChange={handleLanguageChange} navItems={navItems} />
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
