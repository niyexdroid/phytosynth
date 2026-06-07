"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Icon library
   ═══════════════════════════════════════════════════════════════════════════ */

const IconBeaker = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6M9 3v7l-5 11h16L15 10V3" />
    <line x1="8" y1="14" x2="16" y2="14" />
    <line x1="9" y1="10" x2="15" y2="10" />
  </svg>
);

const IconHandshake = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
  </svg>
);

const IconClipboard = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <polyline points="9 14 11 16 15 12" />
  </svg>
);

const IconScale = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M3 6h18" />
    <circle cx="8" cy="12" r="3" />
    <circle cx="16" cy="18" r="3" />
    <line x1="3" y1="12" x2="5" y2="12" />
    <line x1="19" y1="18" x2="21" y2="18" />
  </svg>
);

const IconFileText = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const IconBox = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconStar = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconGlobe = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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

const IconUsers = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const SERVICES_INCLUDE = [
  {
    icon: IconHandshake,
    title: "Contract Research",
    desc: "Full-service contract R&D programmes — from experimental design through execution and reporting — on your timeline and your IP terms. We serve as your external research arm, delivering rigorous science without the overhead of building internal capability.",
  },
  {
    icon: IconBeaker,
    title: "Product Development",
    desc: "End-to-end product development for bioscience innovations — biostimulants, biopesticides, diagnostic kits, and specialty biochemicals — from proof-of-concept through prototype optimisation to pilot-scale production.",
  },
  {
    icon: IconScale,
    title: "Scale-Up & Pilot Production",
    desc: "Bridging the gap between bench and market. Our pilot facilities support fermentation scale-up (1–1000 L), downstream processing optimisation, formulation development, and stability testing — generating the data package you need for manufacturing partners.",
  },
  {
    icon: IconClipboard,
    title: "Field Testing & Validation",
    desc: "Multi-site, multi-season field trials designed to generate the efficacy, safety, and agronomic performance data required for product registration, investor due diligence, and customer adoption — across diverse agro-ecological zones.",
  },
  {
    icon: IconFileText,
    title: "Analytical & Quality Services",
    desc: "Comprehensive analytical chemistry and microbiology services supporting product development and quality control — HPLC, GC-MS, LC-MS/MS, ICP-OES, microbial enumeration, and stability testing under ICH conditions.",
  },
  {
    icon: IconBox,
    title: "Product Registration Support",
    desc: "Compilation of registration dossiers for biopesticides, biofertilisers, biostimulants, and diagnostic products — including chemistry and manufacturing data, toxicology and ecotoxicology summaries, efficacy summaries, and environmental fate assessments.",
  },
  {
    icon: IconStar,
    title: "Co-Development Partnerships",
    desc: "Shared-risk, shared-reward collaboration models where we co-invest scientific resources alongside your team — aligning incentives and accelerating timelines for innovations with significant market potential.",
  },
  {
    icon: IconGlobe,
    title: "Technology Transfer & Licensing",
    desc: "Structured technology transfer programmes that move innovations from our lab to your manufacturing site — with complete documentation, on-site training, and post-transfer support to ensure seamless adoption.",
  },
];

const AUDIENCES = [
  {
    icon: IconBeaker,
    label: "Agribusiness Companies",
    desc: "Established ag-input manufacturers and distributors seeking to expand product portfolios with next-generation biologicals, biostimulants, and sustainable crop protection solutions.",
  },
  {
    icon: IconBox,
    label: "Startups & Spin-outs",
    desc: "Early-stage bioscience ventures needing R&D infrastructure, technical validation, and scale-up capability without the capital expenditure of building their own facilities.",
  },
  {
    icon: IconScale,
    label: "Chemical Companies",
    desc: "Specialty chemical and industrial biotechnology firms transitioning into bio-based products who need fermentation, formulation, and field-testing capabilities to enter new markets.",
  },
  {
    icon: IconStar,
    label: "Food & Beverage Companies",
    desc: "Food manufacturers developing functional ingredients, natural preservatives, or fermentation-derived products requiring analytical characterisation, stability testing, and regulatory compliance support.",
  },
  {
    icon: IconGlobe,
    label: "International Development Partners",
    desc: "Donor-funded programmes and development organisations implementing agricultural innovation projects that require rigorous, independent product development and validation capabilities.",
  },
  {
    icon: IconHandshake,
    label: "University Spin-outs",
    desc: "Academic founders commercialising lab-scale discoveries who need the translational R&D infrastructure — and the industry-experienced scientists — to bridge the valley of death between grant funding and commercial traction.",
  },
];

