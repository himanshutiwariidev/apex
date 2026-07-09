import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Home } from "lucide-react";
import AutoLinkText from "@/components/AutoLinkText";

const faqs = [
  {
    question: "Who is the best laser machine service provider in Delhi?",
    answer:
      "Apex Technology is a trusted laser machine service provider in Delhi, offering repair, maintenance, and genuine spare parts support for fiber laser, CO2 laser, and tube laser cutting machines across Delhi NCR.",
  },
  {
    question: "How do I know if my laser machine needs servicing?",
    answer:
      "Common warning signs include reduced cutting speed, rough or incomplete cuts, frequent error codes, unusual noise, inconsistent laser power, and cooling system issues.",
  },
  {
    question: "Where can I get genuine laser machine spare parts in Delhi?",
    answer:
      "Apex Technology supplies genuine laser machine spare parts in Delhi, including lenses, nozzles, laser tubes, ceramic rings, drive belts, and controller boards.",
  },
  {
    question: "How often should a laser cutting machine be serviced?",
    answer:
      "Most fabrication units benefit from quarterly preventive maintenance, along with daily cleaning of lenses, nozzles, and checking coolant levels to avoid unexpected breakdowns.",
  },
  {
    question: "What is the cost of laser machine repair in Delhi?",
    answer:
      "Repair costs vary depending on the issue, whether it is a minor part replacement or a major component like the laser source. Contact Apex Technology for a transparent quote based on your machine's condition.",
  },
  {
    question: "Do service providers offer Annual Maintenance Contracts (AMC)?",
    answer:
      "Yes, Apex Technology offers AMC plans that include scheduled preventive maintenance to reduce the risk of unexpected machine downtime.",
  },
  {
    question: "Can one service provider handle multiple brands of laser machines?",
    answer:
      "Yes, experienced providers like Apex Technology service multiple machine types and brands, including fiber laser, CO2 laser, and tube laser cutting systems.",
  },
  {
    question: "What causes poor cut quality in a laser cutting machine?",
    answer:
      "Poor cut quality is often caused by a dirty or worn lens, damaged nozzle, incorrect focus settings, or inconsistent laser power output, all of which a professional service visit can diagnose.",
  },
  {
    question: "How quickly can a service provider respond to a breakdown in Delhi NCR?",
    answer:
      "Reputable providers like Apex Technology aim for same-day or next-day response for urgent breakdowns across Delhi, Noida, Gurugram, Faridabad, and Ghaziabad.",
  },
  {
    question: "Why is using genuine spare parts important for laser machines?",
    answer:
      "Genuine spare parts maintain the machine's original cutting precision and lifespan, while low-quality substitutes can cause recurring faults and reduce overall machine performance.",
  },
];

const warningSigns = [
  {
    title: "Reduced cutting speed",
    text: "The machine takes noticeably longer to complete the same job it used to finish faster.",
  },
  {
    title: "Poor cut quality",
    text: "Rough edges, burn marks, or incomplete cuts appear on materials that previously cut cleanly.",
  },
  {
    title: "Frequent error codes",
    text: "The controller repeatedly flags alignment, power, or sensor errors.",
  },
  {
    title: "Unusual noise or vibration",
    text: "Often a sign of mechanical wear in the rails, belts, or bearings.",
  },
  {
    title: "Inconsistent laser power output",
    text: "Cuts vary in depth or quality across the same sheet.",
  },
  {
    title: "Cooling system issues",
    text: "The chiller or cooling unit struggles to maintain temperature, which can damage the laser source over time.",
  },
];

const providerFactors = [
  "Quick response time for urgent breakdowns within Delhi NCR.",
  "Genuine spare parts including lenses, nozzles, laser tubes, mirrors, drive belts, and controller boards.",
  "Trained technicians with hands-on experience in precision optics and high-voltage electronics.",
  "Preventive maintenance plans and AMC support to catch wear and tear early.",
  "Multi-brand expertise across fiber laser, CO2 laser, and tube laser cutting systems.",
  "Transparent pricing with clear quotes for service visits, spare parts, and labor.",
];

const spareParts = [
  "Focus lenses",
  "Cutting nozzles",
  "Laser source or tube",
  "Ceramic rings",
  "Drive belts and rails",
  "Chiller and cooling components",
  "Controller boards and sensors",
];

