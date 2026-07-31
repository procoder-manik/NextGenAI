import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import heroData from "../../data/heroData";
import heroImage from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              {heroData.badge}
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-5xl font-bold leading-tight"
            >
              {heroData.title}
            </motion.h1>

            <p className="mt-6 text-lg text-gray-600">
              {heroData.description}
            </p>

            <div className="mt-8 flex gap-4">
              <Button to="/contact">
                Get Started
              </Button>

              <Button variant="outline" to="/services">
                Our Services
              </Button>
            </div>

          </div>

          {/* Right Side */}
          <div>

            <img
              src={heroImage}
              alt={heroData.title}
              className="w-full"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}
