"use client";

import React, { useMemo } from "react";
import Blogs from "../db";
import { X } from "lucide-react"; 

function TopFilter({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) {
    // Get unique categories with their count
    const categories = useMemo(() => {
        const categoryCount = {};
        
        Blogs.forEach((blog) => {
            categoryCount[blog.category] = (categoryCount[blog.category] || 0) + 1;
        });

        return Object.entries(categoryCount).map(([category, count]) => ({ category, count }));
    }, [Blogs]);

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3">
                {categories.map(({ category, count }, index) => (
                <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition duration-300 text-sm font-semibold flex items-center gap-2
                ${selectedCategory === category 
                    ? "bg-blue-500 text-white" 
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
                {category} 
                
                <span className="bg-black text-white text-xs flex items-center justify-center rounded-full h-5 w-5">
                    {count}
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
