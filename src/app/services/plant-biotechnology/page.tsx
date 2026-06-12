"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Icon library
   ═══════════════════════════════════════════════════════════════════════════ */

const IconDNA = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6c0 1.5 3 3 8 3s8-1.5 8-3M4 18c0-1.5 3-3 8-3s8 1.5 8 3" />
    <path d="M4 6v12c0 1.5 3 3 8 3s8-1.5 8-3V6" />
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
);

const IconMicroscope = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconEdit = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconFlask = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6M9 3v7l-5 11h16L15 10V3" />
    <line x1="8" y1="14" x2="16" y2="14" />
    <line x1="9" y1="10" x2="15" y2="10" />
  </svg>
);

const IconSprout = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V8" />
    <path d="M8 12c0-4 4-6 4-6s4 2 4 6" />
    <path d="M16 8c0 2-2 4-4 4S8 10 8 8" />
    <circle cx="12" cy="4" r="2" />
  </svg>
);

const IconPill = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="4" height="10" rx="1.5" />
    <rect x="10" y="3" width="4" height="18" rx="1.5" />
    <rect x="17" y="8" width="4" height="8" rx="1.5" />
  </svg>
);

const IconShield = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconBook = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
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
    icon: IconDNA,
    title: "Marker-Assisted Breeding",
    desc: "Accelerate crop improvement programmes using molecular markers linked to traits of interest, drought tolerance, disease resistance, nutritional quality, reducing breeding cycle time by up to 50% compared to conventional methods.",
  },
  {
    icon: IconEdit,
    title: "Gene Editing & Transformation",
    desc: "CRISPR-Cas9 and advanced gene-editing platforms for precise trait introduction. We design constructs, validate edits, and regenerate edited plants across major crop species and orphan crops alike.",
  },
  {
    icon: IconMicroscope,
    title: "Tissue Culture & Micropropagation",
    desc: "High-throughput in vitro propagation systems for clonal multiplication of elite genotypes. Our protocols cover somatic embryogenesis, organogenesis, and meristem culture for disease-free planting material at commercial scale.",
  },
  {
    icon: IconFlask,
    title: "Genomics & Transcriptomics",
    desc: "Whole-genome sequencing, RNA-seq, and epigenomic profiling services, from library preparation through bioinformatic analysis, to uncover the genetic architecture underlying complex agronomic traits.",
  },
  {
    icon: IconSprout,
    title: "Phenotyping Platforms",
    desc: "High-throughput controlled-environment and field phenotyping using automated imaging, multispectral sensors, and computer vision to quantitatively characterise plant growth, architecture, and stress responses at scale.",
  },
  {
    icon: IconShield,
    title: "Biotic & Abiotic Stress Screening",
    desc: "Controlled inoculation trials and stress assays to identify resistant or tolerant germplasm. We combine molecular diagnostics with physiological measurements to characterise resistance mechanisms in detail.",
  },
  {
    icon: IconPill,
    title: "Metabolomics & Biochemical Profiling",
    desc: "LC-MS and GC-MS based metabolite fingerprinting to characterise biochemical pathways, identify bioactive compounds, and validate metabolic engineering outcomes, from cannabinoids to carotenoids.",
  },
  {
    icon: IconBook,
    title: "IP & Regulatory Support",
    desc: "Guidance through the intellectual property landscape, freedom-to-operate analyses, patent landscape mapping, and regulatory dossiers for GM and gene-edited crop approvals in target markets.",
  },
];

