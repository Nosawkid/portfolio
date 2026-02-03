import React from "react";
import GradientBlinds from "./ui/GradientBlinds";

const Hero = () => {
  return (
    <section className="hero min-h-screen relative flex items-center justify-center bg-black">
      {/* Added bg-black to section to ensure consistent dark theme */}

      <div className="absolute inset-0 z-0">
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={30}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="normal"
        />
      </div>

      <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center h-screen w-full">
        {/* CHANGED HERE: mix-blend-difference */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mix-blend-difference text-center tracking-tight font-roboto">
          Hi I&apos;m <br />
          Muhammed Yaseen Sidhik
        </h1>
        <p className="text-xl md:text-2xl font-medium text-white/80">
          Your Friendly Neighbourhood Developer
        </p>
      </div>
    </section>
  );
};

export default Hero;
