"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Seeking Deep & not Seeking Wide: APEX Laser is always dedicated to Laser Cutting Machines - What We are Good at.",
  "Our Customers are the Only Reason We Exist - We Grow Together with our Customers.",
  "We not only Provide Laser Products, but also Solutions of Production Efficiency Improvement.",
  "We offer High-Quality Latest Products & Services instead of Reasonable Prices.",
  "Excellence in Customer Service",
  "Premium Quality of Machines",
];

export default function WhyChooseUs() {
  return (
    <section className=" bg-white">
      <div className=" mx-auto overflow-hidden rounded-3xl shadow-xl px-4">

        <div className="grid lg:grid-cols-2">

          {/* Left Image */}

          <div className="bg-white flex items-center justify-center p-8">
            <Image
              src="/sheet.png"
              alt="Laser Machine"
              width={750}
              height={650}
              className="w-full max-w-2xl object-contain transition duration-500 hover:scale-105"
            />
          </div>

          {/* Right Content */}

          <div className="bg-[#b30008] p-6 md:p-10">

            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Apex -
              <span className="text-orange-400"> Laser Value</span>
            </h2>

            <p className="text-white text-xl mt-3 mb-8">
              Your Satisfaction is Our Motto
            </p>

            <div className="space-y-5">

              {points.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-xl bg-white p-3 shadow transition-all duration-300 hover:translate-x-2 hover:shadow-lg"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-400">
                    <CheckCircle2
                      size={18}
                      className="text-white"
                    />
                  </div>

                  <p className="text-gray-800 text-md leading-8">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}