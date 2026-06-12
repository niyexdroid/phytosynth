"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Icon library
   ═══════════════════════════════════════════════════════════════════════════ */

const IconClock = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconDroplet = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.7s6 6.2 6 10.3a6 6 0 0 1-12 0c0-4.1 6-10.3 6-10.3z" />
  </svg>
);

const IconShield = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconThermometer = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>
);

const IconLayers = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconFlask = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6" />
    <path d="M10 3v6.5L4.6 18a2 2 0 0 0 1.7 3h11.4a2 2 0 0 0 1.7-3L14 9.5V3" />
    <path d="M7.3 14h9.4" />
  </svg>
);

const IconAlert = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconChart = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="3" x2="3" y2="21" />
    <line x1="3" y1="21" x2="21" y2="21" />
    <polyline points="7 14 11 10 14 13 19 7" />
  </svg>
);

const IconSearch = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconCalendar = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="8" cy="15" r="1" fill="currentColor" />
    <circle cx="16" cy="15" r="1" fill="currentColor" />
  </svg>
);

const IconPackage = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconFileCheck = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);

const IconUsers = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconBuilding = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <line x1="9" y1="6" x2="9" y2="6.01" />
    <line x1="15" y1="6" x2="15" y2="6.01" />
    <line x1="9" y1="10" x2="9" y2="10.01" />
    <line x1="15" y1="10" x2="15" y2="10.01" />
    <line x1="9" y1="14" x2="9" y2="14.01" />
    <line x1="15" y1="14" x2="15" y2="14.01" />
    <path d="M9 22v-4h6v4" />
  </svg>
);

const IconChip = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const IconTarget = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconLeaf = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8c-1.5 0-3 .5-4 1.5C11.5 8 9 7 7 7c-3 0-5 4-5 8 0 5 6 9 10 9 5 0 10-4 10-9 0-1-.5-2.5-1-4" />
    <path d="M17 2v6" />
  </svg>
);

const IconData = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    <path d="M3 12a9 3 0 0 0 18 0" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const SERVICES_INCLUDE = [
  {
    icon: IconClock,
    title: "Shelf-Life Assessment & Extension",
    desc: "Scientific evaluation of product stability, quality deterioration, physiological changes, and spoilage pathways to identify opportunities for extending marketable shelf life.",
  },
  {
    icon: IconDroplet,
    title: "Essential Oil Preservation Systems",
    desc: "Development and validation of plant-derived essential oil treatments for controlling microbial spoilage, delaying senescence, reducing decay, and improving storage performance of fruits and vegetables.",
  },
  {
    icon: IconShield,
    title: "Postharvest Disease Management",
    desc: "Identification and control of fungal and bacterial pathogens responsible for storage losses using microbiological testing, biocontrol approaches, natural preservatives, and integrated management strategies.",
  },
  {
    icon: IconThermometer,
    title: "Storage Optimisation Studies",
    desc: "Evaluation of temperature, humidity, packaging, ventilation, and handling practices to determine optimal storage conditions for maximum product quality retention.",
  },
  {
    icon: IconLayers,
    title: "Edible Coatings & Natural Preservation Technologies",
    desc: "Development of sustainable coating systems incorporating natural bioactive compounds to improve moisture retention, reduce respiration rates, and enhance storage performance.",
  },
  {
    icon: IconFlask,
    title: "Analytical Chemistry & Quality Testing",
    desc: "Quantification of nutritional, biochemical, and quality parameters using HPLC, spectrophotometry, ELISA, and other analytical techniques to support product development and shelf-life validation.",
  },
  {
    icon: IconAlert,
    title: "Food Safety & Mycotoxin Monitoring",
    desc: "Detection and monitoring of contaminants including aflatoxins, microbial hazards, and quality defects that threaten food safety and market access.",
  },
  {
    icon: IconChart,
    title: "Predictive Storage Analytics",
    desc: "Application of data science and machine learning to predict spoilage risks, estimate shelf life, and optimise postharvest management decisions.",
  },
  {
    icon: IconSearch,
    title: "Postharvest Research & Product Development",
    desc: "Design and execution of laboratory and pilot-scale studies supporting the development of novel preservation technologies, storage systems, and commercial products.",
  },
  {
    icon: IconCalendar,
    title: "Training & Capacity Building",
    desc: "Practical training programmes for growers, processors, exporters, researchers, and government agencies covering storage management, quality assurance, food safety, and postharvest innovation.",
  },
];

