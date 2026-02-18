import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-white/5">
      <div className="construction-stripe" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-white">
              4A<span className="text-accent">TRADES</span>
            </span>
            <p className="mt-4 text-text-muted text-sm leading-relaxed">
              UK construction labour supply and strategic partnership network. One call for your entire workforce.
            </p>
            <p className="mt-4 text-text-muted text-xs">
              4A Ventures Limited
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/tt", label: "All Trades" },
                { href: "/join", label: "Strategic Partnerships" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-muted hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:03301337901" className="text-accent hover:text-accent-bright transition-colors font-semibold">
                  0330 133 7901
                </a>
              </li>
              <li>
                <a href="mailto:Sales@4ATrades.co.uk" className="text-text-muted hover:text-accent transition-colors">
                  Sales@4ATrades.co.uk
                </a>
              </li>
              <li className="text-text-muted">Mon - Fri, 8am - 5pm</li>
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg tracking-wider text-white mb-4">Coverage</h4>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>North West</li>
              <li>North East</li>
              <li>Midlands</li>
              <li>South West</li>
              <li>South East</li>
              <li>Scotland</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-text-muted text-xs">
          &copy; {new Date().getFullYear()} 4A Ventures Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
