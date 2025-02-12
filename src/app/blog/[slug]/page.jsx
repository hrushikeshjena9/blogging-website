import Blogs from "../../db";
import { notFound } from "next/navigation";
import Sidebar from "./sildebar";

export default function BlogDetails({ params }) {
    const { slug } = params;
    const blogIndex = Blogs.findIndex((b) => b.slug === slug);
    const blog = Blogs[blogIndex];

    if (!blog) {
        notFound();
    }

    const previousBlog = Blogs[blogIndex - 1] || null;
    const nextBlog = Blogs[blogIndex + 1] || null;

    return (
        <div className="flex justify-between">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <p className="text-gray-600">{blog.date}</p>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover my-4 rounded-lg"
                />
                <p className="text-gray-800">{blog.content}</p>

         

          <div className="mb-6">
                    <strong>Tags:</strong> {blog.tags?.join(", ") || "No tags"}
                </div>
                       <div className="flex justify-between mt-6">
                    {previousBlog && (
                        <a href={`/blog/${previousBlog.slug}`} className="text-blue-500">&larr; 
                        {/* {previousBlog.title} */}
                        </a>
                    )}
                    {nextBlog && (
                        <a href={`/blog/${nextBlog.slug}`} className="text-blue-500">
                            {/* {nextBlog.title} */}
                         &rarr;</a>
                    )}
                </div>
                   

                <div className="mt-8 border-t pt-6">
                    <h3 className="text-2xl font-semibold mb-4">Comments</h3>
                    {blog.comments?.map((comment, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-lg">
                            <p className="font-bold">{comment.author}</p>
                            <p className="text-gray-600 text-sm">{comment.date}</p>
                            <p className="mt-2">{comment.text}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold">Leave Your Comment</h2>
                    <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded mt-2" />
                    <input type="email" placeholder="Your Email" className="w-full p-2 border rounded mt-2" />
                    <textarea placeholder="Your message here" className="w-full p-2 border rounded mt-2"></textarea>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Post</button>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}
