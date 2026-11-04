import React, { useState } from 'react'
import { Star, Users, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TopCourses() {
  const [activeCategory, setActiveCategory] = useState('All courses')

  const categories = [
    'All courses',
    'Design',
    'Development',
    'Management',
    'Finance',
  ]

  const courses = [
    // DESIGN COURSES
    {
      id: 1,
      category: 'Design',
      title: 'Design systems and pattern libraries',
      price: '$99',
      rating: '5.00',
      reviews: '1.2K',
      lessons: 8,
      students: '25k',
      image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66fe66442929de6e874b3284_Course%20Image.webp',
    },
    {
      id: 2,
      category: 'Design',
      title: 'Learn interactive Web Design by building real projects',
      price: '$79',
      rating: '4.40',
      reviews: '756',
      lessons: 12,
      students: '23k',
      image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eba4fcd2cfcf11fe70ccfe_Course%20Small%20Image-4.webp',
    },
    {
      id: 3,
      category: 'Design',
      title: 'Advanced photoshop techniques for designers',
      price: 'Free',
      rating: '5.00',
      reviews: '1.2K',
      lessons: 8,
      students: '25k',
      image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/6710bcf4976ba1d072d8b476_Course%20Image-4-2.webp',
    },

    // DEVELOPMENT COURSES
    {
      id: 4,
      category: 'Development',
      title: 'Building single page applications with angular',
      price: 'Free',
      rating: '5.00',
      reviews: '328',
      lessons: 6,
      students: '12k',
      image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9dfb3e87f8984b5a15b6_Course%20Small%20Image.webp',
    },
    {
      id: 5,
      category: 'Development',
      title: 'Database integration with MongoDB',
      price: '$59',
      rating: '4.40',
      reviews: '756',
      lessons: 10,
      students: '7k',
      image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e1184c0c12d2244968d_Course%20Small%20Image-9.webp',
    },
    {
      id: 6,
      category: 'Development',
      title: 'Full-stack development with the MERN stack',
      price: '$72',
      rating: '5.00',
      reviews: '985',
      lessons: 12,
      students: '22k',
      image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp',
    },

    // MANAGEMENT COURSES
    {
      id: 7,
      category: 'Management',
      title: 'Risk management and business continuity',
      price: '$49',
      rating: '4.88',
      reviews: '210',
      lessons: 3,
      students: '8k',
      image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e363f6e47ec5245cf09_Course%20Small%20Image-7.webp',
    },
    {
      id: 8,
      category: 'Management',
      title: 'Grow your brand and reach your audience',
      price: '$49',
      rating: '4.88',
      reviews: '210',
      lessons: 10,
      students: '8k',
      image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9fb02faddeb03288c28e_Course%20Small%20Image-2.webp',
    },

    // FINANCE COURSES
    {
      id: 9,
      category: 'Finance',
      title: 'Operations management and process improvement',
      price: 'Free',
      rating: '5.00',
      reviews: '812',
      lessons: 12,
      students: '23k',
      image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9ece25b132baef1462d5_Course%20Small%20Image-3.webp',
    },
    {
      id: 10,
      category: 'Finance',
      title: 'The complete guide to personal and business finance',
      price: '$99',
      rating: '4.88',
      reviews: '210',
      lessons: 10,
      students: '8k',
      image: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e25c4d132b7abc4dcb2_Course%20Small%20Image-8.webp',
    },
  ]

  // Filter courses by selected category
  const filteredCourses =
    activeCategory === 'All courses'
      ? courses
      : courses.filter((course) => course.category === activeCategory)

  return (
    <section className="w-full bg-[#eff7f9] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#142e32]">
              Online Learning
            </p>

            <h2 className="text-3xl font-semibold text-[#142e32] sm:text-4xl">
              Top online courses
            </h2>
          </div>

          {/* CATEGORY TABS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm transition-colors duration-200 ${
                  activeCategory === category
                    ? 'font-semibold text-[#142e32]'
                    : 'text-gray-500 hover:text-[#142e32]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* COURSE CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.15,
                ease: 'easeOut',
              }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              {/* IMAGE AREA */}
              <div className="relative h-52 w-full bg-gray-200 sm:h-56">
                {course.image && (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* PRICE BADGE */}
                <span className="absolute -bottom-5 right-5 flex h-12 min-w-12 items-center justify-center rounded-full bg-[#2d50e6] px-3 text-sm font-semibold text-white">
                  {course.price}
                </span>
              </div>

              {/* COURSE DETAILS */}
              <div className="px-5 pb-5 pt-6">
                <p className="mb-3 text-xs font-medium uppercase text-[#142e32]">
                  {course.category}
                </p>

                <h3 className="mb-4 min-h-[52px] text-lg font-semibold leading-6 text-[#142e32]">
                  {course.title}
                </h3>

                {/* RATING */}
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex items-center text-[#ffad00]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-gray-500">
                    {course.rating} ({course.reviews})
                  </span>
                </div>

                {/* LESSONS AND ENROLLMENT */}
                <div className="flex border-t border-gray-200 pt-4">
                  <div className="flex w-1/2 items-center justify-center gap-2 border-r border-gray-200 text-xs text-[#142e32]">
                    <BookOpen size={14} />
                    {course.lessons} Lessons
                  </div>

                  <div className="flex w-1/2 items-center justify-center gap-2 text-xs text-[#142e32]">
                    <Users size={14} />
                    {course.students} Enrolled
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-10 flex justify-center"
        >
          <div className="cursor-default rounded-full bg-[#10282c] px-8 py-4 text-center text-sm font-medium text-white">
            We assist you in finding the ideal tutor at no cost.{' '}
            <a
              href="#courses"
              className="cursor-pointer underline transition hover:text-gray-300"
            >
              Browse All Available Courses
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}