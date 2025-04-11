import { useState, useCallback } from 'react';
import Header from 'components/Header/Header';
import SectionBlogCard from 'components/SectionBlogCard/SectionBlogCard';
import Footer from 'components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { blogPosts } from 'services/blogPosts';

const BlogPostPage = () => {
   const [language, setLanguage] = useState('ua');
  
    const handleLanguageChange = useCallback(
      langCode => {
        if (langCode !== language) {
          setLanguage(langCode);
          
        }
      },
      [language]
    );
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return <h2>Стаття не знайдена</h2>;
  }

  return (
    <>
      <Header navSearchStyle={{ display: 'none' }} style={{ width: '130px' }} language={language} onLanguageChange={handleLanguageChange}/>
      <main>
        <SectionBlogCard post={post} language={language}/>
      </main>
      <Footer language={language}/>
    </>
  );
};

export default BlogPostPage;
