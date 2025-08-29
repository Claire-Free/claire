import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Youtube, Music2 } from "lucide-react";
import { Link } from "react-router-dom";


export default function Navbar({ hasEntered, isMuted, toggleMute }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-md h-36" : "bg-transparent h-48"
        }`}

        
      >
        <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-between h-full">
          {/* Left empty space */}
          <div className="w-1/3" />

  

{/* Center logo – appears on scroll only */}
<AnimatePresence>
  {scrolled && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-5 flex justify-center items-center h-28 z-40 pointer-events-none"
    >
      <Link to="/" className="pointer-events-auto">
<img
  src={`${process.env.PUBLIC_URL}/logo.png`}
  alt="Logo"
  className="h-36 sm:h-44 md:h-56 lg:h-72 xl:h-80 max-w-full transition-all duration-500 ease-in-out"
  style={{ cursor: "pointer" }}
/>





      </Link>
    </motion.div>
  )}
</AnimatePresence>

       <div className="fixed top-6 right-0 z-50">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="bg-[#A78D7F] text-white px-3 py-6 rounded-l-xl shadow-md transform hover:scale-105 transition-transform origin-right"
  >
    <span className="text-xl font-Playfair Display bg-[#A78D7F] tracking-wider rotate-90 inline-block whitespace-nowrap">
      MENU
    </span>
  </button>
</div> 





     
 
        </div>
      </motion.header> 

      {/* Mute / Unmute Button */}
{hasEntered && (
  <button
    onClick={toggleMute}
    aria-label={isMuted ? "Unmute" : "Mute"}
    className="fixed bottom-6 right-6 z-[100] bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md transition hover:bg-[#f0eae3]"
  >
    {isMuted ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#3B3029]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9L15 15M15 9L9 15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#3B3029]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.54 8.46a5 5 0 010 7.07" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.66 6.34a8 8 0 010 11.31" />
      </svg>
    )}
  </button>
)}


      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Fullscreen Overlay Panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-[#fffaf7]/90 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center px-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-[#3B3029] hover:text-[#D7BFA6] transition"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
  

              {/* Nav Links with slide-in */}
              <nav className="flex flex-col items-center justify-center flex-1 space-y-10 text-[#A78D7F] text-3xl font-light tracking-wide">
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="transition-colors duration-300 font-serif hover:text-[#C04D4D]"
                  >
                    Home
                  </Link>
                </motion.div>
                  <Link
                    to="/portfolio"
                    onClick={() => setIsOpen(false)}
                    className="transition-colors duration-300 font-serif hover:text-[#C04D4D]"
                  >
                    Portfolio
                  </Link>
                {/* </motion.div> */}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="transition-colors duration-300 font-serif hover:text-[#C04D4D]"
                  >
                    Contact
                  </Link>
                </motion.div>
              </nav>

              {/* Footer */}
              <div className="mb-8 flex flex-col items-center text-[#8b7d71] text-xs tracking-wider space-y-4">
                {/* Social Icons */}
                <div className="flex space-x-5 text-[#b12727]">
                  <a
                    href="https://instagram.com/claireefreeman"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="transition"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@claireefreeman"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className=" transition"
                  >
                    <Music2 size={22} />
                  </a>
                  <a
                    href="https://www.youtube.com/@claireefreeman"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className=" transition"
                  >
                    <Youtube size={22} />
                  </a>
                </div>

                {/* Copyright */}
                <div>Claire Freeman © {new Date().getFullYear()}</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}










