import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

  
const ContentCard = () => {
    
 const cards = Array.from({ length: 10 }); // Buat array isi 5 elemen kosong
  return (
    <div className="flex justify-center mt-10 min-h-screen dark:bg-slate-900">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={2} // Jarak antar gambar
        slidesPerView={2} // Default: 2 gambar per slide
    //    spaceBetween={2} // Jarak antar gambar
    //    slidesPerView={6} // Default: 2 gambar per slide
       
        className="w-full max-w-7xl" >
        {cards.map((url, i) => (
          <SwiperSlide key={i}>
            <div className={`ml-3 mr-3 min-w-20 min-h-96 px-2 py-2 relative`}>
                <div className={`bg-slate-900 dark:bg-slate-300 min-w-20 min-h-96 rounded-md shadow flex flex-col p-3 relative`}>
                    <div className="flex mb-3 items-center gap-2">
                        <img className="rounded-full w-10" src="./public/images/logopk.png" alt="logo-app" />
                        <h2 className="text-2xl font-bold">Card {i + 1}</h2>
                    </div>
                    <div className="absolute min-w-80 bg-slate-900 min-h-40 right-0 top-16 rounded-bl-full">

                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores at non recusandae vero repudiandae eos aliquid, repellat pariatur qui architecto modi fuga perferendis reprehenderit nemo corrupti veniam facere amet eaque sunt excepturi. Minus saepe minima assumenda repellendus unde explicabo molestias dolor vero veritatis enim modi laudantium reprehenderit autem quibusdam, deserunt fuga. Sapiente aliquam fuga consequatur facilis eaque distinctio expedita, officia rem libero iure quas at beatae ullam cumque soluta officiis, magnam dolor exercitationem. Eaque, perferendis itaque recusandae quis omnis possimus. Vero eligendi autem eius dignissimos eaque, soluta laboriosam porro dolore, saepe quasi tempora voluptas ipsam odio perferendis placeat, sapiente nihil!</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentCard;
