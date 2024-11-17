import React, { useEffect, useRef } from 'react';
import BlazeSlider from 'blaze-slider';
import 'blaze-slider/dist/blaze.css';

interface SliderComponentProps {
    items: Array<{ photo_src: string; name: string }>;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ items }) => {
    const sliderRef = useRef<HTMLDivElement | null>(null); // Ref tipi HTMLDivElement olarak ayarlandı

    useEffect(() => {
        if (sliderRef.current) {
            new BlazeSlider(sliderRef.current); // BlazeSlider'ı başlat
        }
    }, []);

    return (
        <div className="blaze-slider" ref={sliderRef}>
            <div className="blaze-container">
                {items.map((item, index) => (
                    <div key={index} className="blaze-slide">
                        <img src={item.photo_src} alt={item.name} className="w-full h-auto" />
                        <p className="text-center mt-2">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderComponent;
