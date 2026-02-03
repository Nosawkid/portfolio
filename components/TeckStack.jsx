"use client";
import React, { useState, useEffect } from "react";
import BounceCards from "./ui/BounceCards";

const TechStack = () => {
  // 1. State to track screen size for responsive animations
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  // Preserved your exact configuration
  const techStack = [
    {
      name: "JavaScript",
      url: "https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg",
    },
    {
      name: "Node.js",
      url: "https://i0.wp.com/andrewbeeken.co.uk/wp-content/uploads/2018/11/nodejs.jpg?fit=1200%2C675&ssl=1",
    },
    {
      name: "Next.js",
      url: "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs",
    },
    {
      name: "Java",
      url: "https://blog.jermdavis.dev/img/2018/2018-12-java_logo_640.jpg",
    },
    {
      name: "React",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASBParCnQhsRkKZ8opkkRjtk9XJ-MHdy0jA&s",
    },
  ];

  const images = techStack.map((tech) => tech.url);

  // 2. Define distinct transforms for Mobile (tighter) vs Desktop (wider)
  const desktopTransforms = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  const mobileTransforms = [
    "rotate(5deg) translate(-60px)", // Tighter spread
    "rotate(0deg) translate(-30px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(30px)",
    "rotate(-5deg) translate(60px)",
  ];

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center bg-black overflow-hidden py-16 md:py-20">
      {/* Background Grid & Gradient */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.5)_0%,rgba(0,0,0,1)_100%)] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12 max-w-5xl mx-auto px-4">
        {/* Header - Responsive Text Sizes */}
        <div className="text-center space-y-3 md:space-y-4">
          <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tighter">
            My Tech Arsenal
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-xs md:max-w-lg mx-auto font-light">
            The tools and frameworks I use to build scalable, high-performance
            applications.
          </p>
        </div>

        {/* Bounce Cards Animation */}
        <div className="relative w-full flex justify-center">
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[500px] h-[200px] md:h-[300px] bg-indigo-500/20 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />

          <BounceCards
            className="cursor-pointer"
            images={images}
            // 3. Responsive Container Dimensions
            containerWidth={isMobile ? 320 : 600}
            containerHeight={isMobile ? 200 : 300}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            // 4. Pass the correct transform array
            transformStyles={isMobile ? mobileTransforms : desktopTransforms}
            enableHover
          />
        </div>

        {/* Accessibility Legend */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4 md:mt-8">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-default"
              role="img"
              aria-label={tech.name}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
              <span className="text-xs md:text-sm font-medium text-white/80 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
