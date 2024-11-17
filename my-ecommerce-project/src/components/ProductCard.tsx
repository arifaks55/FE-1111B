import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';

const ProductCard: React.FC<Product> = ({
    name,
    photo_src,
    price_info,
    short_explanation,
    slug
}) => {
    const baseURL = import.meta.env.VITE_API_URL;

    return (
        <Link
            to={`/urunler/${slug}`}
            className="product-card border rounded-lg p-4 shadow-md flex flex-col space-y-2 hover:shadow-lg transition transform hover:scale-105"
        >
            <img
                src={`${baseURL}${photo_src}`}
                alt={`${slug} ürün görseli`}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600">{short_explanation}</p>
                <div className="mt-auto">
                    {price_info.discounted_price ? (
                        <>
                            <span className="line-through text-gray-500">{price_info.total_price} TL</span>
                            <span className="text-red-500 font-bold ml-2">
                                {price_info.discounted_price} TL
                            </span>
                        </>
                    ) : (
                        <span className="text-gray-800 font-bold">{price_info.total_price} TL</span>
                    )}
                </div>
            </div>
        </Link>);
};

export default ProductCard;
