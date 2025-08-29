
import { motion } from "framer-motion";



const projects = [
  { title: "The Grove", url: "https://the-grove-restaurant-mu.vercel.app/", image: "/work2.png" },
  { title: "Tait-Lauren Inc", url: "https://tait-lauren-inc.vercel.app/", image: "/work1.png" }
];


const PortfolioPage = () => {
  return (

      
   <div className="bg-white text-gray-900">


           {/* VIDEO HERO SECTION */}
        <section className="relative w-full h-screen overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
             src={`${process.env.PUBLIC_URL}/Portfolio.mp4`}
            autoPlay
            muted
            loop
            playsInline
          />
          
      {/* Hero Header */}
       <div className="flex items-end sticky h-screen top-0  from-black/20 via-transparent to-black/20">
        <div className="text-[100px] sm:text-[180px] lg:text-[180px] text-[#f2e9e1] text-4xl font-serif leading-none relative xl:-bottom-30 px-8">
          <h1>Portfolio</h1>
          </div>
      </div> 
    
        </section>
     
      

{/* Intro */}
<section className="text-center py-16 bg-[#b12727] text-white">
  <motion.h2
    className="text-4xl md:text-5xl font-serif mb-6 tracking-wide"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    Welcome!
  </motion.h2>
  <motion.p
    className="text-lg md:text-l max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
  >
    To a curated selection of my work in <span className="font-semibold">website development</span> and <span className="font-semibold">content creation</span>, highlighting both design and results.
  </motion.p>
</section>

   {/* Top Performing Content Section */}
<section className="py-20 px-6 md:px-16 lg:px-24 bg-[#A78D7F] text-white">
  <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
    Top Performing Content
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
    {[
      {
        title: "Chocolate Chip Cookies",
        views: "110.6k",
        likes: "4K",
        shares: "54",
        saves: "653",
        followers: "+2K",
        url: "https://www.tiktok.com/t/ZT6gqgWpm/",
        video: "/Content3.mp4",
      },
      {
        title: "Double Chocolate Chip Cookies",
        views: "40k",
        likes: "1,108",
        shares: "70",
        saves: "706",
        followers: "+787",
        url: "https://www.instagram.com/share/BAQFQn7qDJ",
        video: "/Content1.mp4",
      },
      {
        title: "Lemon Cookies",
        views: "38,710",
        likes: "2,600",
        followers: "+407",
        url: "https://youtube.com/shorts/yGFLx7QcSzY?si=Udb5FMVfBzZLZ4AV ",
        video: "/Content2.mp4",
      },
      
    ].map((item, index) => (
      <a
        key={index}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center w-full max-w-sm md:max-w-md lg:max-w-lg transition-transform transform hover:scale-105"
      >
        {/* Video Container */}
        <div className="w-full h-[450px] md:h-[500px] lg:h-[550px] relative rounded-3xl overflow-hidden shadow-2xl border border-white">
          <video
            src={process.env.PUBLIC_URL + item.video}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => {
              e.target.pause();
              e.target.currentTime = 0;
            }}
          />
        </div>



<div className="mt-4 w-full bg-white/10 backdrop-blur-md rounded-xl p-4 text-center space-y-2">
  <h3 className="text-xl md:text-2xl font-semibold text-white">{item.title}</h3>
  <p className="text-sm md:text-base text-gray-200">
    {Object.entries(item)
      .filter(([key]) =>
        ["views", "likes", "shares", "saves", "followers"].includes(key)
      )
      .map(([key, value], i, arr) => (
        <span key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          {i < arr.length - 1 && " • "}
        </span>
      ))}
  </p>
</div>

      </a>
    ))}
  </div>
</section>

  <section className="w-full bg-[#b12727] py-12">
  <h3 className="text-4xl md:text-5xl font-serif tracking-wide text-white text-center">
    Recent Work
  </h3>
</section>
<section className="w-full m-0 p-0">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
    {projects.map((project, index) => (
      <a
        key={index}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group overflow-hidden shadow-lg"
      >
        {/* Image with blur effect */}
        <img
          src={process.env.PUBLIC_URL + project.image} 
          alt={project.title}
          className="w-full h-full object-cover filter blur-sm group-hover:blur-0 transform group-hover:scale-105 transition-all duration-500"
        />

        {/* Overlay fades in on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Project Title */}
        <div className="absolute bottom-4 left-4 text-white text-4xl font-serif font-semibold">
          {project.title}
        </div>
      </a>
    ))}
  </div>
</section>
  
  


    </div>
  );
};
export default PortfolioPage;








