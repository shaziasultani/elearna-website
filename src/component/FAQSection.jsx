import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How do I enroll in an online course?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.',
  },
  {
    question: 'Are there any prerequisites for enrolling in online courses?',
    answer:
      'Most courses are designed for learners of different skill levels. Check the course description for any recommended knowledge or prerequisites before enrolling.',
  },
  {
    question: 'What are the technical requirements for online learning?',
    answer:
      'You will need a reliable internet connection, a computer or compatible mobile device, and an updated web browser to access your online courses.',
  },
  {
    question: 'What if I encounter technical difficulties?',
    answer:
      'If you encounter technical difficulties, contact our support team for assistance. We will help you resolve the issue so you can continue learning.',
  },
  {
    question: 'Are there live classes, or can I learn at my own pace?',
    answer:
      'You can learn at your own pace and access course materials whenever convenient. Some courses may also include live classes or scheduled learning sessions.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full bg-[#eff7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-10"
    >
      <div className="mx-auto max-w-[900px]">

        {/* Illustration and Heading */}
        <div className="mb-10 grid grid-cols-1 items-center gap-8 sm:mb-10 sm:grid-cols-2 sm:gap-12">

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <img
              src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66de9b24cdbecf88f8d1b2da_FAQ%20Icons.svg"
              alt="Frequently asked questions illustration"
              className="h-[210px] w-[250px] object-contain sm:h-[230px] sm:w-[280px] lg:h-[250px] lg:w-[300px]"
            />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-5 text-[13px] font-medium uppercase tracking-[0.03em] text-[#102629]">
              Contact Us
            </span>

            <h1 className="max-w-[420px] text-[36px] font-semibold leading-[1.18] tracking-[-1.2px] text-[#102629] sm:text-[40px] lg:text-[42px]">
              Frequently asked questions
            </h1>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-[#d5e0e3]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[48px] w-full items-center justify-between gap-5 py-[13px] text-left sm:min-h-[50px]"
                >
                  <span className="text-[14px] font-medium leading-[1.6] text-[#102629] sm:text-[15px]">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-[#102629]"
                  >
                    {isOpen ? (
                      <Minus size={19} strokeWidth={2} />
                    ) : (
                      <Plus size={19} strokeWidth={2} />
                    )}
                  </motion.span>
                </button>

                {/* Smooth Expand / Collapse */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[760px] pb-5 pr-8 text-[14px] leading-[1.8] text-[#687779]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </motion.section>
  )
}