import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-2">© 2025 Bhupendra Singh. All rights reserved.</p>
        <div className="flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/bhupendra-singh" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            GitHub
          </a>
          <a href="mailto:bhupendra@example.com" className="text-xl hover:text-gray-400">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
