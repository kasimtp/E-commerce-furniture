import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Support</h1>
        <p className="text-gray-500 mb-8">
          Need help? Our team is here to assist you with any questions or issues.
        </p>

        {/* Contact Methods */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex items-start space-x-4">
            <div className="bg-[#4CB19A]/10 p-3 rounded-xl">
              <Mail className="text-[#4CB19A]" size={24} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Email Support</h2>
              <p className="text-sm text-gray-600">
                Write to us anytime at <br />
                <a
                  href="mailto:flipkert@gmail.com"
                  className="text-[#4CB19A] font-medium hover:underline"
                >
                  flipkert@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#4CB19A]/10 p-3 rounded-xl">
              <Phone className="text-[#4CB19A]" size={24} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Phone Support</h2>
              <p className="text-sm text-gray-600">
                Call us directly at <br />
                <span className="text-[#4CB19A] font-medium">9745235226</span>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#4CB19A]/10 p-3 rounded-xl">
              <MapPin className="text-[#4CB19A]" size={24} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Office Address</h2>
              <p className="text-sm text-gray-600">
                Flipkert, Pookkottor <br />
                Malappuram, Kerala 676517
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#4CB19A]/10 p-3 rounded-xl">
              <MessageSquare className="text-[#4CB19A]" size={24} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Live Chat</h2>
              <p className="text-sm text-gray-600">
                Chat with our support team 9AM – 8PM (Mon–Sat)
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Send us a message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4CB19A]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4CB19A]"
              required
            />
            <textarea
              placeholder="How can we help you?"
              className="w-full border rounded-lg p-3 h-28 focus:outline-none focus:ring-2 focus:ring-[#4CB19A]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#4CB19A] hover:bg-[#3a8c7f] text-white font-semibold py-3 rounded-lg transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        <p className="text-xs text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} Flipkert. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Support;
