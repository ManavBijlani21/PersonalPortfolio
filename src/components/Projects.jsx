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
      content : `Built a modern, fully responsive personal portfolio using React.js and Tailwind, ensuring optimal performance, cross-device compatibility, and seamless navigation with an intuitive UI/UX design.
      Created a smooth, engaging user experience by implementing custom animations, smooth scrolling, and leveraging Tailwind's grid and flexbox layouts, enhancing visual appeal, interactivity, and content organization, while maintaining a focus on usability and performance. 
      Demonstrated strong version control and collaboration skills by managing the project with Git and hosting the website on Netlify, deploying production-level code for seamless access and performance.`,
      code : "https://github.com/ManavBijlani21/PersonalPortfolio",
      demo : "manavbijlani-portfolio.netlify.app",
    },
    {
      id: 2,
      src: project1,
      name : "GreenAgenda",
      content : `Led the full-stack development of GreenAgenda, utilizing Vue.js for building a dynamic, responsive frontend and Express.js for creating a scalable and efficient backend, ensuring seamless integration and high performance.
      Orchestrated rigorous testing of RESTful APIs using Insomnia, validating data integrity and optimizing request handling to enhance the reliability of user registrations and the community feedback section, ensuring seamless submission and retrieval of user reviews.
      Spearheaded the integration of an AI-powered chatbot using Botpress, to provide real-time assistance to users, improving engagement and accessibility across the platform.`,
      code : "https://github.com/ManavBijlani21/GreenAgenda",
      demo : "https://github.com/ManavBijlani21/GreenAgenda/blob/main/README.md",
    },
    {
      id: 3,
      src: project2,
      name : "Onboarding Assistant",
      content : `Spearheaded the development of the Smart Onboarding Assistant, leveraging Atlassian Forge to seamlessly integrate an AI-powered ROVO Agent into Jira and Confluence, enhancing the onboarding process for new developers by automating task prioritization and information retrieval. 
      Orchestrated team collaboration and task management through Jira, ensuring efficient workflow and meeting project milestones while maintaining a high standard of code quality. 
      Implemented a robust "What's Next" feature, featuring intelligent task prioritization and document summarization, streamlining developers access to critical Jira tickets, Confluence documents, and team information, improving efficiency and accelerating onboarding.`,
      code : "https://github.com/ManavBijlani21/ForgeHack_Team4",
      demo : "https://github.com/ManavBijlani21/ForgeHack_Team4/blob/main/README.md",
    },
    {
      id: 4,
      src: project4,
      name : "TetrisX",
      content : `Built TetrisX, an innovative C++ game leveraging object-oriented programming (OOP) principles such as inheritance and polymorphism to dynamically manage block manipulation, ensuring efficient and scalable game logic.
      Developed multiple gameplay modes, including Zen Mode, Time Attack, and First 40 Lines, by utilizing SOLID principles to ensure clean, maintainable, and modular code, while enhancing player engagement.
      Employed the raylib library for visualization and conducted comprehensive unit testing for code validation, utilizing CMake to streamline the build process and ensure consistent integration across multiple platforms.`,
      code : "https://github.com/Hussain5001/tetris",
      demo : "https://github.com/Hussain5001/tetris/blob/main/README.md",
    },
    {
      id: 5,
      src: project3,
      name : "BlackJack Card Game",
      content : `Created a multiplayer Blackjack game using Python, leveraging Object-Oriented Programming principles to ensure scalability, maintainability, and seamless gameplay across multiple sessions.
      Implemented exception handling and game permanence features, allowing players to resume games with their current chip count, ensuring a smooth and uninterrupted user experience.
      Demonstrated strong software engineering practices by organizing game logic into modular classes (Deck, Player, Chips) and showcased skills in version control using Git to ensure efficient collaboration and maintainability throughout development.`,
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

              <div className="flex items-center justify-center ">
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
