import { LoaderFunctionArgs } from 'react-router-dom';
import { getAllProducts } from '../services/api';

export const productListLoader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") || 1);

    try {
        // getAllProducts çağrısı `data` yapısında bir nesne döndürüyor
        const response = await getAllProducts(page);

        // Yanıtın `data.results` alanına erişiyoruz
        if (response.status === "success" && response.data && Array.isArray(response.data.results)) {
            return response.data.results;
        } else {
            console.warn("API yanıtı beklenen yapıda değil:", response);
            return []; // Hata durumunda boş bir dizi döndür
        }
    } catch (error) {
        console.error("API isteği başarısız:", error);
        return []; // Hata durumunda boş bir dizi döndür
    }
};
