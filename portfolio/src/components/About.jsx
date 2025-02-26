import React from "react";

const About = () => {
  return (
    <div
    name = "about"
    className = "w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className = "pb-8">
          <p className = "text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className = "text-xl mt-20">
          Hello, I'm Manav Bijlani, currently in my third year pursuing a
          Bachelor's degree in Computer Science at The University of Adelaide. I
          am a motivated individual with a passion for problem-solving and STEM
          technologies. I consider myself a lifelong learner, constantly seeking
          education from various sources and engaging with like-minded tech
          enthusiasts. In my free time, I enjoy reading non-fiction books and
          focusing on personal development.
        </p> 

        <br/>

        <p className = "text-xl">
          My interest in algorithmic coding
          and AI has driven me to work across multiple projects and internships
          in my past two years at university. In the future, I aspire to become
          a software engineer, contributing to the development of innovative
          products while continuously enhancing my technical and soft skills.
        </p>

        <br/>

        <p className = "text-xl">
        I love connecting with new people and currently looking for
        opportunities in the software development space, so feel free to reach out.
        </p>

        <br/>

      </div>
    </div>
  );
};

export default About;
