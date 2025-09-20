// About.jsx
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About BitLinks</h1>
      <p className="mb-4">
        Welcome to <strong>BitLinks</strong>! BitLinks is your fast, secure, and easy-to-use URL shortening service.
        We help you turn long, cumbersome links into short, memorable URLs that are perfect for sharing across
        social media, emails, and messages.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Why Choose BitLinks?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Simple & Quick:</strong> Generate short URLs in just a few clicks.</li>
        <li><strong>Track Your Links:</strong> Keep track of clicks and engagement with our analytics.</li>
        <li><strong>Custom Short URLs:</strong> Personalize your links to match your brand or style.</li>
        <li><strong>Secure & Reliable:</strong> We ensure your links are safe and always accessible.</li>
      </ul>

      <p>
        Our mission is to make link sharing smarter, simpler, and more efficient for everyone—from individuals to businesses.
      </p>
    </div>
  );
};

export default About;
