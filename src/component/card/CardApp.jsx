import { useState } from "react"; 
import { motion } from "framer-motion";

const cards = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=5",
    "https://picsum.photos/200/300?random=6",
    "https://picsum.photos/200/300?random=7",
    "https://picsum.photos/200/300?random=8",
    "https://picsum.photos/200/300?random=9",
    "https://picsum.photos/200/300?random=10"
];

const ContentCarousel = () => { 
    const [activeIndex, setActiveIndex] = useState(4);  
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      };
    
    const prevSlide = () => {
    setActiveIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    };

    const handleClick = (index) => {
    setActiveIndex(index);
    };
    return (
        <div className="container mt-5 mx-auto w-full lg:w-3/4 flex justify-center item-center">
            <div className="relative w-[40%] h-full bg-slate-900 rounded-lg text-ellipsis text-white px-0 py-6 shadow h-80">
                <p className="font-semibold text-2xl italic mb-5">PT Pandurasa Kharisma</p> 
                <p className="font-sans text-justify">is one of leading importer & distributor of consumer goods specialized in Indonesian markets. Since 1992 we are serving institutional & retail sectors,with leading local and global brands to elevate their market positions in Indonesia for the long-run. We are composed by a team of professional located throughout region,creating a combined network that allows us to serve as a penetrating platform for companies interested in developing their brand/products in our region. </p>
            </div>
            <div className="relative flex overflow-hidden gap-4 px-12 py-6 justify-center w-[50%]  h-96 max-w-2xl">
                {cards.map((image, i) => {
                    let position = (i - activeIndex + cards.length) % cards.length;
                    if (position > cards.length / 2) position -= cards.length;
          
                    const translateX = position * 80;
                    const scale = position === 0 ? 1 : position === -1 || position === 1 ? 0.8 : 0.6;
                    const zIndex = 10 - Math.abs(position);
                    const opacity = Math.abs(position) > 2 ? 0 : 1;
          
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity, scale, x: translateX }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-52 h-80 border border-slate-200 rounded-lg shadow-md bg-cover bg-center cursor-pointer"
                        style={{
                          backgroundImage: `url(${image})`,
                          zIndex,
                        }}
                        drag="x"
                        dragConstraints={{ left: -1000, right: 1000 }} // Bebasin drag
                        onDragEnd={(event, info) => {
                          if (info.velocity.x < -20) nextSlide(); // Swipe ke kanan
                          if (info.velocity.x > 20) prevSlide(); // Swipe ke kiri
                        }}
                        onClick={() => handleClick(i)}
                      >
                        <div className={`w-full ${activeIndex === i ? '' : 'bg-white/40'} rounded m-auto backdrop h-full relative flex justify-center`}>
                            <span className="font-sans font-bold mt-5 text-sky-400">APP {i}</span>
                        </div>
                      </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContentCarousel;
