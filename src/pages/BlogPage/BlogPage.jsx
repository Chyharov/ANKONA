import Header from 'components/Header/Header';
import SectionBlog from 'components/SectionBlog/SectionBlog';
import Footer from 'components/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionBlog />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
