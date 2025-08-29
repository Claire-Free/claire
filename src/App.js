import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import PortfolioPage from "./components/PortfolioPage";
import Footer from "./components/Footer";

function App() {
  const audioRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Start site with or without music
  const handleEnterSite = (withMusic) => {
    setHasEntered(true);

    if (audioRef.current) {
      if (withMusic) {
        audioRef.current.muted = false;
        setIsMuted(false);
        audioRef.current
          .play()
          .catch((err) => console.log("Autoplay blocked:", err));
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  // Toggle mute/unmute globally
  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.muted = newMuted;
      setIsMuted(newMuted);

      // If unmuted, ensure playback resumes
      if (!newMuted) {
        audioRef.current
          .play()
          .catch((err) => console.log("Autoplay blocked:", err));
      }
    }
  };

  // Always sync isMuted with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* GLOBAL AUDIO (persists everywhere) */}
      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/music.mp3`}
        loop
        preload="auto"
      />

      {hasEntered && (
        <Navbar hasEntered={hasEntered} isMuted={isMuted} toggleMute={toggleMute} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home
                hasEntered={hasEntered}
                isMuted={isMuted}
                toggleMute={toggleMute}
                handleEnterSite={handleEnterSite}
              />
              {hasEntered && <About />}
            </>
          }
        />

        <Route
          path="/about"
          element={<AboutPage isMuted={isMuted} toggleMute={toggleMute} />}
        />

        <Route
          path="/portfolio"
          element={<PortfolioPage isMuted={isMuted} toggleMute={toggleMute} />}
        />

        <Route
          path="/contact"
          element={<ContactPage isMuted={isMuted} toggleMute={toggleMute} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
