import React from "react";
// import { motion } from "framer-motion";
import portfolio from '../assets/portfolio.png';


// const projects = [
//   {
//     title: "The Grove",
//     url: "https://the-grove-restaurant-9w8874qc1-claire-frees-projects.vercel.app/",
//     image: "/work2.png",
//   },
//   {
//     title: "Main Street",
//     url: "https://mainstreetcarwash-86a46.web.app/",
//     image: "/work1.png",
//   }

// ];

// const PortfolioPage = () => {
//   return (
//     <div className="bg-white text-gray-900">
//         <div
//         className="h-screen bg-cover bg-center flex items-end"
//         style={{ backgroundImage: `url(${portfolio})` }}
//       >
//       {/* Hero Header */}
//       <div className="flex items-end sticky h-screen top-0  from-black/20 via-transparent to-black/20">
//         <div className="text-[80px] sm:text-[150px] lg:text-[180px] text-[#f2e9e1] italic leading-none relative xl:-bottom-10 px-6">
//           <h1>About</h1>
//           </div>
//       </div> 
//       </div>

//       {/* Specialization Section */}
//       <section className="py-20 px-6 md:px-24 bg-[#FAF6F1] text-center">
//         <h2 className="text-3xl md:text-4xl font-serif mb-4">We specialize in</h2>
//         <p className="text-md md:text-lg max-w-2xl mx-auto">
//           Crafting digital experiences, shaping brand narratives, and creating content that captivates and converts.
//         </p>
//       </section>


// {/* Recent Work Section */}
// <div className="w-full m-0 p-0">
//   <h3 className="text-2xl md:text-4xl font-serif mb-12 text-center">
//     Recent Work
//   </h3>
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-1">
//     {projects.map((project, index) => (
//       <a
//         key={index}
//         href={project.url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="relative group overflow-hidden"
//       >
//         {/* Background Image */}
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
//         />

//         {/* Blur Overlay */}
//         <div className="absolute inset-0 bg-white/30 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300"></div>

//         {/* Title */}
//         <div className="absolute bottom-4 text-white left-4 backdrop-blur-sm py-2 px-4 rounded-full border-[#A78D7F] bg-[#A78D7F] px-6 py-2 border-2 ">
//           {project.title}
//         </div>
//       </a>
//     ))}
//   </div>
// </div>


//       {/* Social Media Stats Section */}
//       <section className="py-16 px-6 md:px-24 bg-[#FAF6F1]">
//         <h2 className="text-3xl font-serif text-center mb-12">Social Media Performance</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h3 className="text-xl font-semibold mb-2">Follower Growth</h3>
//             <p className="text-gray-700">Instagram: +15K in 6 months</p>
//             <p className="text-gray-700">TikTok: +22K in 3 months</p>
//           </div>
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h3 className="text-xl font-semibold mb-2">Top Performing Video</h3>
//             <img src="/viral-video-thumbnail.jpg" alt="Viral video" className="rounded-md mb-2" />
//             <p className="text-gray-700">2.3M views | Recipe: Japanese Soufflé Pancakes</p>
//           </div>
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h3 className="text-xl font-semibold mb-2">Content Impact</h3>
//             <p className="text-gray-700">Average engagement rate: 8.7%</p>
//             <p className="text-gray-700">Saved over 10,000 times</p>
//           </div>
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <h3 className="text-xl font-semibold mb-2">Content Impact</h3>
//             <p className="text-gray-700">Average engagement rate: 8.7%</p>
//             <p className="text-gray-700">Saved over 10,000 times</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PortfolioPage;

// ✅ projects array must be defined BEFORE using it
const projects = [
  {
    title: "The Grove",
    url: "https://the-grove-restaurant.vercel.app/",
    image: "/work2.png",
  },
  {
    title: "Main Street",
    url: "https://mainstreetcarwash-86a46.web.app/",
    image: "/work1.png",
  },
];


const PortfolioPage = () => {
  return (
    <div className="bg-white text-gray-900">
      
      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${portfolio})` }}
      >
        <div className="bg-black/30 p-10 rounded-xl">
          <h1 className="text-5xl md:text-7xl font-serif text-white">
            Claire Freeman
          </h1>
          <p className="text-xl md:text-2xl text-white mt-4">
            Web Developer | Content Creator
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 md:px-24 bg-[#FAF6F1] text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">About Me</h2>
        <p className="text-md md:text-lg max-w-3xl mx-auto">
          I create websites that are visually stunning and highly functional while also
          producing engaging content that resonates with audiences worldwide. My goal is to combine creativity and strategy
          to build memorable digital experiences.
        </p>
      </section>

      {/* SPECIALIZATION */}
      <section className="py-16 px-6 md:px-24 bg-white grid md:grid-cols-2 gap-12 text-center">
        <div>
          <h3 className="text-2xl font-serif mb-3">Web Development</h3>
          <p>React, Tailwind, SEO-friendly, responsive websites for businesses and creators.</p>
        </div>
        <div>
          <h3 className="text-2xl font-serif mb-3">Content Creation</h3>
          <p>Food content, recipe development, and social media strategy with proven growth results.</p>
        </div>
      </section>

      {/* WEB DEV PROJECTS */}
      <section className="py-20 px-6 md:px-24">
        <h2 className="text-3xl font-serif text-center mb-12">Recent Websites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition"></div>
              <div className="absolute bottom-4 left-4 bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold">
                {project.title}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SOCIAL MEDIA PERFORMANCE */}
      <section className="py-20 px-6 md:px-24 bg-[#FAF6F1]">
        <h2 className="text-3xl font-serif text-center mb-12">
          Content Creation Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Follower Growth</h3>
            <p>Instagram: +15K in 6 months</p>
            <p>TikTok: +22K in 3 months</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Top Video</h3>
            <img
              src="/viral-video-thumbnail.jpg"
              alt="Viral video"
              className="rounded-md mb-2"
            />
            <p>2.3M views | Japanese Soufflé Pancakes</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Engagement</h3>
            <p>Average engagement rate: 8.7%</p>
            <p>10,000+ saves across platforms</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center py-16 bg-[#A78D7F] text-white">
        <h2 className="text-3xl font-serif mb-4">Let's Work Together</h2>
        <p className="mb-6">Whether you need a stunning website or high-performing content, I can help bring your vision to life.</p>
        <a href="/contact" className="bg-white text-[#A78D7F] px-6 py-3 rounded-lg font-semibold">
          Contact Me
        </a>
      </section>
    </div>
  );
};
export default PortfolioPage;
