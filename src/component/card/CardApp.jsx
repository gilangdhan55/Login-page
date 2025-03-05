 import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/autoplay";
import Section from "../motion-page/Section";   

const cardApp = [
    'ACTION PLAN', 'PKVISIT', 'ANP', 'WMS', 'PR PO', 'POS HO', 'TELEMARKETING', 'PKVISIT ADMIN', 'TELEMARKETING', 'PKVISIT ADMIN'
];

const linkApp = [
    '/action-plan', '/pkvisit', '/anp', '/wms', '/prpo', '/posho', '/telemarketing', '/pkvisit-admin', '/telemarketing', '/pkvisit-admin'
];
  
const CardListApp = () => { 
 const cards = Array.from({ length: 10 }); // Buat array isi 5 elemen kosong
  return (
    <Section id="application" className="flex justify-center pt-20 mt-10 h-screen dark:bg-slate-900 container mx-auto snap-start">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={2} // Jarak antar gambar
        slidesPerView={1} // Default: 2 gambar per slide 
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        loop={true} 
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 2,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 2,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 2,
            }
        }}
        className="w-full max-w-7xl" >
        {cards.map((url, i) => (
          <SwiperSlide key={i}

          >
            <div className={`ml-3 mr-3 min-w-20 min-h-20 px-2 py-2 relative`}> 
                <div className={`shadow-lg bg-slate-200 dark:bg-white/10 min-w-20 min-h-20 overflow-hidden rounded-md flex flex-col p-3 relative`}> 
                    <div className="flex mb-3 items-center gap-2 absolute top-5 w-full z-10">
                        <img className="rounded-full w-10 " src="/images/logopk.png" alt="logo-app"/>
                        <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-300">{cardApp[i]}</h2>
                    </div> 
                    <div className="content-card-platform relative text-slate-500 dark:text-slate-300 text-2xl font-semibold flex flex-col gap-2 mt-10">
                        <img src="/images/floating-computer.webp" className="w-[250px] mx-auto" alt="logo" />
                        <div className="flex flex-col h-30 p-2 relative">
                            <div className="w-full text-lg/normal">
                                Aplikasi ini dibuat menggunakan framework React dan Tailwind CSS
                            </div>
                            <div className="w-full h-full  text-right"> 
                                <Link className="py-2 px-2  text-center rounded-full hover:text-black font-bold  w-[140px] text-slate-400 leading-loose text-sm focus:ring focus:ring-sky-400 underline  " to={`../${linkApp[i]}`}>See more</Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

const ContentCard = () => {
  return ( 
       <div className="snap-mandatory snap-y overflow-y-scroll h-screen content-landing"> 
        <Section id="home" className="pt-32 h-screen flex flex-col gap-2 container  min-h-20 mt-10 mx-auto text-4xl font-bold  dark:text-slate-900 snap-start">  
            <div className="max-w-3xl mx-auto text-center p-8 uppercase">
                <h1 className="text-2xl md:text-5xl leading-snug font-bold text-gray-900 dark:text-white mb-4">
                    More than 20 years in <br /><span className="text-red-600">food </span> & <span className="text-slate-600"> beverages</span> <br /> distribution 
                </h1>
                <p className="text-gray-900 dark:text-white text-sm sm:text-xl leading-snug font-normal">
                    Starting from food service sectors since 1992, PT Pandurasa Kharisma continue to expand into retails.With line of products ranging from 45 international brands such as USA, Canada,Switzerland, France, Germany, Denmark,New Zealand, Australia, Singapore & Malaysia.
                </p>
            </div>

        </Section>
       <CardListApp /> 
       </div>
    );
};

export default ContentCard;
