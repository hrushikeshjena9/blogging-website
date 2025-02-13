

"use client";
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaBars, FaTimes, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full border-b  shadow-md relative">

            <div className="flex items-center justify-between  px-6 py-2 text-sm">
                <p className="animate-marquee whitespace-nowrap text-gray-700">
                    🚀 Latest Blog: {" "}
                    <Link href="/latest-blog" className="text-[#FFB400] hover:underline">
                        "Mastering Next.js & Tailwind"
                    </Link>
                </p>
                <div className="flex gap-4">
                    <Link href="https://facebook.com" target="_blank">
                        <FaFacebook className="text-gray-600 hover:text-blue-600" size={18} />
                    </Link>
                    <Link href="https://twitter.com" target="_blank">
                        <FaTwitter className="text-gray-600 hover:text-blue-400" size={18} />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                        <FaLinkedin className="text-gray-600 hover:text-blue-800" size={18} />
                    </Link>
                    <Link href="https://instagram.com" target="_blank">
                        <FaInstagram className="text-gray-600 hover:text-red-700" size={18} />
                    </Link>
                </div>
            </div>


            <div className="container mx-auto flex items-center justify-between px-6 py-4">

                <div className="w-full flex flex-col items-center text-center ">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        HK <span className="text-[#FFB400]">Insights</span>
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">Navigating the World, One Insight at a Time</p>
                </div>



                <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                    <FaBars size={24} />
                </button>
            </div>

            <nav className="container mx-auto px-6 z-20 hidden relative md:block">
                <ul className="flex flex-wrap justify-center lg:gap-4 lg:text-base xl:gap-6 xl:text-lg md:gap-4 md:text-xs">
                    {[
                        { name: "Technology", links: ["AI & ML", "Web Development", "Cybersecurity"] },
                        { name: "Education", links: ["E-Learning", "Career Growth", "Skill Development"] },
                        { name: "Travel", links: ["Destinations", "Travel Tips", "Budget Travel"] },
                        { name: "Entertainment", links: ["Movies", "Web Series"] },
                        { name: "Startups", links: ["Entrepreneurship", "Funding", "Startup Stories"] },
                        { name: "Finance", links: ["Investing", "Savings", "Stock Market"] },
                        { name: "Self-Improvement", links: ["Motivation", "Leadership", "Personal Growth"] },
                    ].map((category, index) => (
                        <li key={index} className="relative group">
                            <Link href="#" className="text-gray-700 hover:text-[#FFB400]">
                                {category.name}
                            </Link>
                            <div className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-64">
                                {category.links.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/${link.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                                        className="block text-gray-700 hover:text-white hover:bg-blue-500 px-3 py-2 rounded-md transition-all duration-300"
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </div>
                       

                        </li>
                    ))}
                    <li className="relative group">
                        <Link href="/about" className="text-gray-700 hover:text-blue-600">
                            About
                        </Link>

                    </li>
                    <li className="relative group">
                        <Link href="#" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </Link>
                        <div className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-64">
                            <Link href="/work-with-me" className="block text-gray-700 hover:text-blue-600 py-1">
                                Work with Me
                            </Link>
                            <Link href="/become-author" className="block text-gray-700 hover:text-blue-600 py-1">
                                Become an Author
                            </Link>
                            <Link href="/request-blog" className="block text-gray-700 hover:text-blue-600 py-1">
                                Request a Blog Post
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform z-50 md:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsMenuOpen(false)}>
                        <FaTimes size={24} />
                    </button>
                </div>
                <ul className="flex flex-col gap-4 p-6 text-lg">
                    {["Technology", "Lifestyle", "Education", "Travel", "Entertainment", "News & Trends", "Startups", "Finance", "Self-Improvement"].map((item, index) => (
                        <li key={index}>
                            <Link href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`} className="text-gray-700 hover:text-blue-600">
                                {item}
                            </Link>
                        </li>
                    ))}

                    <li>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600">
                            About
                        </Link>

                    </li>
                    <li>
                        <Link href="#" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
