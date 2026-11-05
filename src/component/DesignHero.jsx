
import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function DesignHero() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-[#172426] px-5 py-24 sm:px-8 md:min-h-[650px] lg:px-10">

      {/* Background Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=2000&q=85"
        alt="Graphic design and creative workspace"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
        }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto w-full max-w-[1300px]"
      >

        {/* Rating Above Title */}
        <motion.p
          variants={itemVariants}
          className="mb-7 text-sm font-medium text-white/75 md:text-base"
        >
          5.00 (1.2K)
        </motion.p>

        {/* Course Title */}
        <motion.h1
          variants={itemVariants}
          className="mb-9 max-w-[850px] text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]"
        >
          Advanced photoshop techniques for designers
        </motion.h1>

        {/* Stars and Rating */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3"
        >
          <div
            className="flex items-center gap-0.5 text-xl text-[#ffb900] sm:text-2xl"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>

          <span className="text-base font-medium text-white/75 md:text-lg">
            5.00 (1.2K)
          </span>
        </motion.div>

      </motion.div>
    </section>
  )
}
