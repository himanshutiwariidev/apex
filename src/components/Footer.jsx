import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

const products = [
  {
    label: "Fiber Laser Cutting Machine",
    href: "/fiber-laser-cutting-machine",
  },
  {
    label: "Sheet Metal Cutting Machine",
    href: "/sheet-metal-cutting-machine",
  },
  {
    label: "Tube Laser Cutting Machine",
    href: "/tube-laser-cutting-machine",
  },
  {
    label: "Robotic Laser Solutions",
    href: "/robotic-laser-solutions",
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/p/Apex-machinery-technology-100068976048876/",
  youtube: "https://www.youtube.com/@APEXTECHNOLOGYINDIA-wj5xk",
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0b1550] via-[#1a1030] to-[#3a0f14] text-white overflow-hidden">
      {/* Top logo / banner image */}
      <div className="flex justify-center pt-10 pb-6">
        {/* Replace src below with your uploaded image */}
        <Image
          src="/make-in-india-img.png"
          alt="Make in India"
          width={560}
          height={310}
          className="w-[280px]  md:w-[400px] h-auto object-contain"
          priority
        />
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">About Us</h3>
            <div className="h-[2px] w-24 bg-red-500 mb-5" />
            <p className="italic text-gray-200 leading-relaxed">
              At <span className="font-bold not-italic">Apex Technology</span>
              , we specialize in providing high-quality{" "}
              <span className="font-bold not-italic">
                laser cutting machines
              </span>{" "}
              for a wide range of industrial and commercial applications.
              With a commitment to innovation and precision, we offer
              advanced solutions that cater to diverse cutting needs,
              ensuring efficiency, accuracy, and superior performance.{" "}
              <Link
                href="/about-us"
                className="text-red-400 font-bold not-italic hover:underline"
              >
                Read More
              </Link>
            </p>

            <h3 className="md:hidden text-2xl font-semibold mt-8 mb-3">Follow Us</h3>
            <div className="h-[2px] w-24 bg-red-500 mb-5 lg:hidden" />
            <div className="flex gap-4 lg:hidden">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-90 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center hover:opacity-90 transition"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
            <div className="h-[2px] w-24 bg-red-500 mb-5" />
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <span className="text-red-500 text-sm">»»</span>
                  <Link href={link.href} className="text-gray-100 hover:text-red-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Products</h3>
            <div className="h-[2px] w-24 bg-red-500 mb-5" />
            <ul className="space-y-4">
              {products.map((product) => (
                <li key={product.href} className="flex items-center gap-2">
                  <span className="text-red-500 text-sm">»»</span>
                  <Link href={product.href} className="text-gray-100 hover:text-red-400 transition">
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Get in Touch</h3>
            <div className="h-[2px] w-24 bg-red-500 mb-5" />
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <Phone className="text-red-500 shrink-0" size={20} />
                <a href="tel:+919811522988" className="text-gray-100">
                  +91 981-152-2988
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-500 shrink-0" size={20} />
                <a
                  href="mailto:info@apexmachinerytechnology.in"
                  className="text-gray-100 break-all"
                >
                  info@apexmachinerytechnology.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-red-500 shrink-0 mt-1" size={20} />
                <p className="text-gray-100 leading-relaxed">
                  GROUND FLOOR, khasra no. 63/25,64/21, Road Number 6 GALI
                  NO.2, Vrinda Associates, Udyognagar Mundka, New Delhi,
                  West Delhi, Delhi, 110041
                </p>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-3 hidden lg:block">
              Follow Us
            </h3>
            <div className="h-[2px] w-24 bg-red-500 mb-5 hidden lg:block" />
            <div className="hidden lg:flex gap-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-90 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center hover:opacity-90 transition"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="bg-[#161d4a]/70 border-t border-white/10 py-5">
        <p className="text-center text-gray-200 text-sm md:text-base">
          Copyright © 2026 Apex Technology | Powered by Bharat Bizmart
        </p>
      </div>

      {/* Floating Contact us + WhatsApp button */}
      <div className="fixed bottom-6 right-6 flex items-center gap-3 z-50">
        <span className="bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-full shadow-lg hidden sm:inline-block">
          Contact us
        </span>
        <a
          href="https://wa.me/919811522988"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={28} className="text-white" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            1
          </span>
        </a>
      </div>
    </footer>
  );
}
