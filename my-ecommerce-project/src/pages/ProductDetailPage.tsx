import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    name: string;
    photo_src: string;
    description: string;
    tags: string[];
    flavors: string[];
    sizes: string[];
    price: number;
    servingPrice: number;
    features: string[];
    nutritionInfo: string;
    usageInstructions: string;
}

const ProductDetailPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [productId]);

    if (!product) return <div>Yükleniyor...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <img src={product.photo_src} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
            <p>{product.description}</p>

            <div className="mt-4">
                {product.flavors.length > 0 && (
                    <div>
                        <h3 className="font-semibold">Aromalar:</h3>
                        <ul className="list-disc ml-5">
                            {product.flavors.map((flavor) => (
                                <li key={flavor}>{flavor}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {product.sizes.length > 0 && (
                    <div>
                        <h3 className="font-semibold">Boyutlar:</h3>
                        <ul className="list-disc ml-5">
                            {product.sizes.map((size) => (
                                <li key={size}>{size}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetailPage;
