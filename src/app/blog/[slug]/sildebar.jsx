"use client";
import React from "react";
import { Mail, User, Instagram, Twitter, Facebook, Tag, Newspaper, ThumbsUp } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* About Me */}
      <div className="mb-6 flex items-start gap-3">
        <User size={24} className="text-gray-700" />
        <div>
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="text-gray-600 mt-2">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>

      {/* Follow Us */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ThumbsUp size={20} className="text-gray-700" /> Follow Us
        </h2>
        <div className="flex gap-3 mt-2">
          <Instagram size={20} className="text-pink-500 cursor-pointer" />
          <Twitter size={20} className="text-blue-400 cursor-pointer" />
          <Facebook size={20} className="text-blue-600 cursor-pointer" />
        </div>
      </div>

      {/* Newsletter */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Mail size={20} className="text-gray-700" /> Newsletter
        </h2>
        <p className="text-gray-600 mt-2">Fill your email below to subscribe to my newsletter</p>
        <div className="flex mt-3">
          <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded-l-lg focus:outline-none" />
          <button className="bg-blue-600 text-white px-4 rounded-r-lg">Subscribe</button>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Newspaper size={20} className="text-gray-700" /> Popular Posts
        </h2>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-700">📌 The Most Beautiful Green Field on Earth - <span className="text-gray-500">Paul Newman, Sep 5, 2018</span></li>
          <li className="text-gray-700">📌 How to Shoot Food on Your Phone Like a Pro - <span className="text-gray-500">Kally Gordon, Aug 5, 2018</span></li>
          <li className="text-gray-700">📌 One Of The Most Beautiful Beach In Brazil - <span className="text-gray-500">Paul Newman, Jul 25, 2018</span></li>
        </ul>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">📂 Categories</h2>
        <ul className="text-gray-700 mt-2 space-y-1">
          <li>🎭 Fashion (5)</li>
          <li>🍕 Food (6)</li>
          <li>📸 Photography (11)</li>
          <li>💻 Technology (6)</li>
          <li>✈️ Travel (9)</li>
        </ul>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Tag size={20} className="text-gray-700" /> Tags
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {["Beach", "Dress", "Fashion", "Food", "Gadget", "Holiday", "Nature", "Ocean", "Photography", "Tech", "Tips", "Travel"].map(tag => (
            <span key={tag} className="bg-gray-300 px-3 py-1 rounded text-sm cursor-pointer hover:bg-gray-400">{tag}</span>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Newspaper size={20} className="text-gray-700" /> Recent Posts
        </h2>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-700">📌 Check Out The Most Awesome VR Headset in 2020 - <span className="text-gray-500">Jane Smith, Nov 7, 2018</span></li>
          <li className="text-gray-700">📌 Or It’s Now The End of Smartphones? - <span className="text-gray-500">Janet Jones, Nov 7, 2018</span></li>
          <li className="text-gray-700">📌 XE Entertainment Brings You New Experience of Fun - <span className="text-gray-500">Kally Gordon</span></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
