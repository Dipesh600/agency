import { Navbar } from "../components/Navbar";
import { Hero } from "../components/HeroSection";
import { AnimateSharedLayout } from "framer-motion";
import { AnimatedPinDemo } from "../components/Projects";

export const LandingPage = () => {
  return (
    <>
      <div className="w-full">
        {/* Navbar Section */}
        <div className="w-full h-16 fixed top-0 left-0 z-50 bg-white shadow-md">
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="w-full h-[calc(100vh-4rem)] mt-16 border-2 rounded-xl">
          <Hero />
        </div>

        {/* Other Content */}
        <div className="w-full">
            <AnimatedPinDemo/>
        </div>
      </div>
    </>
  );
};
