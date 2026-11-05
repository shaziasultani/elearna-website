
import { useState } from 'react'
import {
  Star,
  BookOpen,
  Clock,
  Users,
  Check,
} from 'lucide-react'
import { motion } from 'framer-motion'

const courses = [
  {
    id: 1,
    category: 'DEVELOPMENT',
    title: 'Building single page applications with Angular',
    price: 'Free',
    rating: '5.00',
    reviews: '328',
    lessons: 8,
    students: '12k',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9dfb3e87f8984b5a15b6_Course%20Small%20Image-p-800.webp',
    description:
      'Learn the fundamentals of Angular and build modern single-page applications through practical lessons.',
  },
  {
    id: 2,
    category: 'DEVELOPMENT',
    title: 'Database integration with MongoDB',
    price: '$59',
    rating: '4.49',
    reviews: '756',
    lessons: 10,
    students: '7k',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e1184c0c12d2244968d_Course%20Small%20Image-9-p-800.webp',
    description:
      'Learn how to connect applications to MongoDB, manage databases, and work with data effectively.',
  },
  {
    id: 3,
    category: 'MANAGEMENT',
    title: 'Risk management and business continuity',
    price: '$49',
    rating: '4.88',
    reviews: '210',
    lessons: 10,
    students: '8k',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e1184c0c12d2244968d_Course%20Small%20Image-9-p-800.webp',
    description:
      'Understand business risks, develop effective strategies, and learn how to maintain business continuity.',
  },
  {
    id: 4,
    category: 'DEVELOPMENT',
    title: 'Full-stack development with the MERN stack',
    price: '$72',
    rating: '5.00',
    reviews: '985',
    lessons: 12,
    students: '22k',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e61096e930736b651e4_Course%20Small%20Image-5-p-800.webp',
    description:
      'Learn to create full-stack applications using MongoDB, Express, React, and Node.js.',
  },
]

export default function TrendingCourses() {
  const [hoveredCourse, setHoveredCourse] = useState(null)

  return (
    <section className="overflow-hidden bg-[#eff7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#10282c]">
            Trending Courses
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#10282c] sm:text-4xl">
            Explore our top programs
          </h2>
        </motion.div>

        {/* Four Course Cards */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => {
            const isHovered = hoveredCourse === course.id

            return (
              <motion.article
                key={course.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                onTouchStart={() => setHoveredCourse(course.id)}
                className="group relative min-w-0 bg-white transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Course Image */}
                <div className="relative h-56 overflow-hidden bg-[#dce7e9] sm:h-52">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Price Badge */}
                  <span className="absolute right-3 top-3 z-10 flex h-[74px] min-w-[74px] items-center justify-center rounded-full bg-[#2d50e6] px-2 text-lg font-medium text-white">
                    {course.price}
                  </span>
                </div>

                {/* Course Information */}
                <div className="p-5">
                  <p className="mb-2 text-xs font-normal uppercase tracking-wide text-gray-500">
                    {course.category}
                  </p>

                  <h3 className="min-h-[56px] text-lg font-semibold leading-6 text-[#10282c]">
                    {course.title}
                  </h3>

                  {/* Rating */}
                  <div className="mt-4 flex flex-wrap items-center gap-1">
                    <div className="flex items-center gap-0.5 text-[#ffb000]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={17}
                          fill="currentColor"
                          strokeWidth={1}
                        />
                      ))}
                    </div>

                    <span className="text-xs text-gray-500">
                      {course.rating} ({course.reviews})
                    </span>
                  </div>

                  {/* Course Stats */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-gray-100 pt-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <BookOpen size={13} />
                      {course.lessons} Lessons
                    </span>

                    <span className="flex items-center gap-1">
                      <Users size={13} />
                      {course.students} Enrolled
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      Online
                    </span>
                  </div>
                </div>

                {/* Centered White Hover Popup */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{
                    visibility: isHovered ? 'visible' : 'hidden',
                  }}
                  className={`absolute left-1/2 ${
                    course.id === 4 ? 'sm:left-1/5' : 'sm:left-4/5'
                  } top-[48%] z-20 h-103 w-[calc(100%-1rem)] max-w-[350px] -translate-x-1/2 -translate-y-[48%] bg-white p-6 shadow-[0_15px_45px_rgba(0,0,0,0.16)] transition-all duration-300 sm:w-[calc(100%+40px)] sm:p-7`}
                >
                  <h3 className="text-xl font-semibold leading-7 text-[#10282c]">
                    {course.title}
                  </h3>

                  {/* Lessons and Enrollment */}
                  <p className="mt-4 text-xs uppercase tracking-wide text-gray-500">
                    • {course.lessons} Lessons • {course.students} Enrolled
                  </p>

                  {/* Description */}
                  <p className="mt-7 text-sm leading-6 text-gray-500">
                    {course.description}
                  </p>

                  {/* Checklist */}
                  <div className="mt-4 space-y-2.5 text-sm text-gray-500">
                    <p className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-gray-500"
                      />
                      Lorem ipsum dolor sit amet consectetur
                    </p>

                    <p className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-gray-500"
                      />
                      Lorem ipsum dolor
                    </p>

                    <p className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-gray-500"
                      />
                      Lorem ipsum dolor sit
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 grid grid-cols-2 gap-2.5">
                    <a
                      href="#course-details"
                      className="flex min-h-[50px] items-center justify-center rounded-md bg-[#ffb900] px-3 py-3 text-center text-sm font-medium text-[#10282c] transition-all duration-300 hover:scale-105 hover:bg-[#ffc52e]"
                    >
                      Course Details
                    </a>

                    <a
                      href="#enroll"
                      className="flex min-h-[50px] items-center justify-center rounded-md bg-[#10282c] px-3 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#24464b]"
                    >
                      Enroll
                    </a>
                  </div>
                </motion.div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
