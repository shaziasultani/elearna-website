import { useState } from 'react'
import { Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const plans = [
  {
    name: 'Basic',
    description: 'Lorem ipsum dolor sit amet consectetur erat ipsum non.',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      'Access to 10+ top courses',
      'Certification prep',
      'Customizable content',
      'AI-powered coding exercises',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    description: 'Lorem ipsum dolor sit amet consectetur erat ipsum non.',
    monthlyPrice: 299,
    yearlyPrice: 2990,
    features: [
      'Access to 30+ top courses',
      'Certification prep',
      'Customizable content',
      'AI-powered coding exercises',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    description: 'Lorem ipsum dolor sit amet consectetur erat ipsum non.',
    monthlyPrice: 699,
    yearlyPrice: 6990,
    features: [
      'Access to 50+ top courses',
      'Certification prep',
      'Customizable content',
      'AI-powered coding exercises',
      'Analytics and adoption reports',
    ],
    featured: true,
  },
]

export default function PricingPlans() {
  const [billing, setBilling] = useState('monthly')

  return (
    <section className="w-full bg-white px-5 pb-24 pt-6 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-[1180px]">
        {/* Monthly / Yearly Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-11 flex items-center justify-center gap-3 sm:mb-12"
        >
          <button
            type="button"
            onClick={() => setBilling('monthly')}
            className={`text-[13px] font-medium uppercase tracking-wide ${
              billing === 'monthly' ? 'text-[#102629]' : 'text-gray-500'
            }`}
          >
            Monthly
          </button>

          <button
            type="button"
            role="switch"
            aria-checked={billing === 'yearly'}
            aria-label="Switch between monthly and yearly billing"
            onClick={() =>
              setBilling((current) =>
                current === 'monthly' ? 'yearly' : 'monthly',
              )
            }
            className="relative flex h-[30px] w-[56px] shrink-0 items-center rounded-full bg-[#e4e5e5] p-[4px]"
          >
            <motion.span
              animate={{
                x: billing === 'yearly' ? 26 : 0,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-[22px] w-[22px] rounded-full bg-[#ffb800]"
            />
          </button>

          <button
            type="button"
            onClick={() => setBilling('yearly')}
            className={`text-[13px] font-medium uppercase tracking-wide ${
              billing === 'yearly' ? 'text-[#102629]' : 'text-gray-500'
            }`}
          >
            Yearly
          </button>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-3 md:gap-6 lg:gap-7">
          {plans.map((plan, index) => {
            const price =
              billing === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -8 }}
                className={`relative flex min-w-0 flex-col overflow-hidden rounded-t-[12px] px-7 pb-8 pt-12 shadow-[0_12px_55px_rgba(0,0,0,0.09)] sm:px-9 sm:pt-12 lg:px-10 ${
                  plan.featured
                    ? 'bg-[#102629] text-white'
                    : 'bg-white text-[#102629]'
                }`}
              >
                {/* Premium Yellow Top Border */}
                {plan.featured && (
                  <div className="absolute left-0 top-0 h-[12px] w-full rounded-t-[12px] bg-[#ffb800]" />
                )}

                {/* Plan Name */}
                <h2 className="mb-5 text-[17px] font-semibold leading-6">
                  {plan.name}
                </h2>

                {/* Description */}
                <p
                  className={`mb-7 max-w-[270px] text-[14px] leading-[1.7] ${
                    plan.featured ? 'text-white/65' : 'text-[#777777]'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-9 flex items-baseline whitespace-nowrap">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${plan.name}-${billing}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="text-[34px] font-semibold leading-none tracking-[-1.2px]"
                    >
                      ${price.toLocaleString('en-US')}
                    </motion.span>
                  </AnimatePresence>

                  <span
                    className={`text-[13px] ${
                      plan.featured ? 'text-white/65' : 'text-[#102629]'
                    }`}
                  >
                    /{billing === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>

                {/* Features */}
                <ul className="mb-11 flex flex-col gap-[15px]">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + featureIndex * 0.1,
                      }}
                      className="flex items-start gap-[15px]"
                    >
                      <span className="mt-[1px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border border-[#ffb800] text-[#ffb800]">
                        <Check size={11} strokeWidth={1.8} />
                      </span>

                      <span
                        className={`text-[13px] leading-[1.6] ${
                          plan.featured
                            ? 'font-medium text-white/75'
                            : 'text-[#777777]'
                        }`}
                      >
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Subscribe Button */}
                <motion.a
                  href="/contact-one"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-auto flex min-h-[42px] w-full items-center justify-center rounded-[3px] px-3 text-center text-[13px] font-medium transition-transform duration-300 hover:scale-[1.04] ${
                    plan.featured
                      ? 'bg-[#ffb800] text-[#102629]'
                      : 'bg-[#102629] text-white'
                  }`}
                >
                  Subscribe This Plan
                </motion.a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}