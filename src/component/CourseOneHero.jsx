
import { motion } from "framer-motion";
import {
  PencilRuler,
  BriefcaseBusiness,
  Layers3,
  Megaphone,
  CodeXml,
  Languages,
} from "lucide-react";

const categories = [
  { title: "Web design\nand creative", icon: PencilRuler },
  { title: "Finance and\naccounting", icon: BriefcaseBusiness },
  { title: "IT and\nsoftware", icon: Layers3 },
  { title: "Digital\nmarketing", icon: Megaphone },
  { title: "Web\ndevelopment", icon: CodeXml },
  { title: "Content and\nlanguage", icon: Languages },
];

export default function CourseOneHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#102629]">
        <div className="relative flex min-h-[510px] items-center justify-center px-5 py-24 sm:min-h-[560px]">

          {/* Decorative background pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.09]">
            <div className="absolute -left-16 top-32 h-40 w-40 rounded-full border-2 border-[#6b9a99]" />
            <div className="absolute right-16 top-16 h-44 w-44 rotate-45 border-2 border-[#6b9a99]" />
            <div className="absolute bottom-16 left-[18%] h-24 w-24 rotate-12 border-2 border-[#6b9a99]" />
            <div className="absolute bottom-20 right-[20%] h-32 w-32 rounded-full border-2 border-[#6b9a99]" />
            <div className="absolute left-[45%] top-10 h-32 w-32 rounded-full border-2 border-[#6b9a99]" />
          </div>

          {/* Hero heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 mx-auto max-w-3xl text-center"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-200">
              Start with
            </p>

            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl">
              Professional online
              <br />
              courses
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES SECTION - BELOW HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#eff5f6]">
                  <Icon
                    size={34}
                    strokeWidth={1.2}
                    className="text-[#263b3e]"
                  />
                </div>

                <h3 className="whitespace-pre-line text-base font-semibold leading-snug text-[#203438]">
                  {category.title}
                </h3>
              </div>
            );
          })}

        </div>
      </motion.section>
    </>
  );
}
