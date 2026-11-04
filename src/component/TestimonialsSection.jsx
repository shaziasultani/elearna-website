import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.',
    name: 'Linda Grady',
    role: 'Co-assistant manager',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis.',
    name: 'Jim Adams',
    role: 'Designer',
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1)

  const currentTestimonial = testimonials[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    )
  }

  const showNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <section className="w-full overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[90px]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto flex max-w-[1200px] flex-col items-center text-center"
      >

        {/* Original Elearna Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-5 flex h-[105px] items-center justify-center sm:mb-7 sm:h-[125px]"
        >
          <img
            src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cff274c1ce9bc0b1d47e56_Quote%20Icons.svg"
            alt=""
            aria-hidden="true"
            className="h-[105px] w-[155px] object-contain sm:h-[125px] sm:w-[185px]"
          />
        </motion.div>

        {/* Testimonial Content */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              {/* Testimonial Text */}
              <p className="max-w-[1050px] text-[19px] font-medium leading-[1.55] tracking-[-0.2px] text-[#183238] sm:text-[21px] lg:text-[22px]">
                "{currentTestimonial.quote}"
              </p>

              {/* Customer Name */}
              <h3 className="mt-10 text-[20px] font-medium text-[#183238] sm:mt-11 sm:text-[22px]">
                {currentTestimonial.name}
              </h3>

              {/* Customer Role */}
              <p className="mt-2 text-[14px] uppercase tracking-[0.02em] text-[#888888]">
                {currentTestimonial.role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Previous and Next Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 flex items-center justify-center gap-3 sm:mt-8"
        >
          <motion.button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#a3adaf] text-[#899597]"
          >
            <ArrowLeft size={20} strokeWidth={1.3} />
          </motion.button>

          <motion.button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#a3adaf] text-[#899597]"
          >
            <ArrowRight size={20} strokeWidth={1.3} />
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  )
}