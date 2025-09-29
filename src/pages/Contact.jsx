import React, { useState, useEffect, useRef } from 'react';

const Contact = ({ isDarkMode, setIsDarkMode }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subject: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    // Auto-hide status after 3 seconds
    useEffect(() => {
        if (submitStatus) {
            const timer = setTimeout(() => {
                setSubmitStatus("");
            }, 3000);
            return () => clearTimeout(timer); // cleanup
        }
    }, [submitStatus]);

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
            // Using Formspree
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

    return (
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
                        <div className={`mb-3 rounded-lg p-6 md:p-10 transition-colors duration-300  ${isDarkMode ? 'bg-[#191B1C]' : 'bg-[#F6F6F6]'}`}>
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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        required
                                        className={`w-full px-6 py-3 rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 placeholder-[#a5a5a5]   focus:ring-[#222222] ${isDarkMode ? 'text-[#f5f5f5] bg-[#0E1011] ' : 'text-[#222222] bg-white'}`}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        required
                                        className={`w-full px-6 py-3 rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1  placeholder-[#a5a5a5] focus:ring-[#222222] ${isDarkMode ? 'text-[#f5f5f5] bg-[#0E1011]' : 'text-[#222222] bg-white'}`}
                                    />
                                </div>

                                {/* Subject Field (Optional) */}
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Subject (Optional)"
                                    className={`w-full px-6 py-3 rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1  placeholder-[#a5a5a5] focus:ring-[#222222] ${isDarkMode ? 'text-[#f5f5f5] bg-[#0E1011]' : 'text-[#222222] bg-white'}`}
                                />

                                {/* Message Textarea */}
                                <textarea
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
                                        className={`p-4 rounded-lg transition-colors duration-300 ${isDarkMode ? "bg-[#0E1011] text-[#f5f5f5]" : "bg-white text-[#222222]"
                                            }`}
                                    >
                                        <p className="text-sm">
                                            Your message has been sent successfully. I’ll get back to you shortly.
                                        </p>
                                    </div>
                                )}
                                {submitStatus === "error" && (
                                    <div
                                        className={`p-4 rounded-lg transition-colors duration-300 ${isDarkMode ? "bg-[#0E1011] text-[#f5f5f5]" : "bg-white text-[#222222]"
                                            }`}
                                    >
                                        <p className="text-sm">
                                            Something went wrong. Please try again, or reach me directly at{" "}
                                            <span className="font-medium">markzaragoza301@gmail.com</span>.
                                        </p>
                                    </div>
                                )}


                                {/* Submit Button */}
                                <button
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
    );
};

export default Contact;
