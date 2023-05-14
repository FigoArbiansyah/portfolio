import React, { useEffect } from "react";
import Main from "../layouts/Main";
import cert from "../assets/img/certificate/dicoding-frontend.png";
import Navbar from "../components/Navbar";
import absensi from "../assets/img/project/absensi1.png";
import blog from "../assets/img/project/blog.jpeg";
import gquotes from "../assets/img/project/gquotes1.png";
import hotel from "../assets/img/project/hotel1.png";
import perpus from "../assets/img/project/perpus.png";
import quran from "../assets/img/project/quran1.png";
import weequran from "../assets/img/project/weequran.png";
import unigo from "../assets/img/project/unigo1.png";
import pplg from "../assets/img/project/webpplg.png";
import webtv from "../assets/img/project/webtv.jpeg";
import pilihaken from "../assets/img/project/pilihaken.png";

const Projects = () => {
  const portfolio = [
    {
      title: "Pilihaken!",
      desc: "Website untuk melakukan voting secara online yang mana poll dan choice nya dapat di kelola oleh admin.",
      img: pilihaken,
      tech: ["Laravel", "MySQL", "Bootstrap 5"],
      github: true,
      link: "https://github.com/FigoArbiansyah/vote-app",
    },
    {
      title: "WeeQuran",
      desc: "Al-Quran Online berbentuk website. Tersedia surah dan ayat serta tafsir yang lengkap. Data yang ditampilkan diambil dari public API.",
      img: weequran,
      tech: ["React JS", "Tailwind CSS"],
      github: true,
      link: "https://github.com/FigoArbiansyah/web_quran",
      deploy: "https://weequran.vercel.app",
    },
    {
      title: "Perpus Programmer",
      desc: "Adalah sebuah website peminjaman buku dimana data buku, data peminjaman, data user dan proses peminjaman dilakukan secara online melalui website ini.",
      img: perpus,
      tech: ["Laravel", "Bootstrap 5"],
      github: false,
      deploy: "",
    },
    {
      title: "Al-Quran Online",
      desc: "Website ini berisi surat-surat yang ada di Al-Quran secara lengkap, audio setiap ayat yang dapat diputar, dan tafsir dari setiap ayat.",
      img: quran,
      tech: ["PHP", "Bootstrap 5", "MySQL"],
      github: true,
      link: "https://github.com/FigoArbiansyah/Al-Quran_Online",
      deploy: "",
    },
    {
      title: "Website Jurusan PPLG",
      desc: "Website ini berisi semua informasi mengenai jurusan PPLG, mulai dari penjelasan jurusan ini hingga artikel-artikel yang terkait dengan jurusan ini. Semua data yang ditampilkan ke layar sudah bersifat dinamis dan daoat diubah sewaktu-waktu oleh admin.",
      img: pplg,
      tech: ["Laravel", "Bootstrap 5", "Swiper JS", "MySQL"],
      github: false,
      deploy: "",
    },
    {
      title: "Web TV",
      desc: "Web TV adalah sebuah website yang dibuat untuk menampilkan video dokumenter dari SMKN 1 Cirebon, Jadwal Jurusan PPLG, dan Foto dokumentasi dari Jurusan PPLG. Data yang diinputkan sudah bersifat dinamis sehingga dapat diatur oleh admin.",
      img: webtv,
      tech: ["Laravel", "Bootstrap 5", "Javascript", "MySQL"],
      github: false,
      deploy: "",
    },
    {
      title: "Unigo",
      desc: "Unigo adalah website yang didalamnya terdapat forum yang bisa digunakan untuk berbagi informasi baik mengenai teknologi ataupun pembicaraan bebas dan juga terdapat sebuah halaman artikel dimana setiap user dapat membagikannya di halaman tersebut.",
      img: unigo,
      tech: ["PHP", "Bootstrap 5", "Particle JS", "Javascript", "MySQL"],
      github: false,
      deploy: "",
    },
    {
      title: "Website Blog",
      desc: "Website ini berisi artikel-artikel yang dapat dibuat, diedit, ataupun dihapus oleh admin, website ini dibuat dalam 1 hari dan memiliki fitur yang cukup banyak, diantaranya login, CRUD artikel, komentar, atau bahkan mengirim pesan untuk admin.",
      img: blog,
      tech: ["PHP", "Bootstrap 5", "MySQL"],
      github: false,
      deploy: "",
    },
    {
      title: "Hotel Hebat",
      desc: "Adalah sebuah website yang berisi informasi mengenai hotel hebat, dan didalamnya kita bisa melakukan reservasi secara online yang meskipun kita harus melakukan cek/validasi dan pembayaran secara offline. Website ini adalah yang dibuat untuk memenuhi UJIKOM.",
      img: hotel,
      tech: ["PHP", "Bootstrap 5", "MySQL"],
      github: false,
      deploy: "",
    },
    {
      title: "Website Absensi",
      desc: "Adalah sebuah website yang digunakan untuk melakukan absensi secara online, untuk melakukan absensi, user harus melakukan login terlebih dahulu, dan jika sudah menginputkan data untuk absen maka data tersebut akan dikirim ke halaman admin.",
      img: absensi,
      tech: ["PHP", "Bootstrap 5", "MySQL", "JQuery"],
      github: false,
      deploy: "",
    },
    {
      title: "G'Quotes",
      desc: "G'Quotes berisi quotes dengan berbagai kategori. Semua quotes yang ada didalam website ini ditambahkan oleh admin.",
      img: gquotes,
      tech: ["PHP", "Bootstrap 5", "MySQL"],
      github: false,
      deploy: "",
    },
  ];

  useEffect(() => {
    document.title = "Figo - Projects";
  }, []);

  return (
    <Main class="pt-36">
      <Navbar projects="font-bold" />
      <div className="md:px-16 overflow-hidden">
        <div>
          <p className="md:text-5xl text-4xl font-extrabold md:text-left text-center flex flex-col gap-3 animate__animated animate__backInRight">
            <span>Projects</span>
            <p className="flex items-center gap-3 md:mx-0 mx-auto">
              <span className="w-12 h-1 rounded-full bg-gray-800"></span>
              <span className="font-medium text-lg">Page 04</span>
            </p>
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly mt-14 animate__animated animate__fadeIn">
          {portfolio.map((port, i) => {
            return (
              <div className="w-custom md:mx-0 shadow-lg mx-auto bg-slate-200 rounded p-4 mb-6">
                <div>
                  <img
                    src={port.img}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="my-3">
                  <p className="text-lg font-bold">{port.title}</p>
                  <p className="text-gray-600 mt-3">{port.desc}</p>
                </div>
                <div className="flex gap-3">
                  {port.github ? (
                    <a
                      href={port.link}
                      className="bg-black text-sm py-2 px-4 text-white rounded flex gap-2 items-center"
                    >
                      <i className="fa-brands fa-github"></i>
                      <span>Github</span>
                    </a>
                  ) : (
                    ""
                  )}
                  {port.deploy != "" ? (
                    <a
                      href={`${port.deploy}`}
                      className="bg-cyan-800 text-sm py-2 px-4 text-white rounded flex gap-2 items-center"
                      target={"_blank"}
                    >
                      <i className="fa-solid fa-link"></i>
                      <span>Lihat</span>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {port.tech.map((tech, i) => {
                    return (
                      <span className="bg-cyan-700 text-sm py-1 px-3 text-white rounded flex gap-2 items-center">
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Main>
  );
};

export default Projects;
