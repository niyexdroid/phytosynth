"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

const ALL_SERVICES = [
  {
    title: "Agri-Tech",
    href: "/services/agric-tech",
    desc: "Smart farming solutions and precision agriculture technologies that optimise crop yields, reduce waste, and enable data-driven decision making across the agricultural value chain.",
    src: "/ser-1.png",
  },
  {
    title: "AI in Agriculture",
    href: "/services/ai-in-agriculture",
    desc: "AI-powered analytics for crop monitoring, prediction and decision support. We deploy machine learning models that process satellite imagery, sensor data and climate inputs for real-time insights.",
    src: "/ser-2.png",
  },
  {
    title: "Plant Biotechnology",
    href: "/services/plant-biotechnology",
    desc: "Advanced research in genetics, molecular biology and crop improvement. From gene editing to tissue culture, we develop biotech solutions for resilient, high-yield crop varieties.",
    src: "/ser-3.png",
  },
  {
    title: "Environmental Biosolutions",
    href: "/services/environmental-biosolutions",
    desc: "Nature-based solutions for soil health, pollution management and sustainability. We harness beneficial microorganisms and natural processes to restore ecosystems and improve environmental quality.",
    src: "/ser-4.png",
  },
  {
    title: "Molecular Diagnostics",
    href: "/services/molecular-diagnostics",
    desc: "Rapid and accurate molecular testing for plants, pathogens and environments. Our diagnostic platforms deliver lab-quality results in field settings, enabling faster response to emerging threats.",
    src: "/ser-5.png",
  },
  {
    title: "Consultancy",
    href: "/services/consultancy",
    desc: "Expert advice and strategic support in biotechnology and biosciences. Whether you are a startup, government agency or multinational, our consultants bring deep domain expertise to your most complex challenges.",
    src: "/ser-6.png",
  },
  {
    title: "Commercial R&D",
    href: "/services/commercial-r-and-d",
    desc: "Contract research and product development solutions for industry partners. We collaborate with companies to co-develop, validate and commercialise new bioscience products from concept to market.",
    src: "/ser-7.png",
  },
  {
    title: "Postharvest Loss Solutions",
    href: "/services/postharvest-loss-solutions",
    desc: "Natural preservation technologies that extend shelf life, reduce spoilage and minimise food losses across the supply chain, combining biotechnology, plant-derived bioactives and predictive analytics.",
    src: "/ser-8.png",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-[76px] h-[380px] md:h-[440px] flex items-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=80&fit=crop"
            alt="Bioscience research and sustainable agriculture"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B2F1F]/80 z-[1]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              What We Do
            </span>
            <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              Our Services
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[640px] mx-auto leading-relaxed">
              End-to-end bioscience solutions, from molecular diagnostics to commercial R&D, delivered by a team of dedicated scientists and industry experts.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {ALL_SERVICES.map((svc, i) => (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className={`group reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-8 md:p-9 text-center flex flex-col items-center hover:-translate-y-1.5 hover:shadow-xl hover:border-phyto-light hover:bg-white transition-all duration-300 fade-in-${Math.min(i + 1, 7)}`}
                >
                  <div className="w-[96px] h-[96px] mb-5 flex items-center justify-center">
                    <Image
                      src={svc.src}
                      alt={svc.title}
                      width={88}
                      height={88}
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0D0D0D] mb-3 leading-tight">
                    {svc.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-phyto-bright font-semibold text-[14px] group-hover:text-phyto-bright transition-colors">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-14">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-phyto-bright font-semibold text-[15px] hover:text-phyto-bright transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
