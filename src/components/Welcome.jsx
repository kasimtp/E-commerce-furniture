import chair2 from "../assets/bg.jpg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { RiLuggageCartLine } from "react-icons/ri";
import shipping from "../assets/free-shipping.png";
import support from "../assets/support.png";
import money from "../assets/money-back.png";
const Welcome = () => {
  return (
    <div className="w-full">
      <div className="flex xl:flex-row flex-col  gap-6 lg:px-28 px-6 pt-24">
        {/* Left Content */}
        <div className="flex flex-col xl:w-1/2 space-y-6 md:space-y-10 lg:space-y-14">
          <p className=" text-[14px] font-semibold lg:text-[16px] xl:text-[18px]  leading-3.5 text-[#65acc4] font-Outfit">
            History since 1996
          </p>

          <p className="text-4xl sm:text-5xl md:text-6xl xl:text-[70px] text-[#2f2f2f] font-thin capitalize">
            Welcome to <span className="font-semibold">Furniture Store</span>
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[#474747] font-medium font-Outfit xl:w-4/5">
            Duis eget velit sodales, tristique dui, malesuada erat. Phasellus
            neque augue. Nullam convallis tincidunt tincidunt. Maecenas a libero
            aliquam, sollicitudin lectus vel, ultrices lacus.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[#474747] font-medium font-Outfit xl:w-4/5">
            Cras tempor maximus, in vehicula leo malesuada. Curabitur dapibus
            blandit interdum. Nunc nisi risus, fermentum vitae ex, convallis
            lobortis dolor. In tristique.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-12 px-2">
            {/* Feature 1 */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <HiOutlineLightBulb className="text-[40px] sm:text-[50px] text-[#65acc4]" />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-lg font-Poppins text-black">
                  Creative & Unique
                </h3>
                <p className="text-sm text-[#474747] font-Poppins">
                  Great from Jewelry
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <FaShippingFast className="text-[40px] sm:text-[50px] text-[#65acc4]" />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-lg font-Poppins text-black">
                  Free Shipping
                </h3>
                <p className="text-sm text-[#474747] font-Poppins">
                  All orders over $99
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <BiSupport className="text-[40px] sm:text-[50px] text-[#65acc4]" />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-lg font-Poppins text-black">
                  Support Customer
                </h3>
                <p className="text-sm text-[#474747] font-Poppins">
                  Support 24/7
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <MdOutlinePayment className="text-[40px] sm:text-[50px] text-[#65acc4]" />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-lg font-Poppins text-black">
                  Secure Payment
                </h3>
                <p className="text-sm text-[#474747] font-Poppins">
                  100% secure payment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="xl:w-1/2 m-auto">
          <img
            className="  lg:block lg:mt-6   w-[750px] h-[600px] xl:w-[700px] xl:h-[650px] object-cover"
            src={chair2}
            alt="Chair"
          />
        </div>
      </div>

      {/* .................bottom side.............. */}

      <div className="bg-[#f8f8f8] py-10 px-20 mt-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        <div className="flex sm:flex-row flex-col gap-6 items-center">
          <img src={shipping} alt="" />
          <div className="flex flex-col gap-2">
            <p className="font-Poppins font-medium text-center sm:text-left text-[17px]">
              Free Shipping
            </p>
            <p className="font-Poppins font-medium text-[15px]">
              On all orders over $200
            </p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-6 items-center">
          <img src={support} alt="" />
          <div className="flex flex-col gap-2">
            <p className="font-Poppins font-medium text-[17px]">
              Dedicated Support
            </p>
            <p className="font-Poppins font-medium text-[15px]">
              Quick response 24/7
            </p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-6 items-center">
          <img src={money} alt="" />
          <div className="flex flex-col gap-2">
            <p className="font-Poppins font-medium text-[17px]">
              Money-Back Guarantee
            </p>
            <p className="font-Poppins font-medium text-center sm:text-left  text-[15px]">
              Worry-free shopping
            </p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-6 items-center">
          <img src={shipping} alt="" />
          <div className="flex flex-col gap-2">
            <p className="font-Poppins font-medium text-[17px]">
              Money-Back Guarantee
            </p>
            <p className="font-Poppins text-center sm:text-left  font-medium text-[15px]">
              Worry-free shoppin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
