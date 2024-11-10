import React from 'react';
import ProductCard from './ProductCard';

interface Product {
    id: number;
    name: string;
    short_explanation: string;
    slug: string;
    price_info: { total_price: number; discounted_price?: number };
    photo_src: string;
    comment_count: number;
    average_star: number;
}

interface ProductListProps {
    products: Product[];
}


const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    photo_src={`${product.photo_src}`}
                    comment_count={product.comment_count}
                    average_star={product.average_star}
                    price_info={{
                        total_price: product.price_info.total_price,
                        discounted_price: product.price_info.discounted_price
                    }}
                />
            ))}
        </div>
    );
};

export default ProductList;
