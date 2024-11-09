import React from 'react';

interface ProductCardProps {
    id: number | string;
    name: string;
    photo_src: string;
    price_info: {
        total_price: number;
        discounted_price?: number;
    };
    comment_count: number;
    average_star: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    photo_src,
    price_info,
    comment_count,
    average_star,
}) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    return (
        <div className="product-card border rounded-lg p-4" key={id}>
            <img
                src={`${baseUrl}${photo_src}`}
                alt={name}
                className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">{name}</h3>
            <p className="text-sm text-gray-600">Yorum Sayısı: {comment_count}</p>
            <p className="text-sm text-gray-600">Ortalama Yıldız: {average_star}</p>
            <div className="flex items-center mt-4">
                {price_info.discounted_price ? (
                    <>
                        <span className="text-lg font-bold text-red-500">
                            ₺{price_info.discounted_price}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                            ₺{price_info.total_price}
                        </span>
                    </>
                ) : (
                    <span className="text-lg font-bold">₺{price_info.total_price}</span>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
