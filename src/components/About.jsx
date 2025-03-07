import React from "react";

const About = () => {
  return (
    <div
    name = "about"
    className = "w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className = "max-w-screen-lg pl-4 pr-4 pb-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className = "pb-8">
          <br>
          </br>
          <p className = "text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className = "text-xl py-6">
          Hello, I'm Manav Bijlani, currently in my final year pursuing a
          Bachelor's degree in Computer Science at The University of Adelaide. I
          am a motivated individual with a passion for problem-solving, software development and AI. 
          I consider myself a lifelong learner, constantly seeking knowledge from various sources and engaging with like-minded tech enthusiasts. 
        </p> 

        <br/>

        <p className = "text-xl">
        With over 2 years of experience in the software industry, I have a proven ability to quickly adapt to new technologies, with a solid 
        background in modern software development practices, version control, AI chatbot delivery, and both frontend and backend web development. 
        I consistently deliver robust, scalable, and user-friendly solutions tailored to meet diverse business needs.
        </p>

        <br/>

        <p className = "text-xl">
        In my free time, I enjoy reading non fiction books and focusing on personal development. 
        </p>

        <br/>

      </div>
    </div>
  );
};

export default About;
