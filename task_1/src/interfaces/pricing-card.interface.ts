export default interface PricingCardInterface {
    plan: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
}