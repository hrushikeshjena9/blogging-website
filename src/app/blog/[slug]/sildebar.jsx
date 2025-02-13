"use client";
import React from "react";
import { Mail, User, Instagram, Twitter, Facebook, Tag, Newspaper, ThumbsUp } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="max-w-xl sm:block hidden bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="mb-6 flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-xl mx-auto">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
          <img
            src="your-image-url.jpg"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          <p className="text-gray-700 mt-3 leading-relaxed text-sm md:text-base">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ThumbsUp size={20} className="text-gray-700" /> Follow Us
        </h2>
        <div className="grid grid-cols-2 gap-3 mt-3">

          <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:bg-pink-600 focus:ring-2 focus:ring-pink-400">
            <Instagram size={20} />
            Instagram
          </button>


          <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-500 focus:ring-2 focus:ring-blue-300">
            <Twitter size={20} />
            Twitter
          </button>

   
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
            <Facebook size={20} />
            Facebook
          </button>
        </div>
      </div>


      <div className="mb-6 w-full max-w-md">

        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Mail size={20} className="text-gray-700" /> Newsletter
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-2">
          Fill your email below to subscribe to my newsletter.
        </p>

        {/* Input Field & Button */}
        <div className="flex mt-4 relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-blue-600 text-white px-5 rounded-r-lg font-medium transition-all duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Subscribe
          </button>
        </div>
      </div>


      {/* Popular Posts */}
      <div className="mb-6 w-full max-w-md">
        {/* Title */}
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Newspaper size={24} className="text-gray-700" /> Popular Posts
        </h2>

        {/* Posts List */}
        <ul className="mt-4 space-y-4">
          {[
            {
              title: "The Most Beautiful Green Field on Earth",
              author: "Paul Newman",
              date: "Sep 5, 2018",
              image: "https://source.unsplash.com/100x100/?nature,field"
            },
            {
              title: "How to Shoot Food on Your Phone Like a Pro",
              author: "Kally Gordon",
              date: "Aug 5, 2018",
              image: "https://source.unsplash.com/100x100/?food,photography"
            },
            {
              title: "One Of The Most Beautiful Beaches In Brazil",
              author: "Paul Newman",
              date: "Jul 25, 2018",
              image: "https://source.unsplash.com/100x100/?beach,ocean"
            }
          ].map((post, index) => (
            <li
              key={index}
              className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-gray-50"
            >
              {/* Post Image */}
              <div className="w-16 h-16 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Post Content */}
              <div className="flex flex-col">
                <span className="font-medium text-gray-800 text-lg transition-colors duration-300 hover:text-blue-600">📌 {post.title}</span>
                <span className="text-gray-500 text-sm">{post.author}, {post.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>


      {/* Categories */}
      <div className="mb-6 w-full max-w-md">
        {/* Title */}
        <h2 className="text-xl font-semibold flex items-center gap-2">
          📂 Categories
        </h2>

        {/* Categories Grid */}
        <ul className="mt-4 grid grid-cols-2 gap-4">
          {[
            { name: "Fashion", count: 5, image: "https://source.unsplash.com/100x100/?fashion,style" },
            { name: "Food", count: 6, image: "https://source.unsplash.com/100x100/?food,cuisine" },
            { name: "Photography", count: 11, image: "https://source.unsplash.com/100x100/?photography,camera" },
            { name: "Technology", count: 6, image: "https://source.unsplash.com/100x100/?technology,gadgets" },
            { name: "Travel", count: 9, image: "https://source.unsplash.com/100x100/?travel,landscape" }
          ].map((category, index) => (
            <li
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-gray-50"
            >
              {/* Category Image */}
              <div className="w-16 h-16 overflow-hidden rounded-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Category Name */}
              <span className="mt-3 font-medium text-gray-800 text-lg transition-colors duration-300 hover:text-blue-600 text-center">
                {category.name} ({category.count})
              </span>
            </li>
          ))}
        </ul>
      </div>


      {/* Tags */}
      <div className="mb-6 w-full max-w-md">
        {/* Title */}
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Tag size={20} className="text-gray-700" /> Tags
        </h2>

        {/* Tags Container */}
        <div className="flex flex-wrap gap-3 mt-4">
          {[
            "Beach", "Dress", "Fashion", "Food", "Gadget", "Holiday",
            "Nature", "Ocean", "Photography", "Tech", "Tips", "Travel"
          ].map(tag => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Recent Posts */}
      <div className="mb-6 w-full max-w-md">
        {/* Title */}
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Newspaper size={24} className="text-gray-800" /> Recent Posts
        </h2>

        {/* Posts Grid */}
        <div className="mt-4 grid gap-4">
          {[
            {
              title: "Check Out The Most Awesome VR Headset in 2020",
              author: "Jane Smith",
              date: "Nov 7, 2018",
              image: "https://source.unsplash.com/300x200/?vr,technology"
            },
            {
              title: "Or Is It Now The End of Smartphones?",
              author: "Janet Jones",
              date: "Nov 7, 2018",
              image: "https://source.unsplash.com/300x200/?smartphone,tech"
            },
            {
              title: "XE Entertainment Brings You New Experience of Fun",
              author: "Kally Gordon",
              date: "Oct 12, 2018",
              image: "https://source.unsplash.com/300x200/?entertainment,fun"
            }
          ].map((post, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>

              {/* Post Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm opacity-80">{post.author} • {post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



    </aside>
  );
};

export default Sidebar;

