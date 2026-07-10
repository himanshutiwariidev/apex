"use client";

import {
  GiLaserBlast,
  GiSteelClaws,
  GiMechanicalArm,
  GiRaceCar,
} from "react-icons/gi";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: GiLaserBlast,
    title: "Single Table & Laser Machine",
    description:
      "By specializing in the Single Table Laser Machine with high precision cutting solutions across Pan India.",
    link: "/fiber-laser-cutting-machine",
  },
  {
    icon: GiSteelClaws,
    title: "Sheet & Pipe Laser Machine",
    description:
      "Advanced Sheet & Pipe Fiber Laser Cutting Machines designed for speed, precision and industrial performance.",
    link: "/sheet-metal-cutting-machine-manufacturer",
  },
  {
    icon: GiMechanicalArm,
    title: "Exchange Table Laser Machine",
    description:
      "High-speed exchange table laser machines that maximize productivity while ensuring superior cutting accuracy.",
    link: "/tube-laser-cutting-machine",
  },
  {
    icon: GiRaceCar,
    title: "Automotive Manufacturing",
    description:
      "Innovative laser cutting solutions engineered for modern automotive manufacturing and metal fabrication.",
    link: "/robotic-laser-solutions",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto  px-5">

   

       
        {/* Cards */}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={index}
                href={service.link}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-3 hover:border-red-600 hover:shadow-2xl"
              >
                {/* Background Circle */}

                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-red-50 transition-all duration-500 group-hover:scale-150 group-hover:bg-red-100"></div>

                {/* Icon */}

                <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 transition-all duration-500 group-hover:bg-red-600">
                  <Icon
                    size={42}
                    className="text-gray-700 transition-all duration-500 group-hover:text-white"
                  />
                </div>

                {/* Title */}

                <h3 className="relative z-10 mb-2 text-lg font-bold leading-tight text-gray-900 transition-all duration-300 group-hover:text-red-600">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="relative z-10 text-md leading-8 text-gray-600">
                  {service.description}
                </p>

               

                {/* Top Border Animation */}

                <span className="absolute left-0 top-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full"></span>

                {/* Bottom Border Animation */}

                <span className="absolute bottom-0 right-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}
