"use client";

import React, { useMemo } from "react";
import Blogs from "../db";
import { X } from "lucide-react";

function TopFilter({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) {
    const categories = useMemo(() => {
        const categoryCount = {};

        Blogs.forEach((blog) => {
            categoryCount[blog.category] = (categoryCount[blog.category] || 0) + 1;
        });

        return Object.entries(categoryCount).map(([category, count]) => ({ category, count }));
    }, [Blogs]);

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 gap-4">
                {categories.map(({ category, count, image }, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex flex-col items-center bg-white p-4 rounded-lg shadow-md transition duration-300 
        ${selectedCategory === category ? "bg-blue-500 text-white" : "hover:bg-gray-100"}
      `}
                    >
                        {/* Category Image */}
                        <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-gray-300 shadow-sm">
                            <img
                                src={image}
                                alt={category}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        {/* Category Name */}
                        <span className="mt-3 text-sm font-semibold">
                            {category}
                        </span>

                        {/* Count Badge */}
                        <span className="mt-1 bg-black text-white text-xs px-2 py-1 rounded-full">
                            {count} posts
                        </span>
                    </button>
                ))}
            </div>



            {/* Search Input */}
            <div className="relative w-full max-w-md flex items-center">
                <input
                    type="text"
                    placeholder="Search here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-3 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-blue-300"
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 text-gray-500 hover:text-gray-700"
                    >
                        <X size={20} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default TopFilter;