const AUDIENCES = [
  {
    icon: IconSprout,
    label: "Seed Companies",
    desc: "Breeding companies and seed producers seeking to accelerate trait introgression, deploy genomic selection, and bring improved varieties to market faster.",
  },
  {
    icon: IconFlask,
    label: "Biotech Firms",
    desc: "Ag-biotech startups and SMEs developing novel traits, gene-editing tools, or biostimulants who need R&D partners for validation, scale-up, and field testing.",
  },
  {
    icon: IconMicroscope,
    label: "Research Institutes",
    desc: "CGIAR centres, national agricultural research systems, and academic labs conducting fundamental plant science and translational research requiring specialised technical platforms.",
  },
  {
    icon: IconShield,
    label: "Crop Protection Companies",
    desc: "Agrochemical and biologicals manufacturers characterising mode-of-action, resistance mechanisms, and efficacy across diverse genetic backgrounds and environments.",
  },
  {
    icon: IconEdit,
    label: "Gene-Editing Ventures",
    desc: "Companies developing CRISPR-based products who need wet-lab capacity, regeneration protocols, and molecular characterisation of edited lines.",
  },
  {
    icon: IconBook,
    label: "Regulatory Bodies",
    desc: "Government agencies and international organisations developing biosafety frameworks, risk assessment guidelines, and monitoring protocols for biotechnology products.",
  },
];

const DELIVERABLES = [
  {
    icon: IconDNA,
    label: "Genotyped & Characterised Lines",
    desc: "Fully genotyped plant lines with validated trait introgression, delivered as seed, tissue culture plantlets, or cryopreserved material with complete molecular documentation.",
  },
  {
    icon: IconMicroscope,
    label: "Technical Dossiers",
    desc: "Comprehensive reports covering experimental design, methodology, raw and analysed data, statistical interpretation, and recommendations for next-phase work.",
  },
  {
    icon: IconEdit,
    label: "Edited Constructs & Vectors",
    desc: "Sequence-verified plasmids, binary vectors, and Agrobacterium strains ready for transformation, documented with restriction maps, sequencing chromatograms, and transformation protocols.",
  },
  {
    icon: IconFlask,
    label: "Standard Operating Procedures",
    desc: "Validated, step-by-step SOPs for every protocol developed during the engagement, from media preparation to regeneration, so your team can replicate results independently.",
  },
  {
    icon: IconBook,
    label: "Bioinformatic Reports",
    desc: "Interactive HTML reports and raw data files from genomic, transcriptomic, and metabolomic analyses, with pathway enrichment, variant annotation, and comparative genomics where applicable.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function PlantBiotechPage() {
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
            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1600&q=80&fit=crop"
            alt="Plant biotechnology laboratory"
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
              Plant Biotechnology
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[680px] mx-auto leading-relaxed">
              From gene to field, advanced molecular biology, genomics, and tissue culture services
              that accelerate crop improvement and bring next-generation varieties to market.
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
                Engineering Biology for a Resilient Food System
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                The world needs crops that yield more with less, less water, less fertiliser, less
                land, while withstanding the increasing pressures of climate change. Phytosynth
                Bioscience provides the molecular toolkit and scientific expertise to make that possible,
                bridging the gap between genomic discovery and commercial variety release.
              </p>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Our plant biotechnology platform spans the full R&D pipeline: from gene discovery and
                construct design, through transformation and regeneration, to molecular characterisation
                and field evaluation. We work across cereals, legumes, roots and tubers, vegetables,
                and industrial crops, adapting our protocols to your species, your traits, and your timeline.
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
                    We treat every plant species and every trait as a unique challenge. Our team designs
                    bespoke transformation and regeneration protocols for each genotype, refusing to
                    compromise with one-size-fits-all methods.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconLeaf}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Trait-Agnostic</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    We are not tied to any single trait or technology. Whether you need drought
                    tolerance, nitrogen-use efficiency, nutritional biofortification, or herbicide
                    resistance, we bring the right molecular tools to the table, not the other way around.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconUsers}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Partnership Model</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    We operate as an extension of your R&D team, co-designing experiments, sharing data
                    transparently, transferring protocols, and building your internal capability
                    throughout the engagement.
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
                A comprehensive molecular biology platform covering the full pipeline from DNA to
                phenotyped plant, under one roof, with one team, on one timeline.
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
                We partner with organisations across the crop improvement value chain, from gene
                discovery to variety registration.
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
                At the end of every engagement, you receive complete, traceable, and reproducible
                outputs, not just a report, but a foundation for your next phase of work.
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
              Let Us Accelerate Your Breeding Programme
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to discuss your plant biotechnology needs, from single
              experiments to multi-year research partnerships.
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
