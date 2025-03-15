import Header from 'components/Header/Header';
import SectionBlogCard from 'components/SectionBlogCard/SectionBlogCard';
import Footer from 'components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { blogPosts } from 'services/blogPosts';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return <h2>Стаття не знайдена</h2>;
  }

  return (
    <>
      <Header navSearchStyle={{ display: 'none' }} style={{ width: '130px' }} />
      <main>
        <SectionBlogCard post={post} />
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
