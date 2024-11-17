import { Product } from '../types/product';

export const homeLoader = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/products/best-sellers`);

        if (!response.ok) {
            throw new Error(`API isteği başarısız: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();

        if (!result.data) {
            throw new Error('API yanıtında "data" alanı eksik.');
        }

        return result.data;
    } catch (error) {
        console.error('Veri yüklenirken bir hata oluştu:', error);
        return []; // Hata durumunda boş bir dizi döndür
    }
};
