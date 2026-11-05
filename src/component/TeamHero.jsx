import { motion } from 'framer-motion'

export default function TeamHero() {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[#17252b]">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/668cb7adec02e140422345de/66e52a353a948a184c5c7e46_Team%20Hero%20Image.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        className="relative z-10 px-5 text-center text-[42px] font-bold leading-tight text-white sm:text-[52px] lg:text-[58px]"
      >
        Our experts
      </motion.h1>

    </section>
  )
}