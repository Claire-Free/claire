// import React from "react";
// import { FaEnvelope, FaLinkedin, FaFileDownload } from "react-icons/fa";


// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-[#f9f5f0] text-[#3e1d1d] px-6 py-20 flex items-center justify-center font-serif">
//       <div className="max-w-3xl w-full bg-white border border-[#e7ddd3] rounded-2xl shadow-xl p-10">

//         <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#5c2a2a]">
//           Let’s Connect
//         </h1>

//         <p className="text-lg text-[#4a3c36] mb-8 leading-relaxed">
//           I'm currently open to full-time roles in marketing, brand strategy, or digital content. If you're hiring — feel free to reach out!
//         </p>

//         <div className="space-y-4">
//           {/* Email */}
//           <div className="flex items-center gap-4">
//             <FaEnvelope className="text-[#a63835] text-xl" />
//             <a
//               href="mailto:your.email@example.com"
//               className="text-[#5c2a2a] underline hover:text-[#a63835] transition"
//             >
//               clairefreeman528@gmail.com
//             </a>
//           </div>

//           {/* LinkedIn */}
//           <div className="flex items-center gap-4">
//             <FaLinkedin className="text-[#a63835] text-xl" />
//             <a
//               href="https://www.linkedin.com/in/claire-freeman-958b16156/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#5c2a2a] underline hover:text-[#a63835] transition"
//             >
//               linkedin.com/in/claire-freeman
//             </a>
//           </div>

//           {/* Resume */}
//           <div className="flex items-center gap-4">
//             <FaFileDownload className="text-[#a63835] text-xl" />
//             <a
//               href="/Claire-Freeman-Resume.pdf"
//               download
//               className="text-[#5c2a2a] underline hover:text-[#a63835] transition"
//             >
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// }


// import React from "react";
// import { FaEnvelope, FaLinkedin, FaFileDownload } from "react-icons/fa";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-[#FAF6F1] flex flex-col md:flex-row font-serif">
      
//       {/* LEFT SIDE - HERO TEXT */}
//       <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-20 bg-gradient-to-b from-[#FAF6F1] to-[#f1e5d8]">
//         <h1 className="text-5xl md:text-6xl font-heading text-[#5c2a2a] mb-6 leading-tight">
//           Let’s Create <br /> Something Together
//         </h1>
//         <p className="text-lg md:text-xl text-[#4a3c36] leading-relaxed max-w-md mb-10">
//           I specialize in marketing, brand strategy, and digital content creation.  
//           Whether you're looking for a collaborator or hiring full-time—let’s connect.
//         </p>

//         {/* Floating Social Links */}
//         <div className="flex gap-6 mt-4">
//           <a href="mailto:clairefreeman528@gmail.com" className="p-4 bg-white shadow-md rounded-full hover:scale-110 transition">
//             <FaEnvelope className="text-2xl text-[#a63835]" />
//           </a>
//           <a href="https://www.linkedin.com/in/claire-freeman-958b16156/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-md rounded-full hover:scale-110 transition">
//             <FaLinkedin className="text-2xl text-[#a63835]" />
//           </a>
//           <a href="/Claire-Freeman-Resume.pdf" download className="p-4 bg-white shadow-md rounded-full hover:scale-110 transition">
//             <FaFileDownload className="text-2xl text-[#a63835]" />
//           </a>
//         </div>
//       </div>

//       {/* RIGHT SIDE - CONTACT CARD */}
//       <div className="flex-1 flex items-center justify-center bg-white border-l border-[#e5d8cc]">
//         <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10">
//           <h2 className="text-3xl font-heading text-[#5c2a2a] mb-6">Send a Message</h2>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#a63835]"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#a63835]"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows="4"
//               className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#a63835]"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-[#a63835] text-white py-3 rounded-md text-lg hover:bg-[#872c2a] transition"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { FaEnvelope, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F1] flex flex-col md:flex-row font-serif">
      
      {/* LEFT SIDE - HERO TEXT */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-20 bg-gradient-to-b from-[#FAF6F1] to-[#f1e5d8]">
        {/* <h1 className="text-5xl md:text-6xl font-heading text-[#5c2a2a] mb-6 leading-tight">
          Let’s Work <br /> Together
        </h1>
        <p className="text-lg md:text-xl text-[#4a3c36] leading-relaxed max-w-md mb-10">
          I'm open to opportunities in **marketing, brand strategy, and digital content creation**.  
          If you're hiring or want to collaborate, let’s connect!
        </p> */}
 <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#5c2a2a]">
           Let’s Connect         </h1>

         <p className="text-lg text-[#4a3c36] mb-8 leading-relaxed">
           I'm currently open to full-time roles in marketing, brand strategy, or digital content. If you're hiring — feel free to reach out!
         </p>
      
        {/* Floating Social Links */}
        <div className="flex gap-6">
          <a href="mailto:clairefreeman528@gmail.com" className="p-4 bg-white shadow-md rounded-full hover:scale-110 transition">
            <FaEnvelope className="text-2xl text-[#a63835]" />
          </a>
          <a href="https://www.linkedin.com/in/claire-freeman-958b16156/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-md rounded-full hover:scale-110 transition">
            <FaLinkedin className="text-2xl text-[#a63835]" />
          </a>
          <a href="/Claire Freeman.pdf" download className="p-4 bg-white shadow-md rounded-full hover:scale-110 transition">
            <FaFileDownload className="text-2xl text-[#a63835]" />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - AUTOPLAY VIDEO */}
      <div className="flex-1 relative">
        <video
          src={`${process.env.PUBLIC_URL}/First episode.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />
        {/* Overlay for luxury vibe */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  );
}
