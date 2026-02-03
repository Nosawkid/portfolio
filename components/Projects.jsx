"use client";
import { useState } from "react";
import CardSwap, { Card } from "./ui/CardSwap";
import Image from "next/image";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

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
      title: "League Sim",
      category: "Sports Tech",
      desc: "A comprehensive Premier League simulator that uses historical data to predict match outcomes and league standings.",
      tech: ["React.js"],
      img: "/soccer.png",
    },
  ];

  return (
    <div className="bg-black w-full min-h-screen p-6 flex flex-col items-center justify-center overflow-hidden relative">
      <h1 className="text-4xl md:text-6xl text-white font-bold mb-12 z-20">
        Selected Works
      </h1>

      {/* CHANGED: max-w-7xl -> max-w-5xl (brings columns closer) */}
      {/* CHANGED: gap-12 -> gap-8 (reduces empty space) */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
        {/* --- LEFT SIDE: TEXT --- */}
        {/* Mobile: Order 2 (Bottom) | Desktop: Order 1 (Left) */}
        <div className="flex flex-col justify-center space-y-6 z-20 pointer-events-none text-center lg:text-left order-2 lg:order-1">
          <div className="transition-all duration-500 ease-in-out">
            <span className="text-indigo-400 font-mono tracking-widest text-sm uppercase mb-2 block animate-fade-in">
              {projects[activeProject].category}
            </span>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {projects[activeProject].title}
            </h2>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
              {projects[activeProject].desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start">
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

        {/* --- RIGHT SIDE: CARDS --- */}
        {/* Mobile: Order 1 (Top) | Desktop: Order 2 (Right) */}
        <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

          <CardSwap
            cardDistance={40}
            verticalDistance={40}
            delay={4000}
            pauseOnHover={false}
            width={320}
            height={450}
            onSwap={(newIndex) => setActiveProject(newIndex)}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-neutral-900 border-neutral-800"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover pointer-events-none"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-bold text-xl">
                      {project.title}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default Projects;
