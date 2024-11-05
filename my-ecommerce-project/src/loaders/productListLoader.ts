export const productListLoader = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/products/best-sellers`);
    const result = await response.json();

    // Eğer `data` içerisinde `products` bulunuyorsa, bunu döndürün, değilse boş dizi döndürün
    return result.data && Array.isArray(result.data) ? result.data : [];
};
