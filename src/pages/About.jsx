import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Instagram, Github, ArrowRight, ArrowUpRight, ArrowDown, Plus, Phone } from 'lucide-react';
import mkrn from "../assets/makren.png";

const About = ({ isDarkMode, setIsDarkMode }) => {

  const [expandedExperience, setExpandedExperience] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for animations
  const contentRef = useRef(null);
  const experienceHeaderRef = useRef(null);
  const experienceItemsRef = useRef([]);
  const menuCardsRef = useRef([]);
  const overlayRef = useRef(null);
  const socialLinksRef = useRef([]);
  const footerRef = useRef(null);

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/makrenzar/", icon: Instagram },
    { name: "GitHub", url: "https://github.com/makrenzar", icon: Github },
  ];

  const experienceData = [
    { title: "Digital Designer", year: "Present", description: "Designing marketing materials and providing technical support for dealership operations. Designed marketing materials including brochures, banners, social media posts, and promotional ads for BYD vehicle campaigns. Collaborated with the sales and marketing team to create visual content aligned with brand guidelines and local promotions. Edited and retouched photos for product showcases, and events. Provided general IT support including troubleshooting hardware and software issues, fixing printer and network problems, and maintaining office computer systems. Tools used: Canva, Photoshop, Figma." },
    { title: "Full-Stack Developer", year: "2024", description: "Developed internal ERP systems for inventory and billing management. Worked with the development and testing teams to build scalable, high-performance solutions that met client needs. Technologies used: HTML, CSS, Bootstrap, Javascript, PHP, SQL" }
  ];

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Project", path: "/project" },
    { label: "Contact", path: "/contact" }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleExperience = (index) => {
    setExpandedExperience(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Animation on mount
  useEffect(() => {
    // Set initial states
    gsap.set(contentRef.current, {
      y: 30,
      opacity: 0
    });

    gsap.set(experienceHeaderRef.current, {
      y: 20,
      opacity: 0
    });

    gsap.set(experienceItemsRef.current, {
      y: 20,
      opacity: 0
    });

    gsap.set(socialLinksRef.current, {
      y: 20,
      opacity: 0
    });

    gsap.set(footerRef.current, {
      y: 20,
      opacity: 0
    });

    // Create timeline for animations
    const tl = gsap.timeline();

    tl.to(contentRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
      .to(experienceHeaderRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3")
      .to(experienceItemsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3")
      .to(socialLinksRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3")
      .to(footerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3");

  }, []);

  const closeMenu = () => {
    gsap.to(menuCardsRef.current, {
      y: 50, opacity: 0, duration: 0.3, stagger: 0.05, ease: "power2.in"
    });
    gsap.to(overlayRef.current, {
      opacity: 0, duration: 0.3, ease: "power2.in",
      onComplete: () => setIsMenuOpen(false)
    });
  };

  return (
    <>
      <div className={`min-h-screen pt-0 md:pt-13 transition-colors duration-300 ${isDarkMode ? 'bg-[#202425]' : 'bg-[#f0f0f0]'}`}>
        <div className="max-w-[520px] mx-auto p-2">
          <div className={`rounded-2xl shadow-[0px_0px_94px_-100px_rgba(0,_0,_0,_1)] transition-colors duration-300 ${isDarkMode ? 'bg-[#0E1011]' : 'bg-white'}`}>
            <div className='p-3'>
              <header className="flex items-center justify-between">
                <div className="flex items-center space-x-2 px-2 py-2">
                  <button
                    onClick={toggleDarkMode}
                    className={`relative cursor-pointer w-7 h-4 flex items-center rounded-full p-1 transition-colors duration-300 ${isDarkMode ? "bg-[#191B1C]" : "bg-[#e7e7e7]"}`}
                  >
                    <div
                      className={`w-[9px] h-[9px] rounded-full shadow-md transform transition-all duration-300 ${isDarkMode ? "translate-x-3 bg-[#f5f5f5]" : "translate-x-0 bg-[#0E1011]"}`}
                    ></div>
                  </button>

                  <Link to="/">
                    <div className="relative overflow-hidden group cursor-pointer">
                      <span
                        className={`font-medium text-xs block translate-y-0 transition-all duration-300 ease-in-out group-hover:-translate-y-[150%] ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"}`}
                      >
                        Click me
                      </span>
                      <span
                        className={`font-medium text-xs absolute top-0 left-0 translate-y-[150%] transition-all duration-300 ease-in-out group-hover:translate-y-0 ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"}`}
                      >
                        Go back
                      </span>
                    </div>
                  </Link>

                  <div className="hidden md:flex items-center cursor-pointer relative group">
                    <div className="w-4 h-2 bg-[#2cdc3e] rounded-full ml-2 transition-all duration-300 group-hover:w-2"></div>
                    <div className="ml-1 relative w-30 overflow-hidden">
                      <span className="text-xs text-[#2cdc3e] whitespace-nowrap block translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                        +63 976 301 3967
                      </span>
                      <span className="text-xs text-[#2cdc3e] whitespace-nowrap absolute top-0 left-0 translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        Iloilo City, Philippines
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 flex-grow mx-2 relative">
                  <div
                    className={`flex-grow border-t transition-colors duration-300 ${isDarkMode ? "border-[#afafaf]" : "border-[#e0e0e0]"}`}
                  ></div>
                  <button
                    onClick={() => setIsMenuOpen(true)}
                    className={`group text-xs font-medium px-2 py-2 transition-colors duration-300 cursor-pointer relative overflow-hidden h-8 flex items-center ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"}`}
                  >
                    <span className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">Menu</span>
                    <span className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">Menu</span>
                  </button>
                </div>
              </header>

              {/* Hero Section */}
              <div ref={contentRef} className={`mb-3 rounded-lg p-6 md:p-10 transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#F6F6F6]'}`}>
                <div className="relative z-10 mb-10 flex items-center">
                  <div className="relative z-10">
                    <Link to="/">
                      <img alt="Photo of Mark Lawrence Zaragoza" fetchPriority="high" decoding="async" className="h-[56px] w-[56px] rounded-full object-cover" src={mkrn} />
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
                  <h1 className={`text-3xl md:text-3xl font-light mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                    About Me
                  </h1>
                  <p className={`text-base leading-7 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                    Passionate about creating innovative and user-friendly websites as a frontend developer, and crafting visually compelling designs as a graphics designer.
                  </p>
                </div>
              </div>

              {/* Experience Section */}
              <div className="space-y-3 mb-3">
                <div ref={experienceHeaderRef} className="flex justify-center">
                  <div className={`rounded-lg py-5 flex justify-center items-center w-full transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <span className={`text-sm font-[450] flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                      Experience
                      <ArrowDown size={17} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {experienceData.map((exp, index) => (
                    <div
                      key={index}
                      ref={el => experienceItemsRef.current[index] = el}
                      className={`rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-[#191B1C] hover:bg-[#222222]' : 'bg-[#f6f6f6] hover:bg-[#ececec]'}`}
                    >
                      <button
                        onClick={() => toggleExperience(index)}
                        className="w-full p-5 text-left flex justify-between items-center cursor-pointer transition-all duration-300 rounded-lg group"
                      >
                        <div className="relative overflow-hidden flex-grow">
                          <span className={`text-sm font-medium block translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                            {exp.title}
                          </span>
                          <span className={`text-sm font-medium absolute top-0 left-0 translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                            {exp.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#666]'}`}>
                            {exp.year}
                          </span>
                          <div className={`transform transition-all duration-300 ${expandedExperience.includes(index) ? 'rotate-45' : 'rotate-0'} ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'} rounded-sm w-5 h-5 flex items-center justify-center`}>
                            <Plus size={17} strokeWidth={1.5} />
                          </div>
                        </div>
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedExperience.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-5 pb-5">
                          <p className={`text-[15px] leading-6 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social + Call */}
              <div className="space-y-3 mb-3">
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a key={index} ref={el => socialLinksRef.current[index] = el} href={social.url} target="_blank" rel="noopener noreferrer" className={`group rounded-lg px-5 py-4 flex items-center justify-between transition-all duration-300 cursor-pointer overflow-hidden relative ${isDarkMode ? 'bg-[#191B1C] hover:bg-[#222222]' : 'bg-[#f6f6f6] hover:bg-[#ececec]'}`}>
                        <div className="relative overflow-hidden">
                          <span className={`text-sm block translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>{social.name}</span>
                          <span className={`text-sm absolute top-0 left-0 translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>{social.name}</span>
                        </div>
                        <div className={`relative overflow-hidden flex items-center justify-center ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                          <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                            <IconComponent size={17} strokeWidth={1.5} />
                          </div>
                          <div className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                            <IconComponent size={17} strokeWidth={1.5} />
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <Link to="/contact" ref={el => socialLinksRef.current[2] = el} className={`group rounded-lg px-5 py-4 flex items-center justify-between transition-all duration-300 cursor-pointer overflow-hidden relative ${isDarkMode ? 'bg-[#f5f5f5] text-[#0E1011]' : 'bg-[#0E1011] text-[#f5f5f5]'}`}>
                  <div className="relative overflow-hidden">
                    <span className="text-sm font-medium block translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">Book a Call</span>
                    <span className="text-sm font-medium absolute top-0 left-0 translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">Book a Call</span>
                  </div>
                  <div className="relative overflow-hidden flex items-center justify-center">
                    <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                      <Phone size={17} strokeWidth={1.5} />
                    </div>
                    <div className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                      <Phone size={17} strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              </div>
 {/* FOOTER SECTION */}
              <div ref={footerRef} className={`rounded-lg p-6 md:p-8 transition-colors duration-300 ${isDarkMode ? 'bg-[#f6f6f6]' : 'bg-[#0E1011]'}`}>
                {/* Profile Section */}
                <div className="relative z-10 mb-10 flex items-center">
                  <div className="relative z-10">
                    <Link to="/">
                      <img alt="Photo of Mark Lawrence Zaragoza" fetchPriority="high" decoding="async" className="h-[56px] w-[56px] rounded-full object-cover" src={mkrn} />
                    </Link>
                  </div>
                  <div className="ml-4">
                    <h1 className={`text-base font-[450] transition-colors duration-300 ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}>
                      <Link to="/">Mark Zaragoza</Link>
                    </h1>
                    <div className="relative overflow-hidden h-5 group cursor-pointer">
                      <p className={`text-sm transition-transform duration-300 ease-in-out ${isDarkMode ? 'text-[#6B6C6C]' : 'text-[#a5a5a5]'} translate-y-0 group-hover:-translate-y-[150%]`}>
                        Frontend Developer
                      </p>
                      <p className={`text-sm absolute top-0 left-0 transition-transform duration-300 ease-in-out ${isDarkMode ? 'text-[#6B6C6C]' : 'text-[#a5a5a5]'} translate-y-[150%] group-hover:translate-y-0`}>
                        Graphic Designer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Three Column Links */}
                <div className="grid grid-cols-3 gap-8 mb-3">
                  {/* Pages Column */}
                  <div>
                    <h4 className={`text-sm font-medium mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}>
                      Pages
                    </h4>
                    <div className="space-y-3">
                      <Link to="/" className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#6B6C6C]' : 'text-[#a5a5a5]'}`}>
                        Home
                      </Link>
                      <Link to="/about" className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#6B6C6C]' : 'text-[#a5a5a5]'}`}>
                        About
                      </Link>
                      <Link to="/contact" className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#6B6C6C]' : 'text-[#a5a5a5]'}`}>
                        Contact
                      </Link>
                    </div>
                  </div>

                  {/* Work Column */}
            
                  <div>
                    <h4 className={`text-sm font-medium mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}>
                      CMS
                    </h4>
                    <div className="space-y-3">
                      <Link to="/project">
                        <button className={`block text-sm transition-colors duration-300 cursor-pointer ${isDarkMode ? 'text-[#6B6C6C]' : 'text-[#a5a5a5]'}`}>
                          Projects
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Social Column */}
                  <div>
                    <h4 className={`text-sm font-medium mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}>
                      Social
                    </h4>
                    <div className="space-y-3">
                      <a
                        href="https://www.instagram.com/makrenzar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#6B6C6C]' : 'text-[#a5a5a5]'}`}
                      >
                        Instagram
                      </a>
                      <a
                        href="https://github.com/makrenzar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-sm transition-colors duration-300 hover:opacity-70 ${isDarkMode ? 'text-[#6B6C6C]' : 'text-[#a5a5a5]'}`}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className={` pt-3  border-t transition-colors duration-300 text-center ${isDarkMode ? 'border-[#a5a5a5]' : 'border-[#6B6C6C]'}`}>
                  <p className={`text-xs  transition-colors duration-300 ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}>
                    © 2025 — Mark Zaragoza
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 pt-0 md:pt-13 z-50 flex items-start justify-center"
          onClick={closeMenu}
        >
          <div
            className="max-w-[520px] p-6 md:p-2 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-white' : 'bg-[#0E1011]'}`}>
              <div className="p-3">
                <div className="flex items-center justify-between mb-3 px-2 py-2">
                  <span
                    className={`text-xs font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}
                  >
                    Menu
                  </span>
                  <button
                    onClick={closeMenu}
                    className={`group text-xs cursor-pointer font-medium transition-colors duration-300 relative overflow-hidden h-6 flex items-center ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}
                  >
                    <span className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                      Close
                    </span>
                    <span className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                      Close
                    </span>
                  </button>
                </div>

                {/* Menu items */}
                <div className="grid grid-cols-1 gap-3">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      ref={el => (menuCardsRef.current[index] = el)}
                      onClick={closeMenu}
                      className={`group rounded-lg px-5 py-4 flex items-center justify-between transition-all duration-300 cursor-pointer overflow-hidden relative ${isDarkMode ? 'bg-[#F6F6F6]' : 'bg-[#222222]'}`}
                    >
                      <div className="relative overflow-hidden">
                        <span
                          className={`text-sm block translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}
                        >
                          {item.label}
                        </span>
                        <span
                          className={`text-sm absolute top-0 left-0 translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}
                        >
                          {item.label}
                        </span>
                      </div>
                      <div
                        className={`relative overflow-hidden flex items-center justify-center ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}
                      >
                        <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                          <ArrowRight size={17} strokeWidth={1.5} />
                        </div>
                        <div className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                          <ArrowUpRight size={17} strokeWidth={1.5} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;