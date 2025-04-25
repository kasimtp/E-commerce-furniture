import table from "../assets/table.jpg";
import sofa1 from "../assets/sofa 1.jpg";
import chair1 from "../assets/chair 1.jpg";
const Popular = () => {
  const Images = [sofa1, table, chair1];
  return (
    <div>
      <div className=" flex flex-col place-content-center gap-12 mt-28 items-center m-auto">
        <div>
          {" "}
          <p className="text-[15px] uppercase  ">Trending now</p>
        </div>
        <div>
          <p className="font-Poppins  font-semibold capitalize text-5xl">
            Popular This Week
          </p>
        </div>
      </div>

      {/* --------photo section-------------- */}
      <div className="grid grid-cols-4 mt-24 px-6 gap-8 w-[90%]  m-auto items-center">
        <div className="flex flex-col gap-8 bg-amber-200 ">
          <div>
            <img src={table} alt=""  />
          </div>
          <div className="flex flex-col">
            <div>
              <p>Swing (Copy)</p>
            </div>
            <div>
              {" "}
              <p>Swing (Copy)</p>
            </div>
            <div>
              {" "}
              <p>Swing (Copy)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 ">
          <div>
            <img src={chair1} alt="" />
          </div>
          <div className="flex flex-col">
            <div>
              <p>Swing (Copy)</p>
            </div>
            <div>
              {" "}
              <p>Swing (Copy)</p>
            </div>
            <div>
              {" "}
              <p>Swing (Copy)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 ">
          <div>
            <img src={sofa1} alt="" />
          </div>
          <div className="flex flex-col">
            <div>
              <p>Swing (Copy)</p>
            </div>
            <div>
              {" "}
              <p>Swing (Copy)</p>
            </div>
            <div>
              {" "}
              <p>Swing (Copy)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 ">
          <div>
            <img src={table} alt="" />
          </div>
          <div className="flex flex-col">
            <div>
              <p>Swing (Copy)</p>
            </div>
            <div>
              {" "}
              <p>Swing (Copy)</p>
            </div>
            <div>
              {" "}
              <p>Swing (Copy)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
