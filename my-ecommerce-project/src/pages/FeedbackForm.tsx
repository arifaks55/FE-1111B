import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Teşekkürler, ${name}. Geri bildiriminiz alındı.`);
        setName('');
        setMessage('');
    };

    return (
        <div className="container mx-auto p-4">
            <h2>Geri Bildirim</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Adınız</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mt-4">
                    <label>Mesajınız</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border rounded"
                    ></textarea>
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Gönder</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
