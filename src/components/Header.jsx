import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/90 p-5 flex justify-between items-center fixed top-0 w-full backdrop-blur-xl z-50 shadow-lg pt-5  ">
      <div className="flex items-center ml-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 w-12 h-12 text-[#873260]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
          />
        </svg>

        <a
          href="#"
          className="ml-4 text-3xl font-bold text-gray-700 cursor-pointer"
        >
          TaskFlow
        </a>
      </div>

      <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
      <ul
        className={`absolute z-50 top-full right-10 w-56 bg-white shadow-lg rounded-xl p-4 space-y-4
      transition-all duration-300 ease-in-out
      ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      >
        <a href="#" className="hover:text-blue-500 cursor-pointer text-xl">
          Home
        </a>
        <li className="hover:text-blue-500 cursor-pointer text-xl">About</li>
        <li className="hover:text-blue-500 cursor-pointer text-xl">Reviews</li>
      </ul>
    </div>
  );
}

export default Header;
