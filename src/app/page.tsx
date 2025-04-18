'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url('https://ubicmzspbeydzoezewvs.supabase.co/storage/v1/object/public/background-image/david-rangel-4m7gmLNr3M0-unsplash.jpg')`,
      }}
    >
      {/* Content Container */}
      <div className="text-center -translate-y-12">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl font-bold bg-blue-400 px-4 py-4 rounded"
        >
          Welcome to my Portfolio
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-lg bg-gray-800 px-4 py-4 rounded-md mt-4"
        >
          I am currently learning web development, building projects, and exploring
          new technologies. For this portfolio, I’ve used:
          <br />
          <strong>React</strong> for building interactive UI, <strong>Next.js</strong> 
          for server-side rendering, <strong>Tailwind CSS</strong> for styling, and
          <strong>Prisma</strong> with <strong>Supabase</strong> as the database backend.
        </motion.p>
      </div>
    </div>
  );
}
