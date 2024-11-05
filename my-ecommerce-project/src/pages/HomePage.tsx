import { useLoaderData } from 'react-router-dom';
import { Product } from '../types/product';
import ProductList from '../components/ProductList';

const HomePage: React.FC = () => {
    const products = useLoaderData() as Product[]; // Veriyi loader'dan alıyoruz

    return (
        <div>
            <h1>Ürünler</h1>
            <ProductList products={products} /> {/* ProductList bileşenine products verisini geçiyoruz */}
        </div>
    );
};

export default HomePage;
