import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

interface Product {
    id: string;
    name: string;
    slug: string;
    short_explanation: string;
    explanation: {
        description: string;
        usage: string;
        features: string;
    };
    variants: Array<{
        id: string;
        aroma: string;
        size: {
            gram: number;
            pieces: number;
            total_services: number;
        };
        price: {
            total_price: number;
            discounted_price: number | null;
            price_per_servings: number;
        };
        photo_src: string;
        is_available: boolean;
    }>;
    photo_src: string;
}

const ProductDetailPage: React.FC = () => {
    const { productIdentifier } = useParams<{ productIdentifier: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedVariant, setSelectedVariant] = useState<Product['variants'][0] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const baseURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchProduct = async () => {
            if (!productIdentifier) {
                setError('Ürün kimliği bulunamadı.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${baseURL}/api/v1/products/${productIdentifier}`);
                if (!response.ok) {
                    throw new Error('Ürün bulunamadı veya API isteği başarısız.');
                }
                const data = await response.json();
                setProduct(data.data);
                setSelectedVariant(data.data.variants[0]); // Varsayılan olarak ilk varyantı seç
            } catch (error) {
                setError('Veri alınırken bir hata oluştu.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productIdentifier, baseURL]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-10">
                <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-10 text-red-500">
                <ExclamationCircleIcon className="h-8 w-8 text-red-500 mx-auto" />
                <p className="mt-4">{error}</p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                    Geri Dön
                </button>
            </div>
        );
    }

    if (!product) {
        return <div className="text-center py-10">Ürün bulunamadı.</div>;
    }

    const handleVariantChange = (variantId: string) => {
        const variant = product.variants.find((v) => v.id === variantId);
        setSelectedVariant(variant || null);
    };

    return (
        <div className="container mx-auto p-4">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
                Geri Dön
            </button>

            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <img
                src={`${baseURL}${selectedVariant?.photo_src || product.photo_src}`}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">{product.short_explanation}</p>

            <div className="mt-8">
                <h2 className="text-xl font-semibold">Ürün Açıklaması</h2>
                <p className="mt-2 text-gray-800">{product.explanation.description}</p>
            </div>

            <div className="mt-8">
                <label htmlFor="variant-select" className="block font-semibold mb-2">Aroma ve Boyut Seçin:</label>
                <select
                    id="variant-select"
                    value={selectedVariant?.id || ''}
                    onChange={(e) => handleVariantChange(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    {product.variants.map((variant) => (
                        <option key={variant.id} value={variant.id}>
                            {variant.aroma} - {variant.size.gram}g ({variant.size.total_services} servis)
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-semibold">Fiyat Bilgisi</h3>
                {selectedVariant && (
                    <p>
                        <span>Toplam Fiyat: {selectedVariant.price.total_price}₺</span>
                        {selectedVariant.price.discounted_price && (
                            <span className="text-red-500 line-through ml-2">
                                {selectedVariant.price.discounted_price}₺
                            </span>
                        )}
                    </p>
                )}
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-semibold">Kullanım Bilgisi</h3>
                <p className="text-gray-800">{product.explanation.usage}</p>
            </div>

            <button
                onClick={() => alert(`${product.name} sepete eklendi!`)}
                className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Sepete Ekle
            </button>
        </div>
    );
};

export default ProductDetailPage;
