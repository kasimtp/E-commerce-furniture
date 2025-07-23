// import React, { useContext } from "react";
// import bg from "../assets/watchbanner.jpg";
// import { useNavigate } from "react-router";
// import { AppContext } from "../context/AppContext";

// const Header = () => {
//   const navigate = useNavigate();
//   const { logout } = useContext(AppContext); // ✅ use logout function

//   return (
//     <div className="mt-0 font-Poppins">
//       <div
//         // className="h-[500px] md:h-[590px] bg-fixed bg-cover bg-center px-4 md:px-10 relative"
//         // style={{ backgroundImage: `url(${bg})` }}
        
//       >
//         <img className="w-auto h-" src={bg} alt="" /> 
//         <p className="absolute top-20 left-4 md:left-10 text-sm font-medium text-[#474747] uppercase tracking-wide">
//           We’re proud to introduce
//         </p>

//         <div className="h-full flex flex-col justify-center items-start text-left max-w-2xl mx-auto md:mx-0">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#ffdd00] uppercase mt-24 md:mt-0">
//             The Furniture
//             <br />
//             <span className="text-white">That Defines You</span>
//           </h1>

//           <p className="text-sm sm:text-base text-[#2b2b2b] mt-4 max-w-md">
//             Your comfort and aesthetic design suitable for you is before
//             anything else
//           </p>

//           <button className="mt-6 bg-[#0047ff] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#0035c5] transition duration-300">
//             Shop Now
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



// import shoesbanner  from "../assets/shoesbanner.jpg"
// import hedsetbanner from "../assets/hedsetbanner.jpg"
// import airpodbanner from  "../assets/airpodbenner.jpg"
// import bg from "../assets/watchbanner.jpg";
// import { useNavigate } from "react-router";
// import { AppContext } from "../context/AppContext.jsx";

// const Header = () => {
//   const navigate = useNavigate();
 

//   return (
//     <div className="relative font-Poppins w-full">
//       {/* Responsive Background Image */}
//       <img
//         src={bg}
//         alt="Flash Sale"
//         onClick={navigate("/shop")}
//         className="w-[900px] h-[120px] sm:h-[350px] md:h-[480px] lg:h-[400px] lg:w-full "
//       />

//        <img
//         src={shoesbanner}
//         alt="Flash Sale"
//         onClick={navigate("/shop")}
//         className="w-[900px] h-[120px] sm:h-[350px] md:h-[480px] lg:h-[400px] lg:w-full "
//       />

//  <img
//         src={hedsetbanner}
//         alt="Flash Sale"
//         onClick={navigate("/shop")}
//         className="w-[900px] h-[120px] sm:h-[350px] md:h-[480px] lg:h-[400px] lg:w-full "
//       />

//        <img
//         src={airpodbanner}
//         alt="Flash Sale"
//         onClick={navigate("/shop")}
//         className="w-[900px] h-[120px] sm:h-[350px] md:h-[480px] lg:h-[400px] lg:w-full "
//       />
//       {/* Text Content Overlaid */}
    
//     </div>
//   );
// };

// export default Header;






// import React, { useEffect, useState } from "react";
// import shoesbanner from "../assets/shoesbanner.jpg";
// import hedsetbanner from "../assets/hedsetbanner.jpg";
// import airpodbanner from "../assets/airpodbenner.jpg";
// import bg from "../assets/watchbanner.jpg";
// import { useNavigate } from "react-router";

// const Header = () => {
//   const navigate = useNavigate();

//   // Array of banners
//   const banners = [bg, shoesbanner, hedsetbanner, airpodbanner];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === banners.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [banners.length]);

//   return (
//     <div className="relative w-full font-Poppins overflow-hidden">
//       {/* Image Carousel */}
//       <img
//         src={banners[currentIndex]}
//         alt="Flash Sale Banner"
//         onClick={() => navigate("/shop")}
//         className="w-full h-[120px] sm:h-[350px] md:h-[480px] lg:h-[400px] object-cover rounded transition-all duration-700 ease-in-out"
//       />
//     </div>
//   );
// };

// export default Header;





// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import shoesbanner from "../assets/shoesbanner.jpg";
// import hedsetbanner from "../assets/hedsetbanner.jpg";
// import airpodbanner from "../assets/airpodbenner.jpg";
// import bg from "../assets/watchbanner.jpg";
// import { useNavigate } from "react-router";

// const Header = () => {
//   const navigate = useNavigate();
//   const banners = [bg, shoesbanner, hedsetbanner, airpodbanner];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1); // 1: right to left, -1: left to right

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1); // or -1 to reverse direction
//       setCurrentIndex((prev) => (prev + 1) % banners.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [banners.length]);

//   // Animation variants
//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <div
//      className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
//       <AnimatePresence custom={direction}>
//         <motion.img
//           key={currentIndex}
//           src={banners[currentIndex]}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 0.8 }}
//           className="absolute w-[300px] h-[200px] sm:h-[350px] md:h-[400px] lg:w-full  object-cover cursor-pointer"
//           onClick={() => navigate("/shop")}
//         />
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Header;





// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import shoesbanner from "../assets/shoesbanner.jpg";
// import hedsetbanner from "../assets/hedsetbanner.jpg";
// import airpodbanner from "../assets/airpodbenner.jpg";
// import bg from "../assets/watchbanner.jpg";
// import { useNavigate } from "react-router";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // or use icons from react-icons

// const Header = () => {
//   const navigate = useNavigate();
//   const banners = [bg, shoesbanner, hedsetbanner, airpodbanner];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [isPaused, setIsPaused] = useState(false);
//   const timeoutRef = useRef(null);

//   // Auto Slide
//   useEffect(() => {
//     if (isPaused) return;

//     timeoutRef.current = setInterval(() => {
//       handleNext();
//     }, 3000);

//     return () => clearInterval(timeoutRef.current);
//   }, [currentIndex, isPaused]);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % banners.length);
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) =>
//       prev === 0 ? banners.length - 1 : prev - 1
//     );
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <div
//       className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <AnimatePresence custom={direction}>
//         <motion.img
//           key={currentIndex}
//           src={banners[currentIndex]}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 0.8 }}
//           className="absolute w-full h-full object-cover cursor-pointer"
//           onClick={() => navigate("/shop")}
//         />
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-2 transform -translate-y-1/2     hover:bg-opacity-100 transition z-10"
//       >
//         <ChevronLeft size={26} className="text-amber-500" />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100 transition z-10"
//       >
//         <ChevronRight size={24} />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
//         {banners.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full cursor-pointer transition ${
//               index === currentIndex ? "bg-white" : "bg-gray-400"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;









import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Banner Images
import shoesbanner from "../assets/shoesbanner.jpg";
import hedsetbanner from "../assets/hedsetbanner.jpg";
import airpodbanner from "../assets/airpodbenner.jpg";
import watchbanner from "../assets/watchbanner.jpg";

const banners = [watchbanner, shoesbanner, hedsetbanner, airpodbanner];

const Header = () => {
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
      className="relative w-full h-[240px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden"
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
     <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
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
</div>

    </div>
  );
};

export default Header;
  





// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Banner Images
// import shoesbanner from "../assets/shoesbanner.jpg";
// import hedsetbanner from "../assets/hedsetbanner.jpg";
// import airpodbanner from "../assets/airpodbenner.jpg";
// import watchbanner from "../assets/watchbanner.jpg";

// const banners = [watchbanner, shoesbanner, hedsetbanner, airpodbanner];

// const Header = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentIndex, isPaused]);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % banners.length);
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) =>
//       prev === 0 ? banners.length - 1 : prev - 1
//     );
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <div
//       className="relative w-full h-[240px] -pt-4 sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <AnimatePresence custom={direction}>
//         <motion.img
//           key={currentIndex}
//           src={banners[currentIndex]}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 0.5 }}
//           className="absolute w-full h-full object-cover object-center cursor-pointer"
//           onClick={() => window.location.href = "/shop"}
//         />
//       </AnimatePresence>

//       {/* Optional Dots inside banner */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {banners.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => {
//               setDirection(i > currentIndex ? 1 : -1);
//               setCurrentIndex(i);
//             }}
//             className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//               i === currentIndex ? "bg-black" : "bg-gray-300"
//             } cursor-pointer`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;
