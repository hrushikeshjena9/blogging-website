"use client";

import Blogs from "../db";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider = () => {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                effect="fade"
                className="w-full"
            > 
                {Blogs.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[500px]">
                            <motion.img
                                src={item.image}
                                alt={item.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                whileHover={{ scale: 1.05 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <span className="text-sm uppercase tracking-wide text-blue-400">
                                    {item.category}
                                </span>
                                <h2 className="text-xl sm:text-3xl font-bold">{item.title}</h2>
                                <p className="text-sm">{item.date} • {item.views}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="absolute bottom-4 right-4 z-10 flex space-x-3">
                <div className=" cursor-pointer !static !w-10 !h-10 bg-gray-100/50 text-black rounded-full flex items-center justify-center hover:bg-gray-200/80">
                    ❮
                </div>
                <div className=" cursor-pointer !static !w-10 !h-10 bg-gray-100/50 text-black rounded-full flex items-center justify-center hover:bg-gray-200/80">
                    ❯
                </div>
            </div>

            {/* Sidebar List of Blog Posts */}
            <div className="sm:block hidden absolute top-1/2 transform -translate-y-1/2 right-10 w-[250px] space-y-4 z-10">
                {Blogs.slice(0, 3).map((item) => (
                    <motion.div
                        key={item.id}
                        className="flex items-center space-x-3   text-white p-2 "
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={item.image} alt={item.title} className="w-16 h-16 rounded-sm object-cover" />
                        <div className="text-xs ">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p>{item.date} • {item.views}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
