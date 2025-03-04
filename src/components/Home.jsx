import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Web Developer",
        "AI Chatbot Developer",
        "Lifelong Learner",
        "Innovative Problem Solver",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        {/* Left Text Container */}
        <div className="md:w-[500px] flex flex-col justify-center h-full">
          <h2
            ref={el}
            className="text-4xl sm:text-7xl font-bold text-white"
          >Full Stack Web Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, Next.js, and GraphQL.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="w-64 md:w-80 flex-shrink-0">
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-2xl mx-auto w-3/4 md:w-full"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
