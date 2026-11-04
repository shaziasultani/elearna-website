
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  Search,
  ShoppingBag,
  ArrowRight,
  Banknote,
} from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isPagesOpen, setIsPagesOpen] = useState(false)
  const [activeCourseType, setActiveCourseType] = useState('Free courses')

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Pages', href: '/pages' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const pagesLinks = [
    { name: 'About', href: '/about-one' },
    { name: 'Course', href: '/course-one' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Pricing', href: '/pricing-one' },
    { name: 'Career', href: '/career' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
  ]

  const courseLinks = {
    'Free courses': [
      {
        category: 'FINANCE',
        title: 'Understanding corporate finance',
        description: 'and investments',
        href: '/courses',
      },
      {
        category: 'DESIGN',
        title: 'Advanced photoshop techniques',
        description: 'for designers',
        href: '/courses',
      },
      {
        category: 'MANAGEMENT',
        title: 'Crisis management and',
        description: 'problem-solving strategies',
        href: '/courses',
      },
      {
        category: 'DEVELOPMENT',
        title: 'Building single page applications',
        description: 'with angular',
        href: '/courses',
      },
    ],

    'Paid courses': [
      {
        category: 'FINANCE',
        title: 'The complete guide to personal',
        description: 'and business finance',
        href: '/courses',
      },
      {
        category: 'DESIGN',
        title: 'Learn interactive Web Design by',
        description: 'building real projects',
        href: '/courses',
      },
      {
        category: 'FINANCE',
        title: 'Operations management and',
        description: 'process improvement',
        href: '/courses',
      },
      {
        category: 'DESIGN',
        title: 'Design systems and pattern',
        description: 'libraries',
        href: '/courses',
      },
      {
        category: 'MANAGEMENT',
        title: 'Grow your brand and reach your',
        description: 'audience',
        href: '/courses',
      },
      {
        category: 'MANAGEMENT',
        title: 'Risk management and business',
        description: 'continuity',
        href: '/courses',
      },
      {
        category: 'DEVELOPMENT',
        title: 'Database integration with',
        description: 'MongoDB',
        href: '/courses',
      },
      {
        category: 'DEVELOPMENT',
        title: 'Full-stack development with the',
        description: 'MERN stack',
        href: '/courses',
      },
    ],
  }

  // Close menus and return to the top of the current/new page.
  // This also works when clicking the link for the page already open.
  const closeMenus = () => {
    setIsCoursesOpen(false)
    setIsPagesOpen(false)
    setIsMenuOpen(false)

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#0c2529]">
      <nav className="relative mx-auto flex min-h-[66px] max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex shrink-0 items-center"
        >
          <img
            src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bf82fe9cef5f78d65_Elearna.svg"
            alt="Elearna Logo"
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => {
                if (link.name === 'Courses') {
                  setIsCoursesOpen(true)
                }

                if (link.name === 'Pages') {
                  setIsPagesOpen(true)
                }
              }}
              onMouseLeave={() => {
                if (link.name === 'Courses') {
                  setIsCoursesOpen(false)
                }

                if (link.name === 'Pages') {
                  setIsPagesOpen(false)
                }
              }}
            >
              {/* Courses Navigation */}
              {link.name === 'Courses' ? (
                <>
                  <button
                    type="button"
                    aria-expanded={isCoursesOpen}
                    onClick={() =>
                      setIsCoursesOpen((prev) => !prev)
                    }
                    className="flex items-center gap-1.5 py-2 text-sm font-medium text-white transition hover:text-[#ffb900]"
                  >
                    Courses

                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        isCoursesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Courses Dropdown */}
                  {isCoursesOpen && (
                    <div
                      className="absolute left-1/2 top-full z-[60] w-[850px] -translate-x-[33%] pt-2"
                      onMouseEnter={() => setIsCoursesOpen(true)}
                    >
                      <div className="grid min-h-[405px] grid-cols-[220px_1fr] overflow-hidden rounded-b-[3px] border-b-[4px] border-[#ffb900] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.12)]">

                        {/* Left Sidebar */}
                        <div className="bg-[#eff7f9] p-4">
                          <button
                            type="button"
                            onClick={() =>
                              setActiveCourseType('Free courses')
                            }
                            className={`mb-1 block w-full rounded-[4px] p-[15px] text-left transition ${
                              activeCourseType === 'Free courses'
                                ? 'bg-white'
                                : 'bg-transparent hover:bg-white/70'
                            }`}
                          >
                            <span className="block text-[13px] font-medium text-[#10282c]">
                              Free courses
                            </span>

                            <span className="mt-2 block text-[13px] leading-[21px] text-[#77838d]">
                              Free learning resources for skill development.
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              setActiveCourseType('Paid courses')
                            }
                            className={`block w-full rounded-[4px] p-[15px] text-left transition ${
                              activeCourseType === 'Paid courses'
                                ? 'bg-white'
                                : 'bg-transparent hover:bg-white/70'
                            }`}
                          >
                            <span className="block text-[13px] font-medium text-[#10282c]">
                              Paid courses
                            </span>

                            <span className="mt-2 block text-[13px] leading-[21px] text-[#77838d]">
                              Courses are available upon purchase. (Requires login)
                            </span>
                          </button>
                        </div>

                        {/* Right Content */}
                        <div className="flex flex-col justify-between p-8">
                          <div
                            className={`grid grid-cols-2 gap-x-8 ${
                              activeCourseType === 'Paid courses'
                                ? 'gap-y-6'
                                : 'gap-y-8'
                            }`}
                          >
                            {courseLinks[activeCourseType].map(
                              (course, index) => (
                                <Link
                                  key={`${course.category}-${index}`}
                                  to={course.href}
                                  onClick={closeMenus}
                                  className="group block"
                                >
                                  <span className="block text-[13px] font-medium text-[#0b2025]">
                                    {course.category}
                                  </span>

                                  <span className="mt-2 block text-[13px] leading-[21px] text-[#75808b] transition-colors duration-200 group-hover:text-[#ffb900]">
                                    {course.title}
                                    <br />
                                    {course.description}
                                  </span>
                                </Link>
                              )
                            )}
                          </div>

                          {/* Promotional Card */}
                          <div className="mt-8 flex min-h-[100px] items-center gap-5 rounded-[4px] bg-[#eff7f9] px-6 py-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#ffb900]">
                              <Banknote size={42} strokeWidth={1.6} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <h3 className="text-[13px] font-medium text-[#10282c]">
                                Increase your potential earnings
                              </h3>

                              <p className="mt-2 text-[13px] leading-[20px] text-[#75808b]">
                                Lorem ipsum dolor sit amet scelerisque
                                <br />
                                integer adipiscing velit sem sed.
                              </p>
                            </div>

                            <Link
                              to="/courses"
                              onClick={closeMenus}
                              aria-label="Explore courses"
                              className="flex h-[32px] w-[36px] shrink-0 items-center justify-center rounded-[4px] bg-[#ffb900] text-[#10282c] transition hover:bg-[#e9a800]"
                            >
                              <ArrowRight size={19} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : link.name === 'Pages' ? (
                <>
                  {/* Pages Navigation */}
                  <button
                    type="button"
                    aria-expanded={isPagesOpen}
                    onClick={() =>
                      setIsPagesOpen((prev) => !prev)
                    }
                    className="flex items-center gap-1.5 py-2 text-sm font-medium text-white transition hover:text-[#ffb900]"
                  >
                    Pages

                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        isPagesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Pages Dropdown */}
                  {isPagesOpen && (
                    <div className="absolute left-1/2 top-full z-[60] w-[171px] -translate-x-1/2 pt-[22px]">
                      <div className="border-b-[4px] border-[#ffb900] bg-white py-[5px] shadow-[0_8px_25px_rgba(0,0,0,0.12)]">
                        {pagesLinks.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            onClick={closeMenus}
                            className="block px-[41px] py-[7px] text-[13px] leading-[21px] text-[#10282c] transition-colors duration-150 hover:text-[#ffb900]"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Home, Blog, Contact */
                <Link
                  to={link.href}
                  onClick={closeMenus}
                  className="flex items-center gap-1.5 py-2 text-sm font-medium text-white transition hover:text-[#ffb900]"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <button
            type="button"
            aria-label="Search courses"
            className="text-white transition hover:text-[#ffb900]"
          >
            <Search size={20} strokeWidth={1.6} />
          </button>

          <button
            type="button"
            aria-label="Shopping bag"
            className="text-white transition hover:text-[#ffb900]"
          >
            <ShoppingBag size={20} strokeWidth={1.6} />
          </button>

          <Link
            to="/login"
            onClick={closeMenus}
            className="border-r border-white/40 pr-3 text-sm font-medium text-white transition hover:text-[#ffb900]"
          >
            Log in
          </Link>

          <Link
            to="/register"
            onClick={closeMenus}
            className="text-sm font-medium text-white transition hover:text-[#ffb900]"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => {
            setIsMenuOpen((prev) => !prev)
            setIsCoursesOpen(false)
            setIsPagesOpen(false)
          }}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0c2529] px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <div key={link.name}>

                {/* Mobile Courses */}
                {link.name === 'Courses' ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setIsCoursesOpen((prev) => !prev)
                      }
                      className="flex w-full items-center justify-between py-2 text-sm font-medium text-white"
                    >
                      Courses

                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isCoursesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isCoursesOpen && (
                      <div className="mt-2 rounded-md bg-white p-4">

                        {/* Mobile Course Type Selector */}
                        <div className="mb-4 rounded bg-[#eff7f9] p-3">
                          <p className="text-sm font-medium text-[#10282c]">
                            {activeCourseType}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-[#75808b]">
                            Explore learning resources and courses.
                          </p>

                          <div className="mt-3 flex gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setActiveCourseType('Free courses')
                              }
                              className={`rounded px-3 py-2 text-xs ${
                                activeCourseType === 'Free courses'
                                  ? 'bg-[#ffb900] text-[#10282c]'
                                  : 'bg-white text-[#10282c]'
                              }`}
                            >
                              Free
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                setActiveCourseType('Paid courses')
                              }
                              className={`rounded px-3 py-2 text-xs ${
                                activeCourseType === 'Paid courses'
                                  ? 'bg-[#ffb900] text-[#10282c]'
                                  : 'bg-white text-[#10282c]'
                              }`}
                            >
                              Paid
                            </button>
                          </div>
                        </div>

                        {/* Mobile Course Links */}
                        <div className="grid grid-cols-1 gap-4">
                          {courseLinks[activeCourseType].map(
                            (course, index) => (
                              <Link
                                key={`${course.category}-${index}`}
                                to={course.href}
                                onClick={closeMenus}
                                className="group block border-b border-gray-100 pb-3"
                              >
                                <span className="text-xs font-semibold text-[#10282c]">
                                  {course.category}
                                </span>

                                <span className="mt-1 block text-xs leading-5 text-gray-500 transition-colors duration-200 group-hover:text-[#ffb900]">
                                  {course.title} {course.description}
                                </span>
                              </Link>
                            )
                          )}
                        </div>

                        <Link
                          to="/courses"
                          onClick={closeMenus}
                          className="mt-4 flex items-center justify-between rounded bg-[#eff7f9] p-3 text-sm text-[#10282c]"
                        >
                          Explore all courses
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    )}
                  </>
                ) : link.name === 'Pages' ? (
                  <>
                    {/* Mobile Pages */}
                    <button
                      type="button"
                      onClick={() =>
                        setIsPagesOpen((prev) => !prev)
                      }
                      className="flex w-full items-center justify-between py-2 text-sm font-medium text-white"
                    >
                      Pages

                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isPagesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isPagesOpen && (
                      <div className="mt-2 border-b-[4px] border-[#ffb900] bg-white py-2">
                        {pagesLinks.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            onClick={closeMenus}
                            className="block px-5 py-2 text-[13px] text-[#10282c] transition-colors hover:text-[#ffb900]"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={closeMenus}
                    className="block py-2 text-sm font-medium text-white transition hover:text-[#ffb900]"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Actions */}
            <div className="flex gap-3 border-t border-white/10 pt-4">
              <Link
                to="/login"
                onClick={closeMenus}
                className="flex-1 rounded border border-white/20 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
              >
                Log in
              </Link>

              <Link
                to="/register"
                onClick={closeMenus}
                className="flex-1 rounded bg-[#ffb900] px-4 py-3 text-center text-sm font-medium text-[#10282c] transition hover:bg-[#e9a800]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
