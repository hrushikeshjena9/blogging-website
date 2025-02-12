"use client";
import React from "react";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Profile Photo */}
      <div className="flex justify-center">
        <img
          className="w-32 h-32 rounded-full"
          src="/path-to-your-profile-photo.jpg"
          alt="Hrushikesh Jena"
        />
      </div>

      {/* WHO IS THIS GUY? */}
      <section>
        <h2 className="text-3xl font-bold text-center">WHO IS THIS GUY?</h2>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Hello, I'm Hrushikesh Jena, a passionate full-stack developer with 2
          years of experience in creating dynamic web applications. I specialize
          in building efficient and scalable web systems that are user-friendly
          and innovative. I believe in the power of clean, maintainable code and
          continuous learning to stay ahead of technological trends.
        </p>
        <p className="mt-4 text-lg text-gray-700 text-center">
          My journey in web development started with a curiosity for how things
          work, which grew into a passion for creating intuitive user experiences.
          I love working with modern technologies like React, JavaScript, Spring
          Boot, and MySQL to build seamless web applications.
        </p>
      </section>

      {/* WHY CHOOSE ME */}
      <section>
        <h2 className="text-3xl font-bold text-center">WHY CHOOSE ME</h2>
        <div className="mt-6 text-lg text-gray-700">
          <h3 className="text-xl font-semibold">Best Article Service – Enjoy Your Life</h3>
          <p className="mt-4">
            Sed pellentesque pulvinar arcu ac congue. Sed sed est nec justo
            maximus blandit. Curabitur lacinia, eros sit amet maximus suscipit,
            magna sapien venenatis eros, et gravida urna massa ut lectus. Quisque
            lacinia lacinia viverra. Nullam nec est et lorem sodales ornare a in
            sapien. In tristique urna maximus, consectetur ligula in, gravida erat.
            Nullam dignissim hendrerit auctor. Sed varius, dolor vitae iaculis
            condimentum, massa nisl cursus sapien, gravida ultrices nisi dolor non
            erat.
          </p>
        </div>
      </section>

      {/* Follow Me */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold">Follow Me</h2>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://twitter.com/hrushikeshjena"
            className="text-blue-500 hover:text-blue-700 text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/hrushikeshjena"
            className="text-blue-500 hover:text-blue-700 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:hrushikeshjena@example.com"
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* WHAT I DO FOR A LIVING */}
      <section>
        <h2 className="text-3xl font-bold text-center">WHAT I DO FOR A LIVING</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <IoMdContact className="text-blue-500" size={24} />
            <h3 className="text-2xl font-semibold">Web Development</h3>
          </div>
          <p className="text-lg text-gray-700">
            I focus on building responsive, interactive, and efficient websites and
            web applications. I strive to create solutions that cater to both
            functionality and user experience, ensuring your project meets the highest
            standards.
          </p>

          <div className="flex items-center space-x-3">
            <IoMdContact className="text-blue-500" size={24} />
            <h3 className="text-2xl font-semibold">System Design & Architecture</h3>
          </div>
          <p className="text-lg text-gray-700">
            I work on designing robust software architectures for applications, ensuring
            smooth scalability, maintainability, and performance optimization.
          </p>

          <div className="flex items-center space-x-3">
            <IoMdContact className="text-blue-500" size={24} />
            <h3 className="text-2xl font-semibold">Problem Solving & Innovation</h3>
          </div>
          <p className="text-lg text-gray-700">
            As a developer, I thrive on solving complex problems, whether it’s optimizing
            performance, debugging tricky issues, or building new features. Innovation drives
            my work, and I’m always eager to explore new ways to improve code and functionality.
          </p>
        </div>
      </section>

      {/* FUN FACTS */}
      <section className="text-center mt-8">
        <h2 className="text-3xl font-bold">FUN FACTS</h2>
        <ul className="mt-6 space-y-2 text-lg text-gray-700">
          <li>72 Projects Completed</li>
          <li>24 Million Lines of Code</li>
          <li>24 Podcasts Released</li>
          <li>230 Articles Written</li>
          <li>14 Countries Visited</li>
          <li>2300 Shots Captured</li>
        </ul>
      </section>

      {/* LET'S CONNECT */}
      <section className="text-center mt-8">
        <h2 className="text-3xl font-bold">LET'S CONNECT!</h2>
        <p className="mt-4 text-lg text-gray-700">
          Feel free to connect with me on social media or drop me a message if you
          want to discuss projects, technology, or just chat about the latest trends in
          the tech world!
        </p>
      </section>
    </div>
  );
};

export default About;
