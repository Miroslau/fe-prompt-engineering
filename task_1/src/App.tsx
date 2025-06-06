import PricingCard from "./components/pricing-card.tsx";

interface PricingCardInterface {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const plans: PricingCardInterface[] = [
  {
    plan: "Standard",
    price: "$100",
    features: [
      "50,000 Requests",
      "4 contributors",
      "Up to 3 GB storage space"
    ]
  },
  {
    plan: "Pro",
    price: "$200",
    isFeatured: true,
    features: [
      "100,000 Requests",
      "7 contributors",
      "Up to 6 GB storage space"
    ]
  },
  {
    plan: "Expert",
    price: "$500",
    features: [
      "200,000 Requests",
      "11 contributors",
      "Up to 10 GB storage space"
    ]
  }
]

function App() {
  return (
      <div className="App">
        <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
          <h1 className="text-center text-3xl font-bold mb-12">Pricing</h1>
          <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-6">
            {plans.map((props) => (
                <PricingCard key={props.plan} {...props} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default App