const DELIVERABLES = [
  {
    icon: IconBeaker,
    label: "Research Reports & Data Packages",
    desc: "Complete, traceable experimental records — raw data, analysed results, statistical interpretations, and conclusions — formatted for regulatory submission, investor review, or publication in peer-reviewed journals.",
  },
  {
    icon: IconBox,
    label: "Prototype Batches",
    desc: "Physical product samples — from gram-scale lab prototypes through kilogram-scale pilot batches — with certificates of analysis, stability data, and formulation documentation.",
  },
  {
    icon: IconClipboard,
    label: "Technical Dossiers",
    desc: "Regulatory-ready documentation packages compiled according to the specific requirements of your target jurisdictions — OECD, EPA, EFSA, or African regional frameworks.",
  },
  {
    icon: IconScale,
    label: "Scale-Up Protocols",
    desc: "Detailed process descriptions, critical quality attributes, control strategies, and technology transfer documents enabling seamless handover to contract manufacturing organisations or in-house production teams.",
  },
  {
    icon: IconStar,
    label: "IP & Commercialisation Reports",
    desc: "Invention disclosures, patentability assessments, freedom-to-operate analyses, and commercialisation roadmaps — ensuring the products we develop together are protected and positioned for market success.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function CommercialRDPage() {
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
            src="/hero-bg.png"
            alt="Commercial R&D laboratory and pilot facility"
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
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Services
            </span>
            <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              Commercial R&amp;D Services
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[680px] mx-auto leading-relaxed">
              Your outsourced R&amp;D partner — from concept to commercial product. Contract research,
              product development, scale-up, and field validation under one roof, on your terms.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ OVERVIEW ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="reveal opacity-0">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-vibrant mb-3">
                Overview
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
                Your R&amp;D engine, without the overhead
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                Building and maintaining internal R&amp;D capability is expensive, slow, and risky —
                especially in bioscience, where the capital requirements for laboratories, pilot
                facilities, and field trial networks can stretch into the millions before a single
                product reaches the market. Phytosynth Bioscience offers a different path.
              </p>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Our commercial R&amp;D services provide industry partners with access to world-class
                scientific talent, fully equipped laboratories, pilot production facilities, and
                multi-site field trial networks — on a contract basis that converts fixed costs into
                variable costs and dramatically shortens time-to-market for new bioscience products.
              </p>
            </div>

            <div className="reveal opacity-0 grid gap-6">
              <div className="flex gap-4 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
                  {IconTarget}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Our Approach</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    We operate as a seamless extension of your team — co-designing research programmes,
                    sharing data in real time, and aligning our milestones with your commercial
                    objectives. Your IP stays yours. We are here to accelerate your pipeline, not
                    compete with it.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
                  {IconLeaf}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Full-Spectrum Capability</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    Unlike niche CROs that handle only one stage of development, we offer end-to-end
                    capability — molecular biology, chemistry, formulation, scale-up, field testing, and
                    regulatory dossier compilation — eliminating the friction and delays of
                    multi-vendor coordination.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
                  {IconUsers}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Flexible Engagement Models</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    We work on a fee-for-service basis, through co-development partnerships with shared
                    risk and reward, or via multi-year strategic alliances with dedicated capacity.
                    The model fits your budget, your timeline, and your risk appetite — not ours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ SERVICES INCLUDE ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-vibrant mb-3">
                Capabilities
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Services Include
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                A complete translational R&amp;D platform designed to take bioscience innovations from
                concept to commercial readiness — faster, cheaper, and with less risk than building it yourself.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {SERVICES_INCLUDE.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 md:p-8 flex gap-5 hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${Math.min(i + 1, 4)}`}
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
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
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-vibrant mb-3">
                Partners &amp; Clients
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Who We Work With
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                We partner with organisations that have big ideas and need the R&amp;D horsepower to
                bring them to life — from multinationals refreshing their pipelines to founders
                building their first product.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {AUDIENCES.map((audience, i) => (
                <div
                  key={audience.label}
                  className={`reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 flex gap-5 hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-forest">
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

        {/* ═══════════════════════ DELIVERABLES ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-vibrant mb-3">
                Outputs
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Deliverables
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                We do not deliver slide decks — we deliver data packages, prototype products, scale-up
                protocols, and regulatory dossiers ready for the next stage of commercialisation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {DELIVERABLES.map((item, i) => (
                <div
                  key={item.label}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 flex gap-5 hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
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
              Let us be your R&amp;D engine
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to discuss your R&amp;D needs — from a single experiment
              to a multi-year product development partnership.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
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
