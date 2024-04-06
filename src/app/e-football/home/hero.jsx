import { Button } from "@/components/ui/button";
import React from "react";

export default function Hero() {
  return (
    <div className=" w-full h-[40vh] bg-[url('https://vivonewsroom.b-cdn.net/wp-content/uploads/2023/04/IMG_20221218_170801-copy-1.jpg')] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute top-0 ring-0 w-full h-full bg-gradient-to-r from-[#000000d3] to-[#0062e384] ">
        <div className="container mx-auto px-4 text-white flex items-center h-full w-full">
          <div className="">
            <h1 className="text-xl font-bold  leading-relaxed mb-4">
              Can You Conquer the Competition? <br /> The Mobile Football
              Tournament Awaits!
            </h1>
            <h4 className="text-sm font-normal  leading-relaxed mb-12">
              Dominate the Pitch and Claim Your Mobile Football Champion Title!
            </h4>
            <div className="flex gap-1">
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Organiser
              </button>
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
