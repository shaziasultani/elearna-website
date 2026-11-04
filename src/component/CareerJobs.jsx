import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const jobs = [
  {
    title: 'Software development instructor',
    posts: '50 POSTS AVAILABLE',
    salary: '$25K - $35K',
    experience: '2 years',
  },
  {
    title: 'Machine learning educator',
    posts: '35 POSTS AVAILABLE',
    salary: '$20K - $35K',
    experience: '2 years',
  },
  {
    title: 'Blockchain Technology Instructor',
    posts: '47 POSTS AVAILABLE',
    salary: '$26K - $40K',
    experience: '3 years',
  },
  {
    title: 'Digital Design and UX Instructor',
    posts: '50 POSTS AVAILABLE',
    salary: '$23K - $35K',
    experience: '2 years',
  },
]

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
}

export default function CareerJobs() {
  return (
    <section className="w-full bg-[#eff7f9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-[110px]">
      <div className="mx-auto max-w-[1290px]">

        {/* Section Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10 text-center sm:mb-12 lg:mb-[55px]"
        >
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.03em] text-[#183238] sm:text-[14px]">
            Job Opening
          </p>

          <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.8px] text-[#142a2e] sm:text-[38px] lg:text-[44px]">
            Be a part of our faculty
          </h2>
        </motion.div>

        {/* Job Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-[30px]"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              variants={cardVariants}
              custom={index}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.025,
                transition: { duration: 0.3 },
              }}
              className="flex min-h-[320px] flex-col rounded-[3px] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] sm:p-9 lg:min-h-[340px] lg:p-[45px]"
            >
              {/* Job Title */}
              <h3 className="text-[19px] font-semibold leading-snug text-[#172f34] sm:text-[21px]">
                {job.title}
              </h3>

              {/* Job Information */}
              <div className="mt-3 space-y-1">
                <p className="text-[11px] font-medium uppercase tracking-[0.02em] text-[#888888]">
                  {job.posts}
                </p>

                <p className="text-[11px] uppercase tracking-[0.02em] text-[#888888]">
                  4367 LULA SHORES, DEREKTON 48438
                </p>
              </div>

              {/* Salary and Apply Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <motion.span
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.25 }}
                  className="flex min-h-[48px] min-w-[175px] items-center justify-center rounded-[2px] bg-[#ffb600] px-5 text-[14px] font-medium text-[#142a2e]"
                >
                  {job.salary}
                </motion.span>

                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    to="/apply-now"
                    className="flex min-h-[48px] min-w-[165px] items-center justify-center rounded-[2px] bg-[#102629] px-6 text-[14px] font-semibold text-white"
                  >
                    Apply Now
                  </Link>
                </motion.div>
              </div>

              {/* Job Description */}
              <ul className="mt-6 space-y-2 text-[13px] leading-relaxed text-[#858585] sm:text-[14px]">
                <li>• Job Description : Lorem ipsum dolor sit amet consectetur.</li>
                <li>• Job Type : Full-time, Permanent</li>
                <li>• Experience : {job.experience}</li>
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}