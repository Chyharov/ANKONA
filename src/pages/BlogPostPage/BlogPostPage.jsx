import { useParams } from "react-router-dom";
import { blogPosts } from 'services/blogPosts';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    return <h2>Стаття не знайдена</h2>;
  }

  return (
    <div >
      <h1>{post.title}</h1>
    </div>
  );
};

export default BlogPostPage;
