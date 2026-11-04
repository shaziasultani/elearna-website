
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    category: 'CAREER',
    title: 'Improve knowledge retention with visual learning',
    date: 'October 4, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66ff7196253a4813606a5f52_Blog%20Small%20Thumbnail-12-p-500.webp',
  },
  {
    id: 2,
    category: 'DEVELOPMENT',
    title: 'Master online learning with proven strategies',
    date: 'October 4, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66ff6e0a6f9b375fbca970fe_Blog%20Small%20Thumbnail-11-p-500.webp',
  },
  {
    id: 3,
    category: 'TEACHING',
    title: 'How to enhance your learning experience today',
    date: 'October 3, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66ff6a72dd07492f0cbb0a6d_Blog%20Small%20Thumbnail-10-p-500.webp',
  },
  {
    id: 4,
    category: 'CAREER',
    title: 'The evolution of teaching tools in the 21st century',
    date: 'September 17, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e93b2410f6e96cbbc70c8d_Blog%20Small%20Thumbnail-p-500.webp',
  },
  {
    id: 5,
    category: 'DEVELOPMENT',
    title: 'The role of parental involvement in academic achievement',
    date: 'September 16, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e93b734e839a98823ff445_Blog%20Small%20Thumbnail-3-p-500.webp',
  },
  {
    id: 6,
    category: 'TEACHING',
    title: 'The role of technology in modern classrooms',
    date: 'September 14, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e93bb940c86a7d79f1e185_Blog%20Small%20Thumbnail-8-p-500.webp',
  },
  {
    id: 7,
    category: 'CAREER',
    title: 'How globalization is shaping curriculum development',
    date: 'September 13, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e93bf4c8aeb4955eb8be4c_Blog%20Small%20Thumbnail-2-p-500.webp',
  },
  {
    id: 8,
    category: 'DEVELOPMENT',
    title: 'How personalized learning is changing education',
    date: 'September 12, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e93c5403c2878a6a504f80_Blog%20Small%20Thumbnail-7-p-500.webp',
  },
  {
    id: 9,
    category: 'CAREER',
    title: 'Empowering teachers with continuous professional development',
    date: 'September 11, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e93c6c4ffe823e68be9c67_Blog%20Small%20Thumbnail-6-p-500.webp',
  },
  {
    id: 10,
    category: 'TEACHING',
    title: 'Advances in educational technology and online learning',
    date: 'September 2, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e93c8560cf638d71097d98_Blog%20Small%20Thumbnail-4-p-500.webp',
  },
  {
    id: 11,
    category: 'CAREER',
    title: 'Exploring the benefits of project-based learning',
    date: 'September 2, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e93c9a40c86a7d79f2a22b_Blog%20Small%20Thumbnail-9-p-500.webp',
  },
  {
    id: 12,
    category: 'DEVELOPMENT',
    title: 'Promoting inclusivity and diversity in education',
    date: 'August 29, 2024',
    image:
      'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e94a24c519df88d828f365_Blog%20Small%20Thumbnail-5-p-500.webp',
  },
]

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)

  const postsPerPage = 6
  const startIndex = (currentPage - 1) * postsPerPage

  const currentPosts = blogPosts.slice(
    startIndex,
    startIndex + postsPerPage
  )

  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const changePage = (page) => {
    setCurrentPage(page)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Blog Hero */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#172222] sm:min-h-[580px] lg:min-h-[600px]">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1280&q=50')",
          }}
          role="img"
          aria-label="People working and learning together"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

        {/* Hero Text */}
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1440px] items-center px-5 pb-16 pt-16 sm:px-8 lg:min-h-[470px] lg:px-[30px]">
          <div className="max-w-[700px] text-white">
            <motion.p
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.3,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 text-sm font-semibold uppercase tracking-[2px]"
            >
              News and journals
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.6,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[680px] text-[42px] font-semibold leading-[1.12] tracking-[-1.5px] sm:text-[52px] lg:text-[64px]"
            >
              Planning to transition
              <br className="hidden sm:block" /> to a new career?
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="bg-white px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-x-7 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post, index) => (
              <motion.article
                key={`${currentPage}-${post.id}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex h-full flex-col overflow-hidden border border-[#d5d5d5] bg-white transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Card Image */}
                <div className="relative aspect-[1.5/1] w-full overflow-hidden bg-[#f0f0f0]">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      width="500"
                      height="333"
                      className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-95"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-sm text-gray-400">
                        Add your image
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Details */}
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5 sm:px-5 sm:pb-6">
                  <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.5px] text-[#222222]">
                    {post.category}
                  </p>

                  <h2 className="mb-5 text-[18px] font-medium leading-[1.4] text-[#172222] transition-colors duration-300 group-hover:text-[#e9a900] sm:text-[19px]">
                    {post.title}
                  </h2>

                  <div className="mt-auto pt-1">
                    <p className="text-[13px] text-[#777777]">
                      {post.date}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-4 text-[13px] text-[#172222]">
            {currentPage > 1 && (
              <button
                type="button"
                onClick={() => changePage(currentPage - 1)}
                className="inline-flex items-center gap-1 text-[#777777] transition-colors hover:text-[#e9a900]"
              >
                <ArrowLeft size={14} />
                Previous
              </button>
            )}

            <span>
              {currentPage} / {totalPages}
            </span>

            {currentPage < totalPages && (
              <button
                type="button"
                onClick={() => changePage(currentPage + 1)}
                className="inline-flex items-center gap-1 transition-colors hover:text-[#e9a900]"
              >
                Next
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
