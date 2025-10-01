import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Contact = ({ isDarkMode, setIsDarkMode }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subject: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Refs for animations
    const contentRef = useRef(null);
    const formFieldsRef = useRef([]);
    const menuCardsRef = useRef([]);
    const overlayRef = useRef(null);

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Work", path: "/work" },
        { label: "About", path: "/about" }
    ];

    // Auto-hide status after 3 seconds
    useEffect(() => {
        if (submitStatus) {
            const timer = setTimeout(() => {
                setSubmitStatus("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    // Animation on mount
    useEffect(() => {
        // Set initial states
        gsap.set(contentRef.current, {
            y: 30,
            opacity: 0
        });

        gsap.set(formFieldsRef.current, {
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
            .to(formFieldsRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.3");

    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("");

        try {
            const response = await fetch('https://formspree.io/f/mrbypaln', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: formData.subject || "New Contact Form Submission",
                    _replyto: formData.email
                })
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "", subject: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
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
                                            className={`w-[9px] h-[9px] rounded-full shadow-md transform transition-all duration-300 ${isDarkMode ? "translate-x-3 bg-[#f5f5f5]" : "translate-x-0 bg-[#222222]"}`}
                                        ></div>
                                    </button>

                                    {/* Location - with Home hover */}
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

                                    {/* Phone + Availability - hidden on mobile */}
                                    <div className="hidden md:flex items-center cursor-pointer relative group">
                                        <div className="w-4 h-2 bg-[#2cdc3e] rounded-full ml-2 transition-all duration-300 group-hover:w-2"></div>
                                        <div className="ml-1 relative w-30  overflow-hidden">
                                            <span className="text-[11.7px] text-[#2cdc3e] whitespace-nowrap block translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                                                +63 976 301 3967
                                            </span>
                                            <span className="text-xs text-[#2cdc3e] whitespace-nowrap absolute top-0 left-0 translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                                                Iloilo City, Philippines
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side */}
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

                            <div ref={contentRef} className={`mb-3 rounded-lg p-6 md:p-10 transition-colors duration-300  ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#F6F6F6]'}`}>
                                <div className="mb-8">

                                    <h1 className={`text-4xl md:text-5xl font-light mb-4 transition-colors duration-300 ${isDarkMode ? 'text-[#f5f5f5]' : 'text-[#222222]'}`}>
                                        Let's Talk
                                    </h1>
                                    <p className={`text-base leading-7 transition-colors duration-300 ${isDarkMode ? 'text-[#a5a5a5]' : 'text-[#6B6C6C]'}`}>
                                        Let's collaborate! Reach out to discuss your next project today.
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-3">
                                    {/* Name and Email Row */}
                                    <div ref={el => formFieldsRef.current[0] = el} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name"
                                            required
                                            className={`w-full px-6 py-3 rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 placeholder-[#a5a5a5] focus:ring-[#222222] ${isDarkMode ? 'text-[#f5f5f5] bg-[#0E1011]' : 'text-[#222222] bg-white'}`}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Your Email"
                                            required
                                            className={`w-full px-6 py-3 rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 placeholder-[#a5a5a5] focus:ring-[#222222] ${isDarkMode ? 'text-[#f5f5f5] bg-[#0E1011]' : 'text-[#222222] bg-white'}`}
                                        />
                                    </div>

                                    {/* Subject Field (Optional) */}
                                    <input
                                        ref={el => formFieldsRef.current[1] = el}
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Subject (Optional)"
                                        className={`w-full px-6 py-3 rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 placeholder-[#a5a5a5] focus:ring-[#222222] ${isDarkMode ? 'text-[#f5f5f5] bg-[#0E1011]' : 'text-[#222222] bg-white'}`}
                                    />

                                    {/* Message Textarea */}
                                    <textarea
                                        ref={el => formFieldsRef.current[2] = el}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                        required
                                        rows="6"
                                        className={`w-full px-6 py-3 rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 resize-none placeholder-[#a5a5a5] focus:ring-[#222222] ${isDarkMode ? 'text-[#f5f5f5] bg-[#0E1011]' : 'text-[#222222] bg-white'}`}
                                    ></textarea>

                                    {/* Status Messages */}
                                    {submitStatus === "success" && (
                                        <div
                                            className={`p-4 rounded-lg transition-colors duration-300 ${isDarkMode ? "bg-[#0E1011] text-[#f5f5f5]" : "bg-white text-[#222222]"}`}
                                        >
                                            <p className="text-sm">
                                                Your message has been sent successfully. I'll get back to you shortly.
                                            </p>
                                        </div>
                                    )}
                                    {submitStatus === "error" && (
                                        <div
                                            className={`p-4 rounded-lg transition-colors duration-300 ${isDarkMode ? "bg-[#0E1011] text-[#f5f5f5]" : "bg-white text-[#222222]"}`}
                                        >
                                            <p className="text-sm">
                                                Something went wrong. Please try again, or reach me directly at{" "}
                                                <span className="font-medium">markzaragoza301@gmail.com</span>.
                                            </p>
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        ref={el => formFieldsRef.current[3] = el}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`group w-full cursor-pointer relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg font-medium text-sm transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} ${isDarkMode ? 'bg-white text-[#222222]' : 'bg-[#0E1011] text-[#f5f5f5]'}`}
                                    >
                                        <div className="translate-y-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-[175%] flex items-center gap-2">
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <ion-icon name="arrow-forward-outline" size="small"></ion-icon>
                                        </div>
                                        <div className="absolute translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 flex items-center gap-2">
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <ion-icon name="arrow-forward-outline" size="small"></ion-icon>
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Overlay */}
            {isMenuOpen && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 pt:0 md:pt-13 z-50 flex items-start justify-center"
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

export default Contact;