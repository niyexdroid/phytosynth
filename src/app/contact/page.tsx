"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ───────────────────────────────────────────────────────────────────────────
   Web3Forms setup
   1. Go to https://web3forms.com, enter the email you want submissions sent to.
   2. Copy the Access Key you receive and paste it below (or set
      NEXT_PUBLIC_WEB3FORMS_KEY in your environment).
   The form works as soon as a valid key is in place, no backend required.
   ─────────────────────────────────────────────────────────────────────────── */
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY";

// Keyless Google Maps embed, replace the q= value with your exact address
// or a Google Maps share link to refine the pin.
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=50%20Edale%20Road%2C%20Sneinton%2C%20Nottingham%2C%20NG2%204HT%2C%20United%20Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed";

const CONTACT_INFO = [
  {
    label: "Location",
    value: "50 Edale Road, Sneinton,\nNottingham, NG2 4HT, United Kingdom",
    href: "https://maps.google.com/?q=50+Edale+Road+Sneinton+Nottingham+NG2+4HT",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@phytosynth.co.uk",
    href: "mailto:info@phytosynth.co.uk",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+44 7879 460859",
    href: "tel:+447879460859",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
];

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    botcheck: "", // honeypot, must stay empty
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

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

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) next.message = "Please write a message.";
    else if (form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.botcheck) return; // bot caught
    if (!validate()) return;

    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry: ${form.subject}`,
          from_name: "Phytosynth Website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFeedback("Thanks, your message has been sent. We'll be in touch shortly.");
        setForm({ name: "", email: "", phone: "", subject: "", message: "", botcheck: "" });
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again or email info@phytosynth.co.uk directly.");
    }
  };

  const fieldClass = (field: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-charcoal placeholder:text-gray-400 outline-none transition-colors focus:border-phyto-vibrant focus:ring-2 focus:ring-phyto-bright/30 ${
      errors[field] ? "border-red-400" : "border-gray-200"
    }`;

  return (
    <>
      <Navbar />
      <main>
        {/* ═══════════ BANNER ═══════════ */}
        <section className="relative pt-[76px] h-[380px] md:h-[440px] flex items-center overflow-hidden">
          <Image
            src="/contactus-bg.png"
            alt="Contact Phytosynth Bioscience"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B2F1F]/80 z-[1]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
            <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-4">
              Get in Touch
            </span>
            <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white mb-5">
              Contact Us
            </h1>
            <p className="text-[17px] text-[#B8D8C8] max-w-[620px] mx-auto leading-relaxed">
              Whether it&apos;s consultancy, training, research collaboration, or a bespoke
              scientific solution, tell us what you need and our team will get back to you.
            </p>
          </div>
        </section>

        {/* ═══════════ FORM + INFO ═══════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8 grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3 reveal opacity-0">
              <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold tracking-[-0.02em] text-[#0D0D0D] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[15px] text-[#6B7570] mb-7">
                Fill in the form below and we&apos;ll respond within two working days.
              </p>

              <form onSubmit={handleSubmit} noValidate className="grid sm:grid-cols-2 gap-5">
                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  checked={!!form.botcheck}
                  onChange={(e) => setForm((f) => ({ ...f, botcheck: e.target.checked ? "1" : "" }))}
                />

                <div>
                  <label htmlFor="name" className="block text-[13px] font-semibold text-[#3D4A44] mb-1.5">
                    Name <span className="text-phyto-bright">*</span>
                  </label>
                  <input id="name" type="text" value={form.name} onChange={update("name")} placeholder="Your full name" className={fieldClass("name")} />
                  {errors.name && <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] font-semibold text-[#3D4A44] mb-1.5">
                    Email <span className="text-phyto-bright">*</span>
                  </label>
                  <input id="email" type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" className={fieldClass("email")} />
                  {errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[13px] font-semibold text-[#3D4A44] mb-1.5">
                    Phone <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input id="phone" type="tel" value={form.phone} onChange={update("phone")} placeholder="+44 …" className={fieldClass("phone")} />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[13px] font-semibold text-[#3D4A44] mb-1.5">
                    Subject <span className="text-phyto-bright">*</span>
                  </label>
                  <input id="subject" type="text" value={form.subject} onChange={update("subject")} placeholder="How can we help?" className={fieldClass("subject")} />
                  {errors.subject && <p className="mt-1 text-[12px] text-red-500">{errors.subject}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-[13px] font-semibold text-[#3D4A44] mb-1.5">
                    Message <span className="text-phyto-bright">*</span>
                  </label>
                  <textarea id="message" rows={6} value={form.message} onChange={update("message")} placeholder="Tell us a little about your project, timeline, and goals…" className={`${fieldClass("message")} resize-y`} />
                  {errors.message && <p className="mt-1 text-[12px] text-red-500">{errors.message}</p>}
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 bg-phyto-forest text-white text-[15px] font-semibold px-8 py-3.5 rounded-full border-2 border-phyto-forest hover:bg-phyto-deep hover:border-phyto-deep hover:-translate-y-px hover:shadow-md transition-all duration-[280ms] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin" width="17" height="17" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                          <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {status === "success" && (
                    <p className="flex items-center gap-2 text-[14px] font-medium text-phyto-bright" role="status">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {feedback}
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-[14px] font-medium text-red-500" role="alert">
                      {feedback}
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 reveal opacity-0">
              <div className="bg-[#F5F7F5] border border-gray-200 rounded-2xl p-7 md:p-8">
                <h2 className="text-[18px] font-bold text-[#0D0D0D] mb-1">Contact Details</h2>
                <p className="text-[14px] text-[#6B7570] mb-6">
                  Prefer to reach us directly? Here&apos;s how.
                </p>
                <div className="flex flex-col gap-5">
                  {CONTACT_INFO.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "Location" ? "_blank" : undefined}
                      rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-3.5 group"
                    >
                      <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-phyto-bright/15 text-phyto-bright group-hover:bg-phyto-bright group-hover:text-white transition-colors">
                        {item.icon}
                      </span>
                      <span>
                        <span className="block text-[12px] font-bold uppercase tracking-[0.06em] text-phyto-bright mb-0.5">
                          {item.label}
                        </span>
                        <span className="block text-[14.5px] text-[#3D4A44] leading-relaxed whitespace-pre-line group-hover:text-phyto-deep transition-colors">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-7 pt-6 border-t border-gray-200">
                  <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-phyto-bright mb-1.5">
                    Office Hours
                  </p>
                  <p className="text-[14px] text-[#5A6560] leading-relaxed">
                    Monday – Friday<br />
                    9:00 – 17:00 (GMT)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ MAP ═══════════ */}
        <section className="pb-16 md:pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8 reveal opacity-0">
            <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Phytosynth Bioscience Ltd location"
                src={MAP_EMBED_SRC}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
