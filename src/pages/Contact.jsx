import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 font-Poppins  gap-98 px-4 py-16 max-w-7xl mx-auto">
      {/* Contact Info */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">Contact Info.</h2>
        <p className="text-gray-600 mb-10 text-[18px]">
          Some information that you may want to know
        </p>

        <div className="flex items-start gap-4 mb-8">
          <Phone className="text-orange-500 w-6 h-6 mt-1" />
          <div>
            <p className="text-[16px] font-bold text-gray-600 uppercase">Phone Number</p>
            <p className="text-lg">+1 342 5860 282</p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-8">
          <MapPin className="text-orange-500 w-6 h-6 mt-1" />
          <div>
            <p className="text-[16px] font-bold text-gray-600 uppercase">Address</p>
            <p className="text-lg">168 Park Avenue</p>
            <p className="text-[16px] text-gray-600">
              Greenwich Village, NYC 1001 United State
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-orange-500 w-6 h-6 mt-1" />
          <div>
            <p className="text-[16px] font-bold text-gray-600 uppercase">Email</p>
            <p className="text-lg">hello@woostify.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">Leave Your Message</h2>
        <p className="text-gray-600 mb-6">
          Feel free to contact with us by using the form below
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded w-full"
            />
          </div>
          <textarea
            placeholder="Message"
            className="border border-gray-300 p-3 rounded w-full h-48 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-800 transition duration-300"
          >
            SEND US
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
