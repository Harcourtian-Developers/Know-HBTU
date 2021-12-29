import React from "react";
import { Link } from "react-router-dom";

const ExtraCards = () => {
  return (
    <>
      <div className="bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    {" "}
                    <Link
                      to="/resources"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      Resources
                    </Link>
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    <Link
                      to="/resources"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      Study resources for all the students are provided here for
                      free !
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    {" "}
                    <Link
                      to="/about"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      About the College
                    </Link>
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    <Link
                      to="/about"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      Write a few lines about the college!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    <Link
                      to="/near"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      Near HBTU
                    </Link>
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    <Link
                      to="/near"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      A paragraph describing all the nice places to visit near
                      HBTU
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraCards;
