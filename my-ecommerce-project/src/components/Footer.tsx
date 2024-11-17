import React from 'react';

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
                        className="hover:underline"
                    >
                        Facebook
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Twitter
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Instagram
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;
