import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const ProductDetails = lazy(() => import('components/ProductDetails/ProductDetails'));
const BlogPage = lazy(() => import('pages/BlogPage/BlogPage'));
const PrivacyPage = lazy(() => import('pages/PrivacyPage/PrivacyPage'));


export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
