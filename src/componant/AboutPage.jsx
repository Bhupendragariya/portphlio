import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

function AboutPage() {
  return (
    <motion.div
      id="about"
      className="bg-gray-100 py-20"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1 (fade-in effect)
      transition={{ duration: 1 }} // Duration of the fade-in
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and move up
          animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and position 0
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and move up
          animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and position 0
          transition={{ duration: 1, delay: 0.2 }} // Add a slight delay
        >
          Hello, I'm Bhupendra Singh, a dedicated and passionate MERN Stack Developer with a strong focus on building modern, scalable, and performance-oriented web applications. I specialize in creating full-stack applications using **MongoDB**, **Express.js**, **React**, and **Node.js**.
        </motion.p>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          With over a year of experience in the tech industry, I’ve developed a keen understanding of both frontend and backend development. My goal is to provide innovative solutions that empower businesses and help them grow through technology.
        </motion.p>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Whether you need a custom web application, a mobile app, or a digital marketing strategy, I’m here to bring your ideas to life. I believe in writing clean, maintainable code and delivering projects on time.
        </motion.p>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          I am also passionate about learning new technologies and staying up to date with the latest trends in software development, AI, and machine learning. When I’m not coding, you’ll find me exploring new ways to integrate AI into my projects or building my portfolio.
        </motion.p>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Feel free to check out my portfolio and let’s collaborate on your next project!
        </motion.p>
      </div>
    </motion.div>
  );
}

export default AboutPage;
