import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate(); // useNavigate hook'u ekleniyor

    const baseURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchProduct = async () => {
            if (!productIdentifier) {
                console.error('Ürün kimliği belirtilmemiş.');
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
                console.error('Veri alınırken bir hata oluştu:', error);
            }
        };

        fetchProduct();
    }, [productIdentifier, baseURL]);

    if (!product) return <div>Yükleniyor...</div>;

    // Varyant seçimi
    const handleVariantChange = (variantId: string) => {
        const variant = product.variants.find((v) => v.id === variantId);
        setSelectedVariant(variant || null);
    };

    return (
        <div className="container mx-auto p-4">
            <button
                onClick={() => navigate(-1)} // Geri gitmek için navigate kullanılıyor
                className="mb-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
                Geri Dön
            </button>

            <h1 className="text-3xl font-bold">{product.name}</h1>
            <img
                src={`${baseURL}${selectedVariant?.photo_src || product.photo_src}`}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-gray-600">{product.short_explanation}</p>

            {/* Açıklama */}
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Ürün Açıklaması</h2>
                <p>{product.explanation.description}</p>
            </div>

            {/* Varyantlar */}
            <div className="mt-4">
                <label htmlFor="variant-select" className="block font-semibold">Aroma ve Boyut Seçin:</label>
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

            {/* Fiyat Bilgisi */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Fiyat Bilgisi</h3>
                {selectedVariant && (
                    <p>
                        Toplam Fiyat: {selectedVariant.price.total_price}₺{' '}
                        {selectedVariant.price.discounted_price && (
                            <span className="text-red-500 line-through">
                                {selectedVariant.price.discounted_price}₺
                            </span>
                        )}
                    </p>
                )}
            </div>

            {/* Kullanım Bilgisi */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Kullanım Bilgisi</h3>
                <p>{product.explanation.usage}</p>
            </div>

            {/* Sepete Ekle Butonu */}
            <button
                onClick={() => alert(`${product.name} sepete eklendi!`)}
                className="mt-4 bg-blue-500 text-white p-2 rounded"
            >
                Sepete Ekle
            </button>
        </div>
    );
};

export default ProductDetailPage;
