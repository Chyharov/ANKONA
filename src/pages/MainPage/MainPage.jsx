import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import SectionAbout from 'components/SectionAbout/SectionAbout';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionAbout />      
      </main>
    </>
  );
};



export default MainPage;