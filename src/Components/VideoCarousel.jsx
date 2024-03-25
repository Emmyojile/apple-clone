import React from "react";
import { hightlightsSlides } from "../constants";

export const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center ">
        {hightlightsSlides.map((list, index) => (
          <div key={list.id} className="sm:pr-20 pr-10 bg-white" id="slider">
            <div className="video-carousel_container bg-slate-500">
              <div className="w-full h-full flex-center rounded-3xl bg-black">
                <video id="video" playsInline={true} preload="auto" muted>
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className=" absolute top-12  left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-3xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
