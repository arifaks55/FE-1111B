import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => (
    <nav className="p-4 bg-gray-100 flex flex-wrap justify-center sm:justify-start space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : ""}>Ana Sayfa</NavLink>
        <NavLink to="/urunler" className={({ isActive }) => isActive ? "text-blue-500" : ""}>Tüm Ürünler</NavLink>
        <NavLink to="/hakkimizda" className={({ isActive }) => isActive ? "text-blue-500" : ""}>Hakkımızda</NavLink>
        <NavLink to="/feedback" className={({ isActive }) => isActive ? "text-blue-500" : ""}>Geri Bildirim</NavLink>
    </nav>
);

export default Navigation;
