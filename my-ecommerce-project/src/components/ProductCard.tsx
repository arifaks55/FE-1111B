import { Link } from 'react-router-dom';

interface ProductCardProps {
    id: number;
    name: string;
    photo_src: string;
    price_info: {
        total_price: number;
        discounted_price?: number | null;
    };
}

const ProductCard = ({ id, name, photo_src, price_info }: ProductCardProps) => {
    return (
        <Link to={`/product/${id}`} className="product-card">
            <img src={photo_src} alt={name} className="product-image" />
            <h3>{name}</h3>
            <p>
                {price_info.discounted_price ? (
                    <>
                        <span className="line-through">₺{price_info.total_price}</span>
                        <span className="text-red-500 ml-2">₺{price_info.discounted_price}</span>
                    </>
                ) : (
                    <span>₺{price_info.total_price}</span>
                )}
            </p>
        </Link>
    );
};

export default ProductCard;
