import { motion } from 'framer-motion'

export default function PricingHero() {
  return (
    <section className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden bg-[#102629] sm:min-h-[340px] lg:min-h-[450px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/668cb7adec02e140422345de/66e11aafe5ff2115c3d5d36c_Pricing%20One%20Hero.webp')",
          backgroundPosition: 'center 40%',
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#102629]/50" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center px-5 py-12 text-center sm:px-8 sm:py-14 lg:py-16">

        {/* Small Heading */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-4 text-[14px] font-semibold uppercase tracking-[0.02em] text-white"
        >
          Pricing
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[700px] text-[34px] font-semibold leading-[1.12] tracking-[-0.035em] text-white sm:text-[42px] lg:text-[52px]"
        >
          Flexible pricing plan for
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          every one
        </motion.h1>

      </div>
    </section>
  )
}