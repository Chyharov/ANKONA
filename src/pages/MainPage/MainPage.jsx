import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import SectionAbout from 'components/SectionAbout/SectionAbout';
import SectionGoods from 'components/SectionGoods/SectionGoods';
import SectionTradeMarks from 'components/SectionTradeMarks/SectionTradeMarks';
import SectionTeam from 'components/SectionTeam/SectionTeam';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionAbout />
        <SectionGoods />
        <SectionTradeMarks />
        <SectionTeam />
      </main>
    </>
  );
};



export default MainPage;