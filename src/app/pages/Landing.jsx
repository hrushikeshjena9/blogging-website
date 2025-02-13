"use client";
import React from "react";
import Blogs from "../db";
import Link from "next/link";
import NewsletterSection from "../components/Newsletter";

function Landing() {
  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative">
              <Link href={`blog/${blog.slug}`}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <h2 className="absolute bottom-4 left-4 text-white text-lg font-bold bg-black/70 px-3 py-1 rounded">
                  {blog.title}
                </h2>
          </Link> 
              </div>
              <div className="p-4 lg:hidden">
                <p className="text-gray-600 text-sm">{blog.date}</p>
                <p className="text-gray-800 mt-2">{blog.excerpt}</p>
              </div>
          </div>
        ))}
    </div>
    <NewsletterSection/>
    </div >
  );
}

export default Landing;

