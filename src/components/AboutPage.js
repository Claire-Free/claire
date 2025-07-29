import React from "react";
import { Link } from "react-router-dom";
import aboutBg from '../assets/about-bg.png';




export default function AboutPage() {
  return (
    <div className="bg-[#f9f5f0] text-[#3e1d1d] font-serif">
  <div
        className="h-screen bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
      {/* Hero Header */}
      <div className="flex items-end sticky h-screen top-0  from-black/20 via-transparent to-black/20">
        <div className="text-[80px] sm:text-[150px] lg:text-[180px] text-[#f2e9e1] italic leading-none relative xl:-bottom-10 px-6">
          <h1>About</h1>
          </div>
      </div> 
      </div>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">

        {/* Intro */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hi, I'm Claire Freeman</h2>
          <p className="text-lg leading-relaxed">
            I’m a marketing specialist, content creator, and web developer passionate about storytelling, strategy, and creating experiences that make people feel something. Whether I’m building digital experiences or developing brand campaigns, my mission is always the same: **bring vision to life with beauty, clarity, and purpose**.
          </p>
        </section>

        {/* Skills Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>📈 **Marketing Strategy** – SEO, social media, email, content, brand building</li>
            <li>🎨 **Content Creation** – Photography, video, editing, storytelling</li>
            <li>💻 **Web Development** – React, JavaScript, HTML/CSS, Tailwind, responsive design</li>
            <li>📊 **Data & Analytics** – Google Analytics, A/B testing, conversion tracking</li>
          </ul>
        </section>

        {/* Career Highlights */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Career Highlights</h3>
          <ul className="space-y-4 text-lg">
            <li><strong>• Influencer & Brand Marketing:</strong> Managed campaigns, partnerships, and content for lifestyle and wellness brands.</li>
            <li><strong>• Developer Portfolio:</strong> Built and deployed multiple custom websites showcasing brand identities and UX strategy.</li>
            <li><strong>• Social Media Growth:</strong> Helped grow multiple accounts through strategy, trends, and community engagement.</li>
          </ul>
        </section>

        {/* Personal Philosophy */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
          <p className="text-lg leading-relaxed">
            I care deeply about creating things that last — whether it’s a beautifully branded website or a video series that brings people joy. I lead with intuition, design with detail, and always think about the person on the other side of the screen.
          </p>
        </section>

        {/* Call to Action */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Let’s Build Something</h3>
          <p className="text-lg mb-6">
            I’m actively seeking full-time roles in marketing or brand strategy and am always open to creative collaborations.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#a63835] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#8b2c2a] transition"
          >
            Get in Touch
          </Link>
        </section>

      </div>
         
    </div>
     
  );
}
