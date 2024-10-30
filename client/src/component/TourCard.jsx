import React from "react";
import { Link2 } from "lucide-react";
function TourCard({ tour }) {
  return (
    <div className="w-full items-center flex gap-3 px-12 py-5 m-auto">
      <div className="relative w-[450px] h-48 md:w-[350px]">
        <img
          src={tour.photos[0]}
          alt={tour.title}
          className="w-60 h-48 rounded-xl object-cover"
        />
        <button className="absolute top-4 right-9 p-2 bg-white/90 rounded-full hover:bg-white md:hidden">
          <Link2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex flex-col w-full h-48 justify-start ">
        <div className="">
          <h1 className="font-semibold text-xl">{tour.title}</h1>
          <p className="text-gray-500 text-sm">
            {tour.description.length > 100
              ? `${tour.description.slice(0, 100)}...`
              : tour.description}
          </p>
        </div>
        <a href={tour.url} target="_blank" className="text-cyan-500 underline">
          อ่านเพิ่มเติม
        </a>
      </div>
    </div>
  );
}

export default TourCard;
