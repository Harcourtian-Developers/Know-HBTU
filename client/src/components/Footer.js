import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-10" id="footer_style">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              <p className="text-blueGray-500 hover:text-gray-800">
                Made with ♥️ by HBTU Students
              </p>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 320">
        <path
          fill="#0099ff"
          fill-opacity="0.8"
          d="M0,192L16,170.7C32,149,64,107,96,96C128,85,160,107,192,117.3C224,128,256,128,288,138.7C320,149,352,171,384,176C416,181,448,171,480,160C512,149,544,139,576,154.7C608,171,640,213,672,224C704,235,736,213,768,197.3C800,181,832,171,864,165.3C896,160,928,160,960,165.3C992,171,1024,181,1056,202.7C1088,224,1120,256,1152,240C1184,224,1216,160,1248,117.3C1280,75,1312,53,1344,48C1376,43,1408,53,1424,58.7L1440,64L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
        ></path>
      </svg>
    </footer>
  );
};

export default Footer;
