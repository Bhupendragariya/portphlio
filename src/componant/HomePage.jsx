import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; // Import Framer Motion

function HomePage() {
  return (
    <motion.div
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,web,code')" }}
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1 (fade-in effect)
      transition={{ duration: 1 }} // Duration of the fade-in
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="flex justify-center items-center h-full text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and move up
          animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and position 0
          transition={{ duration: 1, delay: 0.5 }} // Delay the animation for smooth entrance
        >
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Bhupendra Singh</h1>
          <p className="text-xl mb-6">I’m a passionate MERN Stack Developer helping businesses build scalable and high-performing web and mobile apps.</p>
          <p className="text-lg mb-6">I specialize in React, Node.js, MongoDB, Express, and mobile app development with React Native.</p>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move down
            animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and position 0
            transition={{ duration: 1, delay: 1 }} // Delay the button animation
          >
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="inline-block py-2 px-6 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-all"
            >
              Explore My Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HomePage;
