export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white font-bold text-sm">
                OS
              </div>
              <span className="font-semibold text-white tracking-tight text-[15px]">
                Open Substrate
              </span>
            </div>
            <p className="text-sm text-white/30 max-w-sm leading-relaxed mb-6">
              The operating system for modern banking. We&apos;re not just building
              software &mdash; we&apos;re rebuilding the foundation of modern finance.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:hello@opensubstrate.io"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                hello@opensubstrate.io
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/30 mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {["Platform", "Technology", "Security", "Pricing"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/30 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Careers", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-white/[0.04] mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Open Substrate, Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
