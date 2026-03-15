export default function Purpose() {
  return (
    <section id="purpose" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-heading">Our Purpose</h2>

        {/* Dark blue card — matches the screenshot */}
        <div className="bg-[var(--navy)] rounded-sm overflow-hidden">
          {/* Top bar */}
          <div className="px-8 pt-8 pb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Protect your investment
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Experience the pride of ownership with Hull Pro Marine Care where
              your boat is treated like our own!
            </p>
            <p className="text-white/50 text-xs tracking-widest uppercase flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-white/40" />
              Hull Pro Marine Care
            </p>
          </div>

          {/* Video embed */}
          <div className="relative w-full aspect-video bg-black">
            {/*
              Replace YOUR_VIDEO_ID with your actual YouTube video ID.
              Example: https://www.youtube.com/embed/dQw4w9WgXcQ
            */}
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Hull Pro Marine Care — Daniel Athill"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Caption */}
          <div className="px-8 py-4 bg-[var(--navy-dark)]">
            <p className="text-white/40 text-xs tracking-widest uppercase">
              Hull Pro Marine Care — Daniel Athill
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
