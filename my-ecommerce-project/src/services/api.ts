export const getAllProducts = async (page: number = 1) => {
    const limit = 12;
    const offset = (page - 1) * limit;
    const apiUrl = import.meta.env.VITE_API_URL;

    const url = `${apiUrl}/api/v1/products/best-sellers?limit=${limit}&offset=${offset}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Ürünleri data.data içinden alıyoruz
        return data.data || [];
    } catch (error) {
        console.error("API isteği başarısız:", error);
        return []; // Hata durumunda boş bir dizi döndür
    }
};
