export default function EventsNews() {
  return (
    <section id="events-news" className="py-16 md:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal opacity-0">
          <span className="inline-block text-[13px] font-bold tracking-[0.12em] uppercase text-phyto-bright mb-3">
            Events &amp; News
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0D0D0D] mb-5">
            Stay in the Loop.{" "}
            <span className="text-phyto-bright">More to Come.</span>
          </h2>
          <p className="text-[17px] text-[#5A6560] max-w-[620px] mx-auto leading-relaxed">
            Upcoming events, workshops and the latest from Phytosynth Bioscience.
          </p>
        </div>

        {/* Coming soon card */}
        <div className="reveal opacity-0 max-w-[760px] mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-[#F5F7F5] px-8 py-14 md:py-16 text-center shadow-sm">
            {/* Decorative gradient blob */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-phyto-leaf/20 to-phyto-vibrant/10 blur-2xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-phyto-forest/20 bg-white px-4 py-1.5 text-[13px] font-semibold text-phyto-bright">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-phyto-vibrant opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-phyto-vibrant" />
                </span>
                Coming Soon
              </span>
              <h3 className="mt-6 text-[clamp(22px,3vw,30px)] font-extrabold leading-tight text-[#0D0D0D]">
                We&apos;re preparing something worth watching.
              </h3>
              <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-[#6B7570]">
                Event listings, news and announcements will appear here. Check
                back soon for updates from our research and training programmes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
