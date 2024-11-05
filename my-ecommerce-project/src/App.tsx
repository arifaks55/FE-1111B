import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { homeLoader } from './loaders/homeLoader';
import ProductListPage from './pages/ProductListPage';
import { productListLoader } from './loaders/productListLoader';
import ProductDetailPage from './pages/ProductDetailPage';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, loader: homeLoader },
      { path: "/urunler", element: <ProductListPage />, loader: productListLoader },
      { path: "/urunler/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
