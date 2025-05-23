import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SearchProvider } from "components/SearchContext";

const MainPage = lazy(() => import("pages/MainPage/MainPage"));
const ProductDetails = lazy(() => import("pages/ProductDetailsPage/ProductDetailsPage"));
const BlogPage = lazy(() => import("pages/BlogPage/BlogPage"));
const BlogPostPage = lazy(() => import("pages/BlogPostPage/BlogPostPage"));
const PrivacyPage = lazy(() => import("pages/PrivacyPage/PrivacyPage"));
const EditProductDetailsPage = lazy(() => import("pages/EditProductDetailsPage/EditProductDetailsPage"));
const EditProductDetails = lazy(() => import("pages/EditProductDetails/EditProductDetails"));

export const App = () => {
  return (
    <SearchProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/editproductdetailspage" element={<EditProductDetailsPage />} />
          <Route path="/editproductdetailspage/:id" element={<EditProductDetails />} />
        </Routes>
      </Suspense>
    </SearchProvider>
  );
};
