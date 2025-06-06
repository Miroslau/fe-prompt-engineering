import type {FC} from "react";


interface Props {
    plan: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
}

const PricingCard: FC<Props> = ({ price, plan, features, isFeatured = false }) => {
    return (
        <div tabIndex={0} className={`flex flex-col items-center text-center rounded-2xl p-6 w-full max-w-sm transition-all duration-300 outline-none focus:ring-4 focus:ring-blue-400 
        ${isFeatured ? 'bg-blue-900 text-white scale-105 shadow-2xl' : 'bg-white text-gray-900 shadow-md'}
        hover:shadow-xl sm:mx-4`}>
            <h3 className="text-xl font-semibold mb-2">{plan}</h3>
            <p className="text-4xl font-bold mb-4">{price}</p>
            <ul className="flex-1 space-y-2 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="text-sm">
                        {feature}
                    </li>
                ))}
            </ul>
            <button
                className={`mt-auto px-6 py-2 rounded font-semibold text-sm 
          ${isFeatured ? 'bg-white text-blue-900 hover:bg-gray-200' : 'bg-blue-900 text-white hover:bg-blue-800'}
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400`}
            >
                SUBSCRIBE
            </button>
        </div>
    );
};

export default PricingCard;