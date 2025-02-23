import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselData = [
  { id: 1, title: "Film 1", img: "https://placehold.co/400x600" },
  { id: 2, title: "Film 2", img: "https://placehold.co/400x600" },
  { id: 3, title: "Film 3", img: "https://placehold.co/400x600" },
];

const ContentCard = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={carouselData[current].id}
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={carouselData[current].img}
            alt={carouselData[current].title}
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default ContentCard;
