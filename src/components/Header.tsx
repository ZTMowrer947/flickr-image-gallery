// Imports
import React from 'react';
import MainNav from './MainNav';

// Component
const Header: React.FC = () => {
    return (
        <header className="w-50 mx-auto d-flex flex-column align-items-center">
            <h1 className="text-center">Flickr Image Gallery</h1>

            <MainNav />
        </header>
    );
};

// Export
export default Header;
