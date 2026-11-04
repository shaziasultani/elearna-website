
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#062c2e] text-white lg:min-h-[780px]">
      {/* Background Texture and Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(29,75,76,0.55),transparent_55%),radial-gradient(ellipse_at_80%_50%,rgba(0,17,20,0.5),transparent_65%)]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(#b8d5d1 0.6px, transparent 0.6px)',
            backgroundSize: '5px 5px',
          }}
        />

        <div className="absolute right-8 top-10 rotate-12 text-7xl text-[#174548]/50">
          ⚛
        </div>

        <div className="absolute right-[4%] top-[42%] rotate-12 text-6xl text-[#174548]/40">
          ∑
        </div>

        <div className="absolute bottom-6 right-[10%] rotate-12 text-6xl text-[#174548]/40">
          f(x)
        </div>

        <div className="absolute left-[7%] top-[20%] h-8 w-8 rounded-full border-[6px] border-blue-600" />

        <div className="absolute left-[10.5%] top-[39%] h-2 w-2 rounded-full bg-yellow-400" />

        <div className="absolute left-[53.5%] top-[63%] h-3 w-3 rounded-full bg-yellow-400" />
      </div>

      <div className="relative mx-auto grid min-h-[700px] max-w-[1440px] items-center gap-12 px-6 py-12 sm:px-10 lg:min-h-[780px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-14 lg:py-12">

        {/* LEFT SIDE — Student Image */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto flex h-[460px] w-full max-w-[650px] items-end justify-center sm:h-[540px] lg:h-[680px]"
        >
          {/* Yellow Abstract Shape */}
          <div
            className="absolute bottom-[18%] left-[1%] h-[44%] w-[37%] bg-[#b9a52b]"
            style={{
              clipPath:
                'polygon(40% 0%,100% 20%,75% 55%,100% 100%,20% 80%,0% 50%)',
            }}
          />

          {/* Dark Shape Behind Image */}
          <div className="absolute bottom-0 left-[17%] h-[76%] w-[69%] rounded-t-[48%] rounded-b-[28px] bg-[#123d3c]" />

          {/* ADD YOUR IMAGE HERE */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex h-full items-end justify-center">
            {
            <img
              src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8ca55c188e59cf91d8_Banner%20Girl-p-800.webp"
              alt="Student holding books"
              className="h-full w-full object-contain object-bottom"
            />
            }
          </div>

          {/* Achievement Awards Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-[31%] left-0 z-20 flex items-center gap-4 rounded-lg bg-[#f3f8f2] px-5 py-4 text-[#183b39] shadow-lg sm:left-1"
          >
            <Award size={42} strokeWidth={1.3} />

            <div>
              <p className="text-lg font-bold leading-6">125+</p>
              <p className="mt-1 whitespace-nowrap text-xs">
                Achievement awards
              </p>
            </div>
          </motion.div>

          {/* Student Reviews Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-[2%] right-0 z-20 w-[235px] rounded-[24px] bg-[#062c2e] px-5 py-5 text-center shadow-xl sm:right-[2%] sm:w-[260px]"
          >

{/* Trusted By Image */}
<div className="mt-3 flex justify-center">
  <img
    src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66f638f0e915508fda239b73_Trusted%20By%20Image.avif"
    alt="Trusted by students"
    className="h-auto w-[190px] object-contain"
  />
</div>

          
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative z-10 mx-auto w-full max-w-[560px] pb-8 lg:mx-0 lg:pb-0"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-white">
            Online Learning
          </p>

          {/* Larger Heading */}
          <h1 className="text-[44px] font-bold leading-[1.05] tracking-[-1.5px] sm:text-5xl lg:text-[54px] xl:text-[60px]">
            More then{' '}
            <span className="text-[#ffbd00]">25000+</span>
            <br />
            education courses
            <br />
            online
          </h1>

          {/* Larger Description */}
          <p className="mt-6 max-w-[470px] text-base font-medium leading-8 text-gray-200 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus
            sollicitudin mauris tincidunt commodo ornare.
          </p>

          {/* Get Started Button */}
          <a
            href="/courses"
            className="mt-8 inline-flex min-w-[145px] items-center justify-center rounded-[3px] border border-white/20 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#062c2e]"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  )
}
