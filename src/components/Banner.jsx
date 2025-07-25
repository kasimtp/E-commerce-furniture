// import React from 'react';
// import bannerbg from  "../assets/bg.jpg";
// import { FaFacebookF, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa";
// import { GoGlobe } from "react-icons/go";
// import title_bannerv55 from "../assets/title_bannerv55.png";

// const Banner = () => {
//   return (
//     <div className="mt-0">
//       <div
//         className="h-[400px] sm:h-[500px] md:h-[590px] bg-fixed bg-cover bg-center px-4 md:px-10 relative"
//         style={{ backgroundImage: `url(${bannerbg})` }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-60"></div>

//         {/* Content */}
//         <div className="relative h-full flex flex-col justify-center items-center text-center gap-8 sm:gap-10 md:gap-12">
//           {/* Title Image */}
//           <img 
//             src={title_bannerv55} 
//             alt="Title Banner" 
//             className="w-40 sm:w-52 md:w-60"
//           />

//           {/* Follow Us Text */}
//           <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
//             FOLLOW US
//           </p>

//           {/* Social Icons */}
//           <div className="flex space-x-8 sm:space-x-12 md:space-x-16 text-3xl sm:text-4xl md:text-5xl text-neutral-400 hover:cursor-pointer">
//             {[FaFacebookF, FaTwitter, FaBehance, FaInstagram, GoGlobe].map((Icon, index) => (
//               <div key={index} className="hover:text-white transition duration-300">
//                 <Icon />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;








import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Banner Images
import shoesbanner from "../assets/shoesbanner.jpg";
import hedsetbanner from "../assets/hedsetbanner.jpg";
import airpodbanner from "../assets/airpodbenner.jpg";
import watchbanner from "../assets/watchbanner.jpg";



const banners = [watchbanner, shoesbanner, hedsetbanner, airpodbanner];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // change every 3 sec
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full  -mt-10 lg:mt-12  h-[240px] sm:h-[300px] md:h-[400px] lg:h-[665px] loverflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence custom={direction}>
        <motion.img
          key={currentIndex}
          src={banners[currentIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full object-contain object-center cursor-pointer"
          onClick={() => window.location.href = "/shop"}
        />
      </AnimatePresence>

      {/* Optional Dots */}
     {/* <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
  {banners.map((_, i) => (
    <div
      key={i}
      onClick={() => {
        setDirection(i > currentIndex ? 1 : -1);
        setCurrentIndex(i);
      }}
      className={`w-3 h-3 rounded-full ${
        i === currentIndex ? "bg-black" : "bg-gray-300"
      } cursor-pointer`}
    />
  ))}
</div> */}

    </div>
  );
};

export default Banner;