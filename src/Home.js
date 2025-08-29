import React from "react";

export default function Home({
  hasEntered,
  isMuted,
  toggleMute,
  handleEnterSite,
  audioRef,
}) {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#3B3029] font-sans relative overflow-hidden">
      {/* HIDDEN AUDIO PLAYER */}
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/background.mp3`} loop />

      {/* MUTE ICON BUTTON */}
      {hasEntered && (
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
          className="fixed bottom-6 right-6 z-50 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md transition hover:bg-[#f0eae3]"
        >
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#3B3029]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9L15 15M15 9L9 15" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5L6 9H3v6h3l5 4V5z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#3B3029]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5L6 9H3v6h3l5 4V5z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.54 8.46a5 5 0 010 7.07" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.66 6.34a8 8 0 010 11.31"
              />
            </svg>
          )}
        </button>
      )}

      {/* MAIN SITE CONTENT */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/*Pointer */}
        <div className="w-screen h-screen fixed top-0 pointer-events-none z-50">
          <div className="inset-0 absolute pointer-events-none">
            <div
              id="cursor-follow"
              className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
              style={{ left: 0, top: 0, transition: "transform 0.1s ease-out" }}
            >
              <div className="w-8 h-8 rounded-full border-2 border-[#A78D7F] bg-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN SITE CONTENT with blur if NOT entered */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          hasEntered ? "opacity-100 translate-y-0 blur-0" : "opacity-50 translate-y-0 blur-sm"
        }`}
        style={{ filter: hasEntered ? "none" : "blur(8px)" }}
      >
        {/* VIDEO HERO SECTION */}
        <section className="relative w-full h-screen overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={`${process.env.PUBLIC_URL}/intro.mp4`}
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Hero Header */}
          <div className="flex items-end sticky h-screen top-0 from-black/20 via-transparent to-black/20">
            <div className="text-[100px] sm:text-[180px] lg:text-[180px] text-[#f2e9e1] text-4xl font-serif leading-none relative xl:-bottom-30 px-8">
              <h1>Claire</h1>
            </div>
          </div>
        </section>
      </div>

      {/* SPLASH SCREEN BEFORE ENTER */}
      {!hasEntered && (
        <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-md">
          {/* Centered Name */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl font-serif text-[#A78D7F]">Claire Freeman</h1>
          </div>

          {/* Bottom-left Corner Info */}
          <div className="absolute bottom-10 text-8xl left-10 max-w-sm text-left">
            <p className="text-[#A78D7F] text-lg font-light mb-6">
              Welcome! Explore my site with music for a truly immersive experience.
            </p>

            <div className="flex space-x-6">
              <button
                onClick={() => handleEnterSite(true)}
                className="px-6 py-2 border-2 border-[#A78D7F] text-[#A78D7F] text-sm tracking-wide rounded-full hover:bg-[#A78D7F] hover:text-white transition"
              >
                Enter with Music
              </button>
              <button
                onClick={() => handleEnterSite(false)}
                className="px-6 py-2 border-2 border-[#A78D7F] text-[#A78D7F] text-sm tracking-wide rounded-full hover:bg-[#A78D7F] hover:text-white transition"
              >
                Enter without Music
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



