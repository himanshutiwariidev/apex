"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101426]">
            How Can We Help You?
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Get all-in-one solutions and services related to your inquiries.
            Fill out the form and our Laser Expert team will contact you
            promptly.
          </p>
        </div>

        {/* Main */}

        <div className="grid lg:grid-cols-2 border border-gray-300">

          {/* Left */}

          <div className="bg-[#141b39] p-8 md:p-10">

            {/* Email */}

            <div className="flex bg-white mb-5">
              <div className="w-24 bg-red-600 flex items-center justify-center">
                <Mail size={42} className="text-white" />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-bold text-[#141b39]">
                  Email Us
                </h3>

                <p className="text-gray-700 mt-2">
                  info@apexmachinerytechnology.in
                </p>
              </div>
            </div>

            {/* Phone */}

            <div className="flex bg-white mb-5">
              <div className="w-24 bg-red-600 flex items-center justify-center">
                <Phone size={42} className="text-white" />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-bold text-[#141b39]">
                  Phone
                </h3>

                <p className="text-gray-700 mt-2">
                  +91 981-152-2988
                </p>
              </div>
            </div>

            {/* Address */}

            <div className="flex bg-white">
              <div className="w-24 bg-red-600 flex items-center justify-center">
                <MapPin size={42} className="text-white" />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-bold text-[#141b39]">
                  Location
                </h3>

                <p className="text-gray-700 mt-2 leading-8">
                  Ground Floor, Khasra No. 63/25,64/21,
                  Road No. 6, Gali No.2,
                  Vrinda Associates,
                  Udyognagar Mundka,
                  New Delhi - 110041
                </p>
              </div>
            </div>

            {/* Social */}

            <div className="mt-10">

              <h3 className="text-4xl font-semibold text-white">
                Follow Us
              </h3>

              <div className="w-28 h-[3px] bg-red-600 mt-4 mb-6"></div>

              <div className="flex gap-4">

                <a
                  href="https://www.facebook.com/p/Apex-machinery-technology-100068976048876/"
                  target="_blank"
                  className="h-14 w-14 rounded-full bg-[#3b5998] flex items-center justify-center text-white text-xl hover:scale-110 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.youtube.com/@APEXTECHNOLOGYINDIA-wj5xk"
                  target="_blank"
                  className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center text-white text-xl hover:scale-110 transition"
                >
                  <FaYoutube />
                </a>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white p-8 md:p-10">

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 p-4 outline-none focus:border-red-600"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 p-4 outline-none focus:border-red-600"
                />

              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-4 outline-none focus:border-red-600"
              />

              <input
                type="tel"
                placeholder="Mobile"
                className="w-full border border-gray-300 p-4 outline-none focus:border-red-600"
              />

              <textarea
                rows={6}
                placeholder="Message"
                className="w-full border border-gray-300 p-4 outline-none resize-none focus:border-red-600"
              ></textarea>

        

              <button
                type="submit"
                className="bg-red-600 text-white px-10 py-4 text-lg font-semibold hover:bg-red-700 transition"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </div>
      {/* Google Map */}

<div className=" rounded-xl overflow-hidden shadow-lg border border-gray-300">
  <iframe
    title="Apex Technology Location"
    src="https://www.google.com/maps?q=GROUND+FLOOR,+khasra+no.+63/25,64/21,+Road+No+6+Gali+No.2,+Vrinda+Associates,+Udyognagar+Mundka,+New+Delhi,+Delhi+110041&output=embed"
    width="100%"
    height="500"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full"
  />
</div>
    </section>
  );
}