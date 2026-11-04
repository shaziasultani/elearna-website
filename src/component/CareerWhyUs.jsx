import { CircleCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Full network visibility worldwide',
    description:
      'Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Supported the use of fiber optic cable',
    description:
      'Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const contentVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const featureVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function CareerWhyUs() {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[90px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[100px]">

        {/* Left Images */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto min-h-[400px] w-full max-w-[620px] sm:min-h-[470px] lg:min-h-[490px]"
        >
          <motion.img
            src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66e2828b5c1aa1d3d510763b_Career%20Page%20Image-p-500.webp"
            alt="Woman learning online with a laptop"
            whileHover={{ scale: 1.035 }}
            transition={{ duration: 0.4 }}
            className="absolute left-0 top-0 h-[260px] w-[72%] rounded-[4px] object-cover sm:h-[320px] lg:h-[328px]"
          />

          <motion.img
            src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66e2828981ae7c4eabf6c47b_Career%20Page%20Image-2.webp"
            alt="Person working on a laptop"
            whileHover={{ scale: 1.035 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 right-0 h-[245px] w-[43%] rounded-[4px] object-cover sm:h-[300px] lg:h-[310px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.02em] text-[#173036] sm:text-[14px]">
            Why we are
          </p>

          <h2 className="max-w-[560px] text-[34px] font-semibold leading-[1.12] tracking-[-1px] text-[#142a2e] sm:text-[40px] lg:text-[44px]">
            We help connectivity across the world
          </h2>

          <p className="mt-7 max-w-[560px] text-[15px] leading-[1.8] text-[#858585] sm:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className="mt-6 space-y-6 sm:mt-7 sm:space-y-7"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                className="grid grid-cols-[24px_1fr] gap-4 sm:gap-6"
              >
                <CircleCheck
                  size={22}
                  strokeWidth={1.8}
                  className="mt-0.5 text-[#20383c]"
                />

                <div>
                  <h3 className="text-[16px] font-semibold leading-[1.5] text-[#183238] sm:text-[17px]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-[500px] text-[14px] leading-[1.9] text-[#858585] sm:text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}