"use client";

import { useState, memo, useCallback } from 'react';

const Contact = memo(function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  }, [formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }, [formData]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something <span className="text-[#13bfb5]">Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business ideas into reality? Get in touch and let's discuss how we can help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-background dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Start Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#13bfb5] focus:border-transparent bg-background dark:bg-gray-700 text-foreground"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#13bfb5] focus:border-transparent bg-background dark:bg-gray-700 text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#13bfb5] focus:border-transparent bg-background dark:bg-gray-700 text-foreground"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#13bfb5] focus:border-transparent bg-background dark:bg-gray-700 text-foreground"
                >
                  <option value="">Select project type</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="automation">Process Automation</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#13bfb5] focus:border-transparent bg-background dark:bg-gray-700 text-foreground resize-none"
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#13bfb5] to-[#60a5fa] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#0ea5a5] hover:to-[#4f94f5] transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-background dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                    <span className="text-[#13bfb5] text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">hello@xenostechstudio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-[#60a5fa] text-xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Response Time</h4>
                    <p className="text-gray-600 dark:text-gray-300">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                    <span className="text-[#13bfb5] text-xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Timezone</h4>
                    <p className="text-gray-600 dark:text-gray-300">GMT+7 (Jakarta, Indonesia)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#13bfb5] to-[#60a5fa] p-8 rounded-2xl text-white">
              <h3 className="text-xl font-semibold mb-4">Free Consultation</h3>
              <p className="mb-6 text-teal-100">
                Not sure where to start? Book a free 30-minute consultation to discuss your project ideas and explore the best solutions for your business.
              </p>
              <button className="bg-white text-[#13bfb5] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule Call
              </button>
            </div>

            <div className="text-center p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Follow us for updates and insights</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-10 h-10 bg-[#13bfb5] text-white rounded-full flex items-center justify-center hover:bg-[#0ea5a5] transition-colors">
                  <span className="text-sm">Li</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#60a5fa] text-white rounded-full flex items-center justify-center hover:bg-[#4f94f5] transition-colors">
                  <span className="text-sm">Gh</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#60a5fa] text-white rounded-full flex items-center justify-center hover:bg-[#4f94f5] transition-colors">
                  <span className="text-sm">Tw</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
