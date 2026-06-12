"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Icon library
   ═══════════════════════════════════════════════════════════════════════════ */

const IconGlobe = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconDroplet = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const IconWind = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
  </svg>
);

const IconThermometer = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>
);

const IconRecycle = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

const IconBug = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="5" width="16" height="12" rx="4" />
    <line x1="8" y1="2" x2="8" y2="5" />
    <line x1="16" y1="2" x2="16" y2="5" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const IconMountain = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 10l-5 5-5-5" />
    <path d="M3 21h18" />
    <path d="M5.5 15l3.5-4 3.5 4" />
    <path d="M19 21V6a4 4 0 0 0-8 0v3" />
  </svg>
);

const IconZap = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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
    icon: IconDroplet,
    title: "Soil Health & Remediation",
    desc: "Comprehensive soil assessment and biological remediation strategies. We characterise soil microbiomes, quantify organic matter dynamics, and design microbial inoculant programmes that restore fertility, structure, and carbon sequestration capacity.",
  },
  {
    icon: IconGlobe,
    title: "Water Quality Management",
    desc: "Monitoring and treatment of agricultural runoff, industrial effluents, and natural water bodies using biofiltration, constructed wetlands, and microbial degradation, turning waste streams into recovered resources.",
  },
  {
    icon: IconRecycle,
    title: "Waste Bioconversion",
    desc: "Transforming agricultural, food-processing, and municipal organic waste into valuable products, compost, biochar, biogas, and insect protein, using optimised microbial consortia and invertebrate bioprocessing systems.",
  },
  {
    icon: IconBug,
    title: "Bioremediation",
    desc: "Deployment of native and engineered microorganisms to degrade pesticides, hydrocarbons, heavy metals, and emerging contaminants in soil and water, monitored with molecular tools that track degradation kinetics and microbial community shifts.",
  },
  {
    icon: IconThermometer,
    title: "Climate Resilience Planning",
    desc: "Vulnerability assessments and adaptation roadmaps for farms, watersheds, and regions, combining downscaled climate projections with on-the-ground ecological data to identify the most cost-effective resilience investments.",
  },
  {
    icon: IconWind,
    title: "Carbon Sequestration & Accounting",
    desc: "Measurement, reporting, and verification (MRV) of soil and biomass carbon stocks. We design carbon farming protocols, baseline surveys, and monitoring programmes that qualify for voluntary and compliance carbon markets.",
  },
  {
    icon: IconMountain,
    title: "Ecosystem Restoration",
    desc: "Design and implementation of restoration projects for degraded landscapes, reforestation, wetland rehabilitation, riparian buffer establishment, and invasive species management, grounded in ecological science and community engagement.",
  },
  {
    icon: IconZap,
    title: "Bioenergy & Bioeconomy",
    desc: "Feasibility studies and technology validation for bioenergy pathways, anaerobic digestion, algal biofuels, lignocellulosic ethanol, integrated with waste streams and agricultural residues to create circular bioeconomy systems.",
  },
];

const AUDIENCES = [
  {
    icon: IconMountain,
    label: "Farmers & Growers",
    desc: "Commercial farms and smallholders seeking to improve soil health, reduce chemical inputs, access carbon markets, and build long-term resilience into their operations.",
  },
  {
    icon: IconDroplet,
    label: "Water Utilities",
    desc: "Public and private water management entities needing biological treatment solutions, source-water protection, and nutrient management in reservoirs and watersheds.",
  },
  {
    icon: IconRecycle,
    label: "Waste Management Firms",
    desc: "Companies handling organic waste streams who want to move up the value chain, from disposal to bioconversion, producing revenue-generating products from what was once a cost centre.",
  },
  {
    icon: IconGlobe,
    label: "Extractive Industries",
    desc: "Mining and oil & gas companies with remediation obligations on disturbed lands, tailings facilities, and contaminated sites, requiring scientifically rigorous, regulator-accepted biological solutions.",
  },
  {
    icon: IconZap,
    label: "Development Organisations",
    desc: "Multilateral development banks, UN agencies, and international NGOs implementing large-scale environmental programmes in agriculture, forestry, and watershed management.",
  },
  {
    icon: IconWind,
    label: "Government Agencies",
    desc: "Environmental protection authorities, agricultural ministries, and climate change offices developing policies, incentive programmes, and monitoring frameworks for natural resource management.",
  },
];

