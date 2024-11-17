import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(''); // Hata mesajları için
    const [success, setSuccess] = useState(''); // Başarı mesajları için
    const [loading, setLoading] = useState(false); // Yükleme durumu için

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Hata mesajını kontrol et
        if (!name || !message) {
            setError('Lütfen tüm alanları doldurun.');
            return;
        }

        // Başarı veya hata mesajlarını sıfırla
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            // API isteği gönder
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, message }),
            });

            if (!response.ok) {
                throw new Error('Geri bildirim gönderilirken bir hata oluştu.');
            }

            setSuccess('Geri bildiriminiz alındı. Teşekkürler!');
            setName('');
            setMessage('');
        } catch (error) {
            setError('Geri bildirim gönderilirken bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Geri Bildirim</h2>
            <form onSubmit={handleSubmit}>
                {error && <p className="text-red-500 mb-4">{error}</p>} {/* Hata mesajı */}
                {success && <p className="text-green-500 mb-4">{success}</p>} {/* Başarı mesajı */}
                <div>
                    <label className="block font-semibold mb-2">Adınız</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Adınızı girin"
                    />
                </div>
                <div className="mt-4">
                    <label className="block font-semibold mb-2">Mesajınız</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Mesajınızı yazın"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className={`mt-4 bg-blue-500 text-white p-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    disabled={loading}
                >
                    {loading ? 'Gönderiliyor...' : 'Gönder'}
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
