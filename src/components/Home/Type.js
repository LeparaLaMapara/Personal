import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "ML/DL Research Scientist",
          // "Machine Learning Engineer",
          "Data Scientist",
          "Freelance Web Developer",
          "PHD Computer Science Candidate",
          // "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
