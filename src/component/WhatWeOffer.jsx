import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const features = [
  'Skill-based instruction',
  'Analytics and insights',
  'Global certification',
  'Customizable courses',
]

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function WhatWeOffer() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

        {/* LEFT SIDE — IMAGES */}
        <div className="relative mx-auto w-full max-w-[560px] pb-10 sm:pb-12">

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.025 }}
            className="ml-auto h-[300px] w-[78%] overflow-hidden rounded-md shadow-xl sm:h-[390px] lg:h-[410px]"
          >
            <img
              src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8b45a3029806674bb6_Woman%20Image%20Holding%20Copy-p-500.webp"
              alt="Student studying and taking notes"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Floating Statistics Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="absolute left-10 top-12 z-20 flex items-center gap-3 rounded-md bg-[#10282c] px-2 py-2 text-white shadow-2xl sm:left-10 sm:top-8 sm:gap-4 sm:px-4 sm:py-4"
          >
            <span className="text-4xl font-bold tracking-tight text-[#ffb900] sm:text-5xl">
              50+
            </span>

            <div className="text-sm font-medium leading-5 sm:text-base">
              <p>✨ Free courses</p>
              <p>listed online</p>
            </div>
          </motion.div>

          {/* Overlapping Bottom Image */}
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.035 }}
            className="absolute bottom-0 left-0 z-10 h-[220px] w-[66%] overflow-hidden rounded-md shadow-2xl sm:h-[300px] lg:h-[310px]"
          >
            <img
              src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bbdff100351a1e011_Man%20Image%20Holding%20Graph-p-500.webp"
              alt="Student learning online with a laptop"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="pt-4 lg:pt-0"
        >

          {/* Small Heading */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-[#10282c]">
            What We Offer
          </p>

          {/* Main Heading */}
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#10282c] sm:text-4xl lg:text-[42px]">
            Personalized learning for your ambitions
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-gray-500">
            Discover a better way to learn with personalized courses designed
            to help you develop new skills, achieve your goals, and move
            confidently toward your future.
          </p>

          {/* Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
          >
            {features.map((feature) => (
              <motion.div
                key={feature}
                variants={featureVariants}
                className="flex items-center gap-2 text-[15px] font-medium text-[#10282c]"
              >
                <span>•</span>
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Get Started Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mt-10 flex flex-col gap-6 rounded-md bg-[#eff7f9] p-6 sm:p-8 md:flex-row md:items-center md:justify-between"
          >
            <div className="max-w-xs">
              <h3 className="text-lg font-semibold text-[#10282c]">
                Still have questions?
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Have questions about our courses? We're here to help you find
                the right learning path.
              </p>
            </div>

            <motion.a
              href="#courses"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#10282c] px-7 py-3 text-sm font-semibold text-white"
            >
              Get Started
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}