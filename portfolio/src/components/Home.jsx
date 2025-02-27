import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll';

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Backend Developer
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Hello, I'm Manav Bijlani, currently in my third year pursuing a
            Bachelor's degree in Computer Science at The University of Adelaide.
            I am a motivated individual with a passion for problem-solving and
            STEM technologies. I consider myself a lifelong learner, constantly
            seeking education from various sources and engaging with like-minded
            tech enthusiasts. In my free time, I enjoy reading non-fiction books
            and focusing on personal development. My interest in algorithmic
            coding and AI has driven me to work across multiple projects and
            internships in my past two years at university.
          </p>

          <div>
            <Link to = "portfolio" smooth duration = {500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
