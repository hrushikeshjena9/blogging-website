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
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover my-4 rounded-lg"
                />
                <p className="text-gray-600">{blog.date}</p>

                <p className="text-gray-800">{blog.content}</p>



                <div className="mb-6">
                    <strong>Tags:</strong> {blog.tags?.join(", ") || "No tags"}
                </div>
                <div className="flex justify-between mt-6">
                    {previousBlog && (
                        <a href={`/blog/${previousBlog.slug}`} className="text-blue-500">&larr;
                        </a>
                    )}
                    {nextBlog && (
                        <a href={`/blog/${nextBlog.slug}`} className="text-blue-500">
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
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-2xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 Leave Your Comment</h2>

                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg bg-gray-100 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    />

                    {/* Message Textarea */}
                    <textarea
                        placeholder="Your message here..."
                        className="w-full p-3 border rounded-lg bg-gray-100 mt-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                        rows="4"
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg mt-4 font-semibold text-lg transition duration-300 hover:bg-blue-600 active:scale-95"
                    >
                        🚀 Post Comment
                    </button>
                </div>

            </div>
            {/* <Sidebar  /> */}
        </div>
    );
}

