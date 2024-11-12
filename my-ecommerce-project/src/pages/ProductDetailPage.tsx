import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/product';

const ProductDetailPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedAroma, setSelectedAroma] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<string>('');

    const aromaOptions = ['Çilek', 'Çikolata', 'Vanilya'];
    const sizeOptions = ['500g', '1kg', '2kg'];

    const baseURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (!productId) {
            console.error("Ürün ID'si eksik veya geçersiz!");
            return;
        }

        const fetchProduct = async () => {
            try {
                // Doğru API çağrısını yapıyoruz
                const response = await fetch(`${baseURL}/api/v1/products/${productId}`);
                if (!response.ok) {
                    console.error("Ürün bulunamadı veya API isteği başarısız.");
                    return;
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Veri alınırken bir hata oluştu:", error);
            }
        };

        fetchProduct();
    }, [productId, baseURL]);

    const addToCart = () => {
        if (selectedAroma && selectedSize && product) {
            const cartItem = {
                id: product.id,
                name: product.name,
                aroma: selectedAroma,
                size: selectedSize,
                price: product.price_info.total_price,
            };
            console.log('Sepete eklenen ürün:', cartItem);
            alert(`${product.name} sepete eklendi.`);
        } else {
            alert('Lütfen aroma ve boyut seçiniz.');
        }
    };

    if (!product) return <div>Yükleniyor...</div>;

    // Resim URL'sini tam URL olarak oluşturuyoruz
    const imageUrl = `${baseURL}${product.photo_src}`;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <img src={imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
            <p>{product.description || 'Bu ürün için açıklama mevcut değil.'}</p>

            {/* Aroma Seçimi */}
            <div className="mt-4">
                <label htmlFor="aroma-select" className="block font-semibold">Aroma Seçin:</label>
                <select
                    id="aroma-select"
                    value={selectedAroma}
                    onChange={(e) => setSelectedAroma(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="" disabled>Aroma Seçin</option>
                    {aromaOptions.map((aroma) => (
                        <option key={aroma} value={aroma}>{aroma}</option>
                    ))}
                </select>
            </div>

            {/* Boyut Seçimi */}
            <div className="mt-4">
                <label htmlFor="size-select" className="block font-semibold">Boyut Seçin:</label>
                <select
                    id="size-select"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="" disabled>Boyut Seçin</option>
                    {sizeOptions.map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </div>

            {/* Seçilen Aroma ve Boyut Gösterimi */}
            <div className="mt-4">
                <p>Seçilen Aroma: {selectedAroma || 'Seçilmedi'}</p>
                <p>Seçilen Boyut: {selectedSize || 'Seçilmedi'}</p>
            </div>

            {/* Sepete Ekle Butonu */}
            <button onClick={addToCart} className="mt-4 bg-blue-500 text-white p-2 rounded">Sepete Ekle</button>
        </div>
    );
};

export default ProductDetailPage;
