import { useState, useEffect } from "react";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [element]);

  return [setElement, isVisible];
};

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Up to 10 tasks",
        "Basic task management",
        "Mobile app access",
        "Email support",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      features: [
        "Unlimited tasks",
        "Advanced analytics",
        "Time tracking",
        "Priority support",
        "Custom integrations",
        "Team collaboration",
      ],
      popular: true,
      buttonText: "Start Free Trial",
    },
    {
      name: "Team",
      price: "$25",
      period: "per user/month",
      features: [
        "Everything in Pro",
        "Advanced team features",
        "Admin controls",
        "Custom workflows",
        "24/7 phone support",
        "Dedicated account manager",
      ],
      popular: false,
      buttonText: "Contact Sales",
    },
  ];

  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-700 mb-20">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core
            features with no hidden fees.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ease-out ${
            cardsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative card mt-32 bg-white p-8 rounded-xl border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-[#a85c9f] shadow-lg scale-105"
                  : "border-gray-200 hover:shadow-lg hover:scale-105"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#a85c9f] to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  {plan.name}
                </h3>
                <div className="my-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {/* Checkmark SVG */}
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#a85c9f] to-purple-600 text-white hover:from-[#a85c9f] hover:to-purple-700 transform hover:scale-105"
                    : "border-2 border-gray-300 text-gray-700 hover:border-[#a85c9f] hover:text-[#a85c9f] hover:scale-105"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
