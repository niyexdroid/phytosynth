"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ResearchProject } from "@/data/research-projects";

const Check = (
  <svg
    className="mt-[3px] shrink-0 text-phyto-bright"
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
);

export default function ResearchProjectClient({
  project,
}: {
  project: ResearchProject;
}) {
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
        {/* BANNER */}
        <section className="relative pt-[76px] h-[420px] md:h-[460px] flex items-center overflow-hidden">
          <Image
            src={`/research/${project.slug}.jpeg`}
            alt={project.title}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B2F1F]/78 z-[1]" />
          <Link
            href="/research"
            className="absolute top-[90px] left-5 md:left-8 z-10 inline-flex items-center gap-1.5 text-white/85 hover:text-white text-[13px] font-semibold transition-colors"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Research
          </Link>
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Ongoing Research
            </span>
            <h1 className="text-[clamp(26px,4.4vw,46px)] font-extrabold leading-[1.16] tracking-[-0.02em] text-white">
              {project.title}
            </h1>
          </div>
        </section>

        {/* RESEARCH QUESTION */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-8 reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
              Research Question
            </span>
            <p className="text-[clamp(20px,3vw,28px)] font-semibold leading-[1.35] tracking-[-0.01em] text-[#0D0D0D]">
              {project.question}
            </p>
          </div>
        </section>

        {/* OUTPUTS + AUDIENCE */}
        <section className="py-20 md:py-28 bg-[#F5F7F5]">
          <div className="max-w-5xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-5 md:gap-6 items-start">
            <div className="reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 md:p-8 fade-in-1">
              <h2 className="text-[18px] font-bold text-[#0D0D0D] mb-5">
                Outputs
              </h2>
              <ul className="flex flex-col gap-3">
                {project.outputs.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2.5 text-[15px] text-[#5A6560] leading-relaxed"
                  >
                    {Check}
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal opacity-0 bg-white border border-gray-200 rounded-2xl p-7 md:p-8 fade-in-2">
              <h2 className="text-[18px] font-bold text-[#0D0D0D] mb-5">
                {project.partnersLabel}
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.partners.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-2 bg-[#F5F7F5] border border-gray-200 rounded-full px-4 py-2 text-[14px] font-semibold text-[#3D4A44]"
                  >
                    <span className="w-2 h-2 rounded-full bg-phyto-bright" />
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-phyto-deep">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center reveal opacity-0">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Collaborate
            </span>
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-white mb-5">
              Interested in This Research?
            </h2>
            <p className="text-[17px] text-[#B8D8C8] max-w-[560px] mx-auto leading-relaxed mb-8">
              Contact Phytosynth Bioscience Ltd to discuss collaboration,
              partnership, or commercial opportunities around this project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-phyto-bright text-phyto-deep text-[15px] font-bold px-9 py-3.5 rounded-full hover:bg-white hover:-translate-y-px hover:shadow-lg transition-all duration-[280ms]"
              >
                Get in Touch
              </Link>
              <Link
                href="/research"
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
                Back to Research
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
