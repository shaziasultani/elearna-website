import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic plan',
    price: 199,
    featured: false,
  },
  {
    name: 'Starter plan',
    price: 299,
    featured: true,
  },
  {
    name: 'Platinum plan',
    price: 399,
    featured: false,
  },
]

const features = [
  {
    name: 'Access to 30+ top courses',
    available: [true, true, true],
  },
  {
    name: 'Certification prep',
    available: [true, true, true],
  },
  {
    name: 'Customizable content',
    available: [true, true, true],
  },
  {
    name: 'AI-powered coding exercises',
    available: [true, true, true],
  },
  {
    name: 'Analytics and adoption reports',
    available: [false, false, true],
  },
  {
    name: '24/7 customer support',
    available: [false, false, true],
  },
  {
    name: 'Instructor Q&A',
    available: [true, true, true],
  },
  {
    name: 'Skills assessments',
    available: [false, true, true],
  },
]

function FeatureIcon({ available, featured }) {
  return (
    <span
      className={`inline-flex h-[22px] w-[22px] items-center justify-center rounded-full ${
        featured
          ? 'bg-[#ffb800] text-[#102629]'
          : 'bg-[#18383d] text-white'
      }`}
      aria-label={available ? 'Included' : 'Not included'}
    >
      {available ? (
        <Check size={14} strokeWidth={3} />
      ) : (
        <X size={13} strokeWidth={3} />
      )}
    </span>
  )
}

export default function PricingComparison() {
  return (
    <section className="w-full bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1380px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-14 text-center sm:mb-16 lg:mb-[68px]"
        >
          <h2 className="mb-5 text-[36px] font-semibold leading-tight tracking-[-1.2px] text-[#102629] sm:text-[42px] lg:text-[46px]">
            Pricing comparison
          </h2>

          <p className="mx-auto max-w-[560px] text-[15px] leading-[1.8] text-[#858585]">
            Distracted by the readable content of a page when looking at its
            point of using that it has a more many desktop.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-[1200px] overflow-x-auto">
          <div className="min-w-[760px]">

            {/* Plan Headers */}
            <div className="grid grid-cols-[1.65fr_repeat(3,minmax(0,1fr))] items-stretch">
              <div />

              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: 'easeOut',
                  }}
                  className={`flex min-h-[175px] flex-col items-center justify-center px-5 py-7 text-center ${
                    plan.featured
                      ? 'rounded-t-[4px] bg-[#203d42] text-white'
                      : 'bg-white text-[#102629]'
                  }`}
                >
                  <h3 className="mb-3 text-[17px] font-semibold">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline justify-center">
                    <span className="text-[36px] font-semibold leading-none tracking-[-1.2px]">
                      ${plan.price}
                    </span>

                    <span
                      className={`ml-1 text-[14px] ${
                        plan.featured ? 'text-white/75' : 'text-[#102629]'
                      }`}
                    >
                      / month
                    </span>
                  </div>

                  <p
                    className={`mt-4 text-[13px] ${
                      plan.featured ? 'text-white/70' : 'text-[#858585]'
                    }`}
                  >
                    No credit card required.
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((feature, rowIndex) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: rowIndex * 0.06,
                  ease: 'easeOut',
                }}
                className="grid grid-cols-[1.65fr_repeat(3,minmax(0,1fr))] items-stretch"
              >
                {/* Feature Name */}
                <div
                  className={`flex min-h-[54px] items-center px-5 py-4 sm:px-6 ${
                    rowIndex % 2 === 0 ? 'bg-[#eff7f9]' : 'bg-white'
                  }`}
                >
                  <span className="text-[14px] font-medium leading-relaxed text-[#102629] sm:text-[15px]">
                    {feature.name}
                  </span>
                </div>

                {/* Availability for Each Plan */}
                {plans.map((plan, planIndex) => (
                  <div
                    key={plan.name}
                    className={`flex min-h-[54px] items-center justify-center px-3 py-3 ${
                      plan.featured
                        ? 'bg-[#203d42]'
                        : rowIndex % 2 === 0
                          ? 'bg-[#eff7f9]'
                          : 'bg-white'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: 0.1 + planIndex * 0.08,
                      }}
                    >
                      <FeatureIcon
                        available={feature.available[planIndex]}
                        featured={plan.featured}
                      />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}

            {/* Bottom of Starter Column */}
            <div className="grid grid-cols-[1.65fr_repeat(3,minmax(0,1fr))]">
              <div />
              <div />
              <div className="h-[24px] rounded-b-[4px] bg-[#203d42]" />
              <div />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}