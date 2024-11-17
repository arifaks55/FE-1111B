import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // React Icons kütüphanesi ile Heroicons yerine alternatif kullanılıyor.

const Footer: React.FC = () => (
    <footer className="p-6 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
            <p className="mb-4">&copy; 2024 Arif AKSUOĞLU. Tüm hakları saklıdır.</p>
            <ul className="flex justify-center space-x-6">
                <li>
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center space-x-2"
                    >
                        <FaFacebook className="w-5 h-5 text-blue-500" />
                        <span>Facebook</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center space-x-2"
                    >
                        <FaTwitter className="w-5 h-5 text-blue-400" />
                        <span>Twitter</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center space-x-2"
                    >
                        <FaInstagram className="w-5 h-5 text-pink-400" />
                        <span>Instagram</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center space-x-2"
                    >
                        <FaLinkedin className="w-5 h-5 text-blue-700" />
                        <span>LinkedIn</span>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;
