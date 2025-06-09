// File: src/components/TestimonialCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Emma Liu",
      role: "Content Strategist",
      avatar: "/images/avatar-emma.webp",
      quote:
        "“DreamShield changed how I work—no more midday grogginess. I sleep uninterrupted!”",
    },
    {
      name: "Dr. Raymond Gottschalk",
      role: "Sleep Clinic Director",
      avatar: "/images/avatar-raymond.webp",
      quote:
        "“Our patients report 50% fewer awakenings. The data integration is invaluable for therapy.”",
    },
    // …more testimonials if you like…
  ];

  return (
    <div className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What Early Users Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-light dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <img
                  src={item.avatar}
                  alt={`${item.name} avatar`}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white dark:text-gray">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {item.role}
              </p>
              <p className="italic text-white-700 dark:text-gray-300 mb-6">
                {item.quote}
              </p>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.369 2.45a1 1 0 00-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.538 1.118l-3.369-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.049 9.383c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.951-.69l1.285-3.956z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {item.name.split(" ")[0]}, {item.role.split(" ").pop()}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
