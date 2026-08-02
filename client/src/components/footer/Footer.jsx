import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import site from "../../config/site";
import navData from "../../data/navData";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "../common/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--color-footer-bg)] text-[var(--color-footer-text)] pt-16 pb-12 border-t border-[var(--color-border)]">
      <Container>
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-5 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo textClassName="text-[var(--color-footer-heading)]" />
            <p className="text-xs leading-relaxed max-w-sm">
              {site.description} We partner with ambitious companies worldwide to design, build, and scale groundbreaking AI products and digital web experiences.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
                { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
                { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all border border-slate-800"
                    aria-label={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold text-[var(--color-footer-heading)] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navData.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-indigo-400 transition-colors inline-block py-0.5"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div>
            <h4 className="font-display text-sm font-bold text-[var(--color-footer-heading)] uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services/ai-automation" className="hover:text-indigo-400 transition-colors">AI & LLM Solutions</Link></li>
              <li><Link to="/services/web-development" className="hover:text-indigo-400 transition-colors">Full-Stack Development</Link></li>
              <li><Link to="/services/seo" className="hover:text-indigo-400 transition-colors">SEO & Performance</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-indigo-400 transition-colors">Digital Growth Marketing</Link></li>
              <li><Link to="/services/ui-ux-design" className="hover:text-indigo-400 transition-colors">UI/UX Design Systems</Link></li>
              <li><Link to="/services/cloud-solutions" className="hover:text-indigo-400 transition-colors">Cloud & DevOps</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-[var(--color-footer-heading)] uppercase tracking-wider mb-4">
              Global Headquarters
            </h4>
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
              <span>{site.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="h-4 w-4 text-indigo-400 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-indigo-400 transition-colors">{site.email}</a>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="h-4 w-4 text-indigo-400 shrink-0" />
              <a href={`tel:${site.phone}`} className="hover:text-indigo-400 transition-colors">{site.phone}</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved. Built with precision.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>

            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all border border-slate-800 ml-2"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
