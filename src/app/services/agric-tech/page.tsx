"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Icon library (24×24, currentColor stroke, Feather-style)
   ═══════════════════════════════════════════════════════════════════════════ */

const IconSmartFarming = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a6 6 0 0 0 0 20" />
    <path d="M12 2a6 6 0 0 1 0 20" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconPrecisionAg = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
);

const IconVerticalFarming = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="3" width="12" height="18" rx="2" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="15" y2="16" />
    <path d="M6 6h1.5M6 10h1.5M6 14h1.5M6 18h1.5M16.5 6h1.5M16.5 10h1.5M16.5 14h1.5M16.5 18h1.5" />
    <path d="M10 3V1.5M14 3V1.5M10 21v1.5M14 21v1.5" />
  </svg>
);

const IconGreenhouse = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V9l7-7 7 7v12" />
    <path d="M9 21v-6a3 3 0 0 1 3-3 3 3 0 0 1 3 3v6" />
    <path d="M12 2v7" />
    <line x1="8" y1="7" x2="16" y2="7" />
  </svg>
);

const IconEnvMonitoring = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
    <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const IconCropAnalytics = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="12" width="4" height="9" rx="1" />
    <rect x="10" y="7" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
    <polyline points="3 20 7 14 11 17 17 8 21 10" />
  </svg>
);

const IconSensorIntegration = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <line x1="10.5" y1="6.5" x2="6.5" y2="17.5" />
    <line x1="13.5" y1="6.5" x2="17.5" y2="17.5" />
    <line x1="7.5" y1="18" x2="16.5" y2="18" />
  </svg>
);

const IconDataDriven = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <polyline points="6 10 10 7 14 9 18 5" />
    <circle cx="6" cy="10" r="1" fill="currentColor" />
    <circle cx="14" cy="9" r="1" fill="currentColor" />
  </svg>
);

const IconGrowers = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="6" r="4" />
    <path d="M5 20v-1a7 7 0 0 1 7-7 7 7 0 0 1 7 7v1" />
    <path d="M12 14v6" />
    <line x1="8" y1="20" x2="16" y2="20" />
  </svg>
);

const IconGreenhouseOps = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M3 10h18" />
    <path d="M5 10l1.5-6h11L19 10" />
    <rect x="7" y="10" width="10" height="11" />
    <rect x="9" y="13" width="6" height="8" rx="1" />
    <line x1="12" y1="13" x2="12" y2="21" />
  </svg>
);

const IconResearchInst = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6v7H9z" />
    <path d="M9 14h6v7H9z" />
    <path d="M7 12h10" />
    <path d="M12 3v3" />
    <path d="M12 18v3" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const IconStartup = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.5 7.5L22 9l-6 5.5 2 7.5-6-4-6 4 2-7.5L2 9l7.5.5z" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

const IconUniversity = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L2 8l10 5 10-5-10-5z" />
    <path d="M6 12v5a6 6 0 0 0 12 0v-5" />
    <line x1="4" y1="21" x2="20" y2="21" />
  </svg>
);

const IconGovernment = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V11l7-4 7 4v10" />
    <path d="M9 21v-6h6v6" />
    <line x1="4" y1="11" x2="20" y2="11" />
    <rect x="10" y="2" width="4" height="5" />
  </svg>
);

const IconReport = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const IconDashboard = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

const IconCropPerformance = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10" />
    <path d="M8 14c0-2 1.5-4 4-4s4 2 4 4" />
    <path d="M8 18c0-2.5 2-5 4-5s4 2.5 4 5" />
    <path d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M5 22h14" />
  </svg>
);

const IconDeployment = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="20" x2="12" y2="22" />
  </svg>
);

const IconOptimisation = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-7 7c0 4.5 5.5 11 5.5 11" />
    <path d="M12 2a7 7 0 0 1 7 7c0 4.5-5.5 11-5.5 11" />
    <circle cx="12" cy="9" r="1.5" fill="currentColor" />
    <line x1="12" y1="15" x2="12" y2="18" />
  </svg>
);

const IconLeaf = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8c-1.5 0-3 .5-4 1.5C11.5 8 9 7 7 7c-3 0-5 4-5 8 0 5 6 9 10 9 5 0 10-4 10-9 0-1-.5-2.5-1-4" />
    <path d="M17 2v6" />
  </svg>
);

const IconTarget = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
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
    icon: IconSmartFarming,
    title: "Smart Farming Systems",
    desc: "IoT-enabled farm management platforms that integrate real-time data from soil sensors, weather stations, and equipment telemetry into a unified command centre, giving you full visibility across every hectare, on any device.",
  },
  {
    icon: IconPrecisionAg,
    title: "Precision Agriculture",
    desc: "Variable-rate application maps, GPS-guided field zoning, and site-specific input management. We build prescription plans that place seed, fertiliser, and crop protection exactly where they deliver the highest return per square metre.",
  },
  {
    icon: IconVerticalFarming,
    title: "Vertical Farming Support",
    desc: "From LED spectrum tuning and nutrient-film-technique (NFT) optimisation to climate zone stratification, we help vertical farms achieve consistent cycle times, predictable yields, and energy-efficient operation at scale.",
  },
  {
    icon: IconGreenhouse,
    title: "Greenhouse Optimisation",
    desc: "Automated climate control strategies, CO₂ enrichment protocols, and light-integral management. We model your greenhouse as a system, tuning temperature, humidity, ventilation, and irrigation in concert to maximise quality and minimise cost.",
  },
  {
    icon: IconEnvMonitoring,
    title: "Environmental Monitoring",
    desc: "Deploy sensor networks for air, water, and soil quality that feed into early-warning dashboards. Track pH, EC, dissolved oxygen, VPD, and thermal stress indicators so you can intervene before a stress event becomes a yield loss.",
  },
  {
    icon: IconCropAnalytics,
    title: "Crop Analytics",
    desc: "Multispectral drone and satellite imagery processed through machine-learning pipelines to deliver stand counts, biomass estimates, chlorophyll indices, and yield forecasts, turning pixels into agronomic intelligence.",
  },
  {
    icon: IconSensorIntegration,
    title: "Sensor Integration",
    desc: "Multi-protocol sensor fusion across LoRaWAN, NB-IoT, Wi-Fi, and BLE. We handle calibration, validation, data cleaning, and API integration so your sensor stack produces one trustworthy stream, not a tangle of conflicting readings.",
  },
  {
    icon: IconDataDriven,
    title: "Data-Driven Crop Management",
    desc: "Decision-support systems that combine historical performance, real-time environmental data, and predictive models to generate prescriptive recommendations, irrigation timing, nutrient adjustments, and harvest windows backed by evidence.",
  },
];

