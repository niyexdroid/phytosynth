import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Research", href: "/research" },
  { label: "Training", href: "/training" },
  { label: "Inclusive Programme", href: "/inclusive-programme" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Agri-Tech", href: "/services/agric-tech" },
  { label: "AI in Agriculture", href: "/services/ai-in-agriculture" },
  { label: "Plant Biotechnology", href: "/services/plant-biotechnology" },
  {
    label: "Environmental Biosolutions",
    href: "/services/environmental-biosolutions",
  },
  { label: "Molecular Diagnostics", href: "/services/molecular-diagnostics" },
  { label: "Consultancy", href: "/services/consultancy" },
  { label: "Commercial R&D", href: "/services/commercial-r-and-d" },
];

const TRAINING_LINKS = [
  { label: "AI Agriculture & Phenotyping", href: "/training" },
  { label: "Smart Greenhouse Analytics", href: "/training" },
  { label: "Precision Agriculture (Python)", href: "/training" },
  { label: "Molecular Biology & Diagnostics", href: "/training" },
  { label: "Laboratory Techniques", href: "/training" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/phytosynth",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/Phytosynth",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590527323339",
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/phytosynthbioscience/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@phytosynthbioscience",
    path: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.36-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCjG9PwBKp9qFwjdcAgi4EMg",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const CONTACT_INFO = [
  {
    icon: (
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
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "50 Edale Road, Sneinton,\nNottingham, NG2 4HT, United Kingdom",
  },
  {
    icon: (
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
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
    text: "info@phytosynth.co.uk",
  },
  {
    icon: (
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
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    text: "+447879460859",
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="max-w-8xl mx-auto px-6 md:px-8 pt-16 pb-0">
        {/* 5-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1.1fr_1fr_1.2fr] gap-10 lg:gap-8 xl:gap-10 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="reveal opacity-0 col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/logo-light.png"
                alt="Phytosynth Bioscience"
                width={2400}
                height={771}
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-[#9DA5A2] leading-relaxed mb-5">
              Phytosynth Bioscience Ltd is a UK–Africa bioscience innovation and
              capacity-building organisation advancing food security, climate
              resilience, scientific education, and sustainable agricultural
              development through biotechnology, artificial intelligence, data
              science, plant phenotyping, and environmental analytics.
            </p>
            {/* Social icons */}
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] rounded-full bg-white/6 flex items-center justify-center hover:bg-phyto-vibrant transition-colors group"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#9DA5A2] group-hover:text-white transition-colors"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
              <a
                href="mailto:info@phytosynth.co.uk"
                aria-label="Email"
                className="w-[38px] h-[38px] rounded-full bg-white/6 flex items-center justify-center hover:bg-phyto-vibrant transition-colors group"
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
                  className="text-[#9DA5A2] group-hover:text-white transition-colors"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal opacity-0">
            <h4 className="text-[15px] font-bold text-white mb-5 tracking-[0.02em]">
              Quick Links
            </h4>
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-[#9DA5A2] py-1.5 hover:text-phyto-bright transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Our Services */}
          <div className="reveal opacity-0">
            <h4 className="text-[15px] font-bold text-white mb-5 tracking-[0.02em]">
              Our Services
            </h4>
            {SERVICE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-[#9DA5A2] py-1.5 hover:text-phyto-bright transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Training */}
          <div className="reveal opacity-0">
            <h4 className="text-[15px] font-bold text-white mb-5 tracking-[0.02em]">
              Training
            </h4>
            {TRAINING_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-[#9DA5A2] py-1.5 hover:text-phyto-bright transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Us, own column */}
          <div className="reveal opacity-0">
            <h4 className="text-[15px] font-bold text-white mb-5 tracking-[0.02em]">
              Contact Us
            </h4>
            {CONTACT_INFO.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 mb-3.5">
                <span className="text-phyto-bright mt-0.5 shrink-0">
                  {item.icon}
                </span>
                <p className="text-sm text-[#9DA5A2] leading-relaxed whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[#7A827E]">
            &copy; 2026 Phytosynth Bioscience Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[13px] text-[#7A827E] hover:text-phyto-bright transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[13px] text-[#7A827E] hover:text-phyto-bright transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
