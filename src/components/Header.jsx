




import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import shoesbanner from "../assets/shoesnew.png"
import airpodbanner from "../assets/airpodnew.png"
import showebanner from "../assets/shoesnew.png"
import hedsetbanner from "../assets/hedsetbannernew.png"
import shoespanner from "../assets/shoes2.png"
import powerbankpanner from "../assets/powerbank.png"


const banners = [airpodbanner,powerbankpanner, shoespanner ,shoesbanner,hedsetbanner, showebanner];

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
      className=" w-full relative -mt-16 lg:mt-0 md:-mt-0  lg:max-w-[4900px] lg:h-[1610px]  bg-amber-000 h-[240px] sm:h-[300px] md:h-[400px]  loverflow-hidden"
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

export default Header;
  



