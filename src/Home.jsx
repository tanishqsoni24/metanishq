// import ParticleNew from "./ParticlesNew";

import { useState } from "react";
import Particle from "./Particle";
export default function Home() {
  return (
    <>
      <Particle />
      <div
        className="home flex flex-col items-center justify-center gap-4 h-screen align-center"
        // style={{ margin: "13rem auto 17rem auto" }}
      >
        <p className="name font-medium text-white text-8xl content-center">
          Tanishq <span className="text-sky-500">Soni</span>
        </p>
        <p className="title text-white text-2xl">
          A Seasoned Full Stack Developer
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-2">
          <a href="mailto:tanishqsoni0309@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1jIs3NsMhdLbrRst1X31EVfvQxA11nxE9/view?usp=sharing"
            target="_blank"
          >
            <i className="fa-solid fa-file-lines text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/tanishqsoni/" target="_blank">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>

          <a href="https://github.com/tanishqsoni24" target="_blank">
            <i className="fa-brands fa-github text-white"></i>
          </a>
          <a href="https://twitter.com/TanishqSoni__" target="_blank">
            <i className="fa-brands fa-twitter text-white"></i>
          </a>

          <a href="https://tanishqsoni.hashnode.dev/" target="_blank">
            <i className="fa-brands fa-hashnode text-white"></i>
          </a>
        </p>
      </div>
    </>
  );
}
