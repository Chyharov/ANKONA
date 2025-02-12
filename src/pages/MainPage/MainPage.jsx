import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import SectionAbout from 'components/SectionAbout/SectionAbout';
import SectionGoods from 'components/SectionGoods/SectionGoods';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionAbout />
        <SectionGoods />
      </main>
    </>
  );
};



export default MainPage;