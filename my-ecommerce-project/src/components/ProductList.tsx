import React from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';
import { FaExclamationTriangle } from 'react-icons/fa';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    if (!products.length) {
        return (
            <div className="text-center text-gray-500 flex flex-col items-center mt-8">
                <FaExclamationTriangle className="text-red-500 text-3xl mb-2" />
                <p>Hiç ürün bulunamadı.</p>
            </div>
        );
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
