"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Icon library
   ═══════════════════════════════════════════════════════════════════════════ */

const IconTest = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
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

const IconAlert = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconFileCheck = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);

const IconWifi = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <circle cx="12" cy="20" r="1" fill="currentColor" />
  </svg>
);

const IconPackage = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
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
    icon: IconTest,
    title: "PCR-Based Pathogen Detection",
    desc: "Real-time and digital PCR assays for the detection and quantification of plant pathogens — fungi, bacteria, viruses, and nematodes — with limits of detection validated to regulatory standards and turnaround times measured in hours, not days.",
  },
  {
    icon: IconChip,
    title: "LAMP & Isothermal Platforms",
    desc: "Field-deployable loop-mediated isothermal amplification (LAMP) and RPA assays that deliver lab-quality nucleic acid detection without thermal cycling — enabling point-of-need testing in the field, at the border, or on the farm.",
  },
  {
    icon: IconPackage,
    title: "Lateral Flow & Biosensor Development",
    desc: "Antibody-based and aptamer-based lateral flow devices and electrochemical biosensors for on-site detection of pathogens, toxins, and chemical residues — designed, validated, and manufactured in batch quantities for pilot deployment.",
  },
  {
    icon: IconSearch,
    title: "Next-Generation Sequencing Diagnostics",
    desc: "Metagenomic and amplicon sequencing for comprehensive pathogen screening, microbiome profiling, and antimicrobial resistance surveillance — from DNA extraction through bioinformatic analysis and clinically actionable reporting.",
  },
  {
    icon: IconWifi,
    title: "Integrated Surveillance Networks",
    desc: "Design and deployment of pathogen surveillance systems that combine field-deployable diagnostics, cloud-based data aggregation, geospatial visualisation, and automated alerting — giving plant health authorities real-time situational awareness.",
  },
  {
    icon: IconFileCheck,
    title: "Validation & Proficiency Testing",
    desc: "Rigorous analytical and clinical validation of diagnostic assays following ISO 17025 and ISTA guidelines — sensitivity, specificity, reproducibility, and robustness tested across multiple operators, instruments, and sample matrices.",
  },
  {
    icon: IconAlert,
    title: "Emerging Threat Response",
    desc: "Rapid assay development and deployment for newly emerging or re-emerging plant pathogens — moving from sequence to validated diagnostic within weeks, enabling containment before an outbreak becomes an epidemic.",
  },
  {
    icon: IconCalendar,
    title: "Diagnostic Training & Capacity Building",
    desc: "Hands-on training programmes for laboratory technicians, plant health inspectors, and extension officers — covering sample collection, assay execution, result interpretation, and quality management — delivered on-site or at our training facility.",
  },
];

const AUDIENCES = [
  {
    icon: IconSearch,
    label: "Plant Health Authorities",
    desc: "National plant protection organisations and regional phytosanitary bodies responsible for surveillance, quarantine, and eradication of regulated pests and pathogens.",
  },
  {
    icon: IconPackage,
    label: "Seed Companies",
    desc: "Breeding and seed production companies requiring high-throughput pathogen screening to certify seed lots, maintain phytosanitary status, and protect germplasm collections.",
  },
  {
    icon: IconAlert,
    label: "Growers & Cooperatives",
    desc: "Commercial growers and farmer cooperatives needing rapid, on-site diagnostics to guide disease management decisions and reduce prophylactic pesticide applications.",
  },
  {
    icon: IconFileCheck,
    label: "Regulatory & Standards Bodies",
    desc: "Organisations developing diagnostic standards, conducting proficiency testing schemes, and accrediting laboratories for official plant health testing programmes.",
  },
  {
    icon: IconChip,
    label: "Agritech Companies",
    desc: "Startups and established firms developing diagnostic instruments, consumables, or digital platforms who need validation partners, clinical trial support, or OEM assay development.",
  },
  {
    icon: IconTest,
    label: "Research Institutions",
    desc: "Universities and research centres conducting epidemiological studies, resistance breeding programmes, and pathogen diversity surveys requiring high-quality, high-throughput molecular diagnostics.",
  },
];

const DELIVERABLES = [
  {
    icon: IconTest,
    label: "Validated Diagnostic Assays",
    desc: "Fully validated, documented PCR, LAMP, or lateral flow assays — with standard operating procedures, positive and negative controls, and performance characteristics ready for deployment or regulatory submission.",
  },
  {
    icon: IconFileCheck,
    label: "Diagnostic Reports",
    desc: "Detailed, signed laboratory reports for each sample batch — including methodology, raw data, interpreted results, and quality control metrics — suitable for regulatory submission or commercial decision-making.",
  },
  {
    icon: IconSearch,
    label: "Pathogen Surveillance Dashboards",
    desc: "Interactive web-based dashboards displaying real-time pathogen detection data with geospatial mapping, temporal trends, and automated alerts — configurable for different users and jurisdictions.",
  },
  {
    icon: IconPackage,
    label: "Field Diagnostic Kits",
    desc: "Pre-assembled, batch-manufactured field kits containing all reagents, consumables, and instructions for on-site testing — with冷链 management plans and shelf-life documentation.",
  },
  {
    icon: IconChip,
    label: "Technology Transfer Packages",
    desc: "Complete documentation and training materials enabling partner laboratories to independently perform, troubleshoot, and quality-control the diagnostic methods developed during the engagement.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function MolDiagPage() {
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
            alt="Molecular diagnostics laboratory"
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
              Molecular Diagnostics
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[680px] mx-auto leading-relaxed">
              Rapid, accurate, and field-ready molecular testing for plant pathogens, environmental
              monitoring, and biosecurity — from the lab to the field, results you can trust.
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
                Finding the signal before it becomes a symptom
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                Every lost season, every rejected shipment, and every pesticide application that could
                have been avoided starts with one thing: a detection that came too late. Phytosynth
                Bioscience exists to change that. Our molecular diagnostics platform delivers lab-quality
                results at the speed decisions demand — whether in a central reference laboratory or at
                the farm gate.
              </p>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                We develop, validate, and deploy nucleic acid and protein-based diagnostic assays for
                the full spectrum of plant-associated threats — fungi, bacteria, viruses, viroids,
                nematodes, and insect vectors — and we build the surveillance networks that turn
                individual test results into actionable intelligence.
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
                    We do not just run samples — we build diagnostic capability. Every engagement starts
                    with a thorough assessment of your detection needs, sample types, throughput
                    requirements, and deployment context. We then design an assay and workflow that fits
                    your reality, not just our laboratory.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
                  {IconLeaf}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Field-Ready Design</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    Our assays are designed for where they will be used. Field-deployable formats
                    tolerate temperature extremes, work with simplified sample preparation, and produce
                    unambiguous results that do not require a PhD to interpret.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
                  {IconUsers}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Regulatory Confidence</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    Every assay we release is validated according to international standards. When a
                    result leaves our lab — or a kit leaves our facility — it comes with the
                    documentation regulators and trading partners demand.
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
                A full-spectrum molecular diagnostics capability — from assay concept and development
                through to validation, manufacturing, and surveillance network deployment.
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
                We serve every organisation with a stake in plant health — from the inspector at the
                border to the breeder protecting a billion-dollar germplasm collection.
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
                Every engagement produces validated, deployable diagnostic capability — not just data,
                but the tools, documentation, and training to sustain it independently.
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
              Know sooner, act faster
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to discuss your diagnostic needs — from assay
              development to nationwide surveillance network design.
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
