"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Icon library
   ═══════════════════════════════════════════════════════════════════════════ */

const IconBrain = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 9.5 2z" />
    <path d="M14.5 7A2.5 2.5 0 0 1 17 9.5v10a2.5 2.5 0 0 1-5 0v-10A2.5 2.5 0 0 1 14.5 7z" />
    <path d="M4.5 12A2.5 2.5 0 0 1 7 14.5v5a2.5 2.5 0 0 1-5 0v-5A2.5 2.5 0 0 1 4.5 12z" />
    <path d="M19.5 4A2.5 2.5 0 0 1 22 6.5v13a2.5 2.5 0 0 1-5 0v-13A2.5 2.5 0 0 1 19.5 4z" />
  </svg>
);

const IconEye = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconCloud = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const IconTrending = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconLayers = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
    <polyline points="2 15.5 12 22 22 15.5" />
  </svg>
);

const IconTerminal = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const IconSatellite = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 1 7 17H5a10 10 0 0 1 7-17z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconBarChart = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
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
    icon: IconEye,
    title: "Crop Monitoring & Surveillance",
    desc: "Satellite and drone-based remote sensing pipelines that detect crop stress, disease outbreaks, and nutrient deficiencies days before they become visible to the naked eye — giving you time to act, not react.",
  },
  {
    icon: IconBrain,
    title: "Machine Learning Models",
    desc: "Custom-trained deep learning architectures for yield prediction, pest identification, weed classification, and harvest timing. Models are trained on your region, your crops, and your historical data for unmatched accuracy.",
  },
  {
    icon: IconTrending,
    title: "Predictive Analytics",
    desc: "Time-series forecasting engines that combine weather projections, soil moisture trajectories, and phenological models to predict outcomes 7, 14, and 30 days ahead — so you can plan irrigation, fertilisation, and labour with confidence.",
  },
  {
    icon: IconCloud,
    title: "Climate Intelligence",
    desc: "Downscaled climate models and seasonal forecasts integrated with on-farm sensor data to assess drought risk, heat stress probability, and growing-degree-day accumulation across microclimates within your operation.",
  },
  {
    icon: IconLayers,
    title: "Data Fusion & Integration",
    desc: "Multi-source data harmonisation — satellite, drone, soil sensor, weather station, equipment telemetry — into a single analytics-ready data lake with standardised schemas and quality-controlled ingestion pipelines.",
  },
  {
    icon: IconSatellite,
    title: "Decision Support Systems",
    desc: "Interactive dashboards and mobile alerts that translate model outputs into plain-language recommendations: when to irrigate, where to scout, what to spray, and how much to apply — delivered to the right person at the right time.",
  },
  {
    icon: IconTerminal,
    title: "API & Integration Services",
    desc: "RESTful and GraphQL APIs that connect AI model outputs directly into your existing farm management software, ERP systems, or customer-facing applications — no rip-and-replace required.",
  },
  {
    icon: IconBarChart,
    title: "Model Validation & Benchmarking",
    desc: "Rigorous independent validation of AI models against ground-truth data, including blind trials, cross-season testing, and performance benchmarking against industry-standard metrics — so you know exactly what your models can and cannot do.",
  },
];

const AUDIENCES = [
  {
    icon: IconBrain,
    label: "Large-Scale Growers",
    desc: "Commercial farming operations managing thousands of hectares who need scalable, automated analytics to inform decisions across dispersed field teams.",
  },
  {
    icon: IconCloud,
    label: "Agritech Companies",
    desc: "Startups and scale-ups building AI-powered products who need domain expertise, training data strategy, and validation frameworks to bring models to market.",
  },
  {
    icon: IconTerminal,
    label: "Input Manufacturers",
    desc: "Seed, fertiliser, and crop protection companies seeking to embed AI-driven recommendation engines into their digital product offerings for grower customers.",
  },
  {
    icon: IconSatellite,
    label: "Insurance & Finance",
    desc: "Agricultural insurers and lenders requiring objective, data-driven risk assessment, yield verification, and loss adjustment powered by remote sensing and machine learning.",
  },
  {
    icon: IconUsers,
    label: "Government Agencies",
    desc: "National statistics offices, agricultural ministries, and early-warning systems requiring crop area estimates, yield forecasts, and food security intelligence at national scale.",
  },
  {
    icon: IconBarChart,
    label: "Research Institutions",
    desc: "Academic and CGIAR centres conducting multi-site trials, breeding programmes, and agronomic studies that require robust, reproducible analytics pipelines.",
  },
];

