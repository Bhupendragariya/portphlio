import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '', // Added mobile field
    message: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    setIsModalOpen(true); // Open the success modal on form submission
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div id="contact" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg mb-12">
          Have a question, project in mind, or just want to say hi? Fill out the form below, and I'll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            {/* Mobile Number Field */}
            <div className="mb-6">
              <label htmlFor="mobile" className="block text-lg font-medium">Your Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Modal for Form Submission Success */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
              <h3 className="text-2xl font-semibold mb-4">Form Submitted Successfully!</h3>
              <p className="text-lg mb-6">Thank you for reaching out. I will get back to you as soon as possible.</p>
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      
    </div>
  );
}

export default ContactPage;
