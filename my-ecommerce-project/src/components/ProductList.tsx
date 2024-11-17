import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    if (!products.length) {
        return <p className="text-center text-gray-500">Hiç ürün bulunamadı.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id || product.slug} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
