import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Product } from '../types/product';

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const limit = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      const offset = (page - 1) * limit;
      const baseURL = import.meta.env.VITE_API_URL;

      try {
        const response = await fetch(`${baseURL}/api/v1/products?limit=${limit}&offset=${offset}`);
        const data = await response.json();

        if (data.status === "success") {
          setProducts(data.data.results);
          setTotalCount(data.data.count); // Toplam ürün sayısını API yanıtından alıyoruz
        } else {
          console.error("Ürünler alınamadı:", data);
        }
      } catch (error) {
        console.error("API isteği başarısız:", error);
      }
    };

    fetchProducts();
  }, [page]);

  // Sayfa sayısını hesapla
  const totalPages = Math.ceil(totalCount / limit);

  // Sayfa değiştirme fonksiyonu
  const goToPage = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ürün Listesi</h1>

      {/* Ürün Listesi */}
      <ProductList products={products} />

      {/* Sayfalama Kontrolleri */}
      <div className="pagination mt-4 flex justify-center items-center">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded mx-1 disabled:opacity-50"
        >
          Önceki
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 border rounded mx-1 ${page === index + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded mx-1 disabled:opacity-50"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default ProductListPage;
