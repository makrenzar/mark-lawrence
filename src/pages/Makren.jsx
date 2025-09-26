import React, { useEffect, useRef } from 'react';
import mkrn from "../assets/makren.png";

const Makren = () => {
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    });

    if (heroRef.current) observer.observe(heroRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className='min-h-screen bg-[#f0f0f0] pt-10'>
        <div className="max-w-[530px] mx-auto p-2">
          <div className="bg-white rounded-2xl  shadow-[0px_0px_94px_-11px_rgba(0,_0,_0,_0.1)]">

            <div className='p-3'>
              <header className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="font-medium  text-xs">Iloilo City, Philippines</span>
                  <div className="w-5 h-2 bg-[#2cdc3e] rounded-full ml-2"></div>
                  <span className="text-xs text-[#2cdc3e]">Available</span>
                </div>
                <span className="text-xs font-medium ">Menu</span>
              </header>
              
              <div className="mb-8 bg-[#F6F6F6] rounded-lg p-10">
                <div className="relative z-10 mb-10 flex items-center ">
                  <div className="relative z-10">

                    <a href="/">
                      <div
                      >
                        <img
                          alt="Photo of Mark Lawrence Zaragoza"
                          fetchPriority="high"
                          decoding="async"
                          className="h-[50px] w-[50px] rounded-full object-cover"
                          src={mkrn}
                        />

                      </div>
                    </a>
                  </div>
                  <div className="ml-4">
                    <h1 className="text-base font-semibold">
                      <a href="/">Mark Zaragoza</a>
                    </h1>
                    <p className="text-xs text-[#6B6C6C]">Frontend Developer</p>
                  </div>
                </div>

                <div className="animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]">
                  <p className="mb-4 text-4xl font-[300]">
                    Bringing Ideas to Life, <br></br>Seamlessly.
                  </p>
                  <p className="mb-2 text-base text-[#6B6C6C] leading-6">
                    Passionate about creating innovative and user-friendly websites as
                    a frontend developer, and crafting visually compelling designs as
                    a graphics designer.
                  </p>
                </div>


                <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">Work</h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Showcasing my latest projects crafted<br />
                  with creativity and precision.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Makren;  