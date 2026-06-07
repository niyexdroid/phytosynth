"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Icon library
   ═══════════════════════════════════════════════════════════════════════════ */

const IconBriefcase = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconCompass = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconTrending = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconShield = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconDollar = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const IconGlobe = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconBook = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const IconUsersGroup = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
    icon: IconCompass,
    title: "Strategic Advisory",
    desc: "Board-level and C-suite advisory services on bioscience strategy — technology roadmapping, R&D portfolio optimisation, market entry planning, and competitive positioning grounded in deep domain expertise and global market insight.",
  },
  {
    icon: IconTrending,
    title: "Market Intelligence & Due Diligence",
    desc: "Comprehensive market assessments, technology landscaping, competitor analysis, and technical due diligence for investors, acquirers, and corporate development teams evaluating bioscience opportunities — from seed-stage to maturity.",
  },
  {
    icon: IconDollar,
    title: "Grant & Funding Strategy",
    desc: "Identification of public and private funding opportunities — including government R&D grants, multilateral development funds, and impact investment — with full proposal development, budget construction, and consortium coordination.",
  },
  {
    icon: IconShield,
    title: "Regulatory Strategy",
    desc: "Navigation of the complex regulatory landscape for biotechnology products — GM crop approvals, biopesticide registration, diagnostic device certification — across African, European, and North American jurisdictions.",
  },
  {
    icon: IconGlobe,
    title: "International Expansion Support",
    desc: "Go-to-market strategy for bioscience companies entering new geographies — partner identification, regulatory pathway mapping, field trial site selection, and local team recruitment strategy tailored to each target market.",
  },
  {
    icon: IconBook,
    title: "IP Strategy & Technology Transfer",
    desc: "Intellectual property landscape mapping, freedom-to-operate analysis, patentability assessment, and technology transfer programme design — ensuring your innovations are protected and your partnerships are structured for success.",
  },
  {
    icon: IconBriefcase,
    title: "Organisational Development",
    desc: "Building bioscience R&D organisations from the ground up — laboratory design, equipment specification, quality management system implementation, talent acquisition strategy, and operational SOP development.",
  },
  {
    icon: IconUsersGroup,
    title: "Stakeholder Engagement",
    desc: "Design and facilitation of multi-stakeholder processes — bringing together industry, government, academia, and civil society to build consensus on complex bioscience issues, from gene editing policy to biosecurity frameworks.",
  },
];

const AUDIENCES = [
  {
    icon: IconBriefcase,
    label: "Startups & Scale-ups",
    desc: "Bioscience ventures at all stages — from pre-seed to Series C — needing strategic guidance, investor readiness support, and operational expertise to navigate hyper-growth phases.",
  },
  {
    icon: IconGlobe,
    label: "Multinational Corporations",
    desc: "Global agribusiness, food, and chemical companies seeking market intelligence, technology scouting, R&D partnership facilitation, and regulatory strategy for emerging-market expansion.",
  },
  {
    icon: IconDollar,
    label: "Investors & Funds",
    desc: "Venture capital, private equity, and impact investment funds requiring technical due diligence, portfolio company support, and sector thesis development in ag-biotech and bioscience.",
  },
  {
    icon: IconBook,
    label: "Government & Policy Bodies",
    desc: "Ministries, regulatory agencies, and intergovernmental organisations developing bioscience policy, designing innovation incentives, or establishing national biotechnology programmes.",
  },
  {
    icon: IconCompass,
    label: "Development Organisations",
    desc: "Foundations, bilateral aid agencies, and multilateral development banks designing and implementing agricultural innovation programmes that require deep technical expertise in bioscience.",
  },
  {
    icon: IconUsersGroup,
    label: "Research Consortia",
    desc: "Multi-institutional research programmes needing consortium-building support, governance design, funding strategy, and stakeholder engagement across public and private sectors.",
  },
];

const DELIVERABLES = [
  {
    icon: IconCompass,
    label: "Strategic Roadmaps",
    desc: "Detailed, phased strategy documents covering technology, market, and organisational dimensions — with clear milestones, resource requirements, risk registers, and KPIs for each phase of execution.",
  },
  {
    icon: IconTrending,
    label: "Market & Technology Reports",
    desc: "In-depth analyses of market dynamics, technology trends, competitive landscapes, and opportunity spaces — synthesised into actionable recommendations backed by primary and secondary research.",
  },
  {
    icon: IconDollar,
    label: "Funding Proposals",
    desc: "Complete grant applications and investment memoranda — with compelling technical narratives, robust budgets, logical frameworks, and supporting documentation ready for submission.",
  },
  {
    icon: IconShield,
    label: "Regulatory Dossiers",
    desc: "Compiled, reviewed, and formatted regulatory submissions — including data packages, risk assessments, and correspondence histories — prepared to the specific requirements of each target jurisdiction.",
  },
  {
    icon: IconBook,
    label: "IP Landscape Reports",
    desc: "Patent landscaping analyses with interactive visualisations, freedom-to-operate opinions, and strategic recommendations for IP filing, licensing, and portfolio management.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function ConsultancyPage() {
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
            alt="Bioscience consultancy and strategic advisory"
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
              Consultancy
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[680px] mx-auto leading-relaxed">
              Expert strategic and technical advisory services spanning the full bioscience value chain —
              from startup formation and funding strategy to regulatory navigation and international expansion.
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
                Science is only half the equation
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                The difference between a breakthrough that changes an industry and one that stays on the
                shelf is rarely the science — it is the strategy, the regulatory pathway, the IP
                position, the funding, and the team. Phytosynth Bioscience provides the expertise to get
                those things right, drawing on decades of combined experience across the bioscience sector.
              </p>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Our consultancy practice is deliberately multi-disciplinary — we bring together
                scientists, regulatory specialists, IP attorneys, market analysts, and organisational
                development experts in teams assembled for each client's specific challenge. No generic
                frameworks. No recycled slide decks. Just deep expertise applied to your unique situation.
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
                    Every engagement begins with intensive discovery — we immerse ourselves in your
                    technology, your market, and your constraints before offering any recommendation.
                    We believe advice is only as good as the understanding it is built on.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
                  {IconLeaf}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Evidence-Based</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    Our recommendations are grounded in data — market analyses, technical feasibility
                    assessments, regulatory precedence, and financial models. We tell you what the
                    evidence says, even when it is not what you hoped to hear.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-pale text-phyto-leaf">
                  {IconUsers}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D0D0D] mb-1.5">Embedded Partnership</h4>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">
                    We work alongside your team — not from a distance. Our consultants embed in your
                    strategy sessions, attend your board meetings, and are available when critical
                    decisions need to be made, not just during scheduled check-ins.
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
                A full-spectrum advisory capability spanning strategy, markets, regulation, funding,
                and organisational development — delivered by practitioners, not generalists.
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
                We advise organisations of every size and stage — from two-person startups to Fortune
                500 corporations — across the global bioscience landscape.
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
                Every engagement produces concrete, actionable outputs — documents you can take to your
                board, your investors, or your regulator with full confidence in their rigour.
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
              Let us help you find the right path forward
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to discuss your strategic challenges — from market entry
              and regulatory strategy to organisational design and fundraising.
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
