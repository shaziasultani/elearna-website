import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  GraduationCap,
} from 'lucide-react'

const faqs = [
  {
    question: 'How do I enroll in a course?',
    answer:
      'Browse our courses, chooenrollmentse the course you are interested in, and follow the  instructions on the course page.',
  },
  {
    question: 'Are the courses suitable for beginners?',
    answer:
      'Yes. We offer courses for different skill levels, including beginners who are just starting their learning journey.',
  },
  {
    question: 'Can I learn at my own pace?',
    answer:
      'Yes. Our online learning experience allows you to study at your own pace and revisit learning materials when needed.',
  },
  {
    question: 'Will I receive a certificate after completing a course?',
    answer:
      'Certificate availability depends on the individual course. Check the course details for its completion requirements.',
  },
  {
    question: 'How can I become an instructor?',
    answer:
      'You can visit our instructor application page and follow the steps to share your experience and apply.',
  },
]

export default function ContactDetails() {
  const [activeFAQ, setActiveFAQ] = useState(0)

  return (
    <div className="relative overflow-visible">

      {/* Location Section */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-0 lg:py-16">
        <div className="mx-auto grid max-w-[1100px] gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="mb-3 inline-block rounded-full bg-[#fff5d6] px-3 py-1.5 text-xs font-semibold text-[#b88600]">
              CONTACT INFORMATION
            </span>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-[#17252b] sm:text-3xl">
              Find our location
            </h2>

            <p className="mb-7 max-w-md text-sm leading-6 text-[#687579]">
              Have questions or need assistance? Get in touch with our team.
              We are always happy to help you with your learning journey.
            </p>

            <div className="space-y-5">

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5d6] text-[#d99c00]">
                  <MapPin size={20} />
                </div>

                <div>
                  <h3 className="mb-1 text-base font-semibold text-[#17252b]">
                    Our Address
                  </h3>
                  <p className="text-sm leading-6 text-[#687579]">
                    Visit our office for more information about our courses
                    and services.
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5d6] text-[#d99c00]">
                  <Phone size={20} />
                </div>

                <div>
                  <h3 className="mb-1 text-base font-semibold text-[#17252b]">
                    Phone Number
                  </h3>
                  <p className="text-sm leading-6 text-[#687579]">
                    Contact our support team for assistance.
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5d6] text-[#d99c00]">
                  <Mail size={20} />
                </div>

                <div>
                  <h3 className="mb-1 text-base font-semibold text-[#17252b]">
                    Email Address
                  </h3>
                  <p className="text-sm leading-6 text-[#687579]">
                    Send us an email and we will get back to you.
                  </p>
                </div>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5d6] text-[#d99c00]">
                  <Clock size={20} />
                </div>

                <div>
                  <h3 className="mb-1 text-base font-semibold text-[#17252b]">
                    Working Hours
                  </h3>
                  <p className="text-sm leading-6 text-[#687579]">
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Side - Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex min-h-[280px] items-center justify-center rounded-xl bg-[#eff7f9] p-6"
          >
            <div className="text-center">
              <MapPin size={38} className="mx-auto mb-3 text-[#ffb900]" />

              <h3 className="mb-2 text-lg font-bold text-[#17252b]">
                Find Us Here
              </h3>

              <p className="text-sm text-[#687579]">
                Our location map will be displayed here.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-[#eff7f9] to-white px-5 py-14 sm:px-8 lg:px-0 lg:py-16">
        <div className="mx-auto grid max-w-[1100px] items-center gap-9 lg:grid-cols-2 lg:gap-12">

          {/* FAQ Heading */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="mb-3 inline-block rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#b88600]">
              FAQ
            </span>

            <h2 className="mb-3 text-2xl font-bold leading-tight text-[#17252b] sm:text-3xl">
              Frequently asked questions
            </h2>

            <p className="mb-6 max-w-md text-sm leading-6 text-[#687579]">
              Find answers to some of the most common questions about our
              courses, learning experience, and services.
            </p>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="flex h-48 items-center justify-center rounded-xl bg-white"
            >
              <GraduationCap size={65} className="text-[#ffb900]" />
            </motion.div>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="rounded-lg bg-white px-4 py-4 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="text-sm font-semibold text-[#17252b]">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-[#d99c00]"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-xs leading-6 text-[#687579]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Yellow CTA - overlaps the footer by half */}
      <section className="relative z-20 mx-5 mb-[-70px] sm:mx-8 lg:mx-auto lg:max-w-[1190px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-xl bg-[#ffb900] px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">

            <div className="max-w-xl">
              <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl">
                Are you ready to start your journey?
              </h2>

              <p className="text-sm leading-6 text-black/80">
                Take the next step toward your future. Explore our courses and
                learn from experienced instructors.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Link
                to="/course-one"
                className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Browse Courses
              </Link>

              <Link
                to="/career"
                className="rounded-full border border-black px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Become An Instructor
              </Link>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  )
}