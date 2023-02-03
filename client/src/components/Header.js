import React from "react";
import what from "../what.png";

export default function Header() {
  return (
    <div>
      <nav class="w-full z-30 top-0 text-blue-1000 py-1 lg:py-6">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
          <div class="pl-4 flex items-center">
            <a
              class="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex flex-row items-center"
              href="/"
            >
              <img src={what} className="w-16 mr-4" />
              <p className="text-5xl text-blue-1000"> Flourish </p>
            </a>
          </div>
          <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20 justify-end"
            id="nav-content"
          >
            <button class="mr-3">
              <a class="inline-block py-2 px-4" href={"/home"}>
                <p className="text-lg text-blue-1000 border border-solid border-blue-1000 rounded-md px-4 py-2 font-bold">
                  Self Care
                </p>
              </a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
