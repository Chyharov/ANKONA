import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const ProductDetails = lazy(() => import('components/ProductDetails/ProductDetails'));
const BlogPage = lazy(() => import('pages/BlogPage/BlogPage'));


export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
