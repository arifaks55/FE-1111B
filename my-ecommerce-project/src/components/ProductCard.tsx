import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';

const ProductCard: React.FC<Product> = ({
    id,
    name,
    photo_src,
    price_info,
    short_explanation
}) => {
    const baseURL = import.meta.env.VITE_API_URL;

    return (
        <Link to={`/urunler/${id}`} className="product-card border rounded-lg p-4 shadow-md">
            <img src={`${baseURL}${photo_src}`} alt={name} className="w-full h-48 object-cover" />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p>{short_explanation}</p>
            <div>
                {price_info.discounted_price ? (
                    <>
                        <span className="line-through">{price_info.total_price} TL</span>
                        <span className="text-red-500 font-bold"> {price_info.discounted_price} TL</span>
                    </>
                ) : (
                    <span>{price_info.total_price} TL</span>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;