const DELIVERABLES = [
  {
    icon: IconBug,
    label: "Microbiome Assessment Reports",
    desc: "Comprehensive soil and water microbial community profiles using 16S/ITS amplicon sequencing or shotgun metagenomics, with diversity indices, functional predictions, and management recommendations.",
  },
  {
    icon: IconRecycle,
    label: "Bioprocess Design Packages",
    desc: "Engineering specifications for bioremediation systems, composting facilities, or anaerobic digesters, including mass balances, energy budgets, equipment lists, and operational SOPs.",
  },
  {
    icon: IconDroplet,
    label: "Environmental Monitoring Plans",
    desc: "Site-specific sampling designs, sensor deployment strategies, analyte lists, and quality assurance protocols for long-term environmental monitoring and regulatory compliance.",
  },
  {
    icon: IconThermometer,
    label: "Climate Adaptation Roadmaps",
    desc: "Prioritised, costed, and phased action plans for climate resilience, covering crop diversification, water infrastructure, soil conservation, and institutional capacity building.",
  },
  {
    icon: IconMountain,
    label: "Restoration Master Plans",
    desc: "Spatially explicit restoration designs with species selection, planting schedules, bioengineering specifications, and five-year monitoring frameworks with success indicators.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function EnvBioPage() {
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
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80&fit=crop"
            alt="Environmental biosolutions and ecosystem restoration"
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
              Environmental Biosolutions
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[680px] mx-auto leading-relaxed">
              Harnessing the power of biology to solve environmental challenges, from soil remediation
              and water treatment to carbon sequestration and ecosystem restoration.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ OVERVIEW ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="reveal opacity-0">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Overview
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
                Nature Is the Most Powerful Engineer We Know
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                The greatest environmental challenges of our time, degraded soils, contaminated water,
                collapsing biodiversity, rising carbon emissions, are not problems we can solve with
                chemistry alone. They require biological solutions that work with nature, not against it.
                Phytosynth Bioscience develops and deploys those solutions at scale.
              </p>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Our environmental biosolutions practice combines microbiology, ecology, and process
                engineering to design systems that clean water, rebuild soils, convert waste into
                resources, and capture carbon, delivering measurable environmental and economic returns
                for our clients and the planet.
              </p>
            </div>

            <div className="reveal opacity-0 grid gap-6">
              <div className="flex flex-col items-center text-center gap-3 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconTarget}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Our Approach</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    We begin with a systems-level diagnosis, mapping material flows, characterising
                    microbial communities, and quantifying environmental baselines, before designing
                    biological interventions that address root causes, not symptoms.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconLeaf}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Circular by Design</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    Every solution we design treats waste as a resource out of place. Our systems convert
                    agricultural residues, food-processing by-products, and contaminated media into
                    valuable outputs, closing loops and creating revenue streams from what was once a liability.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconUsers}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Measurable Impact</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    We do not deal in vague promises of "greener" outcomes. Every project is built around
                    quantified KPIs, tonnes of carbon sequestered, hectares restored, contaminant levels
                    reduced, waste diverted, measured, verified, and reported transparently.
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
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Capabilities
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Services Include
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                End-to-end environmental services, from baseline assessment and diagnostic science
                through to engineering design, deployment, and long-term monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {SERVICES_INCLUDE.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 md:p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${Math.min(i + 1, 4)}`}
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
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Partners &amp; Clients
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Who We Work With
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                We serve every actor with a stake in environmental health, from the farmer tending a
                single watershed to the ministry setting national policy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {AUDIENCES.map((audience, i) => (
                <div
                  key={audience.label}
                  className={`reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 3) + 1}`}
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
                Every project delivers operational assets, not just advisory documents, systems that
                work, plans that can be built, and data that stands up to third-party scrutiny.
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
              Let Us Help You Restore and Regenerate
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to discuss your environmental challenges, from
              contaminated site assessment to landscape-scale restoration planning.
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
