import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

const ProductListPage: React.FC = () => {
  const products = useLoaderData() as Product[];

  if (!products || products.length === 0) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          photo_src={product.photo_src}
          price_info={product.price_info}
          comment_count={product.comment_count}
          average_star={product.average_star}
          short_explanation={product.short_explanation}
          slug={product.slug}
        />
      ))}
    </div>
  );
};

export default ProductListPage;
