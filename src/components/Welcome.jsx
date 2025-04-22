
import chair2 from '../assets/chair 2.jpg'
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";

const Welcome = () => {


  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className=''>
            <p className='text-sm leading-3.5 font- text-[#65acc4]'>History since 1996</p>
          </div>

          <div>
            <p className='text-[50px] leading-16 text-[#2f2f2f] font-Outfit'>History since 1996 Welcome to <span className='font-bold font-Ephesis'> Furniture Store</span> </p>
          </div>

          <div>
            <p className='text-sm leading-6 text-[#474747]  '>
              Duis eget velit sodales, tristique dui, malesuada erat. Phasellus
              neque augue. Nullam convallis tincidunt tincidunt. Maecenas a
              libero aliquam, sollicitudin lectus vel, ultrices lacus.
            </p>
          </div>

          <div>
            <p className='text-sm leading-6 text-[#474747] ' >
              Cras tempor maximus, in vehicula leo malesuada. Curabitur dapibus
              blandit interdum. Nunc nisi risus, fermentum vitae ex, convallis
              lobortis dolor. In tristique.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 max-w-4xl mx-auto">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-400 text-3xl">
              <HiOutlineLightBulb  className='text-[#65acc4]'/>
              </div>
              <div>
                <h3 className="font-bold text-[16px] leading-6 text-[#000000] font-Ephesis">Creative & Unique</h3>
                <p className="text-[#474747] text-sm leading-7 font-Poppins">Great from Jewelry</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-400 text-3xl">
              <FaShippingFast className='text-[#65acc4]' />
              </div>
              <div>
                <h3 className="font-bold text-[16px] leading-6 text-[#000000]">Free Shipping</h3>
                <p className="text-[#474747] text-sm leading-7">All order over $99</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="text-[#474747] text-sm leading-7">
              <BiSupport  className='text-[#65acc4]'/>
              </div>
              <div>
                <h3 className="font-bold text-[16px] leading-6 text-[#000000]">Support Customer</h3>
                <p className="text-[#474747] text-sm leading-7">Support 24/7</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-400 text-3xl">
              <MdOutlinePayment  className='text-[#65acc4]'/>
              </div>
              <div>
                <h3 className="font-bold text-[16px] leading-6 text-[#000000] ">Secure Payment</h3>
                <p className="text-[#474747] text-sm leading-7">100% secure payment</p>
              </div>
            </div>
          </div>
        </div>


        {/* -----------------right side------------ */}
        <div>
          <img src={chair2} alt="" />
        </div>

        
      </div>
    </div>
  );
};

export default Welcome;
