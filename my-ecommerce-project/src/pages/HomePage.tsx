import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { Product } from '../types/product';

const HomePage: React.FC = () => {
    const products = useLoaderData() as Product[];

    return (
        <div>
            <h1>En Çok Satan Ürünler</h1>
            <ProductList products={products} />
        </div>
    );
};

export default HomePage;
