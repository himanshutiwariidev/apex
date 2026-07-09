"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Rajiv Ranjan",
    role: "Director",
    review:
      "Apex Technology provides outstanding laser cutting machines with excellent service and support. Highly recommended.",
  },
  {
    name: "Namrata Saxena",
    role: "Director",
    review:
      "Excellent machine quality and timely delivery. Their team is professional and always ready to help.",
  },
  {
    name: "Amit Sharma",
    role: "CEO",
    review:
      "Very satisfied with the machine performance. Precision and speed are exactly as promised.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((index + 1) % testimonials.length);

  const second = testimonials[(index + 1) % testimonials.length];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

          {/* Left */}

          <div>

            <p className="text-red-600 font-bold uppercase tracking-widest">
              Testimonial
            </p>

            <h2 className="text-4xl italic font-semibold mt-3 mb-10">
              What our customers say
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {[testimonials[index], second].map((item, i) => (

                <div
                  key={i}
                  className="rounded-2xl border p-8 shadow-sm hover:shadow-xl transition"
                >
                  <h3 className="text-3xl font-bold italic">
                    {item.name}
                  </h3>

                  <span className="font-semibold text-gray-600">
                    {item.role}
                  </span>

                  <p className="mt-5 text-lg text-gray-600 italic leading-8">
                    "{item.review}"
                  </p>

                  <div className="flex mt-6 text-yellow-500">
                    {[1,2,3,4,5].map((s)=>(
                      <Star
                        key={s}
                        size={20}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                </div>

              ))}

            </div>

            <div className="flex justify-center gap-6 mt-8">

              <button
                onClick={prev}
                className="text-red-600 hover:scale-110"
              >
                <ChevronLeft size={40}/>
              </button>

              <button
                onClick={next}
                className="text-red-600 hover:scale-110"
              >
                <ChevronRight size={40}/>
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="lg:border-l lg:pl-10">

            <h2 className="text-4xl italic font-semibold">
              Why we're different
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              We understand industrial manufacturing needs and provide
              premium laser cutting solutions with quality service.
            </p>

            <div className="space-y-5 mt-8">

              {[
                "Flexible solutions",
                "Latest Technology",
                "Improved operating conditions",
                "Transparent costs",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 text-xl"
                >
                  <CheckCircle2 className="text-orange-500"/>
                  {item}
                </div>

              ))}

            </div>

            <button className="mt-10 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition">
              Get Quote
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}