import sofa1 from "../assets/sofa 1.jpg";
import sofa2 from "../assets/sofa 2.jpg";
import sofa3 from "../assets/sofa 3.jpg";
import chair2 from "../assets/chair 2.jpg";

const Categories = () => {
  const rightImages = [sofa3, sofa1, chair2];
  const leftImage = sofa2;

  return (
    <div className="w-full h-full flex flex-col sm:space-y-14 mt-12 font-Poppins space-y-4  bg-white">
      {/* Header */}
      <div className="flex flex-col  space-y-12 px-4 sm:px-8 md:px-16 lg:px-20 text-center sm:mr-16 ">
        <p className="text-sm  font-semibold  capitalize sm:text-base  text-[#474747] leading-7">
          passion for fashion
        </p>
        <p className="text-2xl sm:text-4xl    space-y-16 text-[#2b2b2b] font-semibold leading-tight ">
          Shop By Categories
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-8 md:px-16 lg:px-32 pb-10 w-[98%]">
        {/* Left Image */}
        <div className="lg:w-2/4 bg-amber-200 h-full  flex items-center">
          <div className="relative w-full">
            <img
              src={leftImage}
              alt="Category - Chairs"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded-full shadow">
              Chairs
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="lg:w-3/5 flex flex-col gap-6">
          {/* Top Right */}
          <div className="relative w-full">
            <img
              src={rightImages[0]}
              alt="Category - Sofa 3"
              className="w-full h-[250px] sm:h-[300px] md:h-[230px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded-full shadow">
              Sofas
            </div>
          </div>

          {/* Bottom Two */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rightImages.slice(1).map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`Category - Image ${index + 2}`}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded-full shadow">
                  Category {index + 2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
