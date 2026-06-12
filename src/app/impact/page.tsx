"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Icons
   ═══════════════════════════════════════════════════════════════════════════ */

const IconEducation = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    <path d="M22 10v6" />
  </svg>
);

const IconAgri = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V11" />
    <path d="M12 14C12 9 8 6 3 6c0 5 4 8 9 8z" />
    <path d="M12 12c0-4 4-7 9-7 0 4-4 7-9 7z" />
  </svg>
);

const IconResearch = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6" />
    <path d="M10 3v6l-4.5 8a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3" />
    <path d="M7 14h10" />
  </svg>
);

const IconPartners = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconGlobe = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z" />
  </svg>
);

const Check = (
  <svg className="mt-[3px] shrink-0 text-phyto-bright" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const PRIORITIES = [
  {
    icon: IconEducation,
    title: "Quality Education",
    desc: "Providing accessible training in biotechnology, artificial intelligence, agricultural data science, and scientific research skills.",
  },
  {
    icon: IconAgri,
    title: "Sustainable Agriculture",
    desc: "Supporting climate-smart agriculture, crop resilience, digital farming, and sustainable food production systems.",
  },
  {
    icon: IconResearch,
    title: "Research Capacity Building",
    desc: "Empowering students, researchers, and professionals through practical scientific training and collaborative research opportunities.",
  },
  {
    icon: IconPartners,
    title: "Innovation Partnerships",
    desc: "Building partnerships between universities, research institutes, government agencies, industry, and development organisations.",
  },
];

const SDGS = [
  { num: "2", color: "#DDA63A", title: "Zero Hunger" },
  { num: "4", color: "#C5192D", title: "Quality Education" },
  { num: "8", color: "#A21942", title: "Decent Work and Economic Growth" },
  { num: "9", color: "#FD6925", title: "Industry, Innovation and Infrastructure" },
  { num: "13", color: "#3F7E44", title: "Climate Action" },
  { num: "17", color: "#19486A", title: "Partnerships for the Goals" },
];

const OBJECTIVES = [
  "Train African students in biotechnology and AI",
  "Connect UK researchers with African institutions",
  "Support collaborative research projects",
  "Improve agricultural innovation",
  "Build employable scientific skills",
];

const ACTIVITIES = [
  "Virtual workshops",
  "Student mentoring",
  "Research internships",
  "Joint projects",
  "Open-access training materials",
];

const IMPACT_INITIATIVE = [
  {
    icon: IconEducation,
    title: "Education",
    items: ["Free STEM webinars", "AI agriculture bootcamps", "Student mentoring"],
  },
  {
    icon: IconResearch,
    title: "Research Capacity",
    items: ["Data analysis training", "Scientific writing workshops", "Research methods training"],
  },
  {
    icon: IconAgri,
    title: "Agriculture",
    items: [
      "Smallholder farmer education",
      "Climate-smart agriculture training",
      "Sustainable production systems",
    ],
  },
];

const WORKFORCE_PROGRAMMES = [
  "AI Agriculture for African Researchers",
  "Digital Agriculture Skills Programme",
  "Biotechnology Skills Accelerator",
  "Women in Bioscience Programme",
  "Future Agricultural Innovators Programme",
];

const ARTICLE_CATEGORIES = [
  {
    title: "Student Projects",
    desc: "Work and outcomes from students engaged through the UK–Africa Bioscience Exchange.",
  },
  {
    title: "Research Reports",
    desc: "Findings and insights from collaborative research projects across partner institutions.",
  },
  {
    title: "Pilot Programmes",
    desc: "Early-stage initiatives testing new approaches to training, agriculture, and innovation.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function ImpactPage() {
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
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1600&q=80&fit=crop"
            alt="UK–Africa bioscience collaboration"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B2F1F]/75 z-[1]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Impact &amp; Global Partnerships
            </span>
            <h1 className="text-[clamp(28px,5vw,50px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              Phytosynth Impact &amp; Global Partnerships
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[700px] mx-auto leading-relaxed">
              Bridging science, innovation and opportunity between the United Kingdom and Africa.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ INTRO ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
              Our Commitment
            </span>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-5">
              Connecting Expertise, Technology and Opportunity
            </h2>
            <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
              Phytosynth Bioscience Ltd is committed to advancing scientific education, agricultural
              innovation, and biotechnology capacity through international collaboration.
            </p>
            <p className="text-[16px] text-[#5A6560] leading-relaxed">
              Our mission is to connect expertise, technology, and opportunity between the United
              Kingdom and Africa to support sustainable development, food security, climate
              resilience, and scientific advancement.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ IMPACT PRIORITIES ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                What We Focus On
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D]">
                Our Impact Priorities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {PRIORITIES.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${(i % 4) + 1}`}
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                    {item.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0D0D0D] mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ KNOWLEDGE EXCHANGE ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 bg-phyto-deep rounded-3xl p-8 md:p-12 text-center">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-white/10 text-phyto-bright">
                {IconGlobe}
              </div>
              <h2 className="text-[clamp(22px,3.5vw,34px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-white mb-5">
                UK–Africa Knowledge Exchange Programme
              </h2>
              <p className="text-[16px] text-[#B8D8C8] leading-relaxed max-w-[720px] mx-auto">
                Phytosynth facilitates collaboration between researchers, educators, students, and
                innovators to strengthen scientific capacity and promote sustainable development
                across borders.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ SDGs ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-[#F5F7F5]">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Global Goals
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Sustainable Development Goals
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">Our activities contribute to:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {SDGS.map((sdg, i) => (
                <div
                  key={sdg.num}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div
                    className="shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center text-white leading-none"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <span className="text-[9px] font-bold tracking-[0.04em]">SDG</span>
                    <span className="text-[22px] font-extrabold">{sdg.num}</span>
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0D0D0D] leading-snug">{sdg.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ FLAGSHIP INITIATIVE ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-2xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Flagship Initiative
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D]">
                Phytosynth UK–Africa Bioscience Exchange
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <div className="reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 md:p-8 fade-in-1">
                <h3 className="text-[18px] font-bold text-[#0D0D0D] mb-5">Objectives</h3>
                <ul className="flex flex-col gap-3">
                  {OBJECTIVES.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-[14.5px] text-[#5A6560] leading-relaxed">
                      {Check}
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 md:p-8 fade-in-2">
                <h3 className="text-[18px] font-bold text-[#0D0D0D] mb-5">Potential Activities</h3>
                <ul className="flex flex-col gap-3">
                  {ACTIVITIES.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-[14.5px] text-[#5A6560] leading-relaxed">
                      {Check}
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ IMPACT INITIATIVE ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Programmes
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D]">
                Phytosynth Impact Initiative
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {IMPACT_INITIATIVE.map((group, i) => (
                <div
                  key={group.title}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 md:p-8 hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                    {group.icon}
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0D0D0D] mb-4">{group.title}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[14px] text-[#6B7570] leading-relaxed">
                        {Check}
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ WORKFORCE DEVELOPMENT ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Upcoming
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D]">
                Workforce Development Programmes
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {WORKFORCE_PROGRAMMES.map((prog, i) => (
                <div
                  key={prog}
                  className={`reveal opacity-0 relative bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <span className="inline-block text-[10.5px] font-bold uppercase tracking-[0.08em] text-phyto-deep bg-phyto-pale/50 px-2.5 py-1 rounded-full mb-3">
                    Coming Soon
                  </span>
                  <h3 className="text-[16.5px] font-bold text-[#0D0D0D] leading-snug">{prog}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ ARTICLES ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-2xl mx-auto text-center mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Insights
              </span>
              <h2 className="text-[clamp(22px,3.5vw,34px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D]">
                Articles on the Phytosynth UK–Africa Bioscience Exchange
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {ARTICLE_CATEGORIES.map((cat, i) => (
                <div
                  key={cat.title}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 md:p-8 hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${(i % 3) + 1}`}
                >
                  <h3 className="text-[18px] font-bold text-[#0D0D0D] mb-2 leading-snug">{cat.title}</h3>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CTA ═══════════════════════ */}
        <section className="py-20 md:py-28 bg-phyto-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Get Involved
            </span>
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-white mb-5">
              Partner With Us to Build Scientific Capacity
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Whether you are a university, research institute, government agency, or development
              organisation, we would like to collaborate on advancing science and sustainable
              development across the UK and Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-phyto-bright text-phyto-deep text-[15px] font-bold px-9 py-3.5 rounded-full hover:bg-white hover:-translate-y-px hover:shadow-lg transition-all duration-[280ms]"
              >
                Partner With Us
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white text-[15px] font-semibold hover:text-phyto-bright transition-colors"
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
