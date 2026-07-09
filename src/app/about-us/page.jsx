import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import AboutSection from "@/sections/Aboutsection";
import BrandCarousel from "@/sections/Brandcarousel";



export const metadata = {
  title: "About | Apex Technology",
  description:
    "At Apex Technology, we specialize in manufacturing and supplying high-quality laser cutting machines for a wide range of industrial and commercial applications.",
    keywords: ["About", "Apex Technology", "Laser Cutting Machines"],
  alternates: {
    canonical: "https://www.apexmachinerytechnology.in/about-us",
  },
};
export default function AboutPage() {
  return (
    <>
      {/* ================= Hero Banner ================= */}

      <section
        className="relative h-[300px] md:h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#07132c]/70" />

        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-7xl mx-auto w-full px-5">

            <h1 className="text-white text-5xl md:text-7xl font-bold">
              About Us
            </h1>

            <div className="mt-6 flex items-center gap-3 text-white text-lg">

              <Link
                href="/"
                className="flex items-center gap-2 hover:text-red-500 transition"
              >
                <Home size={18} />
                Home
              </Link>

              <ChevronRight size={18} />

              <span className="text-gray-300">
                About Us
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* ================= About Section ================= */}

      <section className="pt-10 bg-white">
        <div className="max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Image */}

            <div>
              <Image
                src="/about-img.jpeg"
                alt="Apex Technology"
                width={700}
                height={550}
                className="rounded-xl object-cover w-full shadow-xl"
              />
            </div>

            {/* Content */}

            <div>

              <span className="inline-block text-red-600 font-semibold uppercase tracking-[3px]">
                About Company
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">
                Apex Technology
              </h2>

              <p className="text-md leading-9 text-gray-600">
                At <strong>Apex Technology</strong>, we specialize in
                providing high-quality <strong>laser cutting machines</strong>{" "}
                for a wide range of industrial and commercial applications.
                With a commitment to innovation and precision, we deliver
                advanced solutions that ensure efficiency, accuracy and
                superior performance.
              </p>

              <p className="mt-2 text-md leading-9 text-gray-600">
                Our product range includes{" "}
                <strong>
                  Fiber Laser Cutting Machines, CO₂ Laser Cutting Machines,
                  CNC Laser Systems
                </strong>{" "}
                and more—designed to meet the demands of industries including
                metal fabrication, signage, automotive, electronics and many
                others.
              </p>

              <p className="mt-2 text-md leading-9 text-gray-600">
                We believe in delivering not only world-class machines but
                complete manufacturing solutions backed by professional
                guidance, installation support and dependable after-sales
                service.
              </p>

            </div>

          </div>

        </div>
        <AboutSection/>
        <BrandCarousel/>
      </section>
    </>
  );
}
