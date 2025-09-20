// Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We’d love to hear from you! If you have any questions, feedback, or support requests, feel free to reach out:
      </p>

      <ul className="mb-4">
        <li><strong>Email:</strong> support@bitlinks.com</li>
        <li><strong>Phone:</strong> +1 (123) 456-7890</li>
        <li><strong>Address:</strong> 123 BitLinks Street, Tech City, Country</li>
      </ul>

      <p className="mb-2">Follow us on social media:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Twitter: @BitLinksOfficial</li>
        <li>Facebook: facebook.com/BitLinks</li>
        <li>Instagram: @BitLinks</li>
      </ul>

      <p>
        Or simply fill out the contact form below, and we’ll get back to you as soon as possible.
      </p>
    </div>
  );
};

export default Contact;
