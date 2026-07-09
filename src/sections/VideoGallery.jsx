"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Apex Technology",
    video: "/apex.mp4",
   
  },
  {
    title: "Laser Cutting Machine",
    video: "/videos/video2.mp4",

  },
  {
    title: "Apex Machine Technology",
    video: "/videos/video3.mp4",
   
  },
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="bg-[#173554] py-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-4 overflow-hidden rounded-xl shadow-2xl">

          {/* Left Video */}

          <div className="relative lg:col-span-3 bg-black">

            <video
              key={activeVideo.video}
              src={activeVideo.video}
              controls
              autoPlay
              className="w-full h-[260px] md:h-[500px] object-cover"
             
            />

            <div className="absolute top-6 left-6">
              <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                {activeVideo.title}
              </h2>
            </div>

          </div>

          {/* Right Playlist */}

          <div className="bg-[#181818]">

            {videos.map((item, index) => (

              <button
                key={index}
                onClick={() => setActiveVideo(item)}
                className={`w-full text-left transition duration-300 border-b border-gray-700

                ${
                  activeVideo.video === item.video
                    ? "bg-red-600"
                    : "hover:bg-[#242424]"
                }
                `}
              >

                <div className="flex items-center">

                 

                  <div className="px-4">

                    <h3 className="text-white font-semibold text-lg py-4">
                      {item.title}
                    </h3>

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}