import React from 'react'
import { motion } from 'framer-motion'

import CourseOneHero from './CourseOneHero'
import TopCourses from './TopCourses'
import YellowCTA from './YellowCTA'
import Footer from './Footer'

export default function CourseOne() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <CourseOneHero />
      <TopCourses />
      <YellowCTA />
      <Footer />
    </motion.main>
  )
}