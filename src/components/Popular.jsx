import table from "../assets/table.jpg";
import sofa1 from "../assets/sofa 1.jpg";
import chair1 from "../assets/chair 1.jpg";

const Popular = () => {
  const images = [table, chair1, sofa1, table];
  const titles = ["Chair Black", "Swing (Copy)", "Swing", "Sofa Mini"];
  
  // New extra text (⭐⭐⭐⭐⭐) for 1st and 4th photo
  const extraTexts = ["⭐⭐⭐⭐⭐", "", "", "⭐⭐⭐⭐⭐"];

  return (
    <div>
      <div className="flex flex-col place-content-center gap-12 mt-28 items-center m-auto">
        <p className="text-[15px] uppercase">Trending now</p>
        <p className="font-Poppins font-semibold capitalize text-5xl">
          Popular This Week
        </p>
      </div>

      {/* --------photo section-------------- */}
      <div className="grid grid-cols-4 mt-24 px-6 gap-8 w-[90%] m-auto items-center">
        <div className="flex flex-col gap-4 p-4 rounded-lg">
          <div>
            <img
              src={images[0]}
              alt="popular-0"
              className="h-[350px] w-full object-cover rounded-md"
            />
          </div>

          {/* Text section */}
          <div className="h-28 overflow-hidden relative group cursor-pointer flex flex-col items-center">
            <p className="text-lg font-semibold text-center mb-2">{titles[0]}</p>
            {extraTexts[0] && (
              <p className="text-[18px] font-medium text-center mt-2 text-yellow-500">
                {extraTexts[0]}
              </p>
            )}
            <div className="relative h-8">
            <div className="flex flex-row gap-2">
              <div>vbkj</div>
              <div>vdv</div>
            </div>
              <p className="text-lg font-semibold text-center absolute top-0 left-0 right-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                Shipping
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 rounded-lg">
          <div>
            <img
              src={images[1]}
              alt="popular-1"
              className="h-[350px] w-full object-cover rounded-md"
            />
          </div>

          {/* Text section */}
          <div className="h-28 overflow-hidden relative group cursor-pointer flex flex-col items-center">
            <p className="text-lg font-semibold text-center mb-2">{titles[1]}</p>
            {extraTexts[1] && (
              <p className="text-[18px] font-medium text-center mt-2 text-yellow-500">
                {extraTexts[1]}
              </p>
            )}
            <div className="relative h-8">
              <p className="text-lg font-semibold text-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
                Relax C
              </p>
              <p className="text-lg font-semibold text-center absolute top-0 left-0 right-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                Shipping
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 rounded-lg">
          <div>
            <img
              src={images[2]}
              alt="popular-2"
              className="h-[350px] w-full object-cover rounded-md"
            />
          </div>

          {/* Text section */}
          <div className="h-28 overflow-hidden relative group cursor-pointer flex flex-col items-center">
            <p className="text-lg font-semibold text-center mb-2">{titles[2]}</p>
            {extraTexts[2] && (
              <p className="text-[18px] font-medium text-center mt-2 text-yellow-500">
                {extraTexts[2]}
              </p>
            )}
            <div className="relative h-8">
              <p className="text-lg font-semibold text-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
                Relax Chair
              </p>
              <p className="text-lg font-semibold text-center absolute top-0 left-0 right-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                Shipping
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 rounded-lg">
          <div>
            <img
              src={images[3]}
              alt="popular-3"
              className="h-[350px] w-full object-cover rounded-md"
            />
          </div>

          {/* Text section */}
          <div className="h-28 overflow-hidden relative group cursor-pointer flex flex-col items-center">
            <p className="text-lg font-semibold text-center mb-2">{titles[3]}</p>
            {extraTexts[3] && (
              <p className="text-[18px] font-medium text-center mt-2 text-yellow-500">
                {extraTexts[3]}
              </p>
            )}
            <div className="relative h-8">
              <p className="text-lg font-semibold text-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2">
                Relax Chair
              </p>
              <p className="text-lg font-semibold text-center absolute top-0 left-0 right-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                Shipping
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
