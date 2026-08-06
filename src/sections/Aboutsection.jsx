"use client";

export default function AboutSection() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/about-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#081220]/50"></div>

      {/* Optional Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081220]/90 via-[#081220]/60 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-5 py-10">

        <div className="max-w-3xl">

          {/* Small Title */}

          <span className="inline-block text-amber-400 text-md md:text-lg italic font-medium">
            Who We Are
          </span>

          {/* Main Heading */}

          <h2 className="mt-2 text-xl md:text-2xl font-bold text-white leading-tight">
            Experts in Laser Cutting Solutions.
          </h2>

          {/* Description */}

          <p className="mt-5 text-md md:text-lg leading-9 text-gray-200">
            Apex Technology is a leading provider of{" "}
            <strong className="text-white">
              high-performance laser cutting machines
            </strong>
            , offering{" "}
            <strong className="text-white">
              Fiber Laser, CO₂ Laser, and CNC Cutting Solutions
            </strong>{" "}
            for various industries. With a focus on{" "}
            <strong className="text-white">
              precision, efficiency, and innovation
            </strong>
            , we help businesses enhance manufacturing and fabrication
            processes. Backed by expert support and reliable after-sales
            service, we deliver complete cutting solutions tailored to modern
            industries.
          </p>

          {/* Button */}

          <div className="mt-5">
            <a
              href="/about-us"
              className="inline-flex items-center rounded-full bg-red-600 px-8 py-4 text-white font-semibold transition hover:bg-red-700"
            >
              Learn More
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}