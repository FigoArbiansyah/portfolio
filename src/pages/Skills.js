import React, { useEffect } from "react";
import Main from "../layouts/Main";
import html from "../assets/img/logo/html.png";
import css from "../assets/img/logo/css-3.png";
import js from "../assets/img/logo/js.png";
import bootstrap from "../assets/img/logo/bootstrap.png";
import tailwindcss from "../assets/img/logo/tailwindcss.png";
import php from "../assets/img/logo/php.png";
import mysql from "../assets/img/logo/mysql.png";
import nodejs from "../assets/img/logo/nodejs.png";
import expressjs from "../assets/img/logo/express-js.png";
import react from "../assets/img/logo/react.png";
import laravel from "../assets/img/logo/laravel.png";
import Navbar from "../components/Navbar";

const Skills = () => {
  const logo = [
    {
      title: "HTML",
      img: html,
    },
    {
      title: "CSS",
      img: css,
    },
    {
      title: "Javascript",
      img: js,
    },
    {
      title: "Bootstrap",
      img: bootstrap,
    },
    {
      title: "Tailwind CSS",
      img: tailwindcss,
    },
    {
      title: "PHP",
      img: php,
    },
    {
      title: "MySQL",
      img: mysql,
    },
    {
      title: "Node JS",
      img: nodejs,
    },
    {
      title: "Express JS",
      img: expressjs,
    },
    {
      title: "React JS",
      img: react,
    },
    {
      title: "Laravel",
      img: laravel,
    },
  ];

  useEffect(() => {
    document.title = "Figo - Skills";
  });
  return (
    <Main class="min-h-screen items-center flex">
      <Navbar skills="font-bold" />
      <div className="w-full flex md:flex-row flex-col justify-between items-center md:px-32 md:gap-0 gap-10 max-md:mt-20">
        <div className="md:w-5/12 w-8/12 md:pl-10 md:text-left text-center">
          <p className="md:text-5xl text-4xl font-extrabold flex flex-col gap-3  animate__animated animate__zoomIn">
            <span>My Skills</span>
            <p className="flex items-center gap-3 md:mx-0 mx-auto">
              <span className="w-12 h-1 rounded-full bg-gray-800"></span>
              <span className="font-medium text-lg">Page 03</span>
            </p>
          </p>
        </div>
        <div className="md:w-5/12 w-11/12">
          <div className="flex flex-wrap gap-3 justify-center">
            {logo.map((logo, i) => {
              return (
                <div
                  className="w-3/12 flex justify-center items-center group  animate__animated animate__flipInX"
                  title={logo.title}
                  key={i}
                >
                  <div className="h-24 w-24 p-4 rounded-lg group-hover:border flex items-center group-hover:border-black group-hover:shadow-lg">
                    <img src={logo.img} className="w-full object-contain" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Skills;
