import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function YellowCTA() {
  return (
    <section className="relative z-20 mx-5 mb-[-70px] sm:mx-8 lg:mx-auto lg:max-w-[1190px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-xl bg-[#ffb900] px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
      >
        <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
          <div className="max-w-xl">
            <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl">
              Are you ready to start your journey?
            </h2>

            <p className="text-sm leading-6 text-black/80">
              Take the next step toward your future. Explore our courses and
              learn from experienced instructors.
            </p>
          </div>

       
<div className="flex shrink-0 flex-col gap-2 sm:flex-row">
  <Link
    to="/course-one"
    className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 ease-in-out hover:scale-105"
  >
    Browse Courses
  </Link>

  <Link
    to="/career"
    className="rounded-full border border-black px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 ease-in-out hover:scale-105"
  >
    Become An Instructor
  </Link>
</div>

        </div>
      </motion.div>
    </section>
  )
}