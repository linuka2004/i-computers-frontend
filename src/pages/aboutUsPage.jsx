import { FaApple, FaTools, FaLaptop, FaDesktop, FaUsers, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutUsPage() {
  return (
    <section className="w-full bg-gradient-to-b from-primary to-white text-secondary">
      
      {/* HERO SECTION */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <img
          src="/about1.jpg"
          alt="Apple MacBooks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-cyan-400">Isuri Computers</span>
          </h1>
          <p className="mt-4 text-cyan-100 text-lg">
            Your trusted destination for premium computers, custom builds, and expert repairs.
          </p>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-secondary/80 leading-relaxed">
            At <strong>Isuri Computers</strong>, we specialize in selling premium laptops,
            desktops, Apple MacBooks, and custom-built PCs. With over
            <strong> 5 years of experience</strong> and more than
            <strong> 1000+ satisfied customers</strong>, we’ve built a reputation for
            reliability, quality, and friendly service.
          </p>

          <p className="mt-4 text-secondary/80 leading-relaxed">
            Whether you're a student, gamer, content creator, or business professional,
            we help you choose or build the perfect machine for your needs.
          </p>
        </div>

        <img
          src="/about3.jpg"
          alt="Workstation setup"
          className="rounded-2xl shadow-xl"
        />
      </div>

      {/* SERVICES */}
      <div className="bg-secondary text-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<FaApple />}
              title="Apple MacBooks"
              text="Sales, upgrades, and professional repairs for all Apple MacBook models."
            />
            <ServiceCard
              icon={<FaDesktop />}
              title="Custom PC Building"
              text="High-performance gaming and workstation PC builds tailored to your needs."
            />
            <ServiceCard
              icon={<FaLaptop />}
              title="Laptops & Desktops"
              text="Wide range of branded laptops and desktops for work, study, and play."
            />
            <ServiceCard
              icon={<FaTools />}
              title="Repairs & Upgrades"
              text="Hardware repairs, SSD upgrades, RAM upgrades, diagnostics & maintenance."
            />
          </div>
        </div>
      </div>

      {/* CUSTOM PC SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/about2.jpg"
          alt="Custom PC Build"
          className="rounded-2xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Custom CPU & Gaming Builds
          </h2>
          <p className="text-secondary/80 leading-relaxed">
            From RGB gaming rigs to silent professional workstations,
            we design and build PCs using genuine components and proper airflow tuning.
          </p>

          <ul className="mt-4 space-y-2 text-secondary/80">
            <li>✔ High FPS Gaming Builds</li>
            <li>✔ Video Editing & 3D Workstations</li>
            <li>✔ Office & Budget PCs</li>
            <li>✔ Warranty-backed components</li>
          </ul>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-primary py-14">
        <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat icon={<FaClock />} value="5+" label="Years Experience" />
          <Stat icon={<FaUsers />} value="1000+" label="Happy Customers" />
          <Stat icon={<FaLaptop />} value="500+" label="Devices Sold" />
          <Stat icon={<FaTools />} value="800+" label="Repairs Completed" />
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build or Fix Your Next Machine
        </h2>
        <p className="text-secondary/80 mb-6">
          Visit our store or contact us today for expert advice and honest pricing.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-accent text-secondary px-8 py-3 rounded-full
          font-semibold hover:bg-accent/80 transition-all"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

function ServiceCard({ icon, title, text }) {
  return (
    <div className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition">
      <div className="text-3xl mb-3 text-cyan-300 flex justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-primary/80">{text}</p>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="text-3xl text-cyan-500 flex justify-center mb-2">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-sm text-secondary/70">{label}</p>
    </div>
  );
}
