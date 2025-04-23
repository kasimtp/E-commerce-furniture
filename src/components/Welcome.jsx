import chair2 from '../assets/chair 2.jpg';
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";

const Welcome = () => {
  return (
    <div className=" lg:block">
      <div className="flex flex-row gap-6 px-28 pt-38">
        {/* Left Content */}
        <div className="flex flex-col w-1/2 space-y-14">
          <p className="text-[19px] md:text-[12px] leading-3.5 text-[#65acc4] font-Outfit">
            History since 1996
          </p>

          <p className="text-[70px] leading-16 text-[#2f2f2f] font-Outfit font-thin">
            Welcome to <span className="font-semibold">Furniture Store</span>
          </p>

          <p className="text-[20px] font-Outfit leading-6 text-[#474747] text-justify w-[80%]">
            Duis eget velit sodales, tristique dui, malesuada erat. Phasellus
            neque augue. Nullam convallis tincidunt tincidunt. Maecenas a
            libero aliquam, sollicitudin lectus vel, ultrices lacus.
          </p>

          <p className="text-[20px] text-justify leading-6 text-[#474747] font-Outfit w-[80%]">
            Cras tempor maximus, in vehicula leo malesuada. Curabitur dapibus
            blandit interdum. Nunc nisi risus, fermentum vitae ex, convallis
            lobortis dolor. In tristique.
          </p>

          <div className="grid xl:grid-cols-2 grid-cols-4   lg:gap-16 gap-44  px-2 max-w-4xl">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <HiOutlineLightBulb className="text-2xl xl:text-5xl text-[#65acc4]" />
              <div>
                <h3 className="font-semibold text-lg font-Poppins leading-6 text-black">
                  Creative & Unique
                </h3>
                <p className="text-[#474747] text-[15px] leading-7 font-Poppins">
                  Great from Jewelry
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex  gap-4">
              <FaShippingFast className="text-5xl text-[#65acc4]" />
              <div>
                <h3 className="font-semibold font-Poppins text-lg leading-6 text-black">
                  Free Shipping
                </h3>
                <p className="text-[#474747] text-[15px] leading-7 font-Poppins">
                  All order over $99
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <BiSupport className="text-5xl text-[#65acc4]" />
              <div>
                <h3 className="font-semibold text-lg font-Poppins leading-6 text-black">
                  Support Customer
                </h3>
                <p className="text-[#474747] text-[15px] leading-7 font-Poppins">
                  Support 24/7
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <MdOutlinePayment className="text-5xl text-[#65acc4]" />
              <div>
                <h3 className="font-semibold font-Poppins text-[16px] leading-6 text-black">
                  Secure Payment
                </h3>
                <p className="text-[#474747] text-[15px] leading-7 font-Poppins">
                  100% secure payment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2">
          <img
            className="  lg:block lg:mt-6    w-[700px] h-[650px] object-cover"
            src={chair2}
            alt="Chair"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
