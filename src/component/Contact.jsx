
import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[360px] bg-[#172b2e] sm:h-[420px] lg:h-[460px]">
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
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=60')",
          }}
          role="img"
          aria-label="Students learning together"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Hero Heading */}
        <div className="relative z-10 mx-auto flex h-[280px] max-w-[1200px] items-center px-6 sm:h-[330px] lg:h-[350px] lg:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[58px]"
          >
            Contact us
          </motion.h1>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="relative bg-white px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">

          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pt-2 lg:pt-6"
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-wide text-[#172b2e]">
              Contact us
            </p>

            <h2 className="mb-5 max-w-[560px] text-3xl font-semibold leading-tight tracking-tight text-[#172b2e] sm:text-4xl lg:text-[42px]">
              Are you interested in online learning? Contact us
            </h2>

            <p className="mb-8 max-w-[550px] text-sm leading-7 text-[#687274] sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Neque libero donec
              hendrerit nam id purus suspendisse. Imperdiet nam lorem tempus
              in. Tristique nullam risus semper habitant urna nisl nam elit ut.
            </p>

            {/* Signature */}
            <div className="mt-8">
              <p
                className="mb-2 text-3xl text-[#172b2e]"
                style={{
                  fontFamily: 'cursive',
                  fontStyle: 'italic',
                }}
              >
                Brayden Beckham
              </p>

              <p className="text-sm font-semibold text-[#172b2e]">
                Brayden Beckham
              </p>

              <p className="mt-1 text-xs uppercase tracking-wide text-[#858b8c]">
                Director
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 65 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 rounded-sm bg-white p-6 shadow-[0_8px_35px_rgba(0,0,0,0.08)] sm:p-8 lg:-mt-32 lg:p-9"
          >
            <h2 className="mb-2 text-2xl font-semibold text-[#172b2e]">
              Fill out for contact
            </h2>

            <p className="mb-7 text-sm leading-6 text-[#7a8182]">
              Lorem ipsum dolor sit amet consectetur libero donec.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault()
                alert('Thank you! Your message form has been submitted.')
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name*"
                  required
                  className="w-full border border-[#cbd0d0] bg-white px-4 py-3 text-sm text-[#172b2e] outline-none transition-colors placeholder:text-[#a0a5a5] focus:border-[#172b2e]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Your email*"
                  required
                  className="w-full border border-[#cbd0d0] bg-white px-4 py-3 text-sm text-[#172b2e] outline-none transition-colors placeholder:text-[#a0a5a5] focus:border-[#172b2e]"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-[#cbd0d0] bg-white px-4 py-3 text-sm text-[#172b2e] outline-none transition-colors placeholder:text-[#a0a5a5] focus:border-[#172b2e]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Your message*"
                  required
                  className="w-full resize-y border border-[#cbd0d0] bg-white px-4 py-3 text-sm text-[#172b2e] outline-none transition-colors placeholder:text-[#a0a5a5] focus:border-[#172b2e]"
                />
              </div>

              <label className="flex items-start gap-2 text-xs leading-5 text-[#777f80]">
                <input
                  type="checkbox"
                  name="saveInformation"
                  className="mt-1 accent-[#172b2e]"
                />
                <span>Save information for the next time I comment.</span>
              </label>

              <motion.button
                whileHover={{ scale: 0.96 }}
                whileTap={{ scale: 0.94 }}
                type="submit"
                className="mt-3 inline-flex min-h-[48px] items-center justify-center bg-[#10292d] px-7 py-3 text-sm font-medium text-white transition-transform duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}