import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Home, ChevronRight } from "lucide-react";
import AutoLinkText from "@/components/AutoLinkText";

export default function ProductSeoPage({ page }) {
  const linkCounts = {};

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {page.schema?.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section
        className="relative min-h-[340px] bg-cover bg-center"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#07132c]/75" />
        <div className="relative z-10 flex min-h-[340px] items-center">
          <div className="mx-auto w-full max-w-7xl px-5 py-16">
            <Link
              href="/"
              className="inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-[2px] text-white hover:bg-red-700"
            >
              Apex Technology
            </Link>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              {page.h1}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-white">
              <Link href="/" className="flex items-center gap-2 hover:text-red-400">
                <Home size={18} />
                Home
              </Link>
              <ChevronRight size={18} />
              <span className="text-gray-300">{page.h1}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[3px] text-red-600">
              <AutoLinkText counts={linkCounts}>{page.eyebrow}</AutoLinkText>
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {page.h2}
            </h2>
            {page.intro.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-lg leading-8 text-gray-600">
                <AutoLinkText counts={linkCounts}>{paragraph}</AutoLinkText>
              </p>
            ))}
            <Link
              href="/contact-us"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Request a Free Quote
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <Image
              src={page.image}
              alt={page.h1}
              width={650}
              height={430}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {page.sections.map((section) => (
        <section key={section.title} className="bg-gray-50 py-12 even:bg-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-4xl">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-red-600">
                <AutoLinkText counts={linkCounts}>{section.kicker}</AutoLinkText>
              </span>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
                <AutoLinkText counts={linkCounts}>{section.title}</AutoLinkText>
              </h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-lg leading-8 text-gray-600">
                  <AutoLinkText counts={linkCounts}>{paragraph}</AutoLinkText>
                </p>
              ))}
            </div>

            {section.items && (
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.title || item} className="flex gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                    <CheckCircle2 className="mt-1 shrink-0 text-green-600" size={22} />
                    <div>
                      {item.title ? (
                        <>
                          <h3 className="font-bold text-gray-900">{item.title}</h3>
                          <p className="mt-1 leading-7 text-gray-600">
                            <AutoLinkText counts={linkCounts}>{item.text}</AutoLinkText>
                          </p>
                        </>
                      ) : (
                        <p className="leading-7 text-gray-700">
                          <AutoLinkText counts={linkCounts}>{item}</AutoLinkText>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="bg-[#101426] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-bold">{page.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-200">
              <AutoLinkText counts={linkCounts}>{page.ctaText}</AutoLinkText>
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[3px] text-red-600">
              FAQs
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-9 space-y-4">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900">
                  <AutoLinkText counts={linkCounts}>{faq.question}</AutoLinkText>
                </summary>
                <p className="mt-4 leading-8 text-gray-600">
                  <AutoLinkText counts={linkCounts}>{faq.answer}</AutoLinkText>
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
