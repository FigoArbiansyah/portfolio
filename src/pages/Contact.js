import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import "../index.css";
import Navbar from "../components/Navbar";
import { getDefaultNormalizer } from "@testing-library/react";

const Contact = () => {
  function copy() {
    navigator.clipboard.writeText("figoarbnsyh@gmail.com");
    document.getElementById("btnCopy").setAttribute("title", "Copied");
  }

  useEffect(() => {
    document.title = "Figo - Contact";
  }, []);

  return (
    <Main class="min-h-screen items-center flex">
      <Navbar contact="font-bold" />
      <div className="w-full flex md:flex-row flex-col justify-between items-center md:px-32 md:gap-0 gap-10 md:mt-0 mt-20 overflow-hidden">
        <div className="md:w-5/12 w-8/12 md:pl-10 md:text-left text-center">
          <p className="md:text-5xl text-4xl font-extrabold flex flex-col gap-3 animate__animated animate__zoomIn">
            <span>Contact Me</span>
            <p className="flex items-center gap-3 md:mx-0 mx-auto">
              <span className="w-12 h-1 rounded-full bg-gray-800"></span>
              <span className="font-medium text-lg">Page 05</span>
            </p>
          </p>
        </div>
        <div className="md:w-7/12 w-11/12">
          <div className="flex flex-wrap justify-evenly">
            <div className="md:w-5/12 w-11/12 mx-auto border p-6 mb-6 bg-stone-200 card-contact animate__animated animate__fadeInLeft">
              <p className="text-2xl font-semibold flex gap-3 items-center">
                <i className="fa-regular fa-envelope"></i>
                <span>Email</span>
              </p>
              <p className="italic mt-2 my-email">figoarbnsyh@gmail.com</p>
              <button
                type="button"
                className="flex gap-2 py-1 px-2 rounded border-2 border-black mt-3 items-center hover:text-white hover:bg-black transition duration-500 ease"
                onClick={() => copy()}
                id="btnCopy"
              >
                <i className="fa-solid fa-copy"></i>
                <span>Copy</span>
              </button>
            </div>
            <div className="md:w-5/12 w-11/12 mx-auto border p-6 mb-6 bg-stone-200 card-contact animate__animated animate__fadeInRight">
              <p className="text-2xl font-semibold flex gap-3 items-center">
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
              </p>
              <p className="italic mt-2">Figo Arbiansyah</p>
              <a
                href="https://id.linkedin.com/in/figo-arbiansyah-8b65ab246"
                className="flex gap-2 transition-all duration-500 ease py-1 px-2 w-20 hover:w-24 hover:gap-6 rounded mt-3 items-center text-white hover:bg-gray-700 bg-black"
              >
                <span>Visit</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="md:w-5/12 w-11/12 mx-auto border p-6 mb-6 bg-stone-200 card-contact animate__animated animate__fadeInLeft">
              <p className="text-2xl font-semibold flex gap-3 items-center">
                <i className="fa-brands fa-github"></i>
                <span>Github</span>
              </p>
              <p className="italic mt-2">FigoArbiansyah</p>
              <a
                href="https://github.com/FigoArbiansyah"
                className="flex gap-2 transition-all duration-500 ease py-1 px-2 w-20 hover:w-24 hover:gap-6 rounded mt-3 items-center text-white hover:bg-gray-700 bg-black"
              >
                <span>Visit</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="md:w-5/12 w-11/12 mx-auto border p-6 mb-6 bg-stone-200 card-contact animate__animated animate__fadeInRight">
              <p className="text-2xl font-semibold flex gap-3 items-center">
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </p>
              <p className="italic mt-2">figo_arbnsyh</p>
              <a
                href="https://www.instagram.com/figo_arbnsyh"
                className="flex gap-2 transition-all duration-500 ease py-1 px-2 w-20 hover:w-24 hover:gap-6 rounded mt-3 items-center text-white hover:bg-gray-700 bg-black"
              >
                <span>Visit</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
