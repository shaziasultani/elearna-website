import { motion } from 'framer-motion'

export default function EventsHero() {
  return (
    <section className="relative flex min-h-[585px] items-center overflow-hidden bg-[#17252b]">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/668cb7adec02e140422345de/66e3d9b9b8346ed0ecee24a5_Events%20Banner.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-5 sm:px-8 lg:px-[30px]">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        >
          <span className="mb-5 block text-[14px] font-semibold uppercase text-white">
            ENJOY WITH
          </span>

          <h1 className="max-w-[700px] text-[38px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[58px]">
            Great upcoming events
            <br />
            for our institute
          </h1>
        </motion.div>

      </div>
    </section>
  )
}