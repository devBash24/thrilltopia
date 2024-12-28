"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import promotionItems from "@/lib/promotionItems";

const Promotions = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Special Offers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover our amazing deals and save on your next adventure!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-14"
          >
            {promotionItems.map((promo) => (
              <SwiperSlide key={promo.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={promo.image}
                      alt={promo.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold">
                      {promo.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {promo.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {promo.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Valid until{" "}
                        {new Date(promo.validUntil).toLocaleDateString()}
                      </span>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Additional Promotion Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            🎉 Use code <span className="font-bold text-primary">FUNTIME</span>{" "}
            for an extra 5% off!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            *Terms and conditions apply. Offers cannot be combined with other
            promotions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Promotions;
