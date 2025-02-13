import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#ff4d4f",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "You've successfully subscribed to our newsletter.",
      confirmButtonColor: "#22c55e",
    });

    setEmail("");
  };

  return (
    <div
      className="relative bg-cover bg-center text-white py-16 px-6 md:px-12"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?newsletter,technology')" }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-sm text-gray-300 mb-6">
          Sign up for our free newsletters to receive the latest news. Don't worry, we won’t spam.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email Address"
            className="p-3 rounded-md text-black w-full sm:w-auto"
          />
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
