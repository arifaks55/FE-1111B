import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id} // Burada benzersiz "key" ekliyoruz
                    {...product}
                />
            ))}
        </div>
    );
};

export default ProductList;
