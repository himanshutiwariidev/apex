import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productPages } from "../productPages";

const products = [
  {
    title: productPages.fiberLaser.h1,
    description: productPages.fiberLaser.metadata.description,
    image: productPages.fiberLaser.image,
    href: "/fiber-laser-cutting-machine",
  },
  {
    title: productPages.sheetMetal.h1,
    description: productPages.sheetMetal.metadata.description,
    image: productPages.sheetMetal.image,
    href: "/sheet-metal-cutting-machine",
  },
  {
    title: productPages.tubeLaser.h1,
    description: productPages.tubeLaser.metadata.description,
    image: productPages.tubeLaser.image,
    href: "/tube-laser-cutting-machine",
  },
  {
    title: productPages.roboticLaser.h1,
    description: productPages.roboticLaser.metadata.description,
    image: productPages.roboticLaser.image,
    href: "/robotic-laser-solutions",
  },
];

export const metadata = {
  title: "Products | Apex Technology",
  description:
    "Explore Apex Technology laser cutting machines and robotic laser solutions for industrial metal fabrication, tube cutting, and sheet metal cutting applications.",
  alternates: {
    canonical: "https://www.apexmachinerytechnology.in/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section
        className="relative min-h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#07132c]/75" />
        <div className="relative z-10 mx-auto flex min-h-[300px] max-w-7xl items-center px-5">
          <div>
            <span className="inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-[2px] text-white">
              Apex Technology
            </span>
            <h1 className="mt-5 text-5xl font-bold text-white md:text-7xl">
              Products
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-red-600 hover:shadow-xl"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={520}
                  height={330}
                  className="h-56 w-full object-contain"
                />
                <h2 className="mt-5 text-2xl font-bold text-gray-900 group-hover:text-red-600">
                  {product.title}
                </h2>
                <p className="mt-3 leading-7 text-gray-600">{product.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-red-600">
                  Explore More
                  <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
