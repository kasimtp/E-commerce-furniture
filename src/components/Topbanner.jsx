import React from "react";
import topbanner from "../assets/hedsetbannernew.png";

const Topbanner = () => {
  return (
    <div className="w-full pb-5 md:pb-0 lg:pb-5">
      <img
        src={topbanner}
        alt="Top Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Topbanner;
