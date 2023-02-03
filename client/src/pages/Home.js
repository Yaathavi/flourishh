import { React } from "react";
import Header2 from "../components/Header2";
import ToDo from "../components/ToDo";
import nah from "../nah.png";
import mirrorpic2 from "../mirrorpic2.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <Header2 />
      <div className="ml-20 mr-20 flex flex-col justify-around md:flex-row items-center">
        <div className="w-1/2">
          <ToDo />
        </div>

        <div class="max-w-2xl bg-transparent p-4">
          <a href="#">
            <img class="" src={mirrorpic2} alt="" />
          </a>
          <div class="p-5">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {}
            </h5>
          </div>
        </div>
      </div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 500"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#8fb5f7"></stop>
            <stop offset="95%" stop-color="#8fb5f7"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,300 0,300 C 171.33333333333331,364.26666666666665 342.66666666666663,428.53333333333336 495,398 C 647.3333333333334,367.46666666666664 780.6666666666667,242.13333333333333 935,210 C 1089.3333333333333,177.86666666666667 1264.6666666666665,238.93333333333334 1440,300 C 1440,300 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
    </div>
  );
};

export default Home;