const AUDIENCES = [
  {
    icon: IconLeaf,
    label: "Growers & Producer Organisations",
    desc: "Commercial farms and cooperatives requiring practical solutions to minimise losses and improve profitability.",
  },
  {
    icon: IconPackage,
    label: "Food Processors",
    desc: "Companies seeking shelf-life optimisation, quality assurance, and preservation technology development.",
  },
  {
    icon: IconChart,
    label: "Exporters & Supply Chain Operators",
    desc: "Businesses requiring storage validation, quality monitoring, and compliance with international market standards.",
  },
  {
    icon: IconBuilding,
    label: "Government Agencies & Development Programmes",
    desc: "Organisations working to strengthen food security, reduce waste, and improve agricultural resilience.",
  },
  {
    icon: IconSearch,
    label: "Research Institutions",
    desc: "Universities and research centres requiring scientific expertise in postharvest biology, preservation technologies, and food quality evaluation.",
  },
  {
    icon: IconChip,
    label: "Agritech & Biotechnology Companies",
    desc: "Technology developers seeking validation, formulation support, efficacy testing, and product development services.",
  },
];

const RESEARCH_AREAS = [
  "Essential oils for postharvest disease management in tomato storage",
  "Citrus waste valorisation for natural preservation technologies",
  "Shelf-life extension of fresh produce using plant-derived bioactives",
  "Predictive modelling of postharvest quality deterioration",
  "Sustainable alternatives to synthetic fungicides",
  "Smart storage monitoring systems using environmental sensors",
  "Mycotoxin reduction and food safety assurance",
  "Data-driven postharvest decision-support systems",
];

