import Header from 'components/Header/Header';
import SectionBlog from 'components/SectionBlog/SectionBlog';
import Footer from 'components/Footer/Footer';

const BlogPage = () => {
  return (
    <>
      <Header navSearchStyle={{ display: 'none' }} style={{ width: '130px' }} />
      <main>
        <SectionBlog />
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
