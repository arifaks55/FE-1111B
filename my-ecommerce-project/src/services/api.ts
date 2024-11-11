export const getAllProducts = async (page: number = 1) => {
    const limit = 12;
    const offset = (page - 1) * limit;
    const apiUrl = import.meta.env.VITE_API_URL;

    const url = `${apiUrl}/api/v1/products?limit=${limit}&offset=${offset}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Yanıtın beklenen yapıda olup olmadığını kontrol etmek için log ekliyoruz
        const data = await response.json();

        return data; // `data` doğrudan döndürülüyor
    } catch (error) {
        console.error("API isteği başarısız:", error);
        return { status: "error", data: { count: 0, next: null, previous: null, results: [] } };
    }
};
