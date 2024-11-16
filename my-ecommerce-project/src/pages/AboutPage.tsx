import React from 'react';

const AboutPage: React.FC = () => (
    <div className="bg-gray-100">
        {/* Hero Section */}
        <div className="relative bg-blue-500 h-[400px]">
            <div className="container mx-auto flex justify-center items-center h-full">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold">Hakkımızda</h1>
                    <p className="mt-4 text-lg">Kalite ve müşteri memnuniyeti odaklı bir marka.</p>
                </div>
            </div>
        </div>

        {/* Kategori Bilgileri */}
        <div className="container mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { title: "PROTEİN", image: "/images/protein.png" },
                { title: "VİTAMİNLER", image: "/images/vitamins.png" },
                { title: "SPOR GIDALARI", image: "/images/sports.png" },
                { title: "TÜM ÜRÜNLER", image: "/images/all-products.png" },
            ].map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg text-center p-4 hover:shadow-xl transition"
                >
                    <img src={item.image} alt={item.title} className="w-24 h-24 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
            ))}
        </div>

        {/* Hakkımızda Açıklama */}
        <div className="container mx-auto my-12 p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Laboratuvar Testli Ürünler</h2>
            <p className="text-gray-600">
                Laboratuvar testli ürünlerimiz aynı gün kargoya teslim edilir. 200.000'den fazla ürün
                yorumumuza dayanarak memnuniyetiniz için elimizden geleni yapıyoruz.
            </p>
        </div>

        {/* Görüşler */}
        <div className="bg-gray-200 py-8">
            <div className="container mx-auto">
                <h2 className="text-center text-2xl font-bold mb-6">Müşteri Yorumları</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
                        >
                            <p className="text-gray-800">
                                "Ürün çok güzel, tavsiye ederim. Kargom zamanında geldi."
                            </p>
                            <p className="mt-4 text-sm text-gray-500">- Müşteri {index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
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

export default AboutPage;
