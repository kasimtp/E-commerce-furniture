import React from "react";

const Press = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Example press data
  const pressArticles = [
    {
      title: "Flipkert launches new eco-friendly product line",
      date: "05 October 2025",
      description:
        "Our new eco-friendly furniture line has been featured in Green Living Magazine for sustainable design.",
      link: "#",
    },
    {
      title: "Flipkert recognized as top e-commerce startup",
      date: "22 September 2025",
      description:
        "Flipkert has been recognized as one of the fastest-growing e-commerce startups in India by Startup Daily.",
      link: "#",
    },
    {
      title: "Interview with Flipkert CEO on online shopping trends",
      date: "10 August 2025",
      description:
        "The CEO of Flipkert discusses emerging trends in online furniture shopping and digital marketing.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-md">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Press</h1>
        <p className="text-gray-500 mb-6">Last updated: {today}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressArticles.map((article, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm mb-3">{article.date}</p>
              <p className="text-gray-700 mb-3">{article.description}</p>
              <a
                href={article.link}
                className="text-[#4CB19A] font-medium hover:underline transition"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-10 text-sm sm:text-base text-center">
          © {new Date().getFullYear()} Flipkert. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Press;
