import { Product } from '../types/product';

export const homeLoader = async (): Promise<Product[]> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/products/best-sellers`);
    const result = await response.json();
    return result.data || [];
};
