import React from "react";

const Documentation = () => {
  // Get current date
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
          Documentation
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Last updated: {today}
        </p>

        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
          Welcome to <strong>Flipkert Documentation</strong>. Here you will find all
          the resources, guides, and information related to our e-commerce
          services, products, and features.
        </p>

        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-6 mb-2">
          Getting Started
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
          To start using Flipkert, create an account and browse our products.
          Refer to our tutorials and FAQs for detailed instructions.
        </p>

        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-6 mb-2">
          FAQs
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
          Check our FAQ section to quickly find answers to common questions about
          ordering, payments, shipping, and returns.
        </p>

        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-6 mb-2">
          Support
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
          If you need assistance, please visit our{" "}
          <span className="text-[#4CB19A] font-medium">Support Page</span> or contact
          us at <strong>flipkert@gmail.com</strong>.
        </p>

        <p className="text-xs sm:text-sm text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} Flipkert. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Documentation;
