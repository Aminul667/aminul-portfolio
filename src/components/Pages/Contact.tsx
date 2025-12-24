"use client";

import { useState } from "react";
import ContactItem from "./ContactItem";
import {
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import AnimatedBackground from "../Shared/Background/AnimatedBackground";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(formData);

    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("❌ Failed to send message: " + data.message);
      }
    } catch (err) {
      toast.error("❌ Something went wrong while sending the message.");
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-green-50/30 to-sage-50 relative overflow-hidden mt-10">
      {/* Animated Background Elements */}
      <AnimatedBackground />

      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-stone-800 mb-4 tracking-tight">
            Let&apos;s{" "}
            <span className="font-serif italic text-sage-600">Connect</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-sage-400 to-mint-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Have a project in mind or just want to chat about creative
            development? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                {/* <h2 className="text-2xl font-light text-stone-800 mb-6">
                  Get in Touch
                </h2> */}
                <div className="space-y-6">
                  <ContactItem
                    icon={<Mail size={20} />}
                    label="Email"
                    value="aminulrahat63@gmail.com"
                    href="mailto:aminulrahat63@gmail.com"
                  />
                  <ContactItem
                    icon={<Phone size={20} />}
                    label="Phone"
                    value="+88 01324184222"
                    href="tel:+8801324184222"
                  />
                  <ContactItem
                    icon={<MapPin size={20} />}
                    label="Location"
                    value="Dhanmondi, Dhaka, Bangladesh"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-stone-800 mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/Aminul667",
                      label: "GitHub",
                      color: "hover:bg-stone-100",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/md-aminul/",
                      label: "LinkedIn",
                      color: "hover:bg-blue-50",
                    },
                    {
                      icon: Mail,
                      href: "mailto:aminulrahat63@gmail.com",
                      label: "Email",
                      color: "hover:bg-sage-50",
                    },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`w-12 h-12 bg-white/60 backdrop-blur-sm border border-sage-200/50 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-800 transition-all duration-300 hover:scale-110 ${color}`}
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-sage-50/50 backdrop-blur-sm rounded-2xl border border-sage-200/30">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">
                  Availability
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Currently available for new projects and collaborations. I
                  typically respond within 24 hours.
                </p>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-white/70 backdrop-blur-sm border-sage-200/30 shadow-lg">
                <h2 className="text-2xl font-light text-stone-800 mb-6">
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-stone-600">
                      Thank you for reaching out. I&apos;ll get back to you
                      soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-stone-700 mb-2"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-sage-200/50 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-stone-700 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-sage-200/50 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-sage-200/50 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={8}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-sage-200/50 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent bg-white/50 backdrop-blur-sm resize-none transition-all duration-300"
                        placeholder="Tell me about your project or just say hello..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send size={18} />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
