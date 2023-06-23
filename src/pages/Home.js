import React, { useEffect, useLayoutEffect } from "react";
import Main from "../layouts/Main";
import Navbar from "../components/Navbar";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    document.title = "Figo Arbiansyah Pratama";
  }, []);

  return (
    <Main class="min-h-screen items-center flex">
      <Navbar root="font-bold" />
      <div className="w-full flex md:flex-row flex-col justify-between items-center md:px-32 md:mt-0 mt-24">
        <div className="md:w-1/2 w-10/12 animate__animated animate__fadeInLeft">
          <p className="md:text-6xl text-4xl font-extrabold flex flex-col gap-3">
            <span className="font-medium text-base text-gray-600">
              Hi everyone 👋, My name is
            </span>
            <span className="my-name">Figo Arbiansyah</span>
            <span className="font-medium text-lg text-gray-500 mt-4">
              I'm a Fullstack Developer
            </span>
          </p>
          <p className="mt-6">
            <a
              href="/CV_FIGO_ARBIANSYAH.pdf"
              target={"_blank"}
              className="py-3 px-6 bg-cyan-700 text-white text-lg inline-block cv-download"
            >
              <i class="fa-sharp fa-solid fa-file-pdf mr-2"></i>
              Download CV
            </a>
          </p>
        </div>
        <div className="md:w-1/2 w-10/12 md:mt-0 mt-20 animate__animated animate__fadeIn">
          <div className="w-2/3 mx-auto profil relative">
            <img src={"/figo_with_jas.jpeg"} className="w-full relative" alt="" />
            <div className="w-full border-solid border-2 border-gray-900 absolute top-0 h-full translate-y-14 translate-x-14 -z-10"></div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Home;
