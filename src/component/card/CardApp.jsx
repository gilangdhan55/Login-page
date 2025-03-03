import { useState } from "react";

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

const ContentCard = () => { 
    
    const [activeIndex, setActiveIndex] = useState(4); // Card tengah aktif di awal

    return (
        <div className="container mt-10 mx-auto w-full lg:w-3/4 relative">
            <div className="relative flex justify-center items-center group">
                {cards.map((url, i) => {
                    const isActive   = i === activeIndex;
                    const distance   = Math.abs(i - activeIndex);
                    const translateX = (i - activeIndex) * 50;
                    const scale      = 1 - distance * 0.1;
                    const zIndex     = 10 - distance;
                    const opacity    = isActive ? 1 : 0.7;

                    return (
                        <div
                          key={i}
                          className={`transition-all duration-500 cursor-pointer w-40 h-64 border border-slate-200 rounded-lg shadow-md overflow-hidden hover:scale-105 
                              ${!isActive ? "group-hover:blur-sm" : "group-hover:blur-none"}`}
                          style={{
                              transform: `translateX(${translateX}px) scale(${scale})`,
                              zIndex: zIndex,
                              opacity: opacity,
                              backgroundImage: `url(${url})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center"
                          }}
                            onClick={() => setActiveIndex(i)}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContentCard;
