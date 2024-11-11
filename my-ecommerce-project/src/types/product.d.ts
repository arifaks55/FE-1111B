export interface price_info {
    total_price: number;
    discounted_price?: number;
    price_per_servings: number;
    discount_percentage?: number;
    profit?: number;
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
