
import { motion } from "framer-motion";

export default function HeroFAQPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[540px] items-center justify-center overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/668cb7adec02e140422345de/66e034b57b97c18456fc8163_FAQ%20Hero.webp"
          alt="Student speaking on the phone"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/65" />

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl px-5 text-center text-white"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Frequently asked questions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
