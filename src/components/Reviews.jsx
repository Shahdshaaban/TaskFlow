import { useState, useEffect } from "react";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [element]);

  return [setElement, isVisible];
};

function Reviews() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();

  return (
    <div className="py-20 px-6 bg-white flex flex-col justify-center items-center w-full md:px-20">
      <div
        ref={titleRef}
        className={`text-center mb-12 transition-all duration-700 ease-out ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-700">
          What Our Users Say
        </h1>
        <p className="text-center text-lg sm:text-xl md:text-2xl tracking-wide leading-relaxed font-sans px-2 md:px-20">
          Join thousands of satisfied users who have transformed their
          productivity with TaskFlow.
        </p>
      </div>

      <div
        ref={cardsRef}
        className={`flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-10 w-full transition-all duration-700 ease-out delay-200 ${
          cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="card bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg flex-1 max-w-md">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 bg-gradient-to-b from-[#a851a1] to-[#d8b697] rounded-full flex items-center justify-center text-white font-bold">
              SH
            </div>
            <div className="ml-3 sm:ml-4">
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                Shahd Shaban
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Software Engineer
              </p>
            </div>
          </div>

          <div className="flex mb-3 sm:mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            "As a software engineer, I rely on TaskFlow to organize my tasks and
            sprints efficiently, it's a real productivity booster!"
          </p>
        </div>

        <div className="card bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg flex-1 max-w-md">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 bg-gradient-to-l from-[#a851a1] to-[#d8b697] rounded-full flex items-center justify-center text-white font-bold">
              BE
            </div>
            <div className="ml-3 sm:ml-4">
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                Billie Eilish
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Freelance Designer
              </p>
            </div>
          </div>

          <div className="flex mb-3 sm:mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            "As a freelancer juggling multiple clients, TaskFlow keeps me
            organized and on track. The time tracking feature is incredibly
            valuable for billing."
          </p>
        </div>

        <div className="card bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg flex-1 max-w-md">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#a851a1] to-[#d8b697] rounded-full flex items-center justify-center text-white font-bold">
              MP
            </div>
            <div className="ml-3 sm:ml-4">
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                Marwan Pablo
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                UI/UX Designer
              </p>
            </div>
          </div>

          <div className="flex mb-3 sm:mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            "As a UI/UX designer, I’ve tested countless task management tools,
            but TaskFlow’s intuitive interface and smooth workflow make it stand
            out."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
