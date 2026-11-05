
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    number: "01",
    title: "Flexibility and convenience",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    number: "02",
    title: "Course accessibility",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    number: "03",
    title: "Cost-effectiveness",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
  {
    number: "04",
    title: "Personalized learning",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function WhyWeAre() {
  return (
    <section className="w-full bg-white">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto flex min-h-[275px] max-w-[1200px] flex-col items-center px-6 pb-20 pt-7 text-center sm:px-10"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-[#142b30]">
          WHY WE ARE
        </p>

        <h2 className="max-w-[720px] text-2xl font-semibold leading-[1.35] tracking-[-0.5px] text-[#142b30] sm:text-3xl">
          We believe in our good education and development system and we know
          how to work together to reach greater success
        </h2>
      </motion.div>

      {/* Feature cards */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-stretch px-5 pb-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-0">
        {features.map((feature, index) => (
          <motion.article
            key={feature.number}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -16 }}
            className={`
              group relative flex min-h-[330px] flex-col items-start
              bg-white px-7 py-10
              transition-all duration-700 ease-in-out
              hover:z-10 hover:-translate-y-4
              hover:shadow-[0_18px_45px_rgba(20,43,48,0.08)]
              ${
                feature.number === "02"
                  ? "lg:-translate-y-8 lg:hover:-translate-y-12"
                  : ""
              }
            `}
          >
            <span className="mb-3 text-[28px] font-medium leading-none tracking-tight text-[#3158f5]">
              {feature.number}
            </span>

            <h3 className="mb-2 text-lg font-semibold leading-7 tracking-[-0.3px] text-[#172d32]">
              {feature.title}
            </h3>

            <p className="text-sm leading-[26px] text-[#818181]">
              {feature.description}
            </p>

            {/* Get Started Button */}
            <div className="relative z-50 mt-auto w-full pt-6">
              <Link
                to="/contact"
                className="
                  pointer-events-auto relative z-50
                  inline-flex min-h-[39px] min-w-[132px]
                  cursor-pointer items-center justify-center
                  rounded-[2px] bg-[#10272b]
                  px-6 py-3 text-xs font-medium text-white
                  transition-all duration-500 ease-in-out
                  hover:scale-95
                "
              >
                Get Started
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
