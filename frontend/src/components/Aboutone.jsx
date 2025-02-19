import React from "react";
import Marquee from "react-fast-marquee";

function Aboutone() {
  return (
    <div className="h-screen w-full bg-black">
      <div className=" w-full sm:hidden overflow-hidden p-3 font-['gilroy'] bg-black">
        <img
          className="pt-30 scale-180"
          src="https://cdn.prod.website-files.com/65323cffa9038621297ea879/65fc2dacefa372af6697ec9f_FLOWLINE%20PRODUCTSHOOT%20FEB%202024-28-p-1080.jpg"
          alt=""
        />
        <div className="mt-30 text-white">
          <h3>Hi</h3>
          <h3>I'am</h3>
          <h1 className="text-7xl -ml-1">Rahul</h1>
          <p className="opacity-60">
            {" "}
            A passionate web developer with expertise in the MERN stack. I
            specialize in building modern, scalable, and user-friendly web
            applications. With experience in React, Node.js, Express.js,
            MongoDB, and Tailwind CSS, I focus on creating efficient and
            responsive digital solutions. I am always eager to learn new
            technologies and enhance my skills to stay up-to-date with industry
            trends. My goal is to develop impactful projects, contribute to
            innovative solutions, and grow as a full-stack developer.
          </p>
        </div>
      </div>
      <div className="hidden bg-red-700 overflow-hidden h-screen w-full sm:block">
        <img
          className="w-full h-screen sm:scale-x-200 lg:scale-none"
          src="https://cdn.prod.website-files.com/65323cffa9038621297ea879/662a6dcedf0dbc5f958fd06d_Flowline%20hero--2-p-2600.jpg"
          alt=""
        />
        <div className="absolute leading-none top-50 p-10 font-['gilroy'] text-white">
          <h3 className="text-[clamp(2rem,2vw,5rem)] ">I</h3>
          <h3 className="text-[clamp(2rem,2vw,5rem)] ">am</h3>
          <h1 className="text-[9vw] -ml-2">Rahul</h1>
          <p className="w-[30rem] px-1">
            A passionate web developer with expertise in the MERN stack. I
            specialize in building modern, scalable, and user-friendly web
            applications. With experience in React, Node.js, Express.js,
            MongoDB, and Tailwind CSS, I focus on creating efficient and
            responsive digital solutions. I am always eager to learn new
            technologies and enhance my skills to stay up-to-date with industry
            trends. My goal is to develop impactful projects, contribute to
            innovative solutions, and grow as a full-stack developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutone;
