import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, Minus } from 'lucide-react'

const faqCategories = [
  {
    title: 'Enrollment and registration',
    questions: [
      {
        question: 'How do I enroll in an online course?',
        answer:
          'Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.',
      },
      {
        question: 'What are the benefits of online learning?',
        answer:
          'Online learning gives you the flexibility to study from anywhere, learn at your own pace, and access educational resources whenever you need them.',
      },
      {
        question: 'Are there any prerequisites for enrolling in online courses?',
        answer:
          'Prerequisites depend on the course you choose. Many courses are suitable for beginners, while advanced courses may require previous knowledge.',
      },
      {
        question: 'What should I do if I forget my password?',
        answer:
          'Visit the login page and select the Forgot Password option. Follow the instructions sent to your registered email address to reset your password.',
      },
      {
        question: 'Can I enroll in multiple courses at once?',
        answer:
          'Yes! You can enroll in multiple courses and organize your learning according to your interests and schedule.',
      },
    ],
  },
  {
    title: 'Technical requirements',
    questions: [
      {
        question: 'What equipment do I need to take online courses?',
        answer:
          'You generally need a computer, tablet, or smartphone with a reliable internet connection and an updated web browser.',
      },
      {
        question: 'Which browsers are supported?',
        answer:
          'We recommend using an updated version of Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari for the best experience.',
      },
      {
        question: 'Can I access courses on my mobile phone?',
        answer:
          'Yes. You can access your courses from a compatible mobile phone, tablet, or computer with an internet connection.',
      },
      {
        question: 'What should I do if a video does not play?',
        answer:
          'Check your internet connection, refresh the page, and update your browser. If the problem continues, contact our support team.',
      },
      {
        question: 'Do I need to install any special software?',
        answer:
          'Most courses work directly in your web browser. Some specialized courses may recommend additional software.',
      },
    ],
  },
  {
    title: 'Assessments and grading',
    questions: [
      {
        question: 'How are online courses assessed?',
        answer:
          'Depending on the course, assessments may include quizzes, assignments, projects, practical activities, and final examinations.',
      },
      {
        question: 'Can I retake a quiz or assessment?',
        answer:
          'Retake options depend on the course settings. Check your course instructions for the number of attempts available.',
      },
      {
        question: 'Where can I see my grades?',
        answer:
          'You can usually find your grades and assessment feedback in your student dashboard or inside the relevant course.',
      },
      {
        question: 'How long does it take to receive results?',
        answer:
          'Automatic quizzes are usually graded immediately. Assignments and projects may require additional time for instructor review.',
      },
      {
        question: 'What happens if I fail an assessment?',
        answer:
          'Review your instructor feedback and course requirements to understand your available options for improving your results.',
      },
    ],
  },
  {
    title: 'Communication and support',
    questions: [
      {
        question: 'How can I contact my instructor?',
        answer:
          'You can contact your instructor through the communication tools or contact information provided in your course.',
      },
      {
        question: 'How do I get technical support?',
        answer:
          'Contact our support team and describe the issue you are experiencing. Include any error messages to help us assist you.',
      },
      {
        question: 'Can I interact with other students?',
        answer:
          'Yes. Depending on the course, you may be able to participate in discussion boards, group activities, or student communities.',
      },
      {
        question: 'When is customer support available?',
        answer:
          'Please check the support information provided on our website for current contact details and available support hours.',
      },
      {
        question: 'Can I provide feedback about a course?',
        answer:
          'Yes. You can share feedback through the available course review or support channels.',
      },
    ],
  },
  {
    title: 'Certificates and degrees',
    questions: [
      {
        question: 'Will I receive a certificate after completing a course?',
        answer:
          'Certificate availability depends on the course. Eligible students can receive a certificate after meeting the completion requirements.',
      },
      {
        question: 'How can I download my certificate?',
        answer:
          'If your course offers a certificate, you can generally access and download it from your student dashboard after completion.',
      },
      {
        question: 'Are online certificates recognized?',
        answer:
          'Recognition varies by course provider, institution, employer, and the purpose for which the certificate is being used.',
      },
      {
        question: 'Can I share my certificate with employers?',
        answer:
          'Yes. You can share your certificate with employers or add its details to your professional profile when appropriate.',
      },
      {
        question: 'What should I do if my certificate is missing?',
        answer:
          'Confirm that you have completed all course requirements. If the certificate is still unavailable, contact course support.',
      },
    ],
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openQuestion, setOpenQuestion] = useState(null)

  const currentCategory = faqCategories[activeCategory]

  // Change category and close all questions
  const handleCategoryChange = (index) => {
    setActiveCategory(index)
    setOpenQuestion(null)
  }

  // Open one question at a time
  const handleQuestionToggle = (index) => {
    setOpenQuestion((current) =>
      current === index ? null : index
    )
  }

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-[30px] lg:py-[110px]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-10 lg:grid-cols-[410px_minmax(0,1fr)] lg:gap-[110px]">

        {/* LEFT SIDE: FAQ CATEGORIES */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full overflow-hidden"
        >
          {faqCategories.map((category, index) => {
            const isActive = activeCategory === index

            return (
              <motion.button
                key={category.title}
                type="button"
                onClick={() => handleCategoryChange(index)}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
                aria-pressed={isActive}
                className={`flex min-h-[66px] w-full items-center justify-between gap-4 px-[30px] py-5 text-left transition-colors duration-300 ${
                  isActive
                    ? 'bg-[#203b40] text-white'
                    : 'bg-[#eff6f8] text-[#71849b] hover:bg-[#e4eef1]'
                }`}
              >
                <span className="text-[16px] font-semibold leading-6 sm:text-[18px]">
                  {category.title}
                </span>

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="shrink-0"
                />
              </motion.button>
            )
          })}
        </motion.div>

        {/* RIGHT SIDE: FAQ QUESTIONS */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full"
        >
          {currentCategory.questions.map((item, index) => {
            const isOpen = openQuestion === index

            return (
              <div
                key={item.question}
                className="border-b border-[#e1e5e7]"
              >
                {/* QUESTION BUTTON */}
                <button
                  type="button"
                  onClick={() => handleQuestionToggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 py-[17px] text-left"
                >
                  <span className="text-[16px] font-semibold leading-[1.6] text-[#1b3035] sm:text-[17px]">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex shrink-0 items-center justify-center text-[#142d33]"
                  >
                    {isOpen ? (
                      <Minus size={20} strokeWidth={2} />
                    ) : (
                      <Plus size={20} strokeWidth={2} />
                    )}
                  </motion.span>
                </button>

                {/* ANSWER WITH SMOOTH ANIMATION */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.3,
                          ease: 'easeInOut',
                        },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-[25px] text-[15px] leading-[1.95] text-[#858585] sm:text-[16px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}