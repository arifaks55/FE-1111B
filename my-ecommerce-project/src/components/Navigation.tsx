import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
    <nav className="p-4 bg-gray-100">
        <Link to="/" className="mr-4">Ana Sayfa</Link>
        <Link to="/urunler" className="mr-4">Tüm Ürünler</Link>
        <Link to="/hakkimizda" className="mr-4">Hakkımızda</Link>
        <Link to="/feedback" className="mr-4">Geri Bildirim</Link>
    </nav>
);

export default Navigation;
