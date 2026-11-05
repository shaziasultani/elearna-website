import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Leslie Upton', role: 'INSTRUCTOR', imageUrl: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e54e091763e997592e23aa_Team%20Member-2-p-1080.webp' },
  { name: 'Darnell Kuphal', role: 'INSTRUCTOR', imageUrl: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e54dfe163cc2b616b99dd3_Team%20Member-3-p-1080.webp' },
  { name: 'Steven Robb', role: 'INSTRUCTOR', imageUrl: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e54dddec07c3fa3f20027a_Team%20Member-4-p-1080.webp' },
  { name: 'Wanda Abshire', role: 'INSTRUCTOR', imageUrl: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e54da5dd0e5c0326754533_Team%20Member-5-p-1080.webp' },
  { name: 'Lee Schmitt', role: 'INSTRUCTOR', imageUrl: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e54d38f0ccaa6615e57338_Team%20Member-p-1080.webp' },
  { name: 'Jasmine Konopelski', role: 'INSTRUCTOR', imageUrl: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e54d1d831de420da7dd70f_Team%20Member-6-p-1080.webp' },
  { name: 'Tonya Flatley', role: 'INSTRUCTOR', imageUrl: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e54cf958de957ca8c9be63_Team%20Member-7-p-1080.webp' },
  { name: 'Colin Fay', role: 'INSTRUCTOR', imageUrl: 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66e54cd0f0ccaa6615e5101f_Team%20Member-8-p-1080.webp' },
];

// Motion configuration variants for the container (staggers the children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time delay between each card's animation
    },
  },
};

// Motion configuration variants for each individual card
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 // Starts 40px lower down
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  },
};

export default function ExpertTeam() {
  return (
    <section className="bg-white py-16 px-4 font-sans selection:bg-indigo-100 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase block mb-3">
          CONTACT US
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-2xl mx-auto mb-4">
          Know our expert team agents, they solve your questions
        </h2>
        <p className="text-sm text-gray-4xl text-gray-400 max-w-xl mx-auto italic leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit com id.
        </p>
      </div>

      {/* Animated Grid Container */}
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Triggers once when 10% of the grid enters the viewport
      >
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center text-center group"
            variants={cardVariants}
          >
            {/* Image Wrapper with Zoom-In Hover */}
            <div className="w-full aspect-[3/4] bg-gray-100 mb-4 overflow-hidden rounded-sm">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-contain object-center transition-transform duration-500 ease-out scale-100 group-hover:scale-105"
              />
            </div>
            
            {/* Name */}
            <h3 className="text-sm font-bold text-slate-800 mb-1">
              {member.name}
            </h3>
            
            {/* Role */}
            <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
              {member.role}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

