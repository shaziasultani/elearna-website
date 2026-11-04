import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8beb3991b3db5cd5ff_Clients%20Logo-6.svg',
  'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bca715a603abbc84f_Clients%20Logo.svg',
  'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bb6896643f3baa632_Clients%20Logo-2.svg',
  'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d2a_Clients%20Logo-3.svg',
  'https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf99901dda5c25e7e_Clients%20Logo-5.svg',
]

export default function LeadingUniversities() {
  return (
    <section className="bg-[#eff6f8] overflow-hidden py-10">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-10 px-4 text-center text-[20px] font-medium text-gray-800"
      >
        Learn from 350+ leading universities and companies with us
      </motion.h1>

      <div className="group relative flex w-full overflow-hidden">
        <div className="flex w-max animate-scroll-left items-center gap-16 group-hover:[animation-play-state:paused]">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <motion.div
              key={`first-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex h-16 w-40 shrink-0 items-center justify-center"
            >
              <img
                src={logo}
                alt={`University or company logo ${index + 1}`}
                className="max-h-12 max-w-36 object-contain"
              />
            </motion.div>
          ))}

          {/* Duplicate logos for seamless animation */}
          {logos.map((logo, index) => (
            <motion.div
              key={`second-${index}`}
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex h-16 w-40 shrink-0 items-center justify-center"
            >
              <img
                src={logo}
                alt=""
                className="max-h-12 max-w-36 object-contain"
              />
            </motion.div>
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
    </section>
  )
}