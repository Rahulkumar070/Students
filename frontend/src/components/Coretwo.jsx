import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function Coretwo() {
  const data = [
    {
      image:
        "https://i.ytimg.com/vi/4dprtEzunIk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDxFJH7PnKlUUHnIj9m2e3D-wkhag",
      heading: "START",
      para: "Sheryians Coding School offers a comprehensive course titled:Front-End Domination: Create Anything with Code, designed to teach HTML, CSS, and JavaScript. This course aims to equip learners with the skills to build modern, animated websites and prepare for real-world development challenges.",
      button:
        "https://youtube.com/playlist?list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-&si=zA1iA542OiYFQ-Z1",
    },
    {
      image: "https://i.ytimg.com/vi/_rmSp20X4wo/mqdefault.jpg",
      heading: "PROJECTS",
      para: "Sheryians Coding School's Front-End Domination: Create Anything with Code course offers a series of practical projects designed to enhance your web development skills. Here are some of the key projects included in the curriculum",
      button:
        "https://youtube.com/playlist?list=PLbtI3_MArDOmesZspqwcTGfkfzZNjsATY&si=sxIYq6Vh3H_gl8Pf",
    },
    {
      image: "https://i.ytimg.com/vi_webp/2vVq1xXIL58/mqdefault.webp",
      heading: "MERN",
      para: "Sheryians Coding School offers a comprehensive MERN Stack course designed to equip learners with the skills to build modern, dynamic web applications. The MERN Stack comprises MongoDB, Express.js, React.js, and Node.js, providing a robust framework for full-stack development.",
      button:
        "https://youtube.com/playlist?list=PLbtI3_MArDOmebicV5NFkhBMRJH8vhBEN&si=OZRARXZkpSSC6tIC",
    },
    {
      image:
        "https://i.ytimg.com/vi/HcOc7P5BMi4/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbAl-pPCjHrbAfzvXfZ9IcASmFew",
      heading: "HTML",
      para: "Apna College offers a comprehensive HTML course on their YouTube channel, covering topics from beginner to advanced levels. The course includes detailed tutorials, notes, and code examples to facilitate learning.",
      button: "https://youtu.be/HcOc7P5BMi4?si=-U27OkMpFiLtpMI4",
    },
    {
      image: "https://i.ytimg.com/vi_webp/ESnrn1kAD4E/mqdefault.webp",
      heading: "CSS",
      para: "Apna College is a popular YouTube channel offering beginner-friendly CSS tutorials. Their most viewed videos cover topics like CSS basics and selectors. They also have a dedicated playlist for HTML and CSS. It's a great resource for learning web development.",
      button: "https://youtu.be/ESnrn1kAD4E?si=zn1dggkVVH-kyteh",
    },
  ];
  return (
    <div className="w-full font-['silk'] overflow-hidden opacity-99 p-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#F0F1F4] mt-2 p-2 rounded-xl overflow-hidden sm:flex items-center sm:gap-10 lg:gap-40"
        >
          <img
            className="sm:w-[20rem] mt-17"
            src={item.image}
            alt=""
            border="0"
          />
          <div className="mt-10 font-extrabold sm:flex sm:items-center sm:flex-col ">
            <h1 className="text-[clamp(1rem,2vw,5rem)]">{item.heading}</h1>
            <p className="mt-5">{item.para}</p>
            <button className="mt-2 border rounded p-1 px-7 gap-2 flex items-center">
              <a target="_blank" href={item.button}>
                EXPLORE
              </a>
              <BsArrowRightShort />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Coretwo;
