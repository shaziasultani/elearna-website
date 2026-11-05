import { motion } from 'framer-motion'

export default function FinanceHero() {
  const animation = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 sm:py-[100px] md:py-[120px] text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/6710bb33ef51448b568bfb5a_Course%20Image-3-2.webp')`,
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5">

        {/* Category */}
        <motion.span
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 sm:mb-[15px] inline-block text-xs sm:text-sm font-semibold uppercase tracking-[1.5px]"
        >
          FINANCE
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-5 max-w-[800px] text-3xl font-bold leading-[1.2] sm:text-4xl md:text-5xl"
        >
          Understanding corporate finance and investments
        </motion.h1>

        {/* Rating and Lessons */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-2.5"
        >
          <div className="text-base sm:text-lg tracking-wide text-[#ffb800]">
            ★★★★★
          </div>

          <span className="text-sm sm:text-base font-medium">
            10 Lessons
          </span>
        </motion.div>

      </div>
    </section>
  )
}