const apexAdvantages = [
  "On-site diagnostics and repair across Delhi, Noida, Gurugram, Faridabad, and Ghaziabad",
  "In-stock laser machine spare parts to minimize waiting time for repairs",
  "Experienced technical team trained on fiber laser, CO2 laser, and tube cutting systems",
  "AMC plans to prevent breakdowns before they happen",
  "Operator training support so your team can spot early warning signs",
  "Transparent, upfront quotes with no hidden service charges",
];

const maintenanceTips = [
  "Clean the lens and nozzle regularly.",
  "Check cooling system levels daily.",
  "Inspect cables and connections weekly.",
  "Keep the work area dust-free.",
  "Schedule quarterly professional servicing.",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata = {
  title: "Best Laser Machine Service Provider in Delhi NCR | Apex Technology",
  description:
    "Looking for the best laser machine service provider in Delhi? Apex Technology offers fast repairs, AMC plans & genuine spare parts. Contact us today!",
  keywords: [
    "Best Laser Machine Service Provider in Delhi",
    "Laser Machine Spare Parts in Delhi",
  ],
  alternates: {
    canonical: "https://www.apexmachinerytechnology.in/blog",
  },
};

export default function BlogPage() {
  const linkCounts = {};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        className="relative min-h-[360px] bg-cover bg-center"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#07132c]/75" />
        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center px-5 py-16">
          <div className="max-w-4xl">
            <span className="inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-[2px] text-white">
              Blog
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
              Best Laser Machine Service Provider in Delhi NCR: Complete Guide (2026)
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-white">
              <Link href="/" className="flex items-center gap-2 hover:text-red-400">
                <Home size={18} />
                Home
              </Link>
              <ChevronRight size={18} />
              <span className="text-gray-300">Blog</span>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_320px]">
          <div className="max-w-4xl">
            <p className="text-xl leading-9 text-gray-700">
              <AutoLinkText counts={linkCounts}>
                If your laser cutting machine has slowed down, started throwing errors,
                or simply is not cutting as clean as it used to, you need the best laser
                machine service provider in Delhi, and fast. Every hour of downtime costs
                your production line real money.
              </AutoLinkText>
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              <AutoLinkText counts={linkCounts}>
                This guide covers what to look for in a service provider, the most common
                laser machine issues, where to source genuine spare parts, and why Apex
                Technology has become a trusted name for laser machine service across
                Delhi NCR.
              </AutoLinkText>
            </p>

            <ArticleSection title="Why Reliable Laser Machine Service Matters">
              <p>
                <AutoLinkText counts={linkCounts}>
                  Laser cutting machines run continuously in most fabrication units, often
                  across multiple shifts. Over time, lenses get dirty, nozzles wear out,
                  alignment drifts, and controllers can throw calibration errors. Left
                  unattended, small issues turn into expensive breakdowns that halt
                  production entirely.
                </AutoLinkText>
              </p>
              <p>
                <AutoLinkText counts={linkCounts}>
                  A good service provider does not just fix the machine when it breaks.
                  They help you avoid breakdowns through scheduled maintenance, timely
                  part replacement, and quick diagnostics. In a manufacturing hub like
                  Delhi NCR, having a dependable local service partner is essential.
                </AutoLinkText>
              </p>
            </ArticleSection>

            <ArticleSection title="Signs Your Laser Machine Needs Professional Service">
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {warningSigns.map((item) => (
                  <FeatureCard
                    key={item.title}
                    title={item.title}
                    text={item.text}
                    counts={linkCounts}
                  />
                ))}
              </div>
              <p className="mt-6">
                <AutoLinkText counts={linkCounts}>
                  If you are noticing even one or two of these signs, it is time to call a
                  professional laser machine service provider before the issue escalates
                  into a costly repair or full part replacement.
                </AutoLinkText>
              </p>
            </ArticleSection>

            <ArticleSection title="What to Look for in the Best Laser Machine Service Provider in Delhi">
              <Checklist items={providerFactors} counts={linkCounts} />
            </ArticleSection>

            <ArticleSection title="Common Laser Machine Spare Parts You Should Know About">
              <p>
                <AutoLinkText counts={linkCounts}>
                  Understanding which parts wear out fastest helps you plan maintenance
                  instead of reacting to breakdowns. The most frequently replaced laser
                  machine spare parts in Delhi fabrication units include:
                </AutoLinkText>
              </p>
              <Checklist items={spareParts} counts={linkCounts} />
              <p>
                <AutoLinkText counts={linkCounts}>
                  Sourcing these from a trusted local supplier, rather than unbranded
                  imports, significantly extends the working life of your machine and
                  protects your original investment.
                </AutoLinkText>
              </p>
            </ArticleSection>

            <ArticleSection title="Why Apex Technology Is the Best Laser Machine Service Provider in Delhi NCR">
              <p>
                <AutoLinkText counts={linkCounts}>
                  Apex Technology has built its reputation in Delhi NCR's manufacturing
                  community by combining fast service response with genuine parts
                  availability and technical expertise across sheet metal laser cutting
                  machines, tube laser cutting machines, and robotic laser systems.
                </AutoLinkText>
              </p>
              <Checklist items={apexAdvantages} counts={linkCounts} />
              <p>
                <AutoLinkText counts={linkCounts}>
                  Whether you are dealing with a sudden machine breakdown or want to set
                  up a preventive maintenance schedule, Apex Technology's service team is
                  built to keep your production line running with minimal disruption.
                </AutoLinkText>
              </p>
            </ArticleSection>

            <ArticleSection title="Simple Maintenance Tips to Extend Your Laser Machine's Life">
              <Checklist items={maintenanceTips} counts={linkCounts} />
            </ArticleSection>

            <ArticleSection title="Final Thoughts">
              <p>
                <AutoLinkText counts={linkCounts}>
                  Choosing the right laser machine service provider is not just about
                  fixing a breakdown when it happens. It is about protecting your
                  production uptime, extending your machine's working life, and avoiding
                  costly emergency repairs.
                </AutoLinkText>
              </p>
              <p>
                <AutoLinkText counts={linkCounts}>
                  If your laser machine needs servicing, or you are looking for genuine
                  laser machine spare parts in Delhi, reach out to Apex Technology for a
                  quick assessment and quote.
                </AutoLinkText>
              </p>
            </ArticleSection>

            <section className="mt-12 rounded-2xl bg-[#101426] p-7 text-white">
              <h2 className="text-2xl font-bold">Need Laser Machine Service?</h2>
              <p className="mt-4 leading-8 text-gray-200">
                <AutoLinkText counts={linkCounts}>
                  Get fast repairs, AMC plans, and genuine spare parts support from Apex
                  Technology across Delhi NCR.
                </AutoLinkText>
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Contact Apex Technology
                <ArrowRight size={18} />
              </Link>
            </section>

            <section className="mt-14">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-red-600">
                FAQs
              </span>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-8 space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="rounded-xl border border-gray-200 p-5">
                    <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900">
                      {faq.question}
                    </summary>
                    <p className="mt-4 leading-8 text-gray-600">
                      <AutoLinkText counts={linkCounts}>{faq.answer}</AutoLinkText>
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:sticky lg:top-6">
            <h2 className="text-xl font-bold text-gray-900">Article Summary</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
              <p>
                <AutoLinkText counts={linkCounts}>Service area: Delhi, Noida, Gurugram, Faridabad, and Ghaziabad</AutoLinkText>
              </p>
              <p>
                <AutoLinkText counts={linkCounts}>Support: Repairs, AMC plans, diagnostics, spare parts, and training</AutoLinkText>
              </p>
              <p>
                <AutoLinkText counts={linkCounts}>Machines: Fiber laser, CO2 laser, tube laser, and robotic laser systems</AutoLinkText>
              </p>
            </div>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Request Service
              <ArrowRight size={18} />
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}

function ArticleSection({ title, children }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold leading-tight text-gray-900">{title}</h2>
      <div className="mt-5 space-y-5 text-lg leading-8 text-gray-600">{children}</div>
    </section>
  );
}

function FeatureCard({ title, text, counts }) {
  return (
    <div className="rounded-xl bg-gray-50 p-5 ring-1 ring-gray-100">
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-base leading-7 text-gray-600">
        <AutoLinkText counts={counts}>{text}</AutoLinkText>
      </p>
    </div>
  );
}

function Checklist({ items, counts }) {
  return (
    <div className="mt-6 space-y-3">
      {items.map((item) => (
        <div key={item} className="flex gap-3">
          <CheckCircle2 className="mt-1 shrink-0 text-green-600" size={22} />
          <p className="leading-8 text-gray-700">
            <AutoLinkText counts={counts}>{item}</AutoLinkText>
          </p>
        </div>
      ))}
    </div>
  );
}
