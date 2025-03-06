import React from "react";
import project1 from "../assets/portfolio/project_1.png";
import project2 from "../assets/portfolio/project_2.png";
import project3 from "../assets/portfolio/project_3.png";
import project4 from "../assets/portfolio/project_4.png";
import project5 from "../assets/portfolio/project_5.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: project5,
      name : "Personal Portfolio",
      content : `Developed a full-stack e-commerce platform from scratch using React and Tailwind for UI/UX design.
      Developed a full-stack e-commerce platform from scratch using React and Tailwind for UI/UX design.
      Integrated Razorpay payment gateway for seamless real payments, ensuring a smooth transaction experience.`,
      code : "https://github.com/ManavBijlani21/PersonalPortfolio",
      demo : "manavbijlani-portfolio.netlify.app",
    },
    {
      id: 2,
      src: project1,
      name : "GreenAgenda",
      content : `Developed a full-stack e-commerce platform from scratch using React and Tailwind for UI/UX design.
      Developed a full-stack e-commerce platform from scratch using React and Tailwind for UI/UX design.
      Integrated Razorpay payment gateway for seamless real payments, ensuring a smooth transaction experience.`,
      code : "https://github.com/ManavBijlani21/GreenAgenda",
      demo : "https://github.com/ManavBijlani21/GreenAgenda/blob/main/README.md",
    },
    {
      id: 3,
      src: project2,
      name : "Onboarding Assistant",
      content : `Developed a full-stack e-commerce platform from scratch using React and Tailwind for UI/UX design.
      Developed a full-stack e-commerce platform from scratch using React and Tailwind for UI/UX design.
      Integrated Razorpay payment gateway for seamless real payments, ensuring a smooth transaction experience.`,
      code : "https://github.com/ManavBijlani21/ForgeHack_Team4",
      demo : "https://github.com/ManavBijlani21/ForgeHack_Team4/blob/main/README.md",
    },
    {
      id: 4,
      src: project4,
      name : "TetrisX",
      content : `Developed a full-stack e-commerce platform from scratch using React and Tailwind for UI/UX design.
      Developed a full-stack e-commerce platform from scratch using React and Tailwind for UI/UX design.
      Integrated Razorpay payment gateway for seamless real payments, ensuring a smooth transaction experience.`,
      code : "https://github.com/Hussain5001/tetris",
      demo : "https://github.com/Hussain5001/tetris/blob/main/README.md",
    },
    {
      id: 5,
      src: project3,
      name : "BlackJack Card Game",
      content : `Developed a full-stack e-commerce platform from scratch using React and Tailwind for UI/UX design.
      Developed a full-stack e-commerce platform from scratch using React and Tailwind for UI/UX design.
      Integrated Razorpay payment gateway for seamless real payments, ensuring a smooth transaction experience.`,
      code : "https://github.com/ManavBijlani21/Blackjack-Game",
      demo : "https://github.com/ManavBijlani21/Blackjack-Game/blob/main/README.md",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pb-20 pt-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div classname="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6"></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, name, content, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <h2 className="text-lg font-semibold text-center mt-3 underline">{name}</h2>
              
              <ul className="text-left mt-2 space-y-1">
              {content.split("\n").map((line, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="mr-2">●</span>
                  <span>{line.trim()}</span>
                </li>
              ))}
            </ul>

              <div className="flex items-center justify-center">
                {/* Create the onclick variables and fetch the links from portfolios array and open in a new window.  */}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(demo, "_blank")}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(code, "_blank")}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
