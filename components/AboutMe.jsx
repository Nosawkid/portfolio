"use client";
import { useState, useEffect } from "react";
import Antigravity from "./ui/Antigravity";

const AboutMe = () => {
  // State to handle responsive particle count
  // We start with a low count to ensure mobile loads fast, then upgrade if on desktop
  const [particleCount, setParticleCount] = useState(100);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      setParticleCount(isMobile ? 120 : 400); // 120 for mobile, 400 for desktop
    }
  }, []);

  return (
    <section className="w-full min-h-[100dvh] bg-black relative flex items-center justify-center overflow-hidden">
      {/* --- LAYER 1: Background Animation (Z-0) --- */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={particleCount} // Dynamic count based on device
          magnetRadius={10}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* --- LAYER 2: Text Content (Z-10) --- */}
      <div className="relative z-10 w-full max-w-5xl px-5 py-16 md:px-6 md:py-24 pointer-events-none">
        <div className="pointer-events-auto">
          {/* Header */}
          {/* Mobile: text-4xl + Center | Desktop: text-7xl + Left */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-10 tracking-tight text-center md:text-left">
            Behind the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Mask
            </span>
          </h2>

          {/* Description Block */}
          {/* Mobile: text-base + Center | Desktop: text-xl + Left */}
          <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light text-center md:text-left">
            <p>
              I am a final year MCA student and a dedicated
              <span className="text-white font-medium">
                {" "}
                Software & Web Developer{" "}
              </span>
              based in Bengaluru. My journey is defined by a relentless drive to
              build scalable applications that solve real-world problems.
            </p>

            <p>
              Specializing in the{" "}
              <strong className="text-white">MERN Stack</strong> and
              <strong className="text-white"> Java</strong>, I thrive in the
              space where complex logic meets intuitive design. Whether I'm
              architecting a robust SaaS platform with <strong>Next.js</strong>{" "}
              or optimizing backend performance, my focus remains on writing
              clean, efficient, and maintainable code.
            </p>

            <p>
              Beyond the syntax, I am deeply interested in the architecture of
              the web, constantly exploring new frameworks in the{" "}
              <strong>JavaScript</strong> ecosystem to push the boundaries of
              what's possible in the browser.
            </p>
          </div>

          {/* Tech Stack Chips */}
          {/* Mobile: Center alignment, smaller text, tighter padding */}
          <div className="flex flex-wrap gap-2 md:gap-3 mt-8 md:mt-10 justify-center md:justify-start">
            {[
              "Software Engineering",
              "Web Development",
              "MERN Stack",
              "Java",
              "JavaScript",
              "Next.js",
              "SaaS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs md:text-base text-white/80 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
