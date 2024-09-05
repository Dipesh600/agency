import { HeroParallax } from "../ui/hero-parallax";
import { products } from "./HeroParallaxDemo";
import { Navbar } from "./Navbar";

export default function StudentServices() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Parallax */}
        <HeroParallax products={products} />

        {/* Introduction Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Empowering Students with Real-World Projects
            </h2>
            <p className="mt-4 text-gray-600">
              Join our student-oriented programs that provide hands-on experience
              and real-world project development.
            </p>
          </div>
        </section>

        {/* Program Details Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800">
                Guided Internship Programs
              </h3>
              <p className="mt-2 text-gray-600">
                Work on real-world projects with guidance from industry experts.
              </p>
              <a
                href="#"
                className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:shadow-xl transition-shadow duration-500 ease-in-out"
              >
                Learn More
              </a>
            </div>

            {/* Add more cards for different programs and templates */}
          </div>
        </section>
      </div>
    </>
  );
}