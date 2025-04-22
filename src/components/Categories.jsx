import sofa1 from "../assets/sofa 1.jpg";
import sofa2 from "../assets/sofa 2.jpg";
import sofa3 from "../assets/sofa 3.jpg";
import chair2 from "../assets/chair 2.jpg";

const Categories = () => {
  const rightImages = [sofa3, sofa1, chair2];
  const leftImage = sofa2;

  return (
    <div className="w-full h-full bg-white">
      {/* Header */}
      <div className="flex flex-col mt-16 px-4 sm:px-8 md:px-16 lg:px-20 text-center">
        <p className="text-sm sm:text-base text-[#474747] leading-7">
          passion for fashion
        </p>
        <p className="text-3xl sm:text-4xl text-[#2b2b2b] font-semibold leading-tight mt-4">
          Shop By Categories
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 sm:px-8 md:px-16 lg:px-32 py-14">
        {/* Left Image */}
        <div className="lg:col-span-2 relative">
          <img
            src={leftImage}
            alt="left chair"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded-full shadow">
            chairs
          </div>
        </div>

        {/* Right Images */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Top Right Image */}
          <div className="relative">
            <img
              src={rightImages[0]}
              alt="chair 1"
              className="w-full h-[250px] sm:h-[300px] md:h-[330px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded-full shadow">
              chairs
            </div>
          </div>

          {/* Bottom Two Right Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rightImages.slice(1, 3).map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`chair ${index + 2}`}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white text-black font-semibold px-4 py-2 rounded-full shadow">
                  chairs2
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
