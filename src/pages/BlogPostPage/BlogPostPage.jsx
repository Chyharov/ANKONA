import { useState, useCallback } from 'react';
import Header from 'components/Header/Header';
import SectionBlogCard from 'components/SectionBlogCard/SectionBlogCard';
import Footer from 'components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { blogPosts } from 'services/blogPosts';
import translations from 'components/LanguageSelect/translations';

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
  const t = translations.navlink[language];
  const navItems = [
    {
      type: 'route',
      to: '/',
      label: t.main,
      delay: 0.05,
    },
    {
      type: 'route',
      to: '/blog',
      label: t.blog,
      delay: 0.4,
    }
  ];

  if (!post) {
    return <h2>Стаття не знайдена</h2>;
  }

  return (
    <>
      <Header navSearchStyle={{ display: 'none' }} languageSelectStyle={{ display: 'none' }} style={{ width: '130px' }} language={language} onLanguageChange={handleLanguageChange} navItems={navItems} />
      <main>
        <SectionBlogCard post={post} language={language}/>
      </main>
      <Footer language={language} navItems={navItems}/>
    </>
  );
};

export default BlogPostPage;
