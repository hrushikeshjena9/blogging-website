"use client";
import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    if (!isChecked) {
      alert("You must agree to receive the newsletter.");
      return;
    }
    alert(`Subscribed successfully with email: ${email}`);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
        Stay Informed With the Latest & Most Important News
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            id="consent"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
          />
          <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
            I consent to receive the newsletter via email. For further information, please review our{" "}
            <a href="/privacy-policy" className="text-blue-500 underline">
              Privacy Policy
            </a>.
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
