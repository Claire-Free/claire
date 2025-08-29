export default function AboutMe() {
  return (
    <div className="w-full bg-[#f5f0eb] text-[#2d2d2d]">

      {/* Section: About Me */}
<section className="py-20 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#f5f0eb]">
  <div>
   
   <h2 className="text-4xl font-serif font-semibold leading-tight text-[#b12727]">
  About Me
</h2>
<p className="mt-4 text-base text-gray-700 leading-relaxed">
  Hi, I’m Claire Freeman, a marketing and digital creative with experience in web development, content creation, and campaign strategy. I specialize in building brands and digital experiences that are both visually compelling and results-driven.
  <br /><br />
  Recently, I decided to try my hand at content creation to see firsthand what resonates with audiences. I focused on cooking, a topic I’m truly passionate about, experimenting with ideas and watching how creativity and strategy intersect in real time. This hands-on experience gave me valuable insights into audience engagement, trends, and performance-driven content.
  <br /><br />
  My background spans marketing strategy, social media, analytics, and website development. I thrive in fast-paced environments where I can combine creativity and analytical thinking to bring ideas from concept to execution.
  <br /><br />
  I’m seeking opportunities where I can contribute my skills, continue learning, and help teams grow through intentional, measurable, and creative work.
</p>


  </div>
  <div className="flex justify-center items-center">
    <img
      src={`${process.env.PUBLIC_URL}/Aboutme2.png`}
      alt="Claire Freeman"
      className="rounded-lg w-full max-w-md object-cover"
    />
  </div>
</section>

     
    </div>
  );
}
