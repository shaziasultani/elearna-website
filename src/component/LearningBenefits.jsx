
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const logos = [
  'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8beb3991b3db5cd5ff_Clients%20Logo-6.svg',
  'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bca715a603abbc84f_Clients%20Logo.svg',
  'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bb6896643f3baa632_Clients%20Logo-2.svg',
  'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d2a_Clients%20Logo-3.svg',
  'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf99901dda5c25e7e_Clients%20Logo-5.svg',
]

export default function LearningBenefits() {
  const features = [
    'Skill-based instruction',
    'Global certification',
    'Analytics and insights',
    'Customizable courses',
  ]

  return (
    <>
      <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Image Section */}
          <div className="relative mx-auto h-[440px] w-full max-w-[540px] sm:h-[490px]">

            {/* Yellow Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute left-[18%] top-0 h-[145px] w-[145px] rounded-full bg-[#ffb900] sm:h-[155px] sm:w-[155px]"
            />

            {/* Circular Outline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute bottom-0 left-[7%] h-[310px] w-[310px] rounded-full border-[2px] border-[#e8ecee] sm:h-[355px] sm:w-[355px]"
            />

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-[4%] top-[8%] z-10 h-[350px] w-[58%] overflow-hidden rounded-[4px] sm:h-[378px] sm:w-[56%]"
            >
              <img
                src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66d96859eb61b636c95fdb98_Girl%20Image%20Using%20Laptop-p-500.webp"
                alt="Student learning with a laptop"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Smaller Video */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[3%] top-[25%] z-20 h-[205px] w-[42%] overflow-hidden rounded-[4px] sm:h-[230px]"
            >
              <video
                src="https://cdn.prod.website-files.com/668cb7adec02e140422345de%2F66c86567624ca9dec83f55cc_Home%20One%20Video-transcode.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.5px] text-[#172b2e]">
              What We Offer
            </p>

            <h2 className="mb-3 max-w-[550px] text-[36px] font-semibold leading-[1.12] tracking-[-1.5px] text-[#14292c] sm:text-[42px] lg:text-[44px]">
              Personalized learning for your ambitions
            </h2>

            <p className="max-w-[490px] text-[14px] leading-[1.8] text-[#858585]">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </p>

            {/* Features */}
            <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.12,
                  }}
                  className="flex items-center gap-3 text-[14px] font-medium text-[#172b2e]"
                >
                  <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#172b2e]" />
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* Question Box */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-col justify-between gap-6 bg-[#eff6f7] px-7 py-6 sm:flex-row sm:items-center sm:px-8"
            >
              <div className="max-w-[270px]">
                <h3 className="mb-3 text-[15px] font-semibold text-[#172b2e]">
                  Still have questions?
                </h3>

                <p className="text-[13px] leading-[1.8] text-[#858585]">
                  Lorem ipsum dolor sit amet consectetur ipsum blandit etiam
                  aliquam.
                </p>
              </div>

              <motion.a
                href="/contact"
                whileHover={{
                  y: -4,
                  color: 'white',
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#12282b] px-8 py-4 text-[13px] font-semibold text-white transition-colors duration-300"
              >
                Get Started
                <ArrowUpRight size={15} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Universities and Companies Logo Section */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
       className="overflow-hidden bg-[#12282b] py-12 sm:py-14"
      >
 <h2 className="mb-10 px-4 text-center text-[18px] font-medium text-[#807f7f] sm:text-[20px]">
  Learn from 350+ leading universities and companies with us
</h2>

        <div className="group relative flex w-full overflow-hidden">
          <div className="flex w-max animate-scroll-left items-center gap-16 group-hover:[animation-play-state:paused]">

            {/* First Set of Logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex h-16 w-40 shrink-0 items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`University or company logo ${index + 1}`}
                  loading="lazy"
                  className="max-h-12 max-w-36 object-contain"
                />
              </div>
            ))}

            {/* Duplicate Logos for Seamless Animation */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                aria-hidden="true"
                className="flex h-16 w-40 shrink-0 items-center justify-center"
              >
                <img
                  src={logo}
                  alt=""
                  loading="lazy"
                  className="max-h-12 max-w-36 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll-left {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 25s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-scroll-left {
              animation: none;
            }
          }
        `}</style>
      </motion.section>
    </>
  )
}