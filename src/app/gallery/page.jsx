import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery1.png",
    alt: "Apex Technology gallery image 1",
  },
  {
    src: "/gallery2.png",
    alt: "Apex Technology gallery image 2",
  },
  {
    src: "/gallery3.png",
    alt: "Apex Technology gallery image 3",
  },
  {
    src: "/gallery4.png",
    alt: "Apex Technology gallery image 4",
  },
  {
    src: "/gallery5.png",
    alt: "Apex Technology gallery image 5",
  },
  {
    src: "/gallery6.png",
    alt: "Apex Technology gallery image 6",
  },
  {
    src: "/gallery7.jpg",
    alt: "Apex Technology gallery image 7",
  },
  {
    src: "/gallery8.jpg",
    alt: "Apex Technology gallery image 8",
  },
];

export const metadata = {
  title: "Gallery | Apex Technology",
  description:
    "Explore Apex Technology gallery images featuring laser cutting machines, industrial solutions, and manufacturing excellence.",
  alternates: {
    canonical: "https://www.apexmachinerytechnology.in/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <section
        className="relative min-h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#07132c]/75" />
        <div className="relative z-10 mx-auto flex min-h-[300px] max-w-7xl items-center px-5 py-14">
          <div>
            <span className="inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-[2px] text-white">
              Apex Technology
            </span>
            <h1 className="mt-5 text-5xl font-bold text-white md:text-7xl">
              Gallery
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-white">
              <Link href="/" className="flex items-center gap-2 hover:text-red-400">
                <Home size={18} />
                Home
              </Link>
              <ChevronRight size={18} />
              <span className="text-gray-300">Gallery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[3px] text-red-600">
              Our Work
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Apex Technology Gallery
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={520}
                  height={380}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
