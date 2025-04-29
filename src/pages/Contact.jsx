import { Mail, MapPin, Phone } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="font-Poppins">
      {/* Full-Width Map */}
      <div className="w-full h-[400px] md:h-[600px] lg:h-[840px]">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4255583635564!2d-74.0006196845934!3d40.73354697932908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25990cd1620c9%3A0x5f4b9ef6f3342b91!2sGreenwich%20Village%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680215998733!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Content Section */}
      <div className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Contact Info.</h2>
            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              Some information that you may want to know
            </p>

            <div className="flex items-start gap-4 mb-6">
              <Phone className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <p className="text-sm font-bold text-gray-600 uppercase">Phone Number</p>
                <p className="text-base sm:text-lg">+1 342 5860 282</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <p className="text-sm font-bold text-gray-600 uppercase">Address</p>
                <p className="text-base sm:text-lg">168 Park Avenue</p>
                <p className="text-sm text-gray-600">
                  Greenwich Village, NYC 1001 United State
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-orange-500 w-6 h-6 mt-1" />
              <div>
                <p className="text-sm font-bold text-gray-600 uppercase">Email</p>
                <p className="text-base sm:text-lg">hello@woostify.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Leave Your Message</h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Feel free to contact with us by using the form below
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 p-3 rounded w-full text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-3 rounded w-full text-sm sm:text-base"
                />
              </div>
              <textarea
                placeholder="Message"
                className="border border-gray-300 p-3 rounded w-full h-40 sm:h-48 resize-none text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-800 transition duration-300 text-sm sm:text-base"
              >
                SEND US
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
