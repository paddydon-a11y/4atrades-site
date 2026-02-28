import Link from "next/link";

const popularTrades = [
  { href: "/trades/labourers", label: "Labourers" },
  { href: "/trades/bricklayers", label: "Bricklayers" },
  { href: "/trades/electricians", label: "Electricians" },
  { href: "/trades/plumbers", label: "Plumbers" },
  { href: "/trades/joiners", label: "Joiners" },
  { href: "/trades/groundworkers", label: "Groundworkers" },
  { href: "/trades/plasterers", label: "Plasterers" },
  { href: "/trades/site-managers", label: "Site Managers" },
];

const locations = [
  { href: "/locations/north-east", label: "North East" },
  { href: "/locations/north-west", label: "North West" },
  { href: "/locations/yorkshire-and-the-humber", label: "Yorkshire" },
  { href: "/locations/east-midlands", label: "East Midlands" },
  { href: "/locations/west-midlands", label: "West Midlands" },
  { href: "/locations/east-of-england", label: "East of England" },
  { href: "/locations/london", label: "London" },
  { href: "/locations/south-east", label: "South East" },
  { href: "/locations/south-west", label: "South West" },
  { href: "/locations/wales", label: "Wales" },
];

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-white/5">
      <div className="construction-stripe" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
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
                { href: "/trades", label: "All Trades" },
                { href: "/blog", label: "Blog" },
                { href: "/join", label: "Territory Partnerships" },
                { href: "/order", label: "Order Workers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-muted hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Trades */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg tracking-wider text-white mb-4">Popular Trades</h4>
            <ul className="space-y-2">
              {popularTrades.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-muted hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-lg tracking-wider text-white mb-4">Locations</h4>
            <ul className="space-y-2">
              {locations.map((link) => (
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
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-text-muted text-xs space-y-2">
          <p>&copy; {new Date().getFullYear()} 4A Ventures Limited. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://construction-sites.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-bright transition-colors"
            >
              construction-sites.co.uk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
