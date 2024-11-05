import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout: React.FC = () => {
    return (
        <div>
            <Navigation /> {/* Navigation her sayfada görünecek */}
            <Outlet /> {/* Outlet, şu anki route’un bileşenini render eder */}
        </div>
    );
};

export default Layout;
