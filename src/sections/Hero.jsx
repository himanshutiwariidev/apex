"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/apex.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/25"></div>

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/30"></div>

      {/* Content */}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">

          <div className="max-w-4xl">

            <p className="mb-6 text-xl md:text-2xl text-white font-light tracking-wide">
              Welcome to Apex Technology....
            </p>

            <h1 className="text-white font-extrabold leading-tight text-2xl md:text-5xl ">
              Best Solution for
              <br />
              Laser Cutting Machine
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-200 leading-8">
              We provide world-class Laser Cutting Machines, CNC Machines,
              Fiber Laser Technology and Industrial Solutions with unmatched
              precision and performance.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/products"
                className="rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="hidden md:block rounded-lg border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </div>

   

    </section>
  );
}