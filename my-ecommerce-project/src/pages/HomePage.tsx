import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { Product } from '../types/product';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

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
                <div className="flex justify-center items-center">
                    <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
                </div>
            ) : error ? (
                <div className="text-center">
                    <ExclamationCircleIcon className="h-8 w-8 text-red-500 mx-auto" />
                    <p className="text-red-500 mt-4">{error}</p>
                </div>
            ) : products.length === 0 ? (
                <p className="text-center text-gray-500">Hiç ürün bulunamadı.</p>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
};

export default HomePage;
