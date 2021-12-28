import React from "react";

const Explore = () => {
  return (
    <div class="bg-blueGray-200">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,32L360,320L720,128L1080,256L1440,64L1440,320L1080,320L720,320L360,320L0,320Z"
        ></path>
      </svg>
      <h1 class="bg-[#a2d9ff] text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
        explore the <br /> awesome <span class="text-blue-800">College</span>{" "}
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,32L360,320L720,128L1080,256L1440,64L1440,0L1080,0L720,0L360,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Explore;
