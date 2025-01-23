import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-800 to-black py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">St. Joseph's Institute of Technology</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-yellow-400">
                  Programs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-cover bg-center h-96 text-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?vlsi,circuits,technology')",
        }}
      >
        <div className="bg-black bg-opacity-75 p-8 rounded-lg">
          <h2 className="text-4xl font-extrabold mb-4 text-red-500">
            Placement Empowerment Program
          </h2>
          <p className="text-lg mb-6 font-medium text-gray-300">
            Excelling in VLSI and empowering careers with innovation and skills.
          </p>
          <a
            href="#programs"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-500"
          >
            Explore Programs
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-red-400">About Us</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            The Placement Empowerment Program (PEP) at St. Joseph's Institute of Technology is
            tailored to equip students with exceptional VLSI design expertise, preparing them for
            a successful career in cutting-edge technology fields.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-red-400">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black shadow-lg rounded-md hover:shadow-xl transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2 text-red-500">VLSI Basics</h3>
              <p className="text-gray-400">
                Gain a strong foundation in VLSI design principles and essential technology.
              </p>
            </div>
            <div className="p-6 bg-black shadow-lg rounded-md hover:shadow-xl transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2 text-red-500">Advanced VLSI</h3>
              <p className="text-gray-400">
                Dive into advanced methodologies and tools in VLSI design and verification.
              </p>
            </div>
            <div className="p-6 bg-black shadow-lg rounded-md hover:shadow-xl transform hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2 text-red-500">Career Building</h3>
              <p className="text-gray-400">
                Focused programs on resume building, interview preparation, and career readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-black to-red-800 text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Contact Us</h2>
          <p className="mb-4 text-gray-300">
            Ready to shape your career in VLSI? Reach out to us today!
          </p>
          <a
            href="mailto:pep@stjosephsit.edu"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-4">
        <p>&copy; 2025 St. Joseph's Institute of Technology. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
