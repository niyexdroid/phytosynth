"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const CERTIFICATES = [
  {
    title: "AI Agriculture & Plant Phenotyping",
    duration: "10–12 Weeks",
    level: "Professional Certificate",
    blurb:
      "Our flagship programme, go from plant-science fundamentals to building deployable AI crop-prediction systems.",
    modules: [
      "Introduction to AI Agriculture",
      "Plant Science Fundamentals",
      "Plant Science Datasets",
      "Data Cleaning",
      "Excel Analytics",
      "Python for Plant Scientists",
      "Feature Engineering",
      "Machine Learning",
      "Yield Prediction",
      "Plant Phenotyping Analytics",
      "Decision-Support Systems",
      "Dashboard Development",
    ],
    capstone: "Build an AI-powered crop prediction system.",
  },
  {
    title: "Smart Greenhouse Analytics & Decision Support",
    duration: "6 Weeks",
    level: "Professional Certificate",
    blurb:
      "Turn greenhouse sensor data into actionable decisions with real-time monitoring and dashboards.",
    modules: [
      "Environmental sensors",
      "Greenhouse data integration",
      "Crop stress monitoring",
      "Decision-support systems",
      "Dashboard development",
    ],
    capstone: "Build a smart greenhouse monitoring dashboard.",
  },
  {
    title: "Plant Phenotyping Analytics Using Real Research Data",
    duration: "4 Weeks",
    level: "Professional Certificate",
    blurb:
      "Hands-on phenotyping analytics with genuine research datasets, from raw scans to a finished report.",
    modules: [
      "PlantEye data analysis",
      "NDVI analytics",
      "Biomass estimation",
      "Stress detection",
      "Phenotyping workflows",
    ],
    capstone: "Generate a complete phenotyping report.",
  },
  {
    title: "Precision Agriculture with Python",
    duration: "6 Weeks",
    level: "Professional Certificate",
    blurb:
      "Build practical agricultural analytics workflows in Python, no prior programming required.",
    modules: [
      "Python basics",
      "Agricultural datasets",
      "Sensor analytics",
      "Machine learning",
      "Yield prediction",
    ],
    capstone: "Build an agricultural analytics workflow.",
  },
  {
    title: "Molecular Biology & Diagnostics for Agriculture",
    duration: "5 Weeks",
    level: "Professional Certificate",
    blurb:
      "Master the core molecular diagnostic techniques used across modern agricultural research and testing.",
    modules: ["PCR", "qPCR", "Biomarkers", "ELISA", "Diagnostic workflows"],
    capstone: "Design a molecular diagnostic strategy.",
  },
  {
    title: "Laboratory Safety & COSHH for Bioscience Professionals",
    duration: "2 Weeks",
    level: "Laboratory Safety Certificate",
    blurb:
      "The essential safety and compliance grounding every laboratory professional needs.",
    modules: [
      "COSHH",
      "Risk assessment",
      "Laboratory safety",
      "Documentation",
      "Good laboratory practice",
    ],
    capstone: "Awarded a Laboratory Safety Certificate.",
  },
];

