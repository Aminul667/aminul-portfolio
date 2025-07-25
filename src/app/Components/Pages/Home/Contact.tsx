"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#5F7161] to-[#6D8B74] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#D0C9C0] to-[#EFEAD8] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to start your next project? Let&apos;s create something
            amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Let&apos;s talk about your project
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                I&apos;m always excited to work on new projects and collaborate
                with amazing people. Whether you have a specific idea in mind or
                just want to explore possibilities, I&apos;d love to hear from
                you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-[#D0C9C0] to-[#6D8B74] rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/70">Email</p>
                  <p className="text-white font-semibold">alex@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-[#D0C9C0] to-[#6D8B74] rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/70">Phone</p>
                  <p className="text-white font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-[#D0C9C0] to-[#6D8B74] rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/70">Location</p>
                  <p className="text-white font-semibold">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D0C9C0] focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D0C9C0] focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D0C9C0] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#D0C9C0] to-[#6D8B74] text-[#5F7161] rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60">
            © 2024 Alex Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
