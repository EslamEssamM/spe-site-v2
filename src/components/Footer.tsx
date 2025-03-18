"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Events", href: "/#events" },
    { name: "Magazines", href: "/#magazines" },
    { name: "Partners", href: "/partners/#home" },
    { name: "Contact", href: "/#sponsors" },
  ];

  const partnershipLinks = [
    { name: "DataCamp Partnership", href: "/data-camp/#home" },
    { name: "ETS TOEFL Partnership", href: "/ets/#home" },
    { name: "Become a Sponsor", href: "/#sponsors" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/SPESuez",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/spescusc",
    },
    {
      name: "Youtube",
      icon: Youtube,
      href: "https://www.youtube.com/@SPESCUSC",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/spesusc/",
    },
  ];

  return (
    <footer
      className="relative bg-gradient-to-b from-gray-900 to-[#0d4b93] text-white overflow-hidden"
      id="contact"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/speLogo.png"
                alt="SPE Suez University Student Chapter"
                className="h-12 mr-3"
              />
              <div>
                <h3 className="font-bold text-lg">SPE Suez</h3>
                <p className="text-sm text-blue-300">Student Chapter</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              The Society of Petroleum Engineers (SPE) Suez University Student
              Chapter is dedicated to fostering technical knowledge,
              professional growth, and networking opportunities for petroleum
              engineering students.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-6 h-0.5 bg-blue-400 mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-6 h-0.5 bg-blue-400 mr-2"></span>
              Partnerships
            </h3>
            <ul className="space-y-3">
              {partnershipLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-lg mt-8 mb-6 flex items-center">
              <span className="w-6 h-0.5 bg-blue-400 mr-2"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.spe.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  SPE International
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.spe.org/en/jpt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  Journal of Petroleum Technology
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info and Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-6 h-0.5 bg-blue-400 mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-400" />
                <span className="text-gray-300">
                  Faculty of Petroleum Engineering, Suez University, Suez, Egypt
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <a
                  href="mailto:info@spesusc.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  info@spesusc.com
                </a>
              </li>
            </ul>

            {/* <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter to receive updates on events and
              opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-12 focus:border-blue-400 focus:ring-blue-400"
                required
              />
              <Button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                disabled={subscribed}
              >
                {subscribed ? "Subscribed!" : <Send className="h-4 w-4" />}
              </Button>
            </form> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SPE Suez University Student Chapter. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
