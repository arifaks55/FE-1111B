export const calculateOffset = (page: number, limit: number = 12): number => {
    // Sayfa numarasına göre offset hesaplaması yapıyoruz
    return (page - 1) * limit;
};
