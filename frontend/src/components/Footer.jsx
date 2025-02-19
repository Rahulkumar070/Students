import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError(true);
      setMessage("User is not valid");
      return;
    }

    try {
      const response = await fetch(
        "https://students-backend-4k7j.onrender.com/api/emails",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage("Email saved successfully!");
        setEmail(""); // Clear input after successful submission
        setError(false);
      } else {
        setError(true);
        setMessage(data.message || "Something went wrong");
      }
    } catch (err) {
      setError(true);
      setMessage("Server error. Try again later.");
    }
  };

  return (
    <div className="w-full p-5 opacity-99 font-['silk'] h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col items-start w-full max-w-md mx-auto">
          <div className="relative mt-20 w-full">
            <h1 className="text-2xl">Send Me Email</h1>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 pr-10 font-['gilroy'] border rounded-lg outline-none ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              onClick={handleSubmit}
              className="absolute inset-y-0 right-2 flex items-center px-2 text-gray-500"
            >
              <ArrowRight className="w-10 h-10 p-2 mr-2 mt-8 cursor-pointer" />
            </button>
          </div>
          {message && (
            <p
              className={`mt-1 text-sm ${
                error ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between sm:items-center sm:justify-center sm:gap-47 mt-5 ">
        <div className="flex flex-col gap-5">
          <div>
            <h1>Developed By:</h1>
            <h1>Rahul Kumar Pal</h1>
          </div>
          <div>
            <h1>General Enquires</h1>
            <h1 className="font-['gilroy']">rk035199@gmail.com</h1>
          </div>
          <div>
            <h1 className="font-['gilroy']">©2025 Rahul Kumar Pal</h1>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rahul-kumar-pal-854005181/"
          >
            LinkdIn
          </a>
          <a href="">Instagram</a>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-20">
        <h1 className="text-2xl">IS YOUR BIG IDEA</h1>
        <h1 className="text-2xl">READY TO GO WILD?</h1>
      </div>
    </div>
  );
}

export default Footer;

// <div className="flex items-center justify-between p-5">
//         <div>
//           <h1>RESOURCES</h1>
//           <h3>HTML</h3>
//           <h3>CSS</h3>
//           <h3>JS</h3>
//           <h3>MERN</h3>
//         </div>
//         <div>
//           <h1>Contact Info</h1>
//           <h3>rk035199@gmail.com</h3>
//           <a href="">Instagram</a>
//           <a href="">LinkdIn</a>
//         </div>
//         <div>
//           <h1>Register</h1>
//         </div>
//       </div>