const LAB_COURSES = [
  {
    title: "HPLC Training",
    desc: "Hands-on training in High Performance Liquid Chromatography.",
    img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80&fit=crop",
  },
  {
    title: "GC-MS Training",
    desc: "Comprehensive training in Gas Chromatography-Mass Spectrometry.",
    img: "/training-gc-ms.png",
  },
  {
    title: "Phytochemical Analysis",
    desc: "Extraction, screening and analysis of bioactive plant compounds.",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80&fit=crop",
  },
  {
    title: "Molecular Techniques",
    desc: "PCR, qPCR, sequencing and other molecular diagnostics techniques.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80&fit=crop",
  },
  {
    title: "Customized Training",
    desc: "Tailored training programmes to meet specific research and industry needs.",
    img: "/training-custom.png",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function TrainingPage() {
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
        {/* ═══════════ BANNER ═══════════ */}
        <section className="relative pt-[76px] h-[400px] md:h-[460px] flex items-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=1600&q=80&fit=crop"
            alt="Phytosynth Training Academy"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B2F1F]/78 z-[1]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Phytosynth Training Academy
            </span>
            <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              Advanced Training. Practical Expertise.
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[660px] mx-auto leading-relaxed">
              Professional certificate programmes and hands-on laboratory
              courses for students, researchers, laboratory professionals, and
              industry teams, taught with real research data and real-world
              workflows.
            </p>
          </div>
        </section>

        {/* ═══════════ INTRO ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-left reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
              Why Train With Us
            </span>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
              Skills That Translate Straight Into the Field and the Lab
            </h2>
            <p className="text-[16px] text-[#5A6560] leading-relaxed">
              Every programme is built around the same principle as our
              research: theory is only useful when it ships. You will work with
              authentic datasets, modern tooling, and capstone projects you can
              put in a portfolio, guided by practising scientists, not just
              lecturers.
            </p>
          </div>

          {/* Sustainable Development Goals */}
          <div className="max-w-5xl mx-auto px-6 md:px-8 mt-14 md:mt-16">
            <p className="reveal opacity-0 text-center text-[15px] font-bold uppercase tracking-[0.1em] text-phyto-bright mb-8">
              Our work contributes directly to
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  num: "2",
                  color: "#DDA63A",
                  title: "Zero Hunger",
                  desc: "Promoting sustainable food production and agricultural innovation.",
                },
                {
                  num: "4",
                  color: "#C5192D",
                  title: "Quality Education",
                  desc: "Building scientific capacity and technical skills.",
                },
                {
                  num: "9",
                  color: "#FD6925",
                  title: "Industry, Innovation and Infrastructure",
                  desc: "Driving technological advancement through research and innovation.",
                },
                {
                  num: "12",
                  color: "#BF8B2E",
                  title: "Responsible Consumption and Production",
                  desc: "Supporting sustainable resource management.",
                },
                {
                  num: "13",
                  color: "#3F7E44",
                  title: "Climate Action",
                  desc: "Developing climate-smart agricultural solutions.",
                },
                {
                  num: "15",
                  color: "#56C02B",
                  title: "Life on Land",
                  desc: "Supporting biodiversity and ecosystem resilience.",
                },
              ].map((sdg, i) => (
                <div
                  key={sdg.num}
                  className={`reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6 flex gap-4 hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div
                    className="shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center text-white leading-none"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <span className="text-[9px] font-bold tracking-[0.04em]">
                      SDG
                    </span>
                    <span className="text-[22px] font-extrabold">
                      {sdg.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[15.5px] font-bold text-[#0D0D0D] mb-1 leading-snug">
                      {sdg.title}
                    </h3>
                    <p className="text-[13.5px] text-[#6B7570] leading-relaxed text-left">
                      {sdg.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CERTIFICATE PROGRAMMES ═══════════ */}
        <section className="py-16 md:py-24 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Certificate Programmes
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Professional Certificates
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                Structured, project-based programmes that take you from
                fundamentals to a finished, demonstrable outcome.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
              {CERTIFICATES.map((course, i) => (
                <div
                  key={course.title}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 md:p-8 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${(i % 2) + 1}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.06em] text-phyto-deep bg-phyto-pale px-3 py-1.5 rounded-full">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0D0D0D] mb-2 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed mb-5 text-left">
                    {course.blurb}
                  </p>

                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-phyto-bright mb-2.5">
                    Modules
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-1.5 mb-6">
                    {course.modules.map((m) => (
                      <li
                        key={m}
                        className="flex items-start gap-2 text-[13.5px] text-[#5A6560]"
                      >
                        <svg
                          className="mt-[5px] shrink-0 text-phyto-bright"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {m}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-start gap-2.5 bg-[#F5F7F5] border border-gray-200 rounded-xl p-4">
                    <svg
                      className="mt-0.5 shrink-0 text-phyto-bright"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9V2h12v7" />
                      <path d="M6 9a6 6 0 0 0 12 0" />
                      <path d="M9 22h6" />
                      <path d="M12 15v7" />
                    </svg>
                    <p className="text-[13.5px] text-[#3D4A44] leading-relaxed">
                      <span className="font-bold">Capstone:</span>{" "}
                      {course.capstone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ LAB-TECHNIQUE COURSES ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Hands-On Short Courses
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Laboratory Techniques
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                Practical bench training on the instruments and methods at the
                core of modern bioscience laboratories.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {LAB_COURSES.map((course, i) => (
                <div
                  key={course.title}
                  className={`reveal opacity-0 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 fade-in-${i + 1}`}
                >
                  <div className="relative h-[150px] overflow-hidden">
                    <Image
                      src={course.img}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[15px] font-bold text-[#0D0D0D] mb-1.5 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-[13px] text-[#6B7570] leading-relaxed">
                      {course.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FOR ORGANISATIONS / WHY PARTNER WITH US ═══════════ */}
        <section className="py-16 md:py-24 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-2xl mx-auto text-center mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                For Organisations
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
                Why Partner With Us?
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                We design bespoke training programmes and research partnerships
                tailored to your team&apos;s goals, data, and equipment,
                delivered on-site, remotely, or as a blended cohort, and built
                around your real workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  title: "Scientific Expertise",
                  desc: "Multidisciplinary expertise spanning biotechnology, agriculture, molecular biology, AI and environmental science.",
                },
                {
                  title: "Innovation Focus",
                  desc: "Developing practical solutions with measurable impact.",
                },
                {
                  title: "International Reach",
                  desc: "Connecting UK and African research, innovation and capacity-building initiatives.",
                },
                {
                  title: "Commercial Understanding",
                  desc: "Translating scientific discoveries into scalable products and services.",
                },
                {
                  title: "Research Excellence",
                  desc: "Evidence-based approaches grounded in scientific rigour and innovation.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div className="w-11 h-11 mb-4 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0D0D0D] mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Partner statement + focus areas */}
            <div className="reveal opacity-0 mt-12 md:mt-14 bg-phyto-pale/40 border border-phyto-pale rounded-2xl p-8 md:p-10">
              <h3 className="text-[clamp(20px,3vw,26px)] font-extrabold tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Partner With Phytosynth Bioscience
              </h3>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-8 max-w-[760px]">
                Whether you are a researcher, university, government agency,
                NGO, grower, investor or commercial organisation, we are
                committed to creating innovative solutions that address
                today&apos;s challenges and prepare for tomorrow&apos;s
                opportunities.
              </p>

              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-phyto-bright mb-4">
                Our Focus Areas
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  "Agricultural Biotechnology",
                  "Artificial Intelligence",
                  "Smart Agriculture",
                  "Plant Phenotyping",
                  "Molecular Diagnostics",
                  "Environmental Biosolutions",
                  "Research Consultancy",
                  "Professional Training",
                ].map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-xl px-4 py-3"
                  >
                    <svg
                      className="shrink-0 text-phyto-bright"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[13.5px] font-semibold text-[#3D4A44]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-16 md:py-24 bg-phyto-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Enrol Today
            </span>
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-white mb-5">
              Ready to Build Skills That Ship?
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to enrol, request a cohort start
              date, or discuss a custom programme for your team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-phyto-bright text-phyto-deep text-[15px] font-bold px-9 py-3.5 rounded-full hover:bg-white hover:-translate-y-px hover:shadow-lg transition-all duration-[280ms]"
              >
                Enrol or Enquire
              </Link>
              <Link
                href="/"
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
