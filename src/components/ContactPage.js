import { FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="Contact.mp4" type="video/mp4" />
      </video>

      {/* Overlay for elegance */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-serif tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let’s Connect
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg font-serif max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
           Reach out via LinkedIn, email, or download my resume below.
        </motion.p>

        {/* Icons */}
        <motion.div
          className="flex space-x-8 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a
            href="https://www.linkedin.com/in/claire-freeman-958b16156/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b12727] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:clairefreeman528@gmail.com"
            className="hover:text-[#b12727] transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="/ClaireFreeman.pdf"
            download
            className="hover:text-[#b12727] transition"
          >
            <FaFileDownload />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