const DELIVERABLES = [
  {
    icon: IconBarChart,
    label: "Predictive Model Deployments",
    desc: "Fully containerised machine learning models deployed on your infrastructure or ours, with monitoring dashboards, retraining pipelines, and drift detection baked in from day one.",
  },
  {
    icon: IconEye,
    label: "Remote Sensing Reports",
    desc: "Season-long vegetation index time series, anomaly heatmaps, and zonal statistics delivered as interactive web reports with downloadable data tables for further analysis.",
  },
  {
    icon: IconTarget,
    label: "Yield Forecasts",
    desc: "Field-level and regional yield predictions updated weekly throughout the season, with uncertainty quantification and scenario analysis for what-if planning.",
  },
  {
    icon: IconTrending,
    label: "Decision Alerts",
    desc: "Configurable SMS, email, and in-app notifications triggered when model outputs cross predefined thresholds — irrigation stress, disease risk, or pest pressure exceeding action levels.",
  },
  {
    icon: IconLayers,
    label: "Integrated Data Platforms",
    desc: "Custom data warehousing and API solutions that unify your disparate data sources into a single source of truth, ready for advanced analytics and third-party integration.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function AIAgriculturePage() {
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
            alt="AI-powered agricultural analytics"
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
              AI in Agriculture
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[680px] mx-auto leading-relaxed">
              Machine learning, computer vision, and predictive analytics deployed across the
              agricultural value chain — from field to fork — to drive smarter, faster, and more
              profitable decisions.
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
                Intelligence that grows with every season
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                Agriculture generates more data per hectare than almost any other industry — yet most of
                it goes unused. Phytosynth Bioscience closes that gap. We build and deploy AI systems
                that transform raw sensor streams, satellite imagery, and historical records into
                actionable intelligence for growers, agribusinesses, and policymakers.
              </p>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Our models are trained on real-world agricultural data — not generic benchmarks — and
                validated across multiple seasons, geographies, and cropping systems. The result:
                predictions you can trust, recommendations you can act on, and returns you can measure.
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
                    We start with your data and your questions — not our models. Every engagement begins
                    with a data audit and problem-framing workshop to ensure we solve the right problem
                    with the right tools, then iterate with your team throughout development.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
                  {IconLeaf}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Grounded in Agronomy</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    AI without agronomy is just pattern matching. Our team includes both data scientists
                    and crop scientists, ensuring every model respects biological reality — phenology,
                    soil chemistry, and plant physiology are baked into our architectures, not ignored by them.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
                  {IconUsers}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Built for Users</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    A model that sits on a server is worthless. We design outputs for the people who will
                    use them — simple dashboards for farm managers, detailed reports for agronomists,
                    clean APIs for developers — so intelligence reaches the field, not just the presentation deck.
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
                Full-spectrum AI capabilities spanning data ingestion, model development, deployment,
                and ongoing monitoring — built for the unique demands of agricultural environments.
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
                From the farm gate to the boardroom — we partner with organisations at every stage of
                the AI adoption journey.
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
                Every engagement produces working software, not slideware. Here is what lands on your
                infrastructure at the end of a project.
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
              Ready to put your data to work?
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd today to discuss your AI and analytics needs — from
              feasibility studies to full-scale model deployment.
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
