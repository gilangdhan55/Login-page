import { useState } from "react";

const ContentCard = () => {
    const cards = Array.from({ length: 5 }); // Buat array isi 5 elemen kosong
    const [activeIndex, setActiveIndex] = useState(2); // Card tengah aktif di awal

    return (
        <div className="container mt-10 mx-auto w-full lg:w-3/4 relative">
            <div className="relative flex justify-center items-center">
                {cards.map((_, i) => {
                    const isActive = i === activeIndex;
                    const distance = Math.abs(i - activeIndex); // Jarak dari card aktif
                    const translateX = (i - activeIndex) * 50; // Geser posisi horizontal
                    const scale = 1 - distance * 0.1; // Card lebih kecil jika jauh dari aktif
                    const zIndex = 10 - distance; // Card lebih dekat ke depan jika aktif
                    const opacity = isActive ? 1 : 0.7; // Card samping lebih transparan

                    return (
                        <div
                            key={i}
                            className={`transition-all duration-500 cursor-pointer w-40 h-64 border border-slate-200 rounded-lg shadow-md bg-[url('https://picsum.photos/200/300')] bg-cover bg-center  ${!isActive ? 'blur' : ''}`}
                            style={{
                                transform: `translateX(${translateX}px) scale(${scale})`,
                                zIndex: zIndex,
                                opacity: opacity,
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
