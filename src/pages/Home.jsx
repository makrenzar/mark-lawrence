import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from "react-fast-marquee";
import { Facebook, Instagram, Github, Pin, Mail, ArrowRight, ArrowUpRight, ArrowDown, CheckIcon, Plus, Phone } from 'lucide-react';
import mkrn from "../assets/makren.png";
import img1 from "../assets/01.png";
import img2 from "../assets/02.png";
import img3 from "../assets/03.png";
import img4 from "../assets/04.png";
import img5 from "../assets/05.png";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ isDarkMode, setIsDarkMode }) => {
  const [expandedFAQs, setExpandedFAQs] = useState([0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const heroRef = useRef(null);
  const footerRef = useRef(null);
  const marqueeRef = useRef(null);
  const pricingHeaderRef = useRef(null);
  const pricingCardsRef = useRef([]);
  const experienceHeaderRef = useRef(null);
  const experienceItemsRef = useRef([]);
  const faqHeaderRef = useRef(null);
  const faqItemsRef = useRef([]);
  const socialHeaderRef = useRef(null);
  const socialLinksRef = useRef([]);
  const menuCardsRef = useRef([]);
  const overlayRef = useRef(null);

  const works = [
    { imageSrc: img1 },
    { imageSrc: img2 },
    { imageSrc: img3 },
    { imageSrc: img4 },
    { imageSrc: img5 },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/makrenzar/' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/makrenzar' },
  ];

  const menuItems = [
    { label: "Project", path: "/project" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const toggleFAQ = (index) => {
    setExpandedFAQs(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };





  const closeMenu = () => {
    gsap.to(menuCardsRef.current, {
      y: 50, opacity: 0, duration: 0.3, stagger: 0.05, ease: "power2.in"
    });
    gsap.to(overlayRef.current, {
      opacity: 0, duration: 0.3, ease: "power2.in",
      onComplete: () => setIsMenuOpen(false)
    });
  };


  useEffect(() => {
    gsap.set([heroRef.current, marqueeRef.current, pricingHeaderRef.current, experienceHeaderRef.current, faqHeaderRef.current, socialHeaderRef.current], {
      y: 30, opacity: 0
    });
    gsap.set([...pricingCardsRef.current, ...experienceItemsRef.current, ...faqItemsRef.current, ...socialLinksRef.current], {
      y: 20, opacity: 0
    });

    const tl = gsap.timeline();
    tl.to(heroRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(marqueeRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4");

    ScrollTrigger.create({
      trigger: pricingHeaderRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(pricingHeaderRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" });
        gsap.to(pricingCardsRef.current, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out", delay: 0.2 });
      }
    });

    ScrollTrigger.create({
      trigger: faqHeaderRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(faqHeaderRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" });
        gsap.to(faqItemsRef.current, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.3 });
      }
    });

    ScrollTrigger.create({
      trigger: socialHeaderRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(socialHeaderRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" });
        gsap.to(socialLinksRef.current, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.3 });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const faqData = [
    {
      question: "What's included in the Express Launch package?",
      answer: "The Express Launch includes a strategy & discovery call, a custom Figma design, React development with TailwindCSS styling, GSAP-powered animations, mobile-first responsive design, performance optimization, and a 2-week delivery timeline."
    },
    {
      question: "How long does each package take to complete?",
      answer: "Express Launch takes 2 weeks, while Full Digital Presence takes 3–6 weeks depending on complexity. Timelines include discovery, design, development, animation integration, and revisions."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, I offer ongoing maintenance and support packages that cover updates, performance monitoring, content changes, and technical assistance to keep your website running smoothly."
    },
    {
      question: "What makes your approach different from templates?",
      answer: "I build custom React applications with hand-coded components, TailwindCSS styling, and GSAP animations tailored to your brand. Unlike templates, every element is designed and developed specifically for your goals."
    },
    {
      question: "Can I request changes during the development process?",
      answer: "Absolutely! Both packages include revision rounds throughout design and development. We'll collaborate closely to make sure the final result not only meets but exceeds your expectations."
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
                  <button
                    onClick={toggleDarkMode}
                    className={`relative cursor-pointer w-7 h-4 flex items-center rounded-full p-1 transition-colors duration-300 ${isDarkMode ? "bg-[#191B1C]" : "bg-[#e7e7e7]"}`}
                  >
                    <div className={`w-[9px] h-[9px] rounded-full shadow-md transform transition-all duration-300 ${isDarkMode ? "translate-x-3 bg-[#f5f5f5]" : "translate-x-0 bg-[#0E1011]"}`}></div>
                  </button>

                  <span className={`font-medium text-xs transition-colors duration-300 ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"}`}>
                    Home
                  </span>

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
                  <div className={`flex-grow border-t transition-colors duration-300 ${isDarkMode ? "border-[#afafaf]" : "border-[#e0e0e0]"}`}></div>

                  <button
                    onClick={() => setIsMenuOpen(true)}
                    className={`group text-xs font-medium px-2 py-2 transition-colors duration-300 cursor-pointer relative overflow-hidden h-8 flex items-center ${isDarkMode ? "text-[#f5f5f5]" : "text-[#222222]"}`}
                  >
                    <span className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">Menu</span>
                    <span className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">Menu</span>
                  </button>
                </div>
              </header>

              <div ref={heroRef} className={`mb-3 rounded-lg p-6 md:p-10 transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#F6F6F6]'}`}>
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
                      <p className={`text-sm transition-transform duration-300 ease-in-out ${isDarkMode ? 'text-[#6B6C6C]' : 'text-[#a5a5a5]'} translate-y-0 group-hover:-translate-y-[150%]`}>
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
                    <button className={`group cursor-pointer relative inline-flex h-7 md:h-9 items-center justify-center overflow-hidden rounded-md px-6 py-5 font-medium text-xs md:text-sm transition-colors duration-300 ${isDarkMode ? 'bg-white text-[#222222]' : 'bg-[#0E1011] text-[#f5f5f5]'}`}>
                      <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] flex items-center gap-2">
                        Get in Touch
                        <Mail size={17} strokeWidth={1.5} />
                      </div>
                      <div className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex items-center gap-2">
                        Send Email
                        <ArrowRight size={17} strokeWidth={1.5} />
                      </div>
                    </button>
                  </Link>

                  <Link to="/project">
                    <button className={`group cursor-pointer relative inline-flex h-7 md:h-9 items-center justify-center overflow-hidden rounded-md px-6 py-5 font-medium text-xs md:text-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#0E1011] text-[#f5f5f5]' : 'bg-white text-[#222222]'}`}>
                      <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">View Project</div>
                      <div className="absolute translate-y-[155%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">View Project</div>
                    </button></Link>
                </div>
              </div>

              <div  className="mb-3">
                <Marquee pauseOnHover={true} gradient={false} speed={20} direction="right">
                  {works.map((work, index) => (
                    <div key={index} className="relative shrink-0 mr-3">
                      <img src={work.imageSrc} alt={`Portfolio ${index + 1}`} loading="lazy" decoding="async" className="h-[137px] w-[200px] cursor-pointer object-cover rounded-lg" />
                    </div>
                  ))}
                </Marquee>
              </div>

              <div className="space-y-3 mb-3">
                <div ref={pricingHeaderRef} className="flex justify-center">
                  <div className={`rounded-lg py-5 flex justify-center items-center w-full transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <span className={`text-sm font-[450] flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                      How I Work
                      <ArrowDown size={17} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {packagesData.map((pkg, index) => (
                    <div key={index} ref={el => pricingCardsRef.current[index] = el} className={`rounded-lg p-6 transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                      <div className="mb-6">
                        <h3 className={`text-lg font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>{pkg.title}</h3>
                        <div className={`text-sm mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#666]'}`}>{pkg.type}</div>
                        <p className={`text-sm leading-6 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>{pkg.description}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className={`text-sm font-medium mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>What's Included:</h4>
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start mb-3">
                            <div className="w-4 h-4 rounded-sm mr-3 flex items-center justify-center mt-0.5 transition-colors duration-300 bg-white">
                              <CheckIcon size={15} strokeWidth={2} color="#222222" />
                            </div>
                            <span className={`text-[15px] leading-6 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#222222]'}`}>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/contact" state={{ package: pkg.title }}>
                        <button className={`group w-full cursor-pointer relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md font-medium text-sm transition-colors duration-300 ${pkg.highlight ? 'bg-[#0E1011] text-[#f5f5f5]' : 'bg-white text-[#222222]'}`}>
                          <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] flex items-center gap-2">
                            {pkg.cta}
                            <ArrowRight size={17} strokeWidth={1.5} />
                          </div>
                          <div className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex items-center gap-2">
                            {pkg.cta}
                            <ArrowRight size={17} strokeWidth={1.5} />
                          </div>
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mb-3">
                <div ref={faqHeaderRef} className="flex justify-center">
                  <div className={`rounded-lg py-5 flex justify-center items-center w-full transition-colors duration-300 ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#f6f6f6]'}`}>
                    <span className={`text-sm font-[450] flex items-center gap-2 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                      FAQ
                      <ArrowDown size={17} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {faqData.map((faq, index) => (
                    <div key={index} ref={el => faqItemsRef.current[index] = el} className={`rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-[#191B1C] hover:bg-[#222222]' : 'bg-[#f6f6f6] hover:bg-[#ececec]'}`}>
                      <button onClick={() => toggleFAQ(index)} className="w-full p-5 text-left flex justify-between items-center cursor-pointer transition-all duration-300 rounded-lg">
                        <span className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>{faq.question}</span>
                        <div className={`transform transition-all duration-300 ${expandedFAQs.includes(index) ? 'rotate-45' : 'rotate-0'} ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'} rounded-sm w-5 h-5 flex items-center justify-center`}>
                          <Plus size={17} strokeWidth={1.5} />
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQs.includes(index) ? 'max-h-96' : 'max-h-0'}`}>
                        <div className={`px-5 pb-5 transform transition-all duration-500 ease-in-out ${expandedFAQs.includes(index) ? 'translate-y-0' : '-translate-y-2'}`}>
                          <p className={`text-[15px] leading-6 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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
                <div className={` pt-3  border-t transition-colors duration-300 text-center ${isDarkMode ? 'border-[#2a2a2a]' : 'border-[#e0e0e0]'}`}>
                  <p className={`text-xs  transition-colors duration-300  ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}>
                    © 2025 — Mark Zaragoza
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 pt:0 md:pt-13 z-50 flex items-start justify-center " // 🔥 changed items-center → items-start
          onClick={closeMenu}
        >
          <div
            className="max-w-[520px] p-6 md:p-2  w-full " // 🔥 added margin-top so it's not glued to the very top
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
                      className={`group rounded-lg px-5 py-4 flex items-center justify-between transition-all duration-300 cursor-pointer overflow-hidden relative ${isDarkMode ? 'bg-[#F6F6F6] ' : 'bg-[#222222] '}`}
                    >
                      <div className="relative overflow-hidden">
                        <span
                          className={`text-sm block translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] ${isDarkMode ? 'text-[#222222]' : 'text-[#f5f5f5]'}`}
                        >
                          {item.label}
                        </span>
                        <span
                          className={`text-sm absolute top-0 left-0 translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${isDarkMode ? 'text-[#222222  ]' : 'text-[#f5f5f5]'}`}
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

export default Home;