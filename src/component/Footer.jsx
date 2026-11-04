import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BookOpen,
  GraduationCap,
  Pencil,
  Atom,
  Shapes,
  Calculator,
  Lightbulb,
} from 'lucide-react'

const footerColumns = [
  {
    title: 'Quick links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Events', href: '/events' },
      { label: 'Career', href: '/career' },
      { label: 'Instructor', href: '/instructor' },
    ],
  },
  {
    title: 'Popular courses',
    links: [
      { label: 'Finance', href: '/courses/finance' },
      { label: 'Management', href: '/courses/management' },
      { label: 'Design', href: '/courses/design' },
      { label: 'Web development', href: '/courses/web-development' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about-one' },
      { label: 'Courses', href: '/course-one' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'License', href: '/license' },
      { label: 'Pricing', href: '/pricing' },
      { label: '404!', href: '/404' },
    ],
  },
  {
    title: 'CMS',
    links: [
      { label: 'Course details', href: '/course-one' },
      { label: 'Instructor details', href: '/instructor' },
      { label: 'Blog details', href: '/blog' },
    ],
  },
]

const backgroundIcons = [
  { Icon: BookOpen, className: 'left-[5%] top-[15%] -rotate-12' },
  { Icon: GraduationCap, className: 'left-[35%] top-[35%] rotate-12' },
  { Icon: Pencil, className: 'right-[18%] top-[18%] -rotate-12' },
  { Icon: Atom, className: 'left-[12%] bottom-[12%] rotate-12' },
  { Icon: Shapes, className: 'right-[5%] bottom-[18%] -rotate-12' },
  { Icon: Calculator, className: 'left-[48%] bottom-[8%] rotate-12' },
  { Icon: Lightbulb, className: 'right-[35%] top-[45%] rotate-12' },
]

const footerItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
}

export default function Footer() {
  return (
    <footer className="relative z-0 overflow-hidden bg-[#0e292d] text-white">

      {/* Subtle Patterned Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #9baeb0 1px, transparent 1.5px)',
            backgroundSize: '12px 12px',
          }}
        />

        {backgroundIcons.map(({ Icon, className }, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute ${className}`}
          >
            <Icon
              className="h-24 w-24 text-[#8ca1a3] opacity-[0.12] sm:h-32 sm:w-32"
              strokeWidth={0.8}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-[1440px] px-6 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-8 lg:pb-12 lg:pt-32">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
        >

          {/* Brand and Description */}
          <motion.div
            variants={footerItemVariants}
            className="lg:col-span-3"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-0.5 text-[30px] font-semibold tracking-tight text-white"
              aria-label="Elearna home"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white text-white">
                <span className="text-[25px] font-bold italic leading-none">
                  e
                </span>
              </span>

              <span className="ml-0.5">learna</span>
            </Link>

            <p className="mt-5 max-w-[280px] text-base leading-[1.8] text-white/50">
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
              eget amet ut tristique cras.
            </p>
          </motion.div>

          {/* Footer Link Columns */}
          {footerColumns.map((column, index) => (
            <motion.div
              key={column.title}
              variants={footerItemVariants}
              className={
                index === 0
                  ? 'lg:col-span-2 lg:col-start-5'
                  : 'lg:col-span-2'
              }
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {column.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={link.href}
                        className="text-base text-white/50 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Divider and Credits */}
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="border-t border-white/30 py-6"
        >
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">

            <p className="text-white/50">
              DESIGN BY{' '}
              <a
                href="https://www.radianttemplates.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white transition-colors hover:text-white/70"
              >
                RADIANT TEMPLATES
              </a>
            </p>

            <p className="text-white/50 sm:text-right">
              POWERED BY{' '}
              <span className="font-semibold text-white">WEBFLOW</span>
            </p>

          </div>
        </motion.div>
      </div>
    </footer>
  )
}