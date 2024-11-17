import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { Product } from '../types/product';

const HomePage: React.FC = () => {
    const products = useLoaderData() as Product[];
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!products.length) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setError('Ürün listesi yüklenemedi. Lütfen daha sonra tekrar deneyin.');
            }, 3000); // Simülasyon için 3 saniye
        }
    }, [products]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">En Çok Satan Ürünler</h1>
            {loading ? (
                <p className="text-center text-gray-500">Ürünler yükleniyor...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
};

export default HomePage;
