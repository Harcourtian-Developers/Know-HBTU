import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 26.4935,
  lng: 80.3074,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBYznyfxQeSWb35l0hTqv_HiWLfai6DDi0">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-3xl mb-1 font-medium title-font text-center">
              HBTU
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              HBTU East Campus, Nawabganj, Kanpur, Uttar Pradesh 208002
            </p>
            <div>
              {/* <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea> */}
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Explore
            </button>
            <p class="text-xs text-gray-500 mt-3">
              All copyrights issues as per 2022.
            </p>
          </div>
        </div>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
