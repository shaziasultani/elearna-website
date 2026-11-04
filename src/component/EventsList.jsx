import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const events = [
  {
    id: 1,
    title: 'Leadership strategies for higher education institutions',
    location: 'NEW YORK, USA',
    time: '9:00 AM - 7:00 PM',
    date: '4',
    month: 'OCT',
    year: '2024',
    image: '', // Add your image URL here
  },
  {
    id: 2,
    title: 'Building connections through education',
    location: 'NEW YORK, USA',
    time: '10:00 AM - 5:00 PM',
    date: '12',
    month: 'OCT',
    year: '2024',
    image: '', // Add your image URL here
  },
  {
    id: 3,
    title: 'International education and learning conference',
    location: 'LONDON, UK',
    time: '9:00 AM - 6:00 PM',
    date: '18',
    month: 'OCT',
    year: '2024',
    image: '', // Add your image URL here
  },
  {
    id: 4,
    title: 'Technology and innovation in education',
    location: 'NEW YORK, USA',
    time: '9:00 AM - 4:00 PM',
    date: '22',
    month: 'OCT',
    year: '2024',
    image: '', // Add your image URL here
  },
  {
    id: 5,
    title: 'Mindfulness and personal development',
    location: 'CALIFORNIA, USA',
    time: '8:00 AM - 3:00 PM',
    date: '25',
    month: 'OCT',
    year: '2024',
    image: '', // Add your image URL here
  },
  {
    id: 6,
    title: 'The future of modern learning spaces',
    location: 'LONDON, UK',
    time: '10:00 AM - 6:00 PM',
    date: '30',
    month: 'OCT',
    year: '2024',
    image: '', // Add your image URL here
  },
]

export default function EventsList() {
  const [activeEvent, setActiveEvent] = useState(null)

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-[30px] lg:py-[100px]">
      <div className="mx-auto max-w-[1300px]">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10 text-center sm:mb-14"
        >
          <h2 className="mb-3 text-[28px] font-bold leading-tight text-[#172d32] sm:text-[36px] lg:text-[42px]">
            Professional online events
          </h2>

          <p className="mx-auto max-w-[650px] text-[14px] leading-7 text-[#858585]">
            Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque
            eu scelerisque urna a porttitor. Massa nec ipsum sed eget
            facilisis bibendum.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

          {events.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.15,
                ease: 'easeOut',
              }}
              onClick={() =>
                setActiveEvent(activeEvent === event.id ? null : event.id)
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveEvent(activeEvent === event.id ? null : event.id)
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={activeEvent === event.id}
              className="group cursor-pointer"
            >

              {/* Event Image */}
              <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[3px] bg-[#eff3f4]">

                {event.image ? (
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-[#9aa5a8]">
                    Add event image
                  </div>
                )}

                {/* Date Badge */}
                <div className="absolute right-0 top-0 flex items-center gap-1 bg-white px-3 py-2 text-[#172d32] shadow-sm">
                  <span className="text-[24px] font-semibold leading-none">
                    {event.date}
                  </span>

                  <span className="flex flex-col text-[9px] leading-[1.2] text-[#687579]">
                    <span>{event.month}</span>
                    <span>{event.year}</span>
                  </span>
                </div>

                {/* Yellow Animated Text Strip */}
                <AnimatePresence>
                  {activeEvent === event.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 overflow-hidden bg-[#ffb900] py-3"
                    >
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                          duration: 7,
                          ease: 'linear',
                          repeat: Infinity,
                        }}
                        className="flex w-max whitespace-nowrap"
                      >
                        {[1, 2, 3, 4].map((item) => (
                          <span
                            key={item}
                            className="px-3 text-[13px] font-semibold text-[#172d32]"
                          >
                            See event details&nbsp;&nbsp; • &nbsp;&nbsp;
                          </span>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Event Information */}
              <div className="px-1 pt-5 text-center">
                <p className="mb-2 text-[10px] font-medium tracking-wide text-[#929292]">
                  {event.location} &nbsp; • &nbsp; {event.time}
                </p>

                <h3 className="mx-auto max-w-[350px] text-[17px] font-semibold leading-[1.5] text-[#172d32] transition-colors duration-300 group-hover:text-[#d99c00]">
                  {event.title}
                </h3>
              </div>

            </motion.article>
          ))}

        </div>
      </div>
    </section>
  )
}