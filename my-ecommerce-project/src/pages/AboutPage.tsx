import React, { useEffect, useState } from 'react';

interface Category {
    title: string;
    image: string;
}

interface ProductDescription {
    description: string;
}

interface CustomerReview {
    id: string;
    message: string;
    customerName: string;
}

const AboutPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [description, setDescription] = useState<string>('');
    const [customerReviews, setCustomerReviews] = useState<CustomerReview[]>([]);

    const baseURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Kategorileri ve açıklamayı API'den çek
                const [categoriesRes, descriptionRes, reviewsRes] = await Promise.all([
                    fetch(`${baseURL}/api/v1/categories`),
                    fetch(`${baseURL}/api/v1/about-description`),
                    fetch(`${baseURL}/api/v1/customer-reviews`),
                ]);

                const categoriesData = await categoriesRes.json();
                const descriptionData = await descriptionRes.json();
                const reviewsData = await reviewsRes.json();

                if (categoriesData.status === 'success') setCategories(categoriesData.data);
                if (descriptionData.status === 'success') setDescription(descriptionData.data.description);
                if (reviewsData.status === 'success') setCustomerReviews(reviewsData.data.results);
            } catch (error) {
                console.error('Veri çekilirken bir hata oluştu:', error);
            }
        };

        fetchData();
    }, [baseURL]);

    return (
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
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg text-center p-4 hover:shadow-xl transition"
                    >
                        <img src={`${baseURL}${category.image}`} alt={category.title} className="w-24 h-24 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                ))}
            </div>

            {/* Hakkımızda Açıklama */}
            <div className="container mx-auto my-12 p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Laboratuvar Testli Ürünler</h2>
                <p className="text-gray-600">{description}</p>
            </div>

            {/* Görüşler */}
            <div className="bg-gray-200 py-8">
                <div className="container mx-auto">
                    <h2 className="text-center text-2xl font-bold mb-6">Müşteri Yorumları</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {customerReviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
                            >
                                <p className="text-gray-800">{review.message}</p>
                                <p className="mt-4 text-sm text-gray-500">- {review.customerName}</p>
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
};

export default AboutPage;
