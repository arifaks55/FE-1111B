import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Üst navigasyon */}
            <header className="bg-gray-100 shadow-md">
                <Navigation />
            </header>

            {/* Ana içerik */}
            <main className="flex-grow container mx-auto p-4">
                <Outlet />
            </main>

            {/* Alt bilgi */}
            <footer className="bg-gray-800 text-white">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
