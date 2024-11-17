import { useEffect, useRef } from 'react';
import BlazeSlider from 'blaze-slider';
import 'blaze-slider/dist/blaze.css';

// BlazeSliderOptions arayüzü
interface BlazeSliderOptions {
    all?: {
        loop?: boolean;
        transitionDuration?: number;
    };
    breakpoints?: {
        [key: number]: {
            loop?: boolean;
            transitionDuration?: number;
        };
    };
}

const useBlazeSlider = (options?: BlazeSliderOptions) => {
    const sliderRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const defaultOptions: BlazeSliderOptions = {
            all: {
                loop: true,
                transitionDuration: 500,
            },
        };

        const finalOptions = { ...defaultOptions, ...options };
        let sliderInstance: BlazeSlider | null = null;

        if (sliderRef.current) {
            sliderInstance = new BlazeSlider(sliderRef.current, finalOptions);
        }

        return () => {
            sliderInstance?.destroy?.();
        };
    }, [options]);

    return sliderRef;
};

export default useBlazeSlider;
