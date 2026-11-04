import {
  BookOpen,
  Wallet,
  GraduationCap,
  Award,
} from 'lucide-react'

import { motion } from 'framer-motion'

import YellowCTA from './YellowCTA'

const features = [
  {
    icon: BookOpen,
    title: 'Learn anything',
    description:
      'Lorem ipsum dolor sit amet conse non quis id viverra id proin.',
  },
  {
    icon: Wallet,
    title: 'Save money',
    description:
      'Lorem ipsum dolor sit amet conse non quis id viverra id proin.',
  },
  {
    icon: GraduationCap,
    title: 'Flexible courses',
    description:
      'Lorem ipsum dolor sit amet conse non quis id viverra id proin.',
  },
  {
    icon: Award,
    title: 'Unlimited certificate',
    description:
      'Lorem ipsum dolor sit amet conse non quis id viverra id proin.',
  },
]

export default function WhyChooseUs() {
  return (
    <>
      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden bg-gradient-to-b from-[#eff7f9] to-white"
      >
        <div className="mx-auto max-w-7xl px-6 pb-28 pt-14 sm:px-10 lg:px-12 lg:pb-32 lg:pt-16">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#183238]">
              Why We Are
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#142e33] sm:text-4xl">
              Elevate your professional journey
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
              mus. Vitae diam dolor lacus amet integer ut.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {features.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  size={40}
                  strokeWidth={1}
                  className="text-[#172f34]"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-lg font-semibold text-[#172f34]">
                  {title}
                </h3>

                <p className="mt-5 max-w-[260px] text-base leading-7 text-gray-500">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* Reusable Yellow CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <YellowCTA />
      </motion.div>
    </>
  )
}