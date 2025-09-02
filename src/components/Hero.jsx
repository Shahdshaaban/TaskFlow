import { useState, useEffect } from "react";

// Simple scroll animation hook
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

function Hero() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [subtitleRef, subtitleVisible] = useScrollAnimation();
  const [buttonRef, buttonVisible] = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7eef7] via-[#fbf7fb] to-white pt-20 p-8 bg-white  ">
      <div
        ref={titleRef}
        className={`mt-60 text-center font-bold text-6xl pb-3 transition-all duration-700 ease-out ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-gray-700 ">
          Organize Your Life with{" "}
          <span
            className="inline-block ml-2 bg-gradient-to-r from-[#a85c9f] to-[#873260] bg-clip-text text-transparent 
               cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            TaskFlow
          </span>
        </h1>
      </div>

      <div
        ref={subtitleRef}
        className={`mt-10 px-10 text-center text-2xl w-full tracking-wide leading-relaxed font-sans transition-all duration-700 ease-out delay-200 ${
          subtitleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <p>
          Manage your tasks effortlessly and stay on top of your goals.{" "}
          <br></br>Enhance your productivity with intelligent organization and
          smooth collaboration with your team.
        </p>
      </div>

      <div
        ref={buttonRef}
        className={`flex justify-center items-center my-20 transition-all duration-700 ease-out delay-400 ${
          buttonVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <button className="bg-gradient-to-l from-[#a85c9f] to-[#873260] p-6 text-xl font-semibold rounded-2xl hover:scale-110 transition-transform duration-500 text-white">
          Start Free Trial
        </button>
      </div>
    </div>
  );
}

export default Hero;
