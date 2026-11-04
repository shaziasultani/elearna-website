import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Jim Adams',
    role: 'Designer',
    image:
      'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cd64ef67641295ddd2ffc9_Testimonial%20Author%20Image-2-p-500.avif',
    quote:
      'Learning through this platform helped me improve my creative skills and build confidence. The courses were easy to follow, practical, and useful for my professional development.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Web Developer',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85',
    quote:
      'The flexible courses made learning much easier for me. I developed new technical skills at my own pace and gained the confidence to pursue new career opportunities.',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeTestimonial = testimonials[activeIndex]

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    )
  }

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-[#10282c] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 25% 20%, rgba(62, 105, 108, 0.45), transparent 45%),
            radial-gradient(ellipse at 80% 80%, rgba(44, 83, 86, 0.35), transparent 50%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading and Statistics */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-200">
              Our Testimonials
            </p>

            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Trusted by our successful students
            </h2>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6 pb-1 sm:gap-10"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                70M
              </h3>

              <div className="h-10 w-px shrink-0 bg-white/30" />

              <p className="text-xs uppercase leading-6 tracking-wide text-white/50 sm:text-sm">
                Successful
                <br />
                Students
              </p>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                25K
              </h3>

              <div className="h-10 w-px shrink-0 bg-white/30" />

              <p className="text-xs uppercase leading-6 tracking-wide text-white/50 sm:text-sm">
                Global Job
                <br />
                Placements
              </p>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Content */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:mt-7 lg:grid-cols-2 lg:gap-16">
          {/* Student Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[320px] overflow-hidden rounded-md sm:h-[400px] lg:h-[400px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTestimonial.image}
                src={activeTestimonial.image}
                alt={activeTestimonial.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </AnimatePresence>

            {/* Subtle image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Testimonial Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTestimonial.quote}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-base leading-8 text-white/55 sm:text-lg sm:leading-8"
                >
                  “{activeTestimonial.quote}”
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Student Name */}
            <div className="mt-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {activeTestimonial.name}
                  </h3>

                  <p className="mt-1 text-sm uppercase tracking-wide text-white/45">
                    {activeTestimonial.role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center gap-3">
              <motion.button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-[#10282c]"
              >
                <ArrowLeft size={19} strokeWidth={1.5} />
              </motion.button>

              <motion.button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-[#10282c]"
              >
                <ArrowRight size={19} strokeWidth={1.5} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}