const DELIVERABLES = [
  {
    icon: IconFileCheck,
    label: "Technical Reports",
    desc: "Comprehensive scientific reports detailing methodology, results, interpretation, and recommendations.",
  },
  {
    icon: IconClock,
    label: "Shelf-Life Validation Studies",
    desc: "Evidence-based shelf-life claims supported by experimental data and statistical analysis.",
  },
  {
    icon: IconShield,
    label: "Preservation Protocols",
    desc: "Standard operating procedures for storage, handling, and preservation interventions.",
  },
  {
    icon: IconPackage,
    label: "Product Development Packages",
    desc: "Formulation data, efficacy studies, quality assessments, and supporting documentation for commercial products.",
  },
  {
    icon: IconCalendar,
    label: "Training Resources",
    desc: "Practical guides, workshop materials, and technology transfer documentation.",
  },
  {
    icon: IconChart,
    label: "Decision-Support Dashboards",
    desc: "Interactive visualisation tools for monitoring storage conditions, product quality, and spoilage risk.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function PostharvestPage() {
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════════════════ BANNER ═══════════════════════ */}
        <section className="relative pt-[76px] h-[420px] md:h-[480px] flex items-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=1600&q=80&fit=crop"
            alt="Fresh produce storage and postharvest handling"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B2F1F]/75 z-[1]" />
          <div
            className="absolute inset-0 z-[2] pointer-events-none opacity-[0.025]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)",
            }}
          />
          <Link
            href="/services"
            className="absolute top-[90px] left-5 md:left-8 z-10 inline-flex items-center gap-1.5 text-white/85 hover:text-white text-[13px] font-semibold transition-colors"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to All Services
          </Link>
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Services
            </span>
            <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              Postharvest Loss Solutions
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[680px] mx-auto leading-relaxed">
              Natural preservation technologies for food security, shelf-life extension, and
              sustainable supply chains.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ OVERVIEW ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-8 reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
              Overview
            </span>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
              Protecting Quality From Harvest to Market
            </h2>
            <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
              Globally, up to one-third of food produced is lost before it reaches consumers. For
              growers, processors, exporters, retailers, and governments, postharvest losses
              represent lost income, wasted resources, reduced food security, and increased
              environmental impact.
            </p>
            <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
              Phytosynth Bioscience Ltd develops science-driven postharvest solutions that extend
              shelf life, reduce spoilage, improve quality retention, and minimise food losses across
              agricultural value chains. By combining biotechnology, natural product research,
              analytical chemistry, plant physiology, microbiology, and data analytics, we transform
              postharvest challenges into commercially viable opportunities.
            </p>
            <p className="text-[16px] text-[#5A6560] leading-relaxed">
              Our expertise spans fresh fruits, vegetables, grains, legumes, root and tuber crops, and
              processed agricultural products, helping clients move from reactive loss management to
              proactive quality preservation.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ OUR APPROACH ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-[#F5F7F5]">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-2xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Our Approach
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
                From Harvest to Consumption, Every Day Matters
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                Effective postharvest management requires more than a single treatment. We evaluate the
                entire storage ecosystem, including crop physiology, environmental conditions, microbial
                contamination, packaging systems, handling practices, and market requirements.
              </p>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Our multidisciplinary approach integrates laboratory testing, shelf-life studies,
                phytochemical analysis, storage optimisation, and predictive analytics to deliver
                practical, scalable, and evidence-based solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              <div className="reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 flex flex-col items-center text-center fade-in-1">
                <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconTarget}
                </div>
                <h3 className="text-[17px] font-bold text-[#0D0D0D] mb-2 leading-tight">
                  Science-Led Innovation
                </h3>
                <p className="text-[14px] text-[#6B7570] leading-relaxed">
                  Every recommendation is supported by laboratory validation, statistical analysis, and
                  real-world performance testing.
                </p>
              </div>

              <div className="reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 flex flex-col items-center text-center fade-in-2">
                <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconLeaf}
                </div>
                <h3 className="text-[17px] font-bold text-[#0D0D0D] mb-2 leading-tight">
                  Natural Preservation Focus
                </h3>
                <p className="text-[14px] text-[#6B7570] leading-relaxed">
                  We prioritise sustainable preservation technologies including essential oils,
                  plant-derived bioactives, edible coatings, and biobased treatments that reduce
                  dependence on synthetic chemicals.
                </p>
              </div>

              <div className="reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 flex flex-col items-center text-center fade-in-3">
                <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconData}
                </div>
                <h3 className="text-[17px] font-bold text-[#0D0D0D] mb-2 leading-tight">
                  Data-Driven Decision Making
                </h3>
                <p className="text-[14px] text-[#6B7570] leading-relaxed">
                  Environmental monitoring, quality assessment, and predictive analytics enable clients
                  to understand where losses occur and how they can be prevented.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ SERVICES INCLUDE ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Capabilities
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Services Include
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                Comprehensive postharvest innovation services designed to reduce losses, extend shelf
                life, and improve product quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {SERVICES_INCLUDE.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 md:p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${Math.min(i + 1, 4)}`}
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#0D0D0D] mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7570] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ WHO WE WORK WITH ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Partners &amp; Clients
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Who We Work With
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                We support organisations across the agricultural and food value chain seeking to reduce
                losses and improve product quality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {AUDIENCES.map((audience, i) => (
                <div
                  key={audience.label}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                    {audience.icon}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">
                      {audience.label}
                    </h4>
                    <p className="text-[13.5px] text-[#6B7570] leading-relaxed">
                      {audience.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ RESEARCH AREAS ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Research Areas
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D]">
                Current Innovation Themes
              </h2>
            </div>

            <div className="reveal opacity-0 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {RESEARCH_AREAS.map((area) => (
                <div
                  key={area}
                  className="flex items-start gap-3 bg-[#F5F7F5] border border-gray-200 rounded-xl px-5 py-4"
                >
                  <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-phyto-bright" />
                  <p className="text-[14.5px] text-[#3D4A44] leading-relaxed">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ DELIVERABLES ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Outputs
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Deliverables
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                Every project delivers actionable outcomes that can be implemented immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {DELIVERABLES.map((item, i) => (
                <div
                  key={item.label}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-2">
                      {item.label}
                    </h4>
                    <p className="text-[13.5px] text-[#6B7570] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CTA ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-phyto-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Get Started
            </span>
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-white mb-5">
              Reduce Losses. Extend Shelf Life. Increase Value.
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to discuss how our postharvest innovation services can
              help improve food quality, strengthen supply chains, and reduce waste across your
              organisation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-phyto-bright text-phyto-deep text-[15px] font-bold px-9 py-3.5 rounded-full hover:bg-white hover:-translate-y-px hover:shadow-lg transition-all duration-[280ms]"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-white text-[15px] font-semibold hover:text-phyto-bright transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
