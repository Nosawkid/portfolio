"use client";
import { useState, useEffect, useCallback } from "react";
import CardSwap, { Card } from "./ui/CardSwap";
import Image from "next/image";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 1024);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      setIsLoaded(true);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const projects = [
    {
      title: "Decrypt.io",
      category: "Cybersecurity",
      desc: "A secure chat system built with end-to-end encryption, ensuring privacy and data integrity for all users.",
      tech: ["React", "Node.js", "Socket.io", "AES-256"],
      img: "/decrypt.png",
    },
    {
      title: "Omnitrix",
      category: "Simulation",
      desc: "An interactive Ben 10 Omnitrix simulator featuring realistic UI, animations, and alien transformations.",
      tech: ["React.js"],
      img: "/omnitrix.png",
    },
    {
      title: "Orator",
      category: "Productivity",
      desc: "A smart teleprompter application designed for content creators, featuring secure authentication via Kinde.",
      tech: ["Next.js", "Kinde Auth"],
      img: "/orator.png",
    },
    {
      title: "Querry",
      category: "AI & Knowledge Base",
      desc: "A MERN stack application allowing users to maintain a personal knowledge base and query it using the Gemini API.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Gemini API"],
      img: "/querry.png",
    },
    {
      title: "Catch the Snitch",
      category: "Game Development",
      desc: "An interactive Harry Potter themed game where players attempt to catch the Golden Snitch, featuring smooth GSAP animations.",
      tech: ["React.js", "GSAP"],
      img: "/catch.png",
    },
    {
      title: "Habitat AI",
      category: "Student Utility",
      desc: "A platform for MSRIT students to compare PGs and food messes, utilizing NLP and the Gemini API for intelligent insights.",
      tech: ["MongoDB", "Express", "React", "Node.js", "NLP", "Gemini API"],
      img: "/habitat.png",
    },
    {
      title: "Arcane",
      category: "E-commerce (Frontend)",
      desc: "A visually immersive Harry Potter wand shop interface built entirely with Next.js, focusing on frontend design and performance.",
      tech: ["Next.js"],
      img: "/arcane.png",
    },
  ];

  // Stabilize the callback to prevent card stack resetting
  const handleSwap = useCallback((newIndex) => {
    setActiveProject(newIndex);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="bg-black w-full min-h-screen py-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl md:text-6xl text-white font-bold mb-16 z-20 text-center">
        Selected Works
      </h1>

      {isMobile ? (
        <div className="w-full max-w-lg flex flex-col gap-16 z-20">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-6">
              {/* CHANGED: aspect-[4/3] -> aspect-video (16:9) for wider look on mobile */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="text-center">
                <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-white/20 rounded-full text-white/70 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left Text Column */}
          <div className="flex flex-col justify-center space-y-6 z-20 pointer-events-none text-left pl-4">
            <div
              key={activeProject}
              className="transition-all duration-500 ease-in-out animate-fade-in"
            >
              <span className="text-indigo-400 font-mono tracking-widest text-sm uppercase mb-2 block">
                {projects[activeProject].category}
              </span>

              <h2 className="text-7xl font-bold text-white mb-6 leading-tight">
                {projects[activeProject].title}
              </h2>

              <p className="text-gray-400 text-xl leading-relaxed max-w-md">
                {projects[activeProject].desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-8 justify-start">
                {projects[activeProject].tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-white/20 rounded-full text-white/60 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card Column */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

            <CardSwap
              // CHANGED: Wider Dimensions
              width={600}
              height={380}
              // CHANGED: Slightly tighter spacing for wide cards
              cardDistance={40}
              verticalDistance={30}
              delay={4000}
              pauseOnHover={false}
              onSwap={handleSwap}
              // CHANGED: Adjusted positioning to center the wide cards better
              className="!absolute !bottom-0 !right-0 !translate-x-[-5%] !translate-y-[10%]"
            >
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-neutral-900 border-neutral-800 shadow-2xl"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover pointer-events-none"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white font-bold text-2xl">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
