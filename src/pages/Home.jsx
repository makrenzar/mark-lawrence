import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from "react-fast-marquee";
import mkrn from "../assets/makren.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = ({ isDarkMode, setIsDarkMode }) => {
  const [expandedFAQs, setExpandedFAQs] = useState([0]);

  // Refs for animations
  const heroRef = useRef(null);
  const marqueeRef = useRef(null);
  const servicesHeaderRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const pricingHeaderRef = useRef(null);
  const pricingCardsRef = useRef([]);
  const faqHeaderRef = useRef(null);
  const faqItemsRef = useRef([]);

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

  useEffect(() => {
    // Set initial states
    gsap.set([heroRef.current, marqueeRef.current, servicesHeaderRef.current, pricingHeaderRef.current, faqHeaderRef.current], {
      y: 30,
      opacity: 0
    });

    gsap.set([...serviceCardsRef.current, ...pricingCardsRef.current, ...faqItemsRef.current], {
      y: 20,
      opacity: 0
    });

    // Create timeline for initial load animations
    const tl = gsap.timeline();

    tl.to(heroRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
      .to(marqueeRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      .to(servicesHeaderRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3");

    // Animate service cards with stagger
    ScrollTrigger.create({
      trigger: servicesHeaderRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(serviceCardsRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    });

    // Animate pricing section
    ScrollTrigger.create({
      trigger: pricingHeaderRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(pricingHeaderRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        });
        gsap.to(pricingCardsRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.2
        });
      }
    });

    // Animate FAQ section
    ScrollTrigger.create({
      trigger: faqHeaderRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(faqHeaderRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        });
        gsap.to(faqItemsRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const faqData = [
    {
      question: "What's included in the Express Launch package?",
      answer:
        "The Express Launch includes a strategy & discovery call, a custom Figma design, React development with TailwindCSS styling, GSAP-powered animations, mobile-first responsive design, performance optimization, and a 2-week delivery timeline."
    },
    {
      question: "How long does each package take to complete?",
      answer:
        "Express Launch takes 2 weeks, while Full Digital Presence takes 3–6 weeks depending on complexity. Timelines include discovery, design, development, animation integration, and revisions."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, I offer ongoing maintenance and support packages that cover updates, performance monitoring, content changes, and technical assistance to keep your website running smoothly."
    },
    {
      question: "What makes your approach different from templates?",
      answer:
        "I build custom React applications with hand-coded components, TailwindCSS styling, and GSAP animations tailored to your brand. Unlike templates, every element is designed and developed specifically for your goals."
    },
    {
      question: "Can I request changes during the development process?",
      answer:
        "Absolutely! Both packages include revision rounds throughout design and development. We'll collaborate closely to make sure the final result not only meets but exceeds your expectations."
    }
  ];

  const packagesData = [
    {
      title: "Express Launch",
      type: "Perfect for startups & personal brands",
      description: "Get a stunning single-page website that converts visitors into customers.",
      features: [
        "Strategy & Discovery Call",
        "Tailored Visual Design",
        "Modern Development Approach",
        "Smooth Animations & Transitions",
        "Mobile-First Responsive Layout",
        "Performance Optimization",
        "2 Weeks Delivery"
      ],
      cta: "Let's Build It",
      highlight: false
    },
    {
      title: "Full Digital Presence",
      type: "For growing businesses",
      description: "Complete website solution with multiple pages and advanced functionality.",
      features: [
        "In-Depth Discovery & Strategy",
        "Information Architecture",
        "Custom Multi-Page Design",
        "Advanced React Development",
        "Custom Components & Features",
        "SEO Foundation Setup",
        "Content Management System",
        "3-6 Weeks Delivery"
      ],
      cta: "Start Your Project",
      highlight: true
    }
  ];

  return (
    <>
      <div className={`min-h-screen pt:0 md:pt-13 transition-colors duration-300 ${isDarkMode ? 'bg-[#202425]' : 'bg-[#f0f0f0]'}`}>
        <div className="max-w-[520px] mx-auto p-2">
          <div className={`rounded-2xl shadow-[0px_0px_94px_-100px_rgba(0,_0,_0,_1)] transition-colors duration-300 ${isDarkMode ? 'bg-[#0E1011]' : 'bg-white'}`}>
            <div className='p-3'>
              <header className="flex items-center justify-between">
                <div className="flex items-center space-x-2 px-2 py-2">
                  {/* Toggle */}
                  <button
                    onClick={toggleDarkMode}
                    className={`relative cursor-pointer w-7 h-4 flex items-center rounded-full p-1 transition-colors duration-300 ${isDarkMode ? "bg-[#191B1C]" : "bg-[#e7e7e7]"}`}
                  >
                    <div
                      className={`w-[9px] h-[9px] rounded-full shadow-md transform transition-all duration-300 ${isDarkMode ? "translate-x-3 bg-[#f5f5f5]" : "translate-x-0 bg-[#0E1011]"}`}
                    ></div>
                  </button>

                  {/* Location - always visible */}
                  <span
                    className={`font-medium text-xs transition-colors duration-300 ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"}`}
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
                    className={`flex-grow border-t transition-colors duration-300 ${isDarkMode ? "border-[#afafaf]" : "border-[#e0e0e0]"}`}
                  ></div>
                  <span
                    className={`text-xs font-medium px-2 py-2 transition-colors duration-300 ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"}`}
                  >
                    Menu
                  </span>
                </div>
              </header>

              {/* Hero */}
              <div ref={heroRef} className={`mb-3 rounded-lg p-6 md:p-10 transition-colors duration-300  ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#F6F6F6]'}`}>
                <div className="relative z-10 mb-10 flex items-center ">
                  <div className="relative z-10">
                    <Link to="/">
                      <img
                        alt="Photo of Mark Lawrence Zaragoza"
                        fetchPriority="high"
                        decoding="async"
                        className="h-[56px] w-[56px] rounded-full object-cover"
                        src={mkrn}
                      />
                    </Link>
                  </div>
                  <div className="ml-4">
                    <h1 className={`text-base font-[450] transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                      <Link to="/">Mark Zaragoza</Link>
                    </h1>
                    <div className="relative overflow-hidden h-5 group cursor-pointer">
                      <p className={`text-sm transition-transform duration-300 ease-in-out ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'} translate-y-0 group-hover:-translate-y-[150%]`}>
                        Frontend Developer
                      </p>
                      <p className={`text-sm absolute top-0 left-0 transition-transform duration-300 ease-in-out ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'} translate-y-[150%] group-hover:translate-y-0`}>
                        Graphic Designer
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className={`mb-4 text-3xl font-[300] transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                    Bringing Ideas to Life, <br />Seamlessly.
                  </p>
                  <p className={`mb-4 text-base leading-6 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                    As a frontend developer and graphic designer, I craft modern websites that blend stunning visuals with smooth user experiences. From design to deployment, I focus on making every detail both innovative and user-friendly.
                  </p>
                </div>

                <div className="flex justify-start gap-2 mt-3 md:mt-6">
                  <Link to="/contact">
                    <button className={`group cursor-pointer relative inline-flex h-7 md:h-9 items-center justify-center overflow-hidden rounded-md px-6 py-5 font-medium text-sm transition-colors duration-300 ${isDarkMode
                      ? 'bg-white text-[#222222]'
                      : 'bg-[#0E1011] text-[#f5f5f5]'
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
                  </Link>

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

              <div ref={marqueeRef} className="mb-3">
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
                <div ref={servicesHeaderRef} className="flex justify-center">
                  <div className={`rounded-lg py-5 flex justify-center items-center w-full transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <span className={`text-sm font-[450] flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                      Services
                      <ion-icon name="arrow-down-outline" size="small"></ion-icon>
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div ref={el => serviceCardsRef.current[0] = el} className={`rounded-lg p-5 text-left smooth-card transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>Web Development</h3>
                    <p className={`text-[15px] leading-6 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                      I build modern, responsive websites that are easy to use and work on any device.
                    </p>
                  </div>

                  <div ref={el => serviceCardsRef.current[1] = el} className={`rounded-lg p-5 text-left smooth-card ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>UX/UI Design</h3>
                    <p className={`text-[15px] leading-6 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                      I design clean and user-friendly interfaces so your visitors enjoy every click.
                    </p>
                  </div>

                  <div ref={el => serviceCardsRef.current[2] = el} className={`rounded-lg p-5 text-left smooth-card ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>Graphic Design</h3>
                    <p className={`text-[15px] leading-6 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                      I create eye-catching visuals like logos, posters, and social media designs.
                    </p>
                  </div>

                  <div ref={el => serviceCardsRef.current[3] = el} className={`rounded-lg p-5 text-left smooth-card ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>Digital Marketing</h3>
                    <p className={`text-[15px] leading-6 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                      I help promote your brand online through social media and creative campaigns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Packages */}
              <div className="space-y-3 mb-3">
                <div ref={pricingHeaderRef} className="flex justify-center">
                  <div className={`rounded-lg py-5 flex justify-center items-center w-full transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <span className={`text-sm font-[450] flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                      How I Work
                      <ion-icon name="arrow-down-outline" size="small"></ion-icon>
                    </span>
                  </div>
                </div>

                {/* Package Cards */}
                <div className="grid grid-cols-1 gap-3">
                  {packagesData.map((pkg, index) => (
                    <div
                      key={index}
                      ref={el => pricingCardsRef.current[index] = el}
                      className={`rounded-lg p-6 transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className={`text-lg font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                          {pkg.title}
                        </h3>
                        <div className={`text-sm mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#666]'}`}>
                          {pkg.type}
                        </div>
                        <p className={`text-sm leading-6 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                          {pkg.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className={`text-sm font-medium mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                          What's Included:
                        </h4>
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start mb-3">
                            <div className="w-4 h-4 rounded-sm mr-3 flex items-center justify-center mt-0.5 transition-colors duration-300 bg-white">
                              <ion-icon name="checkmark-outline" style={{ color: '#222222', fontSize: '12px' }}></ion-icon>
                            </div>
                            <span className={`text-[15px] leading-6 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#222222]'}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Button */}
                      <Link to="/contact" state={{ package: pkg.title }}>
                        <button className={`group w-full cursor-pointer relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md font-medium text-sm transition-colors duration-300 ${pkg.highlight
                          ? 'bg-[#0E1011] text-[#f5f5f5]'
                          : 'bg-white text-[#222222]'
                          }`}>
                          <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] flex items-center gap-2">
                            {pkg.cta}
                            <ion-icon name="arrow-forward-outline" size="small"></ion-icon>
                          </div>
                          <div className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex items-center gap-2">
                            {pkg.cta}
                            <ion-icon name="arrow-forward-outline" size="small"></ion-icon>
                          </div>
                        </button>
                      </Link>
                    </div>
                  ))}

                  {/* Custom Projects Card */}
                  <div
                    ref={el => pricingCardsRef.current[2] = el}
                    className={`rounded-lg p-6 text-center transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}
                  >
                    <h3 className={`text-base font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                      Need Something Custom?
                    </h3>
                    <p className={`text-[15px] leading-6 mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                      Have a unique project in mind? Let's discuss your vision and create something amazing together.
                    </p>
                    <Link to="/contact" state={{ package: "Custom Project" }}>
                      <button className={`group cursor-pointer relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-sm transition-colors duration-300 bg-white text-[#222222]`}>
                        <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                          Let's Talk
                        </div>
                        <div className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                          Let's Talk
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-3">
                <div ref={faqHeaderRef} className="flex justify-center">
                  <div className={`rounded-lg py-5 flex justify-center items-center w-full transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <span className={`text-sm font-[450] flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                      FAQ
                      <ion-icon name="arrow-down-outline" size="small"></ion-icon>
                    </span>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="grid grid-cols-1 gap-3">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      ref={el => faqItemsRef.current[index] = el}
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