const AUDIENCES = [
  {
    icon: IconGrowers,
    label: "Growers",
    desc: "Commercial farmers and smallholders seeking to raise yields, lower input costs, and build climate resilience through technology adoption.",
  },
  {
    icon: IconGreenhouseOps,
    label: "Greenhouse Operators",
    desc: "Controlled-environment facilities that need precision climate management, fertigation tuning, and energy optimisation to stay profitable year-round.",
  },
  {
    icon: IconResearchInst,
    label: "Research Institutions",
    desc: "Academic and private labs conducting field trials, breeding programmes, and multi-site agronomic studies requiring robust data infrastructure.",
  },
  {
    icon: IconStartup,
    label: "Agritech Startups",
    desc: "Early-stage ventures building next-generation tools, we provide the domain expertise, trial networks, and validation frameworks to bring products to market.",
  },
  {
    icon: IconUniversity,
    label: "Universities",
    desc: "Higher-education institutions embedding agri-tech into teaching curricula, student research projects, and extension programmes for the farming community.",
  },
  {
    icon: IconGovernment,
    label: "Government",
    desc: "Regulatory bodies, agricultural ministries, and extension services shaping policy, running subsidy schemes, and delivering national-scale productivity programmes.",
  },
];

const DELIVERABLES = [
  {
    icon: IconReport,
    label: "Technical Reports",
    desc: "Comprehensive documents covering trial methodology, statistical analysis, key findings, and actionable recommendations, written to be shared with stakeholders, funders, or regulators.",
  },
  {
    icon: IconDashboard,
    label: "Monitoring Dashboards",
    desc: "Real-time web-based visualisations with configurable alert thresholds, historical trend analysis, and exportable data tables for your team and partners.",
  },
  {
    icon: IconCropPerformance,
    label: "Crop Performance Assessments",
    desc: "In-field and remote evaluations of crop health, growth-stage mapping, stress-factor identification, and yield-potential modelling across entire growing seasons.",
  },
  {
    icon: IconDeployment,
    label: "Sensor Deployment Plans",
    desc: "Site-specific installation blueprints covering sensor selection, spatial layout, power budgeting, connectivity architecture, and maintenance schedules.",
  },
  {
    icon: IconOptimisation,
    label: "Optimisation Recommendations",
    desc: "Prioritised, costed action plans that identify the highest-impact interventions for resource efficiency, input reduction, and sustainability gains, backed by the data we collect together.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function AgricTechPage() {
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
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600&q=80&fit=crop"
            alt="Smart greenhouse and agricultural technology"
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
              Agri-Tech Solutions
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[680px] mx-auto leading-relaxed">
              Advanced agricultural technologies supporting sustainable crop production,
              controlled-environment agriculture, precision farming, greenhouse optimisation,
              and crop performance improvement.
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
                Science-Driven Agriculture for a Changing World
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                Phytosynth Bioscience provides innovative agri-tech solutions designed to improve
                productivity, sustainability, and decision-making in modern agriculture. We combine
                sensor technologies, crop analytics, environmental monitoring, and
                controlled-environment agriculture to help growers, researchers, and organisations
                optimise crop performance.
              </p>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Whether you are managing 500 hectares of open-field row crops or a single high-density
                vertical farm, our team bridges the gap between cutting-edge research and practical,
                deployable technology, delivering measurable improvements in yield, resource
                efficiency, and operational resilience.
              </p>
            </div>

            <div className="reveal opacity-0 grid gap-6">
              {/* Approach highlight cards */}
              <div className="flex flex-col items-center text-center gap-3 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconTarget}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Our Approach</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    We begin with a comprehensive diagnostic of your current operation, mapping
                    existing infrastructure, data flows, and agronomic practices, before recommending
                    any technology. Every solution is tailored, never templated.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconLeaf}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Sustainability First</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    Every engagement is measured against environmental outcomes, reduced water
                    consumption, lower chemical inputs, healthier soils, and smaller carbon
                    footprints. Technology serves the ecosystem, not the other way around.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  {IconUsers}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Collaborative Delivery</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    We work alongside your team, agronomists, farm managers, IT staff, embedding
                    knowledge and building internal capability so you are self-sufficient long after
                    the engagement ends.
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
                End-to-end solutions spanning hardware, software, and agronomic science, designed to
                work together as a stack or deployed individually where you need them most.
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
                We serve every link in the agricultural value chain, from the farmer in the field to
                the policymaker in the capital.
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
                Every engagement produces tangible, actionable outputs, not slide decks that gather
                dust. Here is what you can expect on the table at the end of a project.
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
              Ready to Transform Your Agricultural Operations?
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd today to discuss consultancy, training, research
              collaboration, or bespoke scientific solutions.
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
