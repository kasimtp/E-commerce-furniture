import table from "../assets/table.jpg";
import sofa1 from "../assets/sofa 1.jpg";
import chair1 from "../assets/chair 1.jpg";

const Popular = () => {
  const images = [table, chair1, sofa1, table];

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
        {images.map((imgSrc, index) => (
          <div key={index} className="flex flex-col gap-4 p-4 rounded-lg">
            <div>
              <img
                src={imgSrc}
                alt={`popular-${index}`}
                className="h-[350px] w-full object-cover rounded-md"
              />
            </div>

            {/* Only text hover/touch animation */}
            <div className="h-10 overflow-hidden relative group cursor-pointer">
            <p className="text-lg font-semibold text-center">title</p>
              <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-10">
                <p className="text-lg font-semibold text-center">Relax Chair</p>
                <p className="text-lg font-semibold text-center">Shipping</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
