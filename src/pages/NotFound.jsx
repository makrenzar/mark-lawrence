import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowLeft } from "lucide-react";

const NotFound = ({ isDarkMode }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.set(heroRef.current, { y: 30, opacity: 0 });
    gsap.to(heroRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDarkMode ? "bg-[#202425]" : "bg-[#f0f0f0]"
        }`}
    >
      <div className="w-full max-w-[520px] p-2 md:p-4">
        <div
          className={`rounded-2xl shadow-[0px_0px_94px_-100px_rgba(0,_0,_0,_1)] overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#0E1011]" : "bg-white"
            }`}
        >
          <div className="p-5 h-[100vh] md:h-auto md:aspect-square" ref={heroRef}>
            {/* Header */}
            <header className="flex items-center justify-between">
              <div className="flex items-center space-x-2 px-2 py-2">
                <Link to="/">
                  <div className="relative overflow-hidden group cursor-pointer">
                    <span
                      className={`font-medium text-sm block translate-y-0 transition-all duration-300 ease-in-out group-hover:-translate-y-[150%] ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"
                        }`}
                    >
                      Click me
                    </span>
                    <span
                      className={`font-medium text-sm absolute top-0 left-0 translate-y-[150%] transition-all duration-300 ease-in-out group-hover:translate-y-0 ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"
                        }`}
                    >
                      Go back
                    </span>
                  </div>
                </Link>
              </div>
            </header>

            {/* Hero Section */}
            <div className={`relative rounded-lg flex flex-col items-center justify-center h-full ${isDarkMode ? "bg-[#191B1C]" : "bg-[#F6F6F6]"
                  }`} >
              <p
                className={`text-sm mb-5 font-medium transition-colors duration-300 ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"
                  }`}
              >
                404 – Page not found
              </p>
              <p className="text-6xl">😞</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
