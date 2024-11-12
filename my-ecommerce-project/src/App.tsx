import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import FeedbackForm from './pages/FeedbackForm';
import Layout from './components/Layout';
import { homeLoader } from './loaders/homeLoader';
import { productListLoader } from './loaders/productListLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, loader: homeLoader },
      { path: "/urunler", element: <ProductListPage />, loader: productListLoader },
      { path: "/urunler/:productId", element: <ProductDetailPage /> },
      { path: "/hakkimizda", element: <AboutPage /> },
      { path: "/feedback", element: <FeedbackForm /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
