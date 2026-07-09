import AboutSection from "@/sections/Aboutsection";
import BrandCarousel from "@/sections/Brandcarousel";
import DirectorMessage from "@/sections/DirectorMessage";
import FAQSection from "@/sections/Faq";
import Hero from "@/sections/Hero";
import ProductionLine from "@/sections/ProductionLine";
import Services from "@/sections/Services";
import Testimonial from "@/sections/Testimonal";
import VideoGallery from "@/sections/VideoGallery";
import WhyChooseUs from "@/sections/Whychooseus";

export const metadata = {
  title: "Apex Technology | Laser Cutting Machines Manufacturer in India",
  description:
    "Apex Technology is a trusted laser cutting machines manufacturer in India, offering high-precision fiber, CO2 and CNC laser cutting machines for industrial applications.",
  keywords: [
    "Apex Technology",
    "Laser Cutting Machines",
    "Laser Cutting Machines Manufacturer in India",
  ],
  alternates: {
    canonical: "https://www.apexmachinerytechnology.in/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a laser cutting machine used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A laser cutting machine uses a focused laser beam to cut, engrave, or shape materials like metal, acrylic, and wood with high precision. It's widely used in metal fabrication, signage, automotive, and electronics industries.",
      },
    },
    {
      "@type": "Question",
      name: "What types of laser cutting machines does Apex Technology offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apex Technology offers fiber laser cutting machines, CO2 laser cutting machines, and CNC laser systems, designed for various industrial and commercial cutting needs.",
      },
    },
    {
      "@type": "Question",
      name: "Which laser cutting machine is best for metal cutting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiber laser cutting machines are best suited for cutting metals like stainless steel, mild steel, and aluminum due to their high speed and energy efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Does Apex Technology provide installation and after-sales support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Apex Technology provides complete solutions including expert guidance, on-site installation support, and dedicated after-sales service.",
      },
    },
    {
      "@type": "Question",
      name: "Who can use Apex Technology's laser cutting machines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our machines are designed for industries such as metal fabrication, signage, automotive, electronics, and general manufacturing, suitable for both small businesses and large-scale production units.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a quote for a laser cutting machine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Apex Technology directly through our website's contact form or call our team for a customized quote based on your production requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the best laser cutting machine manufacturer in Delhi NCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apex Technology is a trusted laser cutting machine manufacturer serving Delhi NCR, known for high-precision fiber, CO2, and CNC laser cutting solutions. We offer reliable machines backed by expert installation support and dedicated after-sales service, making us a preferred choice for businesses across the region.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <Hero/>
    <Services/>
    <DirectorMessage/>
    <ProductionLine/>
    <AboutSection/>
    <WhyChooseUs/>
    <VideoGallery/>
    
    <Testimonial/>
    <FAQSection/>
    <BrandCarousel/>
    </>
  );
}
