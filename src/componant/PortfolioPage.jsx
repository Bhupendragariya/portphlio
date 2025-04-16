import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

function PortfolioPage() {
  return (
    <motion.div
      id="portfolio"
      className="bg-gray-100 py-20"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1 (fade-in effect)
      transition={{ duration: 1 }} // Duration of the fade-in
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and move up
          animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and position 0
          transition={{ duration: 1 }}
        >
          My Portfolio
        </motion.h2>
        <motion.p
          className="text-lg mb-12"
          initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and move up
          animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and position 0
          transition={{ duration: 1, delay: 0.2 }} // Add a slight delay
        >
          Over the years, I've had the pleasure of working on a variety of projects. Here are some examples of my work:
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move up
            animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and position 0
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="https://source.unsplash.com/1600x900/?technology,web"
              alt="Project 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">E-commerce Website</h3>
              <p className="text-lg mb-4">
                I developed a full-fledged e-commerce website using the MERN stack. The website allows users to browse products, make purchases, and track their orders.
              </p>
              <a
                href="https://github.com/yourusername/project1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src="https://source.unsplash.com/1600x900/?app,react"
              alt="Project 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Task Management App</h3>
              <p className="text-lg mb-4">
                Built a task management web application where users can create, update, and track their tasks, integrated with a RESTful API for managing tasks in a database.
              </p>
              <a
                href="https://github.com/yourusername/project2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <img
              src="https://source.unsplash.com/1600x900/?mobile,reactnative"
              alt="Project 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Mobile App for Fitness</h3>
              <p className="text-lg mb-4">
                Developed a mobile app using React Native that helps users track their workouts, set fitness goals, and monitor their progress in real time.
              </p>
              <a
                href="https://github.com/yourusername/project3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          </motion.div>
        </div>

        {/* Additional Projects */}
        <div className="mt-12">
          <p className="text-lg">
            If you’d like to see more of my work or discuss how I can help with your next project, feel free to get in touch with me. Let’s create something amazing together!
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block py-2 px-6 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioPage;
