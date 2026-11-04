import React from 'react'
import { motion } from 'framer-motion'
import {
  PencilRuler,
  HandCoins,
  Megaphone,
  CodeXml,
  Type,
  Plus,
  Mic,
  Video,
  Phone,
} from 'lucide-react'

const categories = [
  { title: 'Creative web design', courses: 8, icon: PencilRuler },
  { title: 'Finance accounting', courses: 10, icon: HandCoins },
  { title: 'IT and software', courses: 5, icon: PencilRuler },
  { title: 'Digital marketing', courses: 4, icon: Megaphone },
  { title: 'Web development', courses: 8, icon: CodeXml },
  { title: 'Content writing', courses: 3, icon: Type },
]

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function TopCategories() {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-10">

      {/* Top Categories Heading */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-10 text-center"
      >
        <p className="mb-5 text-sm font-medium uppercase text-[#142e32]">
          Top Categories
        </p>

        <h1 className="mx-auto max-w-xl text-3xl font-semibold leading-tight text-[#142e32] sm:text-4xl">
          Discover leading categories to elevate your journey
        </h1>
      </motion.div>

      {/* Category Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-[30px]"
      >
        {categories.map((category, index) => {
          const Icon = category.icon

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.045, y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex min-h-[215px] flex-col items-center justify-center border border-gray-200 bg-white px-3 py-5 text-center transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#eff6f8]">
                <Icon
                  size={34}
                  strokeWidth={1}
                  className="text-[#142e32]"
                />
              </div>

              <h2 className="mb-2 max-w-[140px] text-[17px] font-semibold leading-6 text-[#142e32]">
                {category.title}
              </h2>

              <p className="text-base text-gray-500">
                {category.courses} Courses
              </p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Promotional Cards */}
      <div className="mt-[90px] grid grid-cols-1 gap-8 lg:grid-cols-2">

        {/* Popular Courses Card */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex min-h-[288px] items-center overflow-hidden rounded-md bg-[#eff6f8]"
        >
          <div className="relative z-10 w-full px-7 py-10 sm:w-[55%] sm:px-[30px]">
            <h2 className="mb-8 max-w-[260px] text-2xl font-semibold leading-8 text-[#142e32]">
              Quick access to the popular courses
            </h2>

            <motion.a
              href="#courses"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center justify-center rounded bg-[#ffb800] px-11 py-4 text-base font-medium text-[#142e32]"
            >
              View Courses
            </motion.a>
          </div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-y-0 right-0 hidden w-[58%] sm:block"
          >
            <img
              src="https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e363f6e47ec5245cf09_Course%20Small%20Image-7.webp"
              alt="Student learning online"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* Apply Now Video Card */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex min-h-[288px] flex-col items-center justify-between gap-8 rounded-md bg-[#f1f1e9] p-7 sm:flex-row sm:p-[30px]"
        >
          <div className="flex-shrink-0">
            <h2 className="mb-8 max-w-[220px] text-2xl font-semibold leading-8 text-[#142e32]">
              Develop your skills online!
            </h2>

            <motion.a
              href="#apply"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center justify-center rounded bg-[#10282c] px-11 py-4 text-base font-medium text-white"
            >
              Apply Now
            </motion.a>
          </div>

          {/* Video */}
          <div className="relative w-full overflow-hidden rounded-xl sm:w-[55%]">
            <video
              className="aspect-[4/3] w-full object-cover"
              src="https://cdn.prod.website-files.com/668cb7adec02e140422345de%2F66c86567624ca9dec83f55cc_Home%20One%20Video-transcode.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Video Call Controls */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {[
                {
                  label: 'Add',
                  Icon: Plus,
                  className: 'bg-green-500 text-white',
                  size: 19,
                },
                {
                  label: 'Microphone',
                  Icon: Mic,
                  className: 'bg-white text-gray-600',
                  size: 17,
                },
                {
                  label: 'Video',
                  Icon: Video,
                  className: 'bg-white text-gray-600',
                  size: 17,
                },
                {
                  label: 'Call',
                  Icon: Phone,
                  className: 'bg-rose-600 text-white',
                  size: 17,
                },
              ].map(({ label, Icon, className, size }) => (
                <motion.button
                  key={label}
                  type="button"
                  aria-label={label}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full shadow ${className}`}
                >
                  <Icon size={size} />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}