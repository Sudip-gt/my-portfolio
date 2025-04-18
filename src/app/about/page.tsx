'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl bg-white shadow-xl rounded-xl p-8"
      >
        <h1 className="text-3xl font-bold mb-4 text-blue-600">About Me</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Hello! I’m currently learning web development and building personal projects to improve my skills.
          My portfolio was made using <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>,
          and connected to a database using <strong>Prisma</strong> and <strong>Supabase</strong>.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          I enjoy solving problems and learning new technologies. This portfolio is a small step towards
          my goal of becoming a full-stack web developer. 🚀
        </p>
      </motion.div>
    </div>
  );
}
