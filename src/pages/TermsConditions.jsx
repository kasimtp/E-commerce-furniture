import React from "react";

const TermsConditions = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {today}</p>

        <p className="text-gray-700 mb-6">
          Welcome to <strong>Flipkert!</strong> By using{" "}
          <strong>flipkert.com</strong>, you agree to the following Terms &
          Conditions. Please read them carefully before using our website or
          purchasing our products.
        </p>

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              1. Account & Eligibility
            </h2>
            <p className="text-gray-700 text-sm">
              You must be at least 18 years old to use Flipkert. You are
              responsible for maintaining your account and password security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              2. Orders & Payments
            </h2>
            <p className="text-gray-700 text-sm">
              Product prices may change without notice. Payments are processed
              securely through trusted third-party gateways. Ensure all payment
              details are accurate before confirming your order.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              3. Shipping & Returns
            </h2>
            <p className="text-gray-700 text-sm">
              Delivery timelines depend on your location. Please refer to our{" "}
              <span className="text-[#4CB19A] font-medium">
                Shipping & Return Policy
              </span>{" "}
              for complete details.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 text-sm">
              All site content, including logos, text, and designs, are owned by
              Flipkert. Reproduction or misuse without permission is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700 text-sm">
              Flipkert is not liable for any indirect or incidental damages.
              Maximum liability is limited to the amount paid for the product.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">6. Contact</h2>
            <p className="text-gray-700 text-sm">
              Have questions? Reach us at:
              <br />
              <strong>Email:</strong> flipkert@gmail.com
              <br />
              <strong>Phone:</strong> 9745235226
              <br />
              <strong>Address:</strong> Malappuram, Pookkottor, 676517
            </p>
          </div>
        </section>

        <p className="text-xs text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} Flipkert. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
