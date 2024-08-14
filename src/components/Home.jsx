import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { ReactTyped, Typed } from "react-typed";
import profile from "../../public/profile.png";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <span>Hello,I'm a</span>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I’m thrilled you’ve stopped by. This is where you’ll find a
              curated showcase of my work, skills, and passions. Whether you're
              here to explore my latest projects, learn about my creative
              process, or simply get a sense of who I am, you’re in the right
              place. Feel free to browse through my portfolio, and don’t
              hesitate to reach out if you have any questions or just want to
              connect. Enjoy your visit!
            </p>
            <br />
            {/* social media icons*/}
            <div className="space-y-2 order-2">
              <h1 className="font-bold">Available on</h1>
              <div className="ml-8000">
                <ul className="flex space-x-5 list-none  -ml-10 ">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.Linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.telegram.com/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={profile}
              className=" rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
