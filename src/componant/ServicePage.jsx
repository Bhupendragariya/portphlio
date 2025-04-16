import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaLaptopCode, FaMobileAlt, FaRobot } from 'react-icons/fa'; // Import icons
import { MdCampaign, MdShoppingCart } from 'react-icons/md'; // Import more icons
import { IoMdConstruct } from 'react-icons/io'; // Import more icons

function ServicePage() {
  return (
    <motion.div
      id="services"
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
          Our Services
        </motion.h2>
        <motion.p
          className="text-lg mb-12"
          initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and move up
          animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and position 0
          transition={{ duration: 1, delay: 0.2 }} // Add a slight delay
        >
          I specialize in providing high-quality, custom web and mobile solutions for businesses of all sizes. Below are the core services I offer to help bring your ideas to life and scale your business:
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <FaLaptopCode className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-lg mb-4">
              I create modern, responsive, and user-friendly websites using the **MERN stack** (MongoDB, Express.js, React, Node.js). Whether you need a landing page, a business website, or a complex web application, I can turn your vision into a reality.
            </p>
            <ul className="text-lg list-disc pl-6">
              <li>Responsive Web Design</li>
              <li>Single Page Applications (SPA)</li>
              <li>Backend Integration with REST APIs</li>
              <li>Custom Web Applications</li>
            </ul>
          </motion.div>

          {/* Mobile App Development */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              <FaMobileAlt className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Mobile App Development</h3>
            <p className="text-lg mb-4">
              I develop mobile apps for both **iOS** and **Android** using **React Native**, offering a seamless user experience across platforms. Whether you need a native app or a cross-platform app, I ensure performance, scalability, and user-friendliness.
            </p>
            <ul className="text-lg list-disc pl-6">
              <li>Cross-Platform Mobile Apps</li>
              <li>Custom Mobile App Solutions</li>
              <li>App Integrations with APIs</li>
              <li>App Store & Google Play Deployment</li>
            </ul>
          </motion.div>

          {/* AI & Machine Learning */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex justify-center mb-4">
              <FaRobot className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">AI & Machine Learning</h3>
            <p className="text-lg mb-4">
              I integrate **AI** and **Machine Learning** solutions into your applications to make them smarter and more efficient. From chatbot integration to recommendation systems, I use cutting-edge technologies to enhance your user experience.
            </p>
            <ul className="text-lg list-disc pl-6">
              <li>AI-Powered Chatbots</li>
              <li>Machine Learning Models</li>
              <li>Data Analytics & Visualization</li>
              <li>Predictive Analytics</li>
            </ul>
          </motion.div>

          {/* Digital Marketing & SEO */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex justify-center mb-4">
              <MdCampaign className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Digital Marketing & SEO</h3>
            <p className="text-lg mb-4">
              I offer **digital marketing** and **SEO** services to help your website gain more visibility and traffic. From search engine optimization to social media management, I create strategies that drive engagement and conversion.
            </p>
            <ul className="text-lg list-disc pl-6">
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Marketing & Strategy</li>
              <li>Email Marketing Campaigns</li>
              <li>Pay-Per-Click (PPC) Campaigns</li>
            </ul>
          </motion.div>

          {/* E-commerce Solutions */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <MdShoppingCart className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">E-commerce Solutions</h3>
            <p className="text-lg mb-4">
              I provide full-scale **e-commerce solutions**, helping businesses set up and manage their online stores. From custom e-commerce websites to payment gateway integrations, I ensure your store runs smoothly and provides a great customer experience.
            </p>
            <ul className="text-lg list-disc pl-6">
              <li>Custom E-commerce Websites</li>
              <li>Payment Gateway Integration</li>
              <li>Inventory Management Systems</li>
              <li>Order and Customer Management</li>
            </ul>
          </motion.div>

          {/* Consulting & Strategy */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <div className="flex justify-center mb-4">
              <IoMdConstruct className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Consulting & Strategy</h3>
            <p className="text-lg mb-4">
              I offer **consulting services** to help businesses define their digital strategy. Whether you need guidance on technology selection or a full project roadmap, I can help you plan and execute your next big project.
            </p>
            <ul className="text-lg list-disc pl-6">
              <li>Technical Consultation</li>
              <li>Project Roadmap & Strategy</li>
              <li>Technology Stack Selection</li>
              <li>Team & Workflow Optimization</li>
            </ul>
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="inline-block py-2 px-6 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ServicePage;
