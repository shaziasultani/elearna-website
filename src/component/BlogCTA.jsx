
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-[#102629]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/668cb7adec02e140422345de/66d97d5ab0f5c99538183a86_Office%20Image.webp')",
        }}
        role="img"
        aria-label="Office environment"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

      {/* CTA Content */}
      <div className="relative z-10 mx-auto flex min-h-[300px] max-w-[1200px] flex-col items-center justify-center gap-8 px-6 py-14 sm:min-h-[320px] sm:flex-row sm:justify-between sm:gap-10 sm:px-10 lg:min-h-[350px] lg:px-12">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[400px] text-center text-[28px] font-semibold leading-[1.2] text-white sm:text-left sm:text-[30px] lg:text-[34px]"
        >
          Are you ready to start
          <br />
          your journey?
        </motion.h2>

        {/* Buttons Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-wrap items-center justify-center gap-4 lg:gap-5"
        >
          {/* Browse Courses */}
          <Link
            to="/course-one"
            className="inline-flex min-h-[52px] min-w-[160px] transform items-center justify-center border border-white px-7 py-3 text-[14px] font-medium text-white transition-transform duration-300 ease-in-out hover:scale-95"
          >
            Browse Courses
          </Link>

          {/* Become An Instructor */}
          <Link
            to="/career"
            className="inline-flex min-h-[52px] min-w-[200px] transform items-center justify-center border border-[#ffb900] bg-[#ffb900] px-7 py-3 text-[14px] font-medium text-[#172222] transition-transform duration-300 ease-in-out hover:scale-95"
          >
            Become An Instructor
          </Link>
        </motion.div>
      </div>
    </section>
  )
}