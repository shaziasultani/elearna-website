
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CourseDetailsHero() {
  return (
    <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#172222] px-6 py-24 md:min-h-[700px] md:px-12 lg:px-16">

      {/* Background Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=85"
        alt="Woman portrait"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative z-10 mx-auto w-full max-w-[1300px]"
      >

        {/* Category */}
        <motion.p
          variants={textVariants}
          className="mb-5 text-sm font-semibold uppercase tracking-wide text-white/75 md:text-base"
        >
          Development
        </motion.p>

        {/* Course Title */}
        <motion.h1
          variants={textVariants}
          className="mb-9 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]"
        >
          Building single page applications with angular
        </motion.h1>

        {/* Rating */}
        <motion.div
          variants={textVariants}
          className="flex items-center gap-3"
        >
          <div
            className="flex items-center gap-0.5 text-2xl text-[#ffb400]"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>

          <span className="text-base font-medium text-white/75 md:text-lg">
            5.00 (328)
          </span>
        </motion.div>

      </motion.div>
    </section>
  );
}
