import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id || product.slug} // Benzersiz `id` yoksa `slug` kullan
                    id={product.id}
                    name={product.name}
                    photo_src={product.photo_src}
                    comment_count={product.comment_count}
                    average_star={product.average_star}
                    price_info={product.price_info}
                    short_explanation={product.short_explanation}
                    slug={product.slug}
                />
            ))}
        </div>
    );
};

export default ProductList;
