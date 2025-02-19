import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

function Cardss() {
  const data = [
    {
      image:
        "https://media-hosting.imagekit.io//ab195eeaf3d447f3/pexels-cottonbro-8721327_2.jpg?Expires=1834289171&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x3FFNP5lpegQD8h8SlrZqXOxklUby5-FA36glHGG4N0~mU51xrPuEw5-Yvj2I2NLsC782-~ghrFi3-XHZ8sCN6MeLTXKTjWgF6qpGIrfLKIMuZKcTbOqLpstvqYEYNIZwQyVkxcMNXF1awbvrYKINzNme83zmW67bBBa13bD3MSpvtiPZkIcuPa5no-zRZLkFvmkanZITWtguICpZHyqgs7ny6qprXsh0eqSgXIe6o1oX2-mIBlWf3x3FUQyrEIVGrdRQIPmOjNUT-873kWkde8zTW0ldpHLuG9KlW1On3qhmrjxCmy3WJLzSB7WsHGknG4LXV5vUDp~KmuTAOHApA__",
      heading: "STARTUPS",
      para: "EMPOWERING STARTUPS WITH AGILE DEVELOPMENT AND COST-EFFECTIVESOLUTIONS, WE EXCEL IN PRODUCT THINKING, RAPID PROTOTYPING, MVP DEVELOPMENT, AND COMPREHENSIVE MOBILE AND SAAS SOLUTIONS.",
      button: "EXPLORE",
    },
    {
      image:
        "https://media-hosting.imagekit.io//477a86dde6cc4135/pexels-tima-miroshnichenko-7567529_1.jpg?Expires=1834293625&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cpbJbtRKbIeE8DTytOcM5ExP3GWxBlJ4IM4RLuSBo8yguqgjLQ5pwSA26Z-5gEC37DzN9WwjWFotRJlfnPCtnUSl-g6Hs~8bQyfwiW~6ZOnR~KSeyWIBsCLUcz42C~nqSp3~OD2Eh77778CLt0UOAoHZkOdBo4trj8MkNs5t2xtZlqGUsUXumllOiXyag85yvTOFJKy2PCV7jSsCLC3EA3R1Y7bfE~RKWpJxSZQn0PPGrmpk4YQ0a1Jm79ktNAxIVPypgEYKRRcIvdCCrfN4u5tsngwg-o~xmy2ksHiWiEflvk7rUSlcaYYo0FwhNyjST9B0BbZausGzQTjPUgfWlQ__",
      heading: "WEB 3 COMPANIES ",
      para: "FROM ESTABLISHING LAYER 1 AND LAYER 2 PROTOCOLS TO CRAFTING INTRICATE SMART CONTRACTS AND CREATING ENGAGING FRONTEND, WE SPEARHEAD PROJECTS FORWARD, WHETHER IT'S A MEME COIN OR A COMPLEX ZKPROOF SYSTEM",
      button: "EXPLORE",
    },
    {
      image:
        "https://media-hosting.imagekit.io//7be88302a10b4a82/pexels-wal_-172619-2838227-22776627_1_aMw44Bg.jpg?Expires=1834293995&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0JbuYa~5ooXnZRiQAHGGJWnzojF4MeCaPbMfI0dT4veGFOkNqSwp0O8ZvKPHYcJ49c3ZpgCYiqpju2BVQiw1Qvi0GgsceJjIVFzKsqWz4Z52gZliUbOfkZVLBSvqfRfMDHQgK0vsoPt2ZezcWXpylCX33fgVRZ21u4s3Cr9IfGkW-OBopySXsGqtDMdf9UR4M~vmp7l1oOXDzWI2Xx8vUwC3bHuJ9d-4E6fUFDV~e-bLFXXqxv9fv8WQMUdzKqrkm8XwoxeJ-quEUz~DndDODUhfDCvSuY2pvNEPejtRPRYfsIVDq9MVpudS~oCYRM10RguMcsJiCwVAgOB3E44~Qg__",
      heading: "ENTERPRISES",
      para: "OUR ENTERPRISE SERVICES STREAMLINE OPERATIONS BY BUILDING NEW PRODUCTS, DEPLOYING ERPS, AND ENABLING ACCESS TO NEW TECHNOLOGIES. WITH DILIGENT MONITORING AND SUPPORT, WE SAFEGUARD YOUR BUSINESS AROUND THE CLOCK.",
      button: "EXPLORE",
    },
  ];

  return (
    <div className="w-full font-['silk'] overflow-hidden opacity-99 p-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#F0F1F4] mt-2 p-2 sm:flex items-center gap-40"
        >
          <img
            className="bg-red-500 sm:w-[17rem] w-[8rem] mt-17"
            src={item.image}
            alt=""
            border="0"
          />
          <div className="mt-10 font-extrabold sm:flex gap-10 sm:items-center sm:flex-col ">
            <h1 className="text-[clamp(1rem,2vw,5rem)]">{item.heading}</h1>
            <p className=" mt-5">{item.para}</p>
            <button className="mt-2 border rounded p-1 px-7 gap-2 flex items-center">
              {item.button}
              <BsArrowRightShort />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cardss;

{
  /* <div className="bg-[#F0F1F4] p-2 sm:flex items-center gap-40">
        <img
          className="bg-red-500 sm:w-[17rem] w-[8rem] mt-17"
          src="https://media-hosting.imagekit.io//ab195eeaf3d447f3/pexels-cottonbro-8721327_2.jpg?Expires=1834289171&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x3FFNP5lpegQD8h8SlrZqXOxklUby5-FA36glHGG4N0~mU51xrPuEw5-Yvj2I2NLsC782-~ghrFi3-XHZ8sCN6MeLTXKTjWgF6qpGIrfLKIMuZKcTbOqLpstvqYEYNIZwQyVkxcMNXF1awbvrYKINzNme83zmW67bBBa13bD3MSpvtiPZkIcuPa5no-zRZLkFvmkanZITWtguICpZHyqgs7ny6qprXsh0eqSgXIe6o1oX2-mIBlWf3x3FUQyrEIVGrdRQIPmOjNUT-873kWkde8zTW0ldpHLuG9KlW1On3qhmrjxCmy3WJLzSB7WsHGknG4LXV5vUDp~KmuTAOHApA__"
          alt=""
          border="0"
        />
        <div className="mt-10 font-extrabold sm:flex gap-10 sm:items-center sm:flex-col ">
          <h1 className="text-[clamp(1rem,2vw,5rem)]">STARTUPS</h1>
          <p className="w-[20rem] lg:w-[30rem] mt-5">
            EMPOWERING STARTUPS WITH AGILE DEVELOPMENT AND COST-EFFECTIVE
            SOLUTIONS, WE EXCEL IN PRODUCT THINKING, RAPID PROTOTYPING, MVP
            DEVELOPMENT, AND COMPREHENSIVE MOBILE AND SAAS SOLUTIONS.
          </p>
          <button className="mt-2 border rounded p-1 px-7 gap-2 flex items-center">
            EXPLORE <BsArrowRightShort />
          </button>
        </div>
      </div> */
}
