import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function Horizontal() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.to(sectionRef.current, {
      translateX: "-200vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      pin.kill();
    };
  }, []);
  return (
    <div ref={triggerRef} className="overflow-hidden bg-black">
      <div
        ref={sectionRef}
        className="w-[300vw] h-screen bg-black text-white font-['silk'] flex flex-row"
      >
        <div className="w-[130vw] items-center sm:justify-between sm:gap-10 h-screen justify-around flex">
          <img className="w-30 sm:w-50" src="/React.svg" alt="" />
          <p className="text-[clamp(1.2rem,2vw,2rem)] hidden sm:block">
            React is a popular JavaScript library for building dynamic and
            interactive user interfaces, especially for single-page
            applications. Developed by Facebook, it follows a component-based
            architecture, making code reusable and easier to manage. React uses
            a virtual DOM to efficiently update and render UI changes, improving
            performance. It supports hooks and state management for handling
            application logic. With tools like Vite and libraries like React
            Router, it simplifies modern web development.
          </p>
          <p className="sm:hidden">React</p>
        </div>
        <div className="w-[130vw] h-screen sm:gap-10 flex items-center justify-around sm:justify-center">
          <img className="w-30 sm:w-50" src="/mongo.svg" alt="" />
          <p className="text-[clamp(1.2rem,2vw,2rem)] hidden sm:block">
            MongoDB is a NoSQL database that stores data in a flexible,
            JSON-like format called BSON. It is highly scalable and efficient,
            making it ideal for modern web applications. Unlike relational
            databases, MongoDB uses collections and documents instead of tables
            and rows, allowing dynamic schema design. It supports powerful
            querying, indexing, and aggregation features for efficient data
            retrieval. MongoDB integrates well with Node.js and Express, making
            it a key part of the MERN stack.
          </p>
          <p className="sm:hidden">MongoDB</p>
        </div>
        <div className="w-[140vw] h-screen flex sm:gap-10 items-center justify-center">
          <img className="w-30 sm:w-50" src="/express.svg" alt="" />
          <p className="text-[clamp(1.2rem,2vw,2rem)] hidden sm:block">
            Express.js is a minimal and fast web framework for Node.js, used to
            build server-side applications and APIs. It simplifies handling
            routes, middleware, and HTTP requests, making backend development
            efficient. Express is highly flexible, allowing integration with
            databases, authentication systems, and third-party libraries. It
            follows a middleware-based architecture, enabling easy request
            handling and response customization. Due to its simplicity and
            scalability, it is widely used in MERN stack applications.
          </p>
          <p className="sm:hidden">Express</p>
        </div>
        <div className="w-[140vw] h-screen flex sm:gap-10 items-center justify-center">
          <img className="w-30 sm:w-50" src="/node.svg" alt="" />
          <p className=" w-[60vw] hidden sm:block  text-[clamp(1.2rem,2vw,2rem)]">
            Node.js is a runtime environment that allows JavaScript to run on
            the server side, built on Chrome’s V8 engine. It is asynchronous and
            event-driven, making it highly efficient for handling multiple
            requests. Node.js is widely used for building scalable web
            applications, APIs, and real-time applications. It has a rich
            ecosystem with npm, providing access to thousands of libraries and
            modules. Combined with frameworks like Express.js, it powers the
            backend of MERN stack applications.
          </p>
          <p className="sm:hidden">Node.Js</p>
        </div>
      </div>
    </div>
  );
}

export default Horizontal;
