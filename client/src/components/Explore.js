import React from "react";

const Explore = () => {
  return (
    <div className="bg-blueGray-200">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,288L48,266.7C96,245,192,203,288,208C384,213,480,267,576,272C672,277,768,235,864,208C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <h1 className="pb-5 bg-[#a2d9ff] text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
        explore the <br /> awesome{" "}
        <span className="text-blue-800">College</span>{" "}
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,128L48,106.7C96,85,192,43,288,26.7C384,11,480,21,576,37.3C672,53,768,75,864,122.7C960,171,1056,245,1152,282.7C1248,320,1344,320,1392,320L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Explore;
