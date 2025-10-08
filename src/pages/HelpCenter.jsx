import React from "react";

const HelpCenter = () => {
  // Get current date
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
          Help Center
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Last updated: {today}
        </p>

        {/* Welcome Section */}
        <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
          Welcome to the <strong>Flipkert Help Center</strong>. Here you can find
          answers to common questions, browse guides, and get assistance for
          using our products and services.
        </p>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Q:</strong> How do I create an account?
              <br />
              <strong>A:</strong> Click “Sign Up” on the homepage, fill in your
              details, and verify your email.
            </li>
            <li>
              <strong>Q:</strong> What payment methods are accepted?
              <br />
              <strong>A:</strong> We accept all major credit/debit cards,
              UPI, and online wallets.
            </li>
            <li>
              <strong>Q:</strong> How can I track my order?
              <br />
              <strong>A:</strong> Go to your account dashboard and click
              “Orders” to see real-time updates.
            </li>
          </ul>
        </section>

        {/* Guides Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Guides & Tutorials
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base list-disc pl-5">
            <li>How to place an order step by step</li>
            <li>How to apply discount coupons</li>
            <li>Return & refund process explained</li>
          </ul>
        </section>

        {/* Support Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Contact Support
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
            If you can’t find an answer in the FAQs or guides, reach out to us:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:flipkert@gmail.com"
                className="text-[#4CB19A] font-medium hover:underline"
              >
                flipkert@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> 9745235226
            </li>
            <li>
              <strong>Office:</strong> Malappuram, Pookkottor, 676517
            </li>
          </ul>
        </section>

        <p className="text-xs sm:text-sm text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} Flipkert. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default HelpCenter;
