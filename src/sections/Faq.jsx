"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a laser cutting machine used for?",
    answer:
      "A laser cutting machine uses a focused laser beam to cut, engrave, or shape materials like metal, acrylic, and wood with high precision. It's widely used in metal fabrication, signage, automotive, and electronics industries.",
  },
  {
    question: "What types of laser cutting machines does Apex Technology offer?",
    answer:
      "Apex Technology offers fiber laser cutting machines, CO2 laser cutting machines, and CNC laser systems, designed for various industrial and commercial cutting needs.",
  },
  {
    question: "Which laser cutting machine is best for metal cutting?",
    answer:
      "Fiber laser cutting machines are best suited for cutting metals like stainless steel, mild steel, and aluminum due to their high speed and energy efficiency.",
  },
  {
    question: "Does Apex Technology provide installation and after-sales support?",
    answer:
      "Yes, Apex Technology provides complete solutions including expert guidance, on-site installation support, and dedicated after-sales service.",
  },
  {
    question: "Who can use Apex Technology's laser cutting machines?",
    answer:
      "Our machines are designed for industries such as metal fabrication, signage, automotive, electronics, and general manufacturing — suitable for both small businesses and large-scale production units.",
  },
  {
    question: "How do I get a quote for a laser cutting machine?",
    answer:
      "You can contact Apex Technology directly through our website's contact form or call our team for a customized quote based on your production requirements.",
  },
  {
    question:
      "Who is the best laser cutting machine manufacturer in Delhi NCR?",
    answer:
      "Apex Technology is a trusted laser cutting machine manufacturer serving Delhi NCR, known for high-precision fiber, CO2, and CNC laser cutting solutions. We offer reliable machines backed by expert installation support and dedicated after-sales service, making us a preferred choice for businesses across the region.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto md:px-5 px-2">

        {/* Heading */}

        <div className="text-center mb-14">
          <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase">
            Frequently Asked Questions
          </span>

    
          <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Find answers to the most common questions about Apex Technology,
            laser cutting machines, installation, support, and industrial
            applications.
          </p>
        </div>

        {/* FAQ */}

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex justify-between items-center text-left px-7 py-6 hover:bg-gray-50 transition"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-5">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`text-red-600 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-7 pb-6 text-gray-600 leading-8 text-lg border-t border-gray-100 pt-5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}