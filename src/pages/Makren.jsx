import React, { useEffect, useRef } from 'react';
import mkrn from "../assets/makren.jpg";

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
      <div className='min-h-screen bg-[#f0f0f0] pt-8'>
        <div className="max-w-[512px] mx-auto p-2">
          <div className="bg-white rounded-2xl p-2 shadow-2xl">

            <div className='p-4'>
              <header className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="font-medium  text-sm">Mark</span>
                  <div className="w-2 h-2 bg-[#2cdc3e] rounded-full ml-2"></div>
                  <span className="text-sm text-[#444444]">Available</span>
                </div>
                <span className="text-sm font-medium ">Menu</span>
              </header>

              <div className="mb-8 bg-[#F6F6F6] rounded-lg p-4">
                <div className="relative z-10 mb-16 flex animate-slideFromDownAndFade items-center ">
                  <div className="relative z-10">
                    <div className="absolute left-0 top-0 -z-10 flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-primary-light-6 bg-primary-light-3 p-2 text-center text-[8px] text-primary-light-11 dark:border-primary-dark-6 dark:bg-primary-dark-3 dark:text-primary-dark-11"></div>
                    <a href="/">
                      <div
                      >
                        <img
                          alt="Photo of Mark Lawrence Zaragoza"
                          fetchPriority="high"
                          decoding="async"
                          className="pointer-events-none h-16 w-16 rounded-full"
                          src={mkrn}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="ml-4">
                    <h1 className="text-base font-bold">
                      <a href="/">Mark Zaragoza</a>
                    </h1>
                    <p className="text-sm ">Frontend Developer | Graphic Designer</p>
                  </div>
                </div>

                <div className="animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]">
                  <h2 className="h2 mb-4 text-sm">
                    Frontend Developer | Graphic Designer
                  </h2>
                  <p className="mb-2 text-sm para leading-6">
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