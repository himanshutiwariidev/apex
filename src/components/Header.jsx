"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const productLinks = [
    {
      name: "Fiber Laser Cutting Machine",
      href: "/fiber-laser-cutting-machine",
    },
    {
      name: "Sheet Metal Cutting Machine",
      href: "/sheet-metal-cutting-machine",
    },
    {
      name: "Tube Laser Cutting Machine",
      href: "/tube-laser-cutting-machine",
    },
    {
      name: "Robotic Laser Solutions",
      href: "/robotic-laser-solutions",
    },
  ];

  const navLinks = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "ABOUT US",
      href: "/about-us",
    },
    {
      name: "PRODUCTS",
      href: "/products",
      dropdown: true,
    },
    {
      name: "GALLERY",
      href: "/gallery",
    },
    {
      name: "BLOG",
      href: "/blog",
    },
    {
      name: "CONTACT US",
      href: "/contact-us",
    },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isProductsActive = (item) => {
    if (!item.dropdown) {
      return isActiveLink(item.href);
    }

    return isActiveLink(item.href) || productLinks.some((product) => isActiveLink(product.href));
  };

  return (
    <header className="w-full shadow-sm">
      {/* ================= Top Bar ================= */}

      <div className="bg-[#0f0d19] text-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="h-[60px] flex items-center justify-between">

            {/* Left Social Icons */}

            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/p/Apex-machinery-technology-100068976048876/"
                target="_blank"
                className="w-8 h-8 rounded-full bg-[#3b5998] flex items-center justify-center transition hover:scale-110"
              >
                <FaFacebookF size={14} />
              </Link>

              <Link
                href="https://www.youtube.com/@APEXTECHNOLOGYINDIA-wj5xk"
                target="_blank"
                className="w-8 h-8 rounded-full bg-[#ff0000] flex items-center justify-center transition hover:scale-110"
              >
                <FaYoutube size={14} />
              </Link>
            </div>

            {/* Right Contact */}

            <div className="hidden lg:flex items-center gap-10">

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Phone className="w-3 h-3 text-red-500" />
                </div>

                <div>
                  <h6 className="font-semibold text-lg leading-none">
                    Mobile:
                  </h6>

                  <p className="text-[15px] text-gray-300 mt-1">
                    +91 981-152-2988
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Mail className="w-3 h-3 text-red-500" />
                </div>

                <div>
                  <h6 className="font-semibold text-lg leading-none">
                    Email:
                  </h6>

                  <p className="text-[15px] text-gray-300 mt-1">
                    info@apexmachinerytechnology.in
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= Navbar ================= */}

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-5">

          <div className="h-[70px] flex items-center justify-between">

            {/* Logo */}

            <Link href="/">
              <Image
                src="/logo.png"
                alt="Apex Technology"
                width={120}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-12">

              {navLinks.map((item) => {
                const isActive = isProductsActive(item);
                const linkClasses = `flex items-center gap-1 text-[14px] font-bold transition ${
                  isActive
                    ? "bg-red-600 text-white px-3 py-1 rounded-md"
                    : "text-[#555] hover:text-red-600"
                }`;

                if (item.dropdown) {
                  return (
                    <div key={item.name} className="group relative py-6">
                      <Link href={item.href} className={linkClasses}>
                        {item.name}
                        <ChevronDown className="w-4 h-4 transition group-hover:rotate-180" />
                      </Link>

                      <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-3 rounded-xl border border-gray-100 bg-white py-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {productLinks.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            className={`block px-5 py-3 text-sm font-semibold transition ${
                              isActiveLink(product.href)
                                ? "bg-red-600 text-white"
                                : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                            }`}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={linkClasses}
                  >
                    {item.name}
                  </Link>
                );
              })}

            </nav>

            {/* Mobile */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden"
            >
              {mobileMenu ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}

      {mobileMenu && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col py-5">

            {navLinks.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`block px-5 py-4 border-b font-semibold ${
                    isProductsActive(item)
                      ? "bg-red-600 text-white"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>

                {item.dropdown && (
                  <div className="border-b bg-gray-50 py-2">
                    {productLinks.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={() => setMobileMenu(false)}
                        className={`block px-8 py-3 text-sm font-semibold ${
                          isActiveLink(product.href)
                            ? "bg-red-600 text-white"
                            : "text-gray-600 hover:text-red-600"
                        }`}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}
