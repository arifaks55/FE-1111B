export interface PriceInfo {
    profit: number | null;
    total_price: number;
    discounted_price: number;
    price_per_servings: number | null;
    discount_percentage: number | null;
}

export interface Product {
    id: number;
    name: string;
    short_explanation: string;
    slug: string;
    price_info: PriceInfo;
    photo_src: string;
    comment_count: number;
    average_star: number;
}
