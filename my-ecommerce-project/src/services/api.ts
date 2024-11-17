export const getAllProducts = async (page: number = 1) => {
    const limit = 12;
    const offset = (page - 1) * limit;
    const apiUrl = import.meta.env.VITE_BASE_URL;

    const url = `${apiUrl}/api/v1/products?limit=${limit}&offset=${offset}`;

    try {
        const response = await fetch(url);

        // Hata kontrolü
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}, url: ${url}`);
            return {
                status: "error",
                data: { count: 0, next: null, previous: null, results: [] },
                error: `HTTP error! status: ${response.status}`,
            };
        }

        // JSON verisini ayrıştır
        const data = await response.json();

        // Yanıtın beklenen yapıya uygun olup olmadığını kontrol et
        if (!data || !data.data || !Array.isArray(data.data.results)) {
            console.error("Yanıt beklenen yapıda değil:", data);
            return {
                status: "error",
                data: { count: 0, next: null, previous: null, results: [] },
                error: "Yanıt beklenen yapıda değil",
            };
        }

        return { status: "success", data: data.data }; // Beklenen veriyi döndür
    } catch (error) {
        // Ağ veya beklenmeyen hataları yakala
        console.error("API isteği sırasında hata oluştu:", error);
        return {
            status: "error",
            data: { count: 0, next: null, previous: null, results: [] },
            error: error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu",
        };
    }
};
