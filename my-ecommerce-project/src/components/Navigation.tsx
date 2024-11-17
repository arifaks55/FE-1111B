import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaListAlt, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navigation: React.FC = () => (
    <nav className="p-4 bg-gray-100 flex flex-wrap justify-center sm:justify-start space-x-6">
        {/* Ana Sayfa */}
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "flex items-center text-blue-500" : "flex items-center text-gray-700 hover:text-blue-500"
            }
        >
            <FaHome className="mr-2" /> Ana Sayfa
        </NavLink>

        {/* Tüm Ürünler */}
        <NavLink
            to="/urunler"
            className={({ isActive }) =>
                isActive ? "flex items-center text-blue-500" : "flex items-center text-gray-700 hover:text-blue-500"
            }
        >
            <FaListAlt className="mr-2" /> Tüm Ürünler
        </NavLink>

        {/* Kategoriler */}
        <NavLink
            to="/hakkimizda"
            className={({ isActive }) =>
                isActive ? "flex items-center text-blue-500" : "flex items-center text-gray-700 hover:text-blue-500"
            }
        >
            <FaInfoCircle className="mr-2" /> Kategoriler
        </NavLink>

        {/* İletişim */}
        <NavLink
            to="/feedback"
            className={({ isActive }) =>
                isActive ? "flex items-center text-blue-500" : "flex items-center text-gray-700 hover:text-blue-500"
            }
        >
            <FaEnvelope className="mr-2" /> İletişim
        </NavLink>
    </nav>
);

export default Navigation;
