import { motion } from 'framer-motion'

export default function CareerHero() {
  return (
    <section className="relative flex min-h-[550px] w-full items-center overflow-hidden bg-[#142322] sm:min-h-[600px] lg:min-h-[552px]">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/668cb7adec02e140422345de/66e11aafe5ff2115c3d5d36c_Pricing%20One%20Hero.webp')",
        }}
      />

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0 bg-black"
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 pb-10 pt-20 sm:px-8 lg:px-10 lg:pt-24">

        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mb-5 text-[14px] font-semibold uppercase text-white sm:text-[15px]"
        >
          We are hiring
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
          className="max-w-[650px] text-[38px] font-semibold leading-[1.12] tracking-[-1.2px] text-white sm:text-[48px] lg:text-[58px]"
        >
          Begin your journey as an instructor
        </motion.h1>

      </div>
    </section>
  )
}