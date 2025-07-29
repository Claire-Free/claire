import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutPage from "./components/AboutPage";
import About from "./About";
import ContactPage from "./components/ContactPage";
import PortfolioPage from './components/PortfolioPage';
import Footer from "./components/Footer"


function App() {
  const audioRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleEnterSite = (withMusic) => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.muted = !withMusic;
      setIsMuted(!withMusic);
      if (withMusic) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.muted = newMuted;
      setIsMuted(newMuted);

      if (!newMuted) {
        // If user unmutes, try to play audio
        audioRef.current.play().catch(() => {});
      }
    }
  };

  // Sync mute state if user refreshes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <Router>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      {hasEntered && (
        <Navbar
          hasEntered={hasEntered}
          isMuted={isMuted}
          toggleMute={toggleMute}
        />
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
                audioRef={audioRef}
              />
              {hasEntered && <About />}
            </>
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              isMuted={isMuted}
              toggleMute={toggleMute}
              audioRef={audioRef}
            />
          }
        />
         <Route
          path="/portfolio"
          element={
            <PortfolioPage
              isMuted={isMuted}
              toggleMute={toggleMute}
              audioRef={audioRef}
            />
          }
        />

        <Route
          path="/contact"
          element={
            <ContactPage
              isMuted={isMuted}
              toggleMute={toggleMute}
              audioRef={audioRef}
            />
           
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
