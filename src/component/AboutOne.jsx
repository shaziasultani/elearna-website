
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const featureItems = [
  {
    icon: "◎",
    title: "150+ online courses",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    icon: "♙",
    title: "Personalized learning",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    icon: "↻",
    title: "Lifetime update",
    description: "Lorem ipsum dolor sit amet",
  },
];

const statistics = [
  { number: "1.5K", label: "Finish Seasons" },
  { number: "7.8K", label: "Enrolled" },
  { number: "100%", label: "Job Placement" },
];

const avatars = [
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=44",
];

export default function AboutOne() {
  // Smooth scroll progress indicator
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#10292c]">
      {/* Scroll Progress Bar */}



      {/* ================= HERO SECTION ================= */}

      <section className="relative flex min-h-[565px] flex-col items-center overflow-hidden bg-[#0d2629] px-5">
        {/* Decorative background */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250' viewBox='0 0 300 250'%3E%3Cg fill='none' stroke='%237b8d79' stroke-width='3'%3E%3Cpath d='M20 50l40 20-20 35z M170 20l50 50 M185 15l-30 65 M40 190l30 20-15 30z M240 130l35 20-25 25z M100 130l25 25 M125 130l-25 25'/%3E%3Ccircle cx='130' cy='70' r='13'/%3E%3Ccircle cx='250' cy='220' r='9'/%3E%3Cpath d='M90 15l-15 35 M100 25L85 55 M220 180l20-25 20 25z M10 120l30 10-20 30z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "300px 250px",
          }}
        />

        {/* Hero Heading */}

        <motion.div
          className="relative z-10 mx-auto flex flex-1 flex-col items-center justify-center pb-20 pt-24 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-sm font-bold uppercase tracking-wide text-white"
          >
            About Us
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-[58px]"
          >
            You’re sincerely
            <br />
            determined to grow
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: smoothEase,
            }}
            className="mt-7 h-1 w-16 origin-center rounded-full bg-amber-400"
          />
        </motion.div>
      </section>

      {/* ================= OUR STORY SECTION ================= */}

      <section className="relative bg-white px-5 pb-20 pt-0 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
          {/* Story Image */}

          <motion.div
            className="relative mx-auto w-full max-w-[630px] md:-mt-24"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <motion.div
              className="overflow-hidden rounded-[4px] shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: smoothEase }}
            >
              <img
                src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66d9685910e51570ad70d12e_Employ%20Images.webp"
                alt="Students studying together"
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[400px] md:h-[420px]"
              />
            </motion.div>

            {/* Floating Rating Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: smoothEase,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="absolute -bottom-10 right-3 w-[230px] rounded-2xl bg-white p-5 shadow-xl sm:right-5"
            >
              <p className="text-center text-xs text-gray-500">
                Trusted By
              </p>

              <p className="mt-1 text-center text-sm font-semibold text-[#10292c]">
                15000+ enrolled students
              </p>

              <div className="mt-3 flex items-center justify-center">
                <div className="flex -space-x-2">
                  {avatars.map((avatar) => (
                    <img
                      key={avatar}
                      src={avatar}
                      alt=""
                      loading="lazy"
                      className="h-7 w-7 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="text-sm tracking-wide text-amber-500">
                  ★★★★★
                </span>

                <span className="text-xs text-gray-500">
                  4.94 (625)
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Story Text */}

          <motion.div
            className="pt-8 md:pt-0"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#10292c]">
              Our Story
            </p>

            <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Limitless learning and get more possibilities
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse
              in maecenas scelerisque imperdiet nec. Pellentesque mauris amet
              ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium
              est elementum elementum rhoncus.
            </p>

            {/* Statistics */}

            <motion.div
              className="mt-7 grid grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
            >
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className={`
                    ${index !== 2 ? "border-r border-gray-300" : ""}
                    ${index === 0 ? "pr-3" : ""}
                    ${index === 1 ? "px-3" : ""}
                    ${index === 2 ? "pl-3" : ""}
                  `}
                >
                  <motion.h3
                    className="text-3xl font-bold tracking-tight sm:text-4xl"
                    whileHover={{
                      color: "#eab308",
                      y: -3,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    {stat.number}
                  </motion.h3>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ================= FEATURES SECTION ================= */}

        <motion.div
          className="mx-auto mt-24 grid max-w-5xl grid-cols-1 gap-8 rounded-sm bg-[#0d2629] px-7 py-10 text-white shadow-xl sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {featureItems.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.35,
                ease: smoothEase,
              }}
              className="group flex items-center gap-4"
            >
              <motion.div
                whileHover={{
                  rotate: 12,
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.3,
                  ease: smoothEase,
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 text-2xl text-white/80 transition-colors group-hover:border-amber-400 group-hover:text-amber-400"
              >
                {feature.icon}
              </motion.div>

              <div>
                <h3 className="text-base font-bold">
                  {feature.title}
                </h3>

                <p className="mt-1 text-xs text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
