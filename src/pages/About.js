import React, { useEffect, useState } from 'react'
import Main from '../layouts/Main'
import Certificate1 from "../assets/img/certificate/dicoding-frontend.png"
import Certificate2 from "../assets/img/certificate/html-sololearn.jpg"
import Certificate3 from "../assets/img/certificate/lks_kota.PNG"
import "../index.css"
import FsLightbox from 'fslightbox-react';
import Navbar from "../components/Navbar"

const About = () => {

    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    useEffect(() => {
        document.title = "Figo - About"
    }, [])

  return (
    <Main class="min-h-screen items-center flex">
        <Navbar about="font-bold" />
        <div className="w-full flex md:flex-row flex-col justify-between items-center md:px-32 md:gap-0 gap-10 md:mt-0 mt-20">
            <div className="md:w-5/12 w-8/12 md:pl-10 md:text-left text-center">
                <p className="md:text-5xl text-4xl font-extrabold flex flex-col gap-3 animate__animated animate__zoomIn">
                    <span>About Me</span>
                    <p className='flex items-center gap-3 md:mx-0 mx-auto'>
                        <span className='w-12 h-1 rounded-full bg-gray-800'></span>
                        <span className='font-medium text-lg'>Page 02</span>
                    </p>
                </p>
            </div>
            <div className="md:w-7/12 w-11/12 animate__animated animate__fadeIn">
                <div className="flex flex-col">
                    <div>
                        <p className='text-lg'>
                            I am a graduate of a vocational high school majoring in software engineering. I live in Cirebon, Indonesia. I like learning about programming, playing volleyball, listening to music, and watching anime.
                        </p>
                    </div>
                    <div className='mt-4'>
                        <p className="text-2xl font-bold flex flex-col">
                            <span>Certificates</span>
                            <span className='w-12 h-1 rounded-full bg-gray-800'></span>
                        </p>
                    </div>
                    <div className="w-full flex flex-row mt-6 my-certificate justify-start gap-8 py-4 flex-wrap">
                        <div className="md:w-5/12 mb-6 cursor-pointer">
                            <img src={Certificate3} className='w-full object-contain shadow-lg border' alt="" onClick={() => openLightboxOnSlide(3)} />
                        </div>
                        <div className="md:w-5/12 mb-6 cursor-pointer">
                            <img src={Certificate1} className='w-full object-contain shadow-lg' alt="" onClick={() => openLightboxOnSlide(1)} />
                        </div>
                        <div className="md:w-5/12 mb-6 cursor-pointer">
                            <img src={Certificate2} className='w-full object-contain shadow-lg' alt="" onClick={() => openLightboxOnSlide(2)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FsLightbox
            toggler={lightboxController.toggler}
            sources={[
                Certificate1,
                Certificate2,
                Certificate3
            ]}
            slide={lightboxController.slide}
            
        />
    </Main>
  )
}

export default About