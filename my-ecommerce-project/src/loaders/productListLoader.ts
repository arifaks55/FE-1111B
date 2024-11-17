import { LoaderFunctionArgs } from 'react-router-dom';
import { getAllProducts } from '../services/api';

export const productListLoader = async ({ request }: LoaderFunctionArgs) => {
    try {
        // URL'deki query parametresinden sayfa numarasını al
        const url = new URL(request.url);
        const page = Number(url.searchParams.get("page") || 1);

        // API'den ürünleri getir
        const response = await getAllProducts(page);

        // Yanıtı doğrula ve `results` döndür
        if (response.status === "success" && response.data && Array.isArray(response.data.results)) {
            return response.data.results;
        } else {
            console.warn("API yanıtı beklenen yapıda değil:", response);
            return []; // Beklenmeyen durumda boş bir dizi döndür
        }
    } catch (error) {
        console.error("API isteği başarısız:", error);
        return []; // Hata durumunda boş bir dizi döndür
    }
};
