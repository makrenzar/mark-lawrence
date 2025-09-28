import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import mkrn from "../assets/makren.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedFAQs, setExpandedFAQs] = useState([0]);

  const works = [
    { imageSrc: img1 },
    { imageSrc: img2 },
    { imageSrc: img3 },
    { imageSrc: img4 },
    { imageSrc: img5 },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleFAQ = (index) => {
    setExpandedFAQs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What is included in the Landing Page package?",
      answer: "The Landing Page package includes a fully designed and developed single page tailored to your needs, optimized for performance and responsiveness."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. Typically, a landing page takes 1-2 weeks, while more complex websites can take 3-6 weeks. I'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide website maintenance after delivery?",
      answer: "Yes, I offer ongoing maintenance packages that include regular updates, security monitoring, performance optimization, and content updates to keep your website running smoothly."
    },
    {
      question: "Can I request revisions during the design process?",
      answer: "Absolutely! I include multiple revision rounds in each project to ensure the final result meets your expectations. We'll work together throughout the process to refine the design."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, all websites I create are fully responsive and optimized for mobile devices. I follow mobile-first design principles to ensure your site looks and functions perfectly on all screen sizes."
    }
  ];

  return (
    <>
      <div className={`min-h-screen pt:0 md:pt-13 transition-colors duration-300 ${isDarkMode ? 'bg-[#202425]' : 'bg-[#f0f0f0]'
        }`}>
        <div className="max-w-[520px] mx-auto p-2">
          <div className={`rounded-2xl shadow-[0px_0px_94px_-100px_rgba(0,_0,_0,_1)] transition-colors duration-300 ${isDarkMode ? 'bg-[#0E1011]' : 'bg-white'
            }`}>
            <div className='p-3'>
              <header className="flex items-center justify-between">
                <div className="flex items-center space-x-2 px-2 py-2">
                  {/* Toggle */}
                  <button
                    onClick={toggleDarkMode}
                    className={`relative cursor-pointer w-7 h-4 flex items-center rounded-full p-1 transition-colors duration-300 ${isDarkMode ? "bg-[#191B1C]" : "bg-[#e7e7e7]"
                      }`}
                  >
                    <div
                      className={`w-[9px] h-[9px] rounded-full shadow-md transform transition-all duration-300 ${isDarkMode ? "translate-x-3 bg-[#f5f5f5]" : "translate-x-0 bg-[#222222]"} `}
                    ></div>
                  </button>

                  {/* Location - always visible */}
                  <span
                    className={`font-medium text-xs transition-colors duration-300 ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"
                      }`}
                  >
                    Iloilo City, Philippines
                  </span>

                  {/* Phone + Availability - hidden on mobile */}
                  <div className="hidden md:flex items-center cursor-pointer relative overflow-hidden group">
                    <div className="w-4 h-2 bg-[#2cdc3e] rounded-full ml-2 transition-all duration-300 group-hover:w-2"></div>
                    <div className="ml-1 relative">
                      <span className="text-xs text-[#2cdc3e] block translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                        +63 976 301 3967
                      </span>
                      <span className="text-xs text-[#2cdc3e] absolute top-0 left-0 translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex items-center space-x-2 flex-grow mx-2">
                  <div
                    className={`flex-grow border-t transition-colors duration-300 ${isDarkMode ? "border-[#afafaf]" : "border-[#e0e0e0]"} `}
                  ></div>
                  <span
                    className={`text-xs font-medium px-2 py-2 transition-colors duration-300 ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"} `}
                  >
                    Menu
                  </span>
                </div>
              </header>


              {/* Hero */}
              <div className={`mb-3 rounded-lg p-6 md:p-10 transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#F6F6F6]'
                }`}>
                <div className="relative z-10 mb-10 flex items-center ">
                  <div className="relative z-10">
                    <a href="/">
                      <img
                        alt="Photo of Mark Lawrence Zaragoza"
                        fetchPriority="high"
                        decoding="async"
                        className="h-[56px] w-[56px] rounded-full object-cover"
                        src={mkrn}
                      />
                    </a>
                  </div>
                  <div className="ml-4">
                    <h1 className={`text-base font-[450] transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'
                      }`}>
                      <a href="/">Mark Zaragoza</a>
                    </h1>
                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'
                      }`}>Frontend Developer | Graphic Designer</p>
                  </div>
                </div>

                <div>
                  <p className={`mb-4 text-3xl font-[300] transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'
                    }`}>
                    Bringing Ideas to Life, <br />Seamlessly.
                  </p>
                  <p className={`mb-4 text-base leading-6 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'
                    }`}>
                    As a frontend developer and graphic designer, I craft modern websites that blend stunning visuals with smooth user experiences. From design to deployment, I focus on making every detail both innovative and user-friendly.
                  </p>
                </div>

                <div className="flex justify-start gap-2 mt-3 md:mt-6">
                  <button className={`group cursor-pointer relative inline-flex h-7 md:h-9 items-center justify-center overflow-hidden rounded-md px-6 py-5 font-medium text-sm transition-colors duration-300 ${isDarkMode
                    ? 'bg-[#f5f5f5] text-[#222222]'
                    : 'bg-[#222222] text-[#f5f5f5]'
                    }`}>
                    <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] flex items-center gap-2">
                      Send Email
                      <ion-icon name="mail-outline" size="small"></ion-icon>
                    </div>
                    <div className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex items-center gap-2">
                      Send Email
                      <ion-icon name="arrow-forward-outline" size="small"></ion-icon>
                    </div>
                  </button>

                  <button className={`group cursor-pointer relative inline-flex h-7 md:h-9 items-center justify-center overflow-hidden rounded-md px-6 py-5 font-medium text-sm transition-colors duration-300 ${isDarkMode
                    ? 'bg-[#0E1011] text-[#f5f5f5]'
                    : 'bg-white text-[#222222]'
                    }`}>
                    <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                      View Work
                    </div>
                    <div className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                      View Work
                    </div>
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <Marquee pauseOnHover={true} gradient={false} speed={20} direction="right">
                  {works.map((work, index) => (
                    <div key={index} className="relative shrink-0 mr-3">
                      <img
                        src={work.imageSrc}
                        alt={`Portfolio ${index + 1}`}
                        className="h-[137px] w-[200px] cursor-pointer object-cover rounded-lg "
                      />
                    </div>
                  ))}
                </Marquee>
              </div>

              {/* Services */}
              <div className="space-y-3 mb-3">
                <div className="flex justify-center">
                  <div className={`rounded-lg py-5 flex justify-center items-center w-full transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'
                    }`}>
                    <span className={`text-sm font-[450] flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'
                      }`}>
                      Services
                      <ion-icon name="arrow-down-outline" size="small"></ion-icon>
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className={`rounded-lg p-5 text-left smooth-card transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>Web Development</h3>
                    <p className={`text-[15px] leading-6 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                      I build modern, responsive websites that are easy to use and work on any device.
                    </p>
                  </div>

                  <div className={`rounded-lg p-5 text-left smooth-card ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>UX/UI Design</h3>
                    <p className={`text-[15px] leading-6 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                      I design clean and user-friendly interfaces so your visitors enjoy every click.
                    </p>
                  </div>

                  <div className={`rounded-lg p-5 text-left smooth-card ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>Graphic Design</h3>
                    <p className={`text-[15px] leading-6 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                      I create eye-catching visuals like logos, posters, and social media designs.
                    </p>
                  </div>

                  <div className={`rounded-lg p-5 text-left smooth-card ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>Digital Marketing</h3>
                    <p className={`text-[15px] leading-6 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                      I help promote your brand online through social media and creative campaigns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-3">
                <div className="flex justify-center">
                  <div className={`rounded-lg py-5 flex justify-center items-center w-full transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <span className={`text-sm font-[450] flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                      Pricing
                      <ion-icon name="arrow-down-outline" size="small"></ion-icon>
                    </span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className={`rounded-lg py-5 flex justify-center items-center w-full transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <span className={`text-sm font-[450] flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                      FAQ
                      <ion-icon name="arrow-down-outline" size="small"></ion-icon>
                    </span>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className={`rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-[#191B1C] hover:bg-[#222222]' : 'bg-[#f6f6f6] hover:bg-[#ececec]'}`}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-5 text-left flex justify-between items-center cursor-pointer transition-all duration-300 rounded-lg"
                      >
                        <span className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                          {faq.question}
                        </span>
                        <div className={`transform transition-all duration-300 ${expandedFAQs.includes(index) ? 'rotate-45' : 'rotate-0'} ${isDarkMode ? 'text-[#f5f5f5] bg-[#2a2d2e]' : 'text-[#222222] bg-[#ffffff]'} rounded-sm w-5 h-5 flex items-center justify-center`}>
                          <ion-icon name="add-outline" ></ion-icon>
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(index) ? 'max-h-96 ' : 'max-h-0 '}`}>
                        <div className={`px-5 pb-5 transform transition-all duration-500 ease-in-out ${expandedFAQs.includes(index) ? 'translate-y-0' : '-translate-y-2'}`}>
                          <p className={`text-[15px] leading-6 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;