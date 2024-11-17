import React, { useEffect, useState } from "react";
import { AcademicCapIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid';


interface SubChild {
    name: string;
    slug: string;
    order: number;
}

interface Child {
    id: string;
    name: string;
    slug: string;
    order: number;
    sub_children: SubChild[];
}

interface TopSeller {
    name: string;
    slug: string;
    description: string;
    picture_src: string;
}

interface Category {
    id: string;
    name: string;
    slug: string;
    order: number;
    children: Child[];
    top_sellers: TopSeller[];
}

const AboutPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const baseURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${baseURL}/api/v1/categories`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setCategories(data.data.data); // API'den gelen kategori verisi
            } catch (error) {
                console.error("Kategoriler alınamadı:", error);
            }
        };

        fetchCategories();
    }, [baseURL]);

    if (categories.length === 0) {
        return <div>Yükleniyor...</div>;
    }

    return (
        <div className="bg-gray-100">
            {/* Hero Bölümü */}
            <div className="relative bg-blue-500 h-[400px]">
                <div className="container mx-auto flex justify-center items-center h-full">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold">Hakkımızda</h1>
                        <p className="mt-4 text-lg">
                            Kalite ve müşteri memnuniyeti odaklı bir marka.
                        </p>
                    </div>
                </div>
            </div>

            {/* Kategoriler ve Alt Kategoriler */}
            <div className="container mx-auto my-8">
                {categories.map((category) => (
                    <div key={category.id} className="mb-12">
                        {/* Ana Kategori Başlığı */}
                        <h2 className="text-2xl font-bold text-blue-500 mb-4 flex items-center">
                            <AcademicCapIcon className="w-6 h-6 text-blue-400 mr-2" />
                            {category.name}
                        </h2>

                        {/* Alt Kategoriler */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.children.map((child) => (
                                <div key={child.id} className="bg-white shadow-md rounded-lg p-4">
                                    <h3 className="text-xl font-semibold mb-2">{child.name}</h3>
                                    <ul className="list-none ml-0 text-gray-700">
                                        {child.sub_children.map((subChild) => (
                                            <li
                                                key={subChild.slug}
                                                className="flex items-center mb-1"
                                            >
                                                <ChevronRightIcon className="w-5 h-5 text-gray-500 mr-2" />
                                                {subChild.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Çok Satanlar */}
                        <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center">
                            <StarIcon className="w-6 h-6 text-yellow-500 mr-2" />
                            Çok Satanlar - {category.name}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {category.top_sellers.map((seller) => (
                                <div
                                    key={seller.slug}
                                    className="bg-white shadow-lg rounded-lg p-4 text-center"
                                >
                                    <img
                                        src={`${baseURL}${seller.picture_src}`}
                                        alt={seller.name}
                                        className="w-full h-32 object-cover rounded-md mb-4"
                                    />
                                    <h4 className="text-lg font-semibold">{seller.name}</h4>
                                    <p className="text-gray-600 text-sm">{seller.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold">OJS Nutrition</h3>
                        <p className="text-gray-400 mt-2">Kaliteli ürünler sunan marka.</p>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:underline">
                                    Hakkımızda
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Kategoriler
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    İletişim
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;
