import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

interface Product {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: {
    profit: number | null;
    total_price: number;
    discounted_price?: number | null;
    price_per_servings?: number;
    discount_percentage?: number;
  };
  photo_src: string;
  comment_count: number;
  average_star: number;
}

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/products/best-sellers`);
        const data = await response.json();

        if (data.status === 'success' && Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          console.error('Beklenmeyen API yanıtı:', data);
        }
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard
            key={index}
            id={index}
            name={product.name}
            photo_src={`${import.meta.env.VITE_API_URL}${product.photo_src}`}
            price_info={{
              total_price: product.price_info.total_price,
              discounted_price: product.price_info.discounted_price
            }}
          />
        ))
      ) : (
        <p>Ürünler yükleniyor veya mevcut değil.</p>
      )}
    </div>
  );
};

export default ProductListPage;
