import React from "react";

const GeneralFAQs = () => {
  // Get current date
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Example FAQ data
  const faqs = [
    {
      question: "How do I create a Flipkert account?",
      answer:
        "Click on 'Sign Up' on the homepage, fill in your details, and verify your email to create an account.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit/debit cards, UPI, and online wallets.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Go to your account dashboard and click 'Orders' to see real-time updates.",
    },
    {
      question: "What is the return & refund policy?",
      answer:
        "You can request a return within 7 days of delivery. Refunds are processed according to our Return & Refund Policy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
          General FAQs
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Last updated: {today}
        </p>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-300 bg-gray-50"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs sm:text-sm text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} Flipkert. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default GeneralFAQs;
