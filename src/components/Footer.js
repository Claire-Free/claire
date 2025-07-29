// components/Footer.js
import React from 'react';
import { Instagram, Music2, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#A78D7F] text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6 px-4">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#D7BFA6] transition-colors duration-200"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.tiktok.com/@yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-[#D7BFA6] transition-colors duration-200"
          >
            <Music2 size={22} />
          </a>
          <a
            href="https://www.youtube.com/@claireefreeman"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-[#D7BFA6] transition-colors duration-200"
          >
            <Youtube size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs tracking-wide">
          Claire Freeman © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
