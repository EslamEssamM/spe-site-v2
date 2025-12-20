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
    <footer className="bg-[#050B1A] text-white" id="contact">
      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-[#0D4C92] via-[#00C29A] to-[#0D4C92]"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/brand/spe-logo-light.png"
                alt="SPE Suez University Student Chapter"
                className="h-14 mr-3"
              />
              <div>
                <h3 className="font-bold text-lg">SPE Suez</h3>
                <p className="text-sm text-[#00C29A]">Student Chapter</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              SPE Suez University Student Chapter is the largest SPE student chapter 
              in the MENA region. Established in 2004, we are dedicated to empowering 
              students through technical, professional, and developmental activities.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0F1629] border border-gray-800 hover:bg-[#0D4C92] hover:border-[#0D4C92] rounded-xl flex items-center justify-center transition-all duration-300"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#00C29A] transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Partnerships</h3>
            <ul className="space-y-3">
              {partnershipLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#00C29A] transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-lg mt-8 mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.spe.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0D4C92] transition-colors duration-200 flex items-center"
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
                  className="text-gray-400 hover:text-[#0D4C92] transition-colors duration-200 flex items-center"
                >
                  Journal of Petroleum Technology
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 bg-[#0D4C92]/10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#0D4C92]" />
                </div>
                <span className="text-gray-400">
                  Faculty of Petroleum Engineering, Suez University, Suez, Egypt
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 bg-[#00C29A]/10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#00C29A]" />
                </div>
                <a
                  href="mailto:info@spesuez.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  info@spesuez.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} SPE Suez University Student Chapter. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ by SPE Suez IT Team
          </p>
        </div>
      </div>
    </footer>
  );
}
