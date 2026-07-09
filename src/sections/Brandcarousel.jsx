"use client";

import Image from "next/image";

const brands = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
];

export default function BrandCarousel() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden">

          <div className="flex w-max animate-marquee">

            {[...brands, ...brands].map((logo, index) => (
              <div
                key={index}
                className="mx-3 flex h-40 w-[220px] shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-6"
              >
                <Image
                  src={logo}
                  alt={`Brand ${index}`}
                  width={180}
                  height={100}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}