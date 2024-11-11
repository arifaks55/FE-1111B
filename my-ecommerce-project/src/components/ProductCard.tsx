import React, { useState, useEffect } from 'react';
import { Product } from '../types/product';

type ProductCardProps = Product;

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    photo_src,
    price_info,
    short_explanation,
}) => {
    const baseURL = import.meta.env.VITE_API_URL;

    // Aroma ve boyut state'i
    const [selectedAroma, setSelectedAroma] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    // Rastgele yorum sayısı ve puan state'i
    const [commentCount, setCommentCount] = useState<number>(0);
    const [averageStar, setAverageStar] = useState<number>(0);

    // Aroma ve boyut seçenekleri
    const aromaOptions = ["Çilek", "Çikolata", "Vanilya"];
    const sizeOptions = ["500g", "1kg", "2kg"];

    // Rastgele değerleri ayarlama
    useEffect(() => {
        // 0 ile 100 arasında rastgele bir yorum sayısı
        setCommentCount(Math.floor(Math.random() * 100));

        // 0 ile 5 arasında iki ondalık basamaklı rastgele bir puan
        setAverageStar(parseFloat((Math.random() * 5).toFixed(1)));
    }, []);

    return (
        <div className="product-card border rounded-lg p-4 shadow-md">
            <img src={`${baseURL}${photo_src}`} alt={name} className="w-full h-48 object-cover" />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p>{short_explanation}</p>
            <div>Yorum Sayısı: {commentCount}</div>
            <div>Ortalama Puan: {averageStar}</div>
            <div>
                {typeof price_info.discounted_price === 'number' ? (
                    <>
                        <span className="line-through">{price_info.total_price} TL</span>
                        <span className="text-red-500 font-bold"> {price_info.discounted_price} TL</span>
                    </>
                ) : (
                    <span>{price_info.total_price} TL</span>
                )}
            </div>            {/* Aroma seçimi */}
            <div className="mt-4">
                <label htmlFor="aroma-select" className="block font-semibold">Aroma Seçin:</label>
                <select
                    id="aroma-select"
                    value={selectedAroma || ""}
                    onChange={(e) => setSelectedAroma(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="" disabled>Aroma Seçin</option>
                    {aromaOptions.map((aroma) => (
                        <option key={aroma} value={aroma}>{aroma}</option>
                    ))}
                </select>
            </div>

            {/* Boyut seçimi */}
            <div className="mt-4">
                <label htmlFor="size-select" className="block font-semibold">Boyut Seçin:</label>
                <select
                    id="size-select"
                    value={selectedSize || ""}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="" disabled>Boyut Seçin</option>
                    {sizeOptions.map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </div>

            {/* Seçilen aroma ve boyutu gösterme */}
            <div className="mt-4">
                <p>Seçilen Aroma: {selectedAroma || "Yok"}</p>
                <p>Seçilen Boyut: {selectedSize || "Yok"}</p>
            </div>
        </div>
    );
};

export default ProductCard;
