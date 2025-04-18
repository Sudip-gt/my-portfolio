"use client"
import React from "react"
import { projects } from "./data"
import { motion } from "framer-motion"

const ProjectsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div                           // use motion.div insted of div to animate elements using npm i framer-motion
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.3 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 border hover:shadow-xl transition"
        >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
            <p className="mt-2 text-sm text-gray-500">
              Tech: {project.tech.join(", ")}
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 underline"
              >
                GitHub
              </a>
            </div>
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage