import React from "react";
import { motion } from "framer-motion";

export default function BecomeInstructor() {
  return (
    <section className="overflow-hidden bg-white px-6 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content Column (Aligned to the right side of this column) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-right flex flex-col items-center lg:items-end"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#10282b] sm:text-5xl lg:text-[48px] leading-tight">
            Become an instructor
          </h2>

          <p className="mb-8 max-w-[580px] text-[16px] md:text-[17px] leading-[30px] text-[#858585]">
            Lorem ipsum dolor sit amet consectetur. Sed ultricies fames
            scelerisque urna quis semper amet. Nisl tincidunt tortor
            nullam est nec commodo orci dictum in. Lorem consectetur
            donec purus sagittis.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center rounded-xl bg-[#10282b] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#1a3f44] transition-colors"
          >
            Start teaching today
          </motion.a>
        </motion.div>

        {/* Right Image Column (Stays completely in its original position) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto flex w-full max-w-[520px] items-center justify-center"
        >
          {/* Yellow Background Circle */}
          <div className="absolute right-0 top-1/2 aspect-square w-[88%] -translate-y-1/2 rounded-full bg-[#ffb900]" />

          {/* Dark Decorative Shape */}
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 z-10 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M330 65 C390 55 390 110 430 115 C475 120 470 160 430 190 C380 230 360 270 310 330 C270 380 220 430 150 400 C80 370 65 310 100 250 C130 200 190 170 235 125 C270 90 290 70 330 65Z"
              fill="#10282b"
            />
            <path
              d="M180 340 C240 260 300 200 390 150 C420 135 450 155 420 185 C350 250 280 330 210 390 C180 415 155 375 180 340Z"
              fill="#10282b"
            />
          </svg>

          {/* Main Instructor Image */}
          <img
            src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66d98189c5a2b384d11ea977_Girl%20With%20Logo-p-500.webp"
            alt="Become an instructor"
            className="relative z-20 h-[420px] w-full object-contain object-bottom sm:h-[500px]"
          />

          {/* Floating Review Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66d98188f6fc5249944bae7c_Review%20Popup.webp"
            alt="Student reviews and rating"
            className="absolute left-[-5%] top-[25%] z-30 w-[220px] sm:left-[-8%] sm:w-[240px] shadow-lg rounded-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
