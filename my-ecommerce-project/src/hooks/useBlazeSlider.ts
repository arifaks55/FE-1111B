import { useEffect, useRef } from 'react';
import BlazeSlider from 'blaze-slider';
import 'blaze-slider/dist/blaze.css';

const useBlazeSlider = () => {
    const sliderRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (sliderRef.current) {
            new BlazeSlider(sliderRef.current);
        }
    }, []);
    return sliderRef;
};

export default useBlazeSlider;
