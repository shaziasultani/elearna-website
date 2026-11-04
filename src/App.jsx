
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './component/Navbar'
import ScrollToTop from './component/ScrollToTop'

import Hero from './component/Hero'
import LeadingUniversities from './component/LeadingUniversities'
import TopCategories from './component/TopCategories'
import TopCourses from './component/TopCourses'
import WhatWeOffer from './component/WhatWeOffer'
import Testimonials from './component/Testimonials'
import TrendingCourses from './component/TrendingCourses'
import WhyChooseUs from './component/ChooseUs'
import Footer from './component/Footer'
import Blog from './component/Blog'
import BlogCTA from './component/BlogCTA'
import Contact from './component/Contact'
import ContactDetails from './component/ContactDetails'
import WhyWeAre from './component/WhyWeAre'
import LearningBenefits from './component/LearningBenefits'
import BecomeInstructor from './component/BecomeInstructor'
import AboutOne from './component/AboutOne'
import CourseOne from './component/CourseOne'
import HeroFAQPage from './component/HeroFAQPage'
import FAQPage from './component/FAQPage'
import PricingHero from './component/PricingHero'
import PricingPlans from './component/PricingPlans'
import PricingComparison from './component/PricingComparison'
import FAQSection from './component/FAQSection'
import TestimonialsSection from './component/TestimonialsSection'
import CareerHero from './component/CareerHero'
import CareerWhyUs from './component/CareerWhyUs'
import CareerJobs from './component/CareerJobs'
import EventsHero from './component/EventsHero'
import EventsList from './component/EventsList'

// Reusable page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export default function App() {
  const location = useLocation()

  return (
    <>
      {/* Automatically scroll to the top when changing pages */}
      <ScrollToTop />

      {/* One shared navbar for all pages */}
      <Navbar />

      {/* Page transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <PageWrapper>
                <Hero />
                <LeadingUniversities />
                <TopCategories />
                <TopCourses />
                <WhatWeOffer />
                <Testimonials />
                <TrendingCourses />
                <WhyChooseUs />
                <Footer />
              </PageWrapper>
            }
          />

          {/* About One Page */}
          <Route
            path="/about-one"
            element={
              <PageWrapper>
                <AboutOne />
                <WhyWeAre />
                <LearningBenefits />
                <BecomeInstructor />
                <Footer />
              </PageWrapper>
            }
          />

          {/* Course One Page */}
          <Route
            path="/course-one"
            element={
              <PageWrapper>
                <CourseOne />
                <Footer />
              </PageWrapper>
            }
          />

          {/* Blog Page */}
          <Route
            path="/blog"
            element={
              <PageWrapper>
                <Blog />
                <BlogCTA />
                <Footer />
              </PageWrapper>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
                <ContactDetails />
                <Footer />
              </PageWrapper>
            }
          />

          {/* FAQ Page */}
          <Route
            path="/faq"
            element={
              <PageWrapper>
                <HeroFAQPage />
                <FAQPage />
                <BlogCTA />
                <Footer />
              </PageWrapper>
            }
          />
          {/* Pricing One Page */}
          <Route
            path="/pricing-one"
            element={
              <PageWrapper>
                <PricingHero />
                <PricingPlans />
                <LeadingUniversities />
                <PricingComparison />
                <FAQSection />
                <TestimonialsSection />
                <Footer />
              </PageWrapper>
            }
          />

          <Route
            path="/career"
            element={
              <PageWrapper>
                <CareerHero />
                <CareerWhyUs />
                <CareerJobs />
                <BlogCTA />
                <Footer />
              </PageWrapper>
            }
          />

          {/* Events Page */}
          <Route
            path="/events"
            element={
              <PageWrapper>
                <EventsHero />
                  <EventsList />
                 <BlogCTA />
                <Footer />
              </PageWrapper>
            }
          />


        </Routes>
      </AnimatePresence>
    </>
  )
}
