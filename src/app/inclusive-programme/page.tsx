"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.png";

/* ═══════════════════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════════════════ */

const WHAT_WE_DO = [
  {
    title: "Therapeutic Plant Growing",
    intro: "We use plant-growing activities to support:",
    items: [
      "Emotional wellbeing",
      "Confidence building",
      "Sensory engagement",
      "Communication development",
      "Routine and structure",
      "Social interaction",
    ],
    note: "Participants learn by growing vegetables, herbs, flowers, and fruits in a supportive environment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 21s-6-4.4-6-10a6 6 0 0 1 12 0c0 5.6-6 10-6 10z" />
        <path d="M12 11v6" />
        <path d="M9.5 13.5 12 16l2.5-2.5" />
      </svg>
    ),
  },
  {
    title: "Accessible Gardening Programmes",
    intro: "Designed to be accessible for individuals with different abilities and support needs. Activities include:",
    items: [
      "Seed sowing",
      "Potting and transplanting",
      "Watering and plant care",
      "Harvesting crops",
      "Plant identification",
      "Garden maintenance",
      "Nature-based learning",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22V12" />
        <path d="M12 12c0-3 2-5 5-5 0 3-2 5-5 5z" />
        <path d="M12 14c0-3-2-5-5-5 0 3 2 5 5 5z" />
        <path d="M5 22h14" />
      </svg>
    ),
  },
  {
    title: "Smart Agriculture Learning",
    intro: "Participants are introduced to modern agricultural technologies through practical demonstrations and hands-on activities. Learning areas include:",
    items: [
      "Hydroponics",
      "Aeroponics",
      "Vertical farming",
      "Greenhouse growing",
      "Environmental monitoring",
      "Plant sensors",
      "AI in agriculture",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 9h16" />
        <path d="M9 9v11" />
        <circle cx="14.5" cy="14.5" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Plant Science Discovery Sessions",
    intro: "Interactive sessions introduce participants to the science behind plant growth. Topics include:",
    items: [
      "How plants grow",
      "Photosynthesis",
      "Plant nutrition",
      "Water and nutrients",
      "Soil health",
      "Climate and plant growth",
      "Sustainable food production",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10 2v6.3a2 2 0 0 1-.3 1L5 18a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-4.7-8.7a2 2 0 0 1-.3-1V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
];

const UK_PROGRAMME = [
  {
    title: "Inclusive Growing Centres",
    groups: [
      {
        label: "In-person programmes delivered through",
        items: [
          "Schools",
          "Community gardens",
          "Allotments",
          "Greenhouses",
          "Day services",
          "Supported living services",
        ],
      },
      {
        label: "Activities",
        items: [
          "Weekly growing clubs",
          "Therapeutic gardening",
          "Sensory gardens",
          "Vegetable production",
          "Raised-bed gardening",
          "Greenhouse projects",
        ],
      },
    ],
  },
  {
    title: "Employment and Green Skills Training",
    groups: [
      {
        label:
          "Participants can develop practical horticultural and agricultural skills that may support future employment. Training areas include",
        items: [
          "Plant production",
          "Greenhouse operations",
          "Crop monitoring",
          "Basic plant science",
          "Urban farming",
          "Sustainable food growing",
        ],
      },
    ],
  },
];

const AFRICA_PROGRAMME = [
  {
    title: "Online Plant Growing Academy",
    groups: [
      {
        label: "Accessible online learning for",
        items: [
          "Families",
          "Schools",
          "Community groups",
          "Young people with disabilities",
        ],
      },
      {
        label: "Training includes",
        items: [
          "Home gardening",
          "Container gardening",
          "Vegetable production",
          "Climate-smart agriculture",
          "Water-efficient growing methods",
          "Small-scale food production",
        ],
      },
    ],
  },
  {
    title: "Grow-at-Home Programme",
    groups: [
      {
        label: "Participants learn how to grow food using",
        items: [
          "Buckets",
          "Containers",
          "Raised beds",
          "Recycled materials",
          "Small urban spaces",
        ],
      },
    ],
    note: "Suitable for both rural and urban communities.",
  },
];

const FUTURE_INITIATIVES = [
  {
    title: "Phytosynth Accessible Greenhouse Project",
    desc: "Development of inclusive greenhouses designed to enable participation by individuals with different physical, learning, and sensory needs.",
  },
  {
    title: "Smart Therapeutic Garden Network",
    desc: "Creation of demonstration gardens combining:",
    items: [
      "Horticultural therapy",
      "Smart agriculture technologies",
      "Sensory learning environments",
      "Inclusive community engagement",
    ],
  },
  {
    title: "UK–Africa Inclusive Growing Programme",
    desc: "A partnership programme connecting participants in the UK and Africa through shared plant-growing projects, online learning, and knowledge exchange.",
  },
  {
    title: "Green Skills for Independence Programme",
    desc: "Supporting autistic individuals and people with disabilities to develop:",
    items: [
      "Responsibility",
      "Confidence",
      "Communication",
      "Teamwork",
      "Practical vocational skills",
    ],
    note: "…through horticulture and food production.",
  },
];

const OUTCOMES = [
  "Improved wellbeing",
  "Increased confidence",
  "Enhanced communication skills",
  "Greater independence",
  "Practical horticultural knowledge",
  "Increased social participation",
  "Exposure to green careers and sustainable agriculture",
];

/* ═══════════════════════════════════════════════════════════════════════════
   Reusable bits
   ═══════════════════════════════════════════════════════════════════════════ */

function CheckList({
  items,
  columns = false,
}: {
  items: string[];
  columns?: boolean;
}) {
  return (
    <ul className={`${columns ? "grid sm:grid-cols-2 gap-x-5 gap-y-2" : "space-y-2"}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#5A6560]">
          <svg
            className="mt-[5px] shrink-0 text-phyto-bright"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════════════════ */

export default function InclusiveProgrammePage() {
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
        <section className="relative pt-[76px] h-[420px] md:h-[480px] flex items-center overflow-hidden">
          <Image
            src={heroBg}
            alt="Inclusive Horticulture, Plant Growing and Green Skills Programme"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B2F1F]/82 z-[1]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Phytosynth Bioscience Ltd
            </span>
            <h1 className="text-[clamp(28px,4.6vw,50px)] font-extrabold leading-[1.14] tracking-[-0.02em] text-white mb-4">
              Inclusive Horticulture, Plant Growing &amp; Green Skills Programme
            </h1>
            <p className="italic text-[16px] text-phyto-bright mb-5">
              Innovating Nature, Enhancing Life
            </p>
            <p className="text-[17px] text-[#B8D8C8] max-w-[700px] mx-auto leading-relaxed">
              Empowering autistic individuals, people with disabilities, and their
              families through plant growing, horticulture, biotechnology, and green
              skills development across the United Kingdom and Africa.
            </p>
          </div>
        </section>

        {/* ═══════════ VISION & MISSION ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-7 items-stretch">
              {/* Vision */}
              <div className="reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-8 md:p-10">
                <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h2 className="text-[22px] font-bold text-[#0D0D0D] mb-3">Our Vision</h2>
                <p className="text-[16px] text-[#5A6560] leading-relaxed">
                  To empower autistic individuals, people with disabilities, and their
                  families through plant growing, horticulture, biotechnology, and green
                  skills development, creating opportunities for wellbeing, learning,
                  independence, and employment across the United Kingdom and Africa.
                </p>
              </div>

              {/* Mission */}
              <div className="reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-8 md:p-10">
                <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h2 className="text-[22px] font-bold text-[#0D0D0D] mb-3">Our Mission</h2>
                <p className="text-[16px] text-[#5A6560] leading-relaxed mb-4">
                  Phytosynth Bioscience Ltd uses plant science, smart agriculture,
                  biotechnology, and horticultural activities to improve quality of life,
                  develop practical skills, promote inclusion, and create pathways into
                  education, training, and employment.
                </p>
                <p className="text-[16px] text-[#5A6560] leading-relaxed">
                  We believe that growing plants can improve confidence, communication,
                  wellbeing, social interaction, and independence while providing valuable
                  life and vocational skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ WHAT WE DO ═══════════ */}
        <section className="py-16 md:py-24 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Our Activities
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                What We Do
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                Hands-on, supportive activities that build skills, wellbeing, and
                confidence through every stage of growing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
              {WHAT_WE_DO.map((card, i) => (
                <div
                  key={card.title}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 md:p-8 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-phyto-light transition-all duration-300 fade-in-${(i % 2) + 1}`}
                >
                  <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                    {card.icon}
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0D0D0D] mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7570] leading-relaxed mb-5">
                    {card.intro}
                  </p>
                  <CheckList items={card.items} columns />
                  {card.note && (
                    <p className="mt-5 text-[13.5px] text-[#3D4A44] leading-relaxed bg-[#F5F7F5] border border-gray-200 rounded-xl p-4">
                      {card.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ UNITED KINGDOM PROGRAMME ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mb-12 md:mb-14">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                United Kingdom Programme
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                In-Person Inclusive Growing
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Delivered in communities across the UK, our centres combine therapeutic
                gardening with practical green-skills training and routes to employment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
              {UK_PROGRAMME.map((card, i) => (
                <div
                  key={card.title}
                  className={`reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 md:p-8 hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 2) + 1}`}
                >
                  <h3 className="text-[19px] font-bold text-[#0D0D0D] mb-5 leading-snug">
                    {card.title}
                  </h3>
                  <div className="space-y-5">
                    {card.groups.map((group) => (
                      <div key={group.label}>
                        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-phyto-bright mb-2.5">
                          {group.label}
                        </p>
                        <CheckList items={group.items} columns />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ AFRICA PROGRAMME ═══════════ */}
        <section className="py-16 md:py-24 bg-[#F5F7F5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mb-12 md:mb-14">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Africa Programme
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Accessible Online &amp; Grow-at-Home Learning
              </h2>
              <p className="text-[16px] text-[#5A6560] leading-relaxed">
                Practical, low-cost growing programmes that reach families, schools, and
                community groups in both rural and urban settings.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
              {AFRICA_PROGRAMME.map((card, i) => (
                <div
                  key={card.title}
                  className={`reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 md:p-8 flex flex-col hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 2) + 1}`}
                >
                  <h3 className="text-[19px] font-bold text-[#0D0D0D] mb-5 leading-snug">
                    {card.title}
                  </h3>
                  <div className="space-y-5">
                    {card.groups.map((group) => (
                      <div key={group.label}>
                        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-phyto-bright mb-2.5">
                          {group.label}
                        </p>
                        <CheckList items={group.items} columns />
                      </div>
                    ))}
                  </div>
                  {card.note && (
                    <p className="mt-5 text-[13.5px] text-[#3D4A44] leading-relaxed bg-[#F5F7F5] border border-gray-200 rounded-xl p-4">
                      {card.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FUTURE INITIATIVES ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                Looking Ahead
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0D0D0D] mb-4">
                Future Phytosynth Initiatives
              </h2>
              <p className="text-[15px] text-[#6B7570] leading-relaxed">
                The projects we are building to widen access, deepen impact, and connect
                communities across the UK and Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-7">
              {FUTURE_INITIATIVES.map((card, i) => (
                <div
                  key={card.title}
                  className={`reveal opacity-0 bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 md:p-8 flex flex-col hover:-translate-y-1 hover:shadow-md hover:border-phyto-pale transition-all duration-300 fade-in-${(i % 2) + 1}`}
                >
                  <div className="w-11 h-11 mb-4 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M12 8V5.4" />
                      <path d="M12 6.4C12 4.9 10.6 3.9 9 4.1 9 5.6 10.4 6.6 12 6.4z" />
                      <path d="M12 5.9C12 4.4 13.4 3.4 15 3.6 15 5.1 13.6 6.1 12 5.9z" />
                      <path d="M7 22h10" />
                      <path d="M9 22v-3a3 3 0 0 1 6 0v3" />
                      <path d="M12 8v8" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0D0D0D] mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[14.5px] text-[#5A6560] leading-relaxed">
                    {card.desc}
                  </p>
                  {card.items && (
                    <div className="mt-4">
                      <CheckList items={card.items} />
                    </div>
                  )}
                  {card.note && (
                    <p className="mt-3 text-[14px] italic text-[#6B7570] leading-relaxed">
                      {card.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ EXPECTED OUTCOMES ═══════════ */}
        <section className="py-16 md:py-24 bg-phyto-deep">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 max-w-xl mx-auto text-center mb-12 md:mb-14">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
                The Difference It Makes
              </span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-white mb-4">
                Expected Outcomes
              </h2>
              <p className="text-[15px] text-[#B8D8C8] leading-relaxed">
                Through participation, individuals may experience meaningful, lasting
                change across wellbeing, skills, and opportunity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {OUTCOMES.map((outcome) => (
                <div
                  key={outcome}
                  className="reveal opacity-0 flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-xl px-5 py-4"
                >
                  <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-phyto-bright/20 text-phyto-bright">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-[14.5px] font-semibold text-white leading-snug">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ LONG-TERM GOAL ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="reveal opacity-0 bg-phyto-pale/40 border border-phyto-pale rounded-2xl p-8 md:p-12">
              <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
                Long-Term Goal
              </span>
              <h2 className="text-[clamp(22px,3.2vw,32px)] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#0D0D0D] mb-5">
                A Leading UK–Africa Provider of Inclusive Horticulture
              </h2>
              <p className="text-[16px] md:text-[17px] text-[#5A6560] leading-relaxed">
                To establish Phytosynth Bioscience Ltd as a leading UK–Africa provider of
                inclusive horticulture, smart agriculture education, and plant-growing
                programmes that promote wellbeing, independence, sustainability, and
                opportunity for autistic individuals and people with disabilities.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-16 md:py-24 bg-phyto-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Get Involved
            </span>
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-white mb-5">
              Grow Skills, Wellbeing, and Independence
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to join the programme, partner with us, or
              bring inclusive growing to your school, service, or community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-phyto-bright text-phyto-deep text-[15px] font-bold px-9 py-3.5 rounded-full hover:bg-white hover:-translate-y-px hover:shadow-lg transition-all duration-[280ms]"
              >
                Get in Touch
              </Link>
              <Link
                href="/training"
                className="inline-flex items-center gap-2 text-white text-[15px] font-semibold hover:text-phyto-bright transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Explore Training
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
