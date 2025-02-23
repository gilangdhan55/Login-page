import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
];

const ContentCard = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Card tengah aktif di awal
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  const handleClick = (index) => {
    setActiveIndex(index); // Klik langsung ubah ke active
  };

  return (
    <div className="container mt-10 w-full lg:w-3/4 flex items-center  relative  mx-auto">
      <div className="relative w-[50%] h-full bg-slate-800 rounded-lg text-ellipsis text-white px-4 py-5 shadow-lg">
         <p className="font-semibold text-2xl italic">PT Pandurasa Kharisma</p> 
         <p className="font-sans text-justify">is one of leading importer & distributor of consumer goods specialized in Indonesian markets. Since 1992 we are serving institutional & retail sectors,with leading local and global brands to elevate their market positions in Indonesia for the long-run. We are composed by a team of professional located throughout region,creating a combined network that allows us to serve as a penetrating platform for companies interested in developing their brand/products in our region. </p>
      </div>
      <div className="relative flex justify-center items-center w-[50%] h-[400px] overflow-hidden 0">
        {cards.map((image, i) => {
          const distance = Math.abs(i - activeIndex);
          const translateX = (i - activeIndex) * 50;
          const scale = 1 - distance * 0.1;
          const zIndex = 10 - distance;
          const opacity = distance > 2 ? 0.3 : 1;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity, scale, x: translateX }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x < -50) nextSlide(); // Geser ke kanan
                if (info.offset.x > 50) prevSlide(); // Geser ke kiri
              }}
              className="absolute w-40 h-64 border border-slate-200 rounded-lg shadow-md bg-cover bg-center cursor-pointer"
              style={{
                backgroundImage: `url(${image})`,
                zIndex,
              }}
              onClick={() => handleClick(i)} // Klik ubah ke active
            ></motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentCard;
