import React from "react";
import css from "../assets/css.png";
import bootstrap from "../assets/Bootstrap.png";
import unity from "../assets/Unity.png";
import vue from "../assets/Vuejs.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import reactImage from "../assets/reactImage.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png";
import express from "../assets/express.png";
import python from "../assets/Python.png";
import cplusplus from "../assets/C++.png";
import csharp from "../assets/Csharp.png";
import typescript from "../assets/typescript.png";
import insomnia from "../assets/Insomnia.png";
import jira from "../assets/Jira.png";
import confluence from "../assets/Confluence.png";
import slack from "../assets/Slack.png";
import swagger from "../assets/Swagger.png";
import git from "../assets/git.png";
import mysql from "../assets/mysql.png";
import supabase from "../assets/Supabase.png";
import firebase from "../assets/firebase.png";
import forge from "../assets/forge.png";
import docker from "../assets/docker.png";
import gcp from "../assets/googlecloud.png";
import mongodb from "../assets/mongodb.png";
import flask from "../assets/flask.png";
import aws from "../assets/aws.png";


const Skills = () => {
  const frontend = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: reactImage,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: unity,
      title: "Unity",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: vue,
      title: "Vue JS",
      style: "shadow-green-400",
    },
  ];

  const backend = [
    {
      id: 1,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 2,
      src: express,
      title: "Express JS",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: flask,
      title: "Flask",
      style: "shadow-gray-500",
    },
  ];

  const languages = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: cplusplus,
      title: "C++",
      style: "shadow-blue-900",
    },
    {
      id: 3,
      src: csharp,
      title: "C#",
      style: "shadow-purple-600",
    },
    {
      id: 5,
      src: typescript,
      title: "Typescript",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-400",
    },
  ];

  const tools = [
    {
      id: 1,
      src: insomnia,
      title: "Insomnia",
      style: "shadow-purple-500",
    },
    {
      id: 2,
      src: jira,
      title: "Jira",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: confluence,
      title: "Confluence",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: slack,
      title: "Slack",
      style: "shadow-amber-400",
    },
    {
      id: 6,
      src: swagger,
      title: "Swagger",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
  ];

  const databases = [
    {
      id: 1,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: supabase,
      title: "Supabase",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: firebase,
      title: "Firebase",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
  ];

  const deployment = [
    {
      id: 1,
      src: docker,
      title: "Docker",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: gcp,
      title: "Google Cloud Platform",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: forge,
      title: "Atlassian Forge",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: aws,
      title: "Amazon Web Services",
      style: "shadow-yellow-500",
    },
  ];


  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6"></p>
        </div>

        <p className = "font-bold underline">Front End Development</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {frontend.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <p className = "font-bold underline">Back End Development</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {backend.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <p className = "font-bold underline">Programming Languages</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {languages.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <p className = "font-bold underline">Databases</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {databases.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <p className = "font-bold underline">Tools and Technologies</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tools.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <p className = "font-bold underline">Deployment</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {deployment.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
