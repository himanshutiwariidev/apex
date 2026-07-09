"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "New Generation Machine With Advance Laser Technology",
  "Interferometer Testing To ensure the Machine Accuracy",
  "Exchange Table Double Sided Transmission System",
  "EtherCAT Controller with AC Room",
  "High Cutting Speed with High Precision",
];

const products = [
  {
    title: "GS Model - Single Table",
    image: "/gsmodel.png",
    link: "/products",
  },
  {
    title: "Sheet Laser Cutting Machine",
    image: "/sheetlasercutting.png",
    link: "/products",
  },
  {
    title: "Handheld Laser Welding Machine",
    image: "/Handheld-Laser-Welding-Machine.png",
    link: "/products",
  },
];

export default function ProductionLine() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">

        {/* Heading */}

        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-4 sm:px-5 py-2 text-[11px] sm:text-sm font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-red-600">
            One Machine = One Production Line
          </span>

          <h2 className="mt-5 text-2xl sm:text-4xl md:text-3xl font-bold text-gray-900 leading-tight">
            Quality Without Compromise
            <br />
            <span className="text-red-600">
              Quality you can Trust
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 md:w-24 rounded-full bg-red-600"></div>
        </div>

        {/* ================= First Featured Machine ================= */}

        <div className="rounded-3xl bg-gray-50 p-5 sm:p-6 md:p-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Content */}

            <div className="order-2 lg:order-1">

              <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-5 text-center lg:text-left">
                Coil Fed Laser Cutting Machine Introduction
              </h3>

              <div className="space-y-3">

                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="text-green-600 mt-1 shrink-0"
                      size={22}
                    />

                    <p className="text-base sm:text-lg text-gray-700 leading-7">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              <div className="flex justify-center lg:justify-start">

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 mt-6 rounded-full bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition"
                >
                  Explore More
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            {/* Image */}

            <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="/CoilFed.png"
                alt="Coil Fed Machine"
                width={550}
                height={350}
                className="w-full max-w-md lg:max-w-full object-contain"
              />
            </div>

          </div>
        </div>

        {/* ================= Product Cards ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-10">

          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-gray-50 p-5 md:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <Image
                src={product.image}
                alt={product.title}
                width={450}
                height={280}
                className="mx-auto h-52 sm:h-60 md:h-64 w-full object-contain transition duration-500 group-hover:scale-105"
              />

              <h3 className="mt-5 text-center text-xl font-bold text-gray-900 min-h-[60px] flex items-center justify-center">
                {product.title}
              </h3>

              <div className="mt-5 flex justify-center">

                <Link
                  href={product.link}
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition"
                >
                  Explore More
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          ))}

        </div>

        {/* ================= Bottom Featured Machine ================= */}

        <div className="rounded-3xl bg-gray-50 p-5 ">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

            {/* Content */}

            <div className="order-2 lg:order-1">

              <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-5 text-center lg:text-left">
                G-20: Most Advanced Fiber Laser Cutting Machine
              </h3>

              <div className="space-y-2">

                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="text-green-600 mt-1 shrink-0"
                      size={22}
                    />

                    <p className="text-base sm:text-lg text-gray-700 leading-7">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              <div className="flex justify-center lg:justify-start">

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 mt-6 rounded-full bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition"
                >
                  Explore More
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

            {/* Image */}

            <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="/g20.png"
                alt="G20 Machine"
                width={600}
                height={380}
                className="w-full max-w-md lg:max-w-full object-contain"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}