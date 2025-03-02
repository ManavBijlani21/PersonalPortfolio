import React from "react";
import {useState, useEffect} from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Full Stack Web Developer", "Software Engineer", "UI / UX Designer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period =  2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting){
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }
    else if (isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  }



  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
  <div className="max-w-screen-lg w-full mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
    
    {/* Left Text Container */}
    <div className="w-[400px] md:w-[500px] flex flex-col justify-center h-full">
      <h2 className="text-4xl sm:text-7xl font-bold text-white min-h-[100px] text-left">
        {text}
      </h2>
      <p className="text-gray-500 py-4 max-w-md">
        I have 8 years of experience building and designing software. Currently, I love to work on web applications using technologies like React, Tailwind, Next.js, and GraphQL.
        
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
        className="rounded-2xl mx-auto w-full h-auto"
      />
    </div>

  </div>
</div>

  );
}

export default Home;
