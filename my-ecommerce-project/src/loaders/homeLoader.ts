import { Product } from '../types/product';

export const homeLoader = async (): Promise<Product[]> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/products/best-sellers`);
    const result = await response.json();
    
    // result.data'nın dizi olduğundan emin olun ve null değerleri undefined olarak ayarlayın
    const products: Product[] = result.data.map((product: Product) => ({
        ...product,
        price_info: {
            ...product.price_info,
            discounted_price: product.price_info.discounted_price ?? undefined,
        },
    }));

    return products;
};