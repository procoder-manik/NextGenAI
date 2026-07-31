import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import site from "../../config/site";
import navData from "../../data/navData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-7">
              {site.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {navData.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-2">
              <li>AI Solutions</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <p>{site.email}</p>
            <p>{site.phone}</p>
            <p>{site.address}</p>
          </div>

        </div>

        <div className="border-t border-slate-700 py-6 text-center text-sm">
          © {new Date().getFullYear()} {site.name}. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
