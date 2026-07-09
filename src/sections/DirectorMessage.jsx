import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DirectorMessage() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-10"
      style={{
        backgroundImage: "url('/dm.webp')", // Replace with your image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0b1633]/55"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex justify-end">
          {/* Content Card */}
          <div className="w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl md:p-12 lg:p-10">
            {/* Small Heading */}
            <span className="inline-block rounded-full bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-red-600">
              Message From Director
            </span>

            {/* Text */}
            <p className="mt-8 text-md leading-9 text-gray-700 md:text-lg">
              Since the inception of <strong>Apex Technologies</strong>, our
              goal has been to ensure every global business in the laser
              manufacturing community gets access to world-class laser cutting
              machines with the latest technology, exceptional precision, and
              reliable after-sales support.
            </p>

            {/* Divider */}
            <div className="my-8 h-px bg-gray-200"></div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900">
              Mr. Ajit Jangir
            </h3>

            <p className="mt-2 text-lg text-gray-600">
              Managing Director
            </p>

            
          </div>
        </div>
      </div>
    </section>
  );
}