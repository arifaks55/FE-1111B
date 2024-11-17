import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Product } from '../types/product';

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const limit = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      const offset = (page - 1) * limit;
      const baseURL = import.meta.env.VITE_API_URL;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${baseURL}/api/v1/products?limit=${limit}&offset=${offset}`);
        const data = await response.json();

        if (data.status === "success") {
          setProducts(data.data.results);
          setTotalCount(data.data.count);
        } else {
          console.error("Ürünler alınamadı:", data);
          setError("Ürünler yüklenirken bir hata oluştu.");
        }
      } catch (error) {
        console.error("API isteği başarısız:", error);
        setError("API isteği başarısız oldu.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const totalPages = Math.ceil(totalCount / limit);

  const goToPage = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const renderPagination = () => {
    const visiblePages = 5;
    const startPage = Math.max(1, page - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    return (
      <>
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded mx-1 disabled:opacity-50"
        >
          Önceki
        </button>
        {[...Array(endPage - startPage + 1)].map((_, index) => {
          const pageIndex = startPage + index;
          return (
            <button
              key={pageIndex}
              onClick={() => goToPage(pageIndex)}
              className={`px-3 py-1 border rounded mx-1 ${page === pageIndex ? 'bg-blue-500 text-white' : ''}`}
            >
              {pageIndex}
            </button>
          );
        })}
        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded mx-1 disabled:opacity-50"
        >
          Sonraki
        </button>
      </>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ürün Listesi</h1>

      {loading ? (
        <div className="text-center">Yükleniyor...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <>
          <ProductList products={products} />
          <div className="pagination mt-4 flex justify-center items-center">{renderPagination()}</div>
        </>
      )}
    </div>
  );
};

export default ProductListPage;
