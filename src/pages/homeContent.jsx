// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const SLOGANS = [
//   "Custom-built rigs for work, study, and play.",
//   "Genuine parts. Reliable service. Zero drama.",
//   "From student laptops to pro workstations — we’ve got you."
// ];

// export default function Home() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % SLOGANS.length);
//     }, 3000); // change slogan every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full min-h-[calc(100vh-100px)] overflow-hidden">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('/home.jpg')" }}
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/90" />

//       {/* Content */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] max-w-6xl flex-col justify-center px-4 py-10 md:flex-row md:items-center md:gap-10">
//         {/* Left: Hero copy */}
//         <div className="w-full text-center md:w-1/2 md:text-left space-y-6">
//           <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
//             Isuri Computers
//           </p>

//           <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
//             Upgrade your{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
//               tech game
//             </span>{" "}
//             with trusted hardware & service.
//           </h1>

//           {/* Animated slogan */}
//           <p className="min-h-[2.5rem] text-base sm:text-lg font-medium text-cyan-100 animate-pulse">
//             {SLOGANS[activeIndex]}
//           </p>

//           {/* CTAs */}
//           <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row md:items-start">
//             <Link
//               to="/products"
//               className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 hover:shadow-cyan-400/40"
//             >
//               Shop Products
//             </Link>

//             <Link
//               to="/about"
//               className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-100 backdrop-blur-md transition hover:border-cyan-400 hover:bg-white/10"
//             >
//               Learn About Us
//             </Link>
//           </div>

//           {/* Quick value props */}
//           <div className="mt-6 grid w-full gap-3 text-sm text-slate-100 sm:grid-cols-3">
//             <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
//               <p className="text-xs uppercase tracking-wide text-cyan-300">
//                 Laptops & Desktops
//               </p>
//               <p className="mt-1 text-sm font-semibold">Branded & Custom Builds</p>
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
//               <p className="text-xs uppercase tracking-wide text-cyan-300">
//                 Repairs & Upgrades
//               </p>
//               <p className="mt-1 text-sm font-semibold">Diagnostics, SSD, RAM & more</p>
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
//               <p className="text-xs uppercase tracking-wide text-cyan-300">
//                 Support
//               </p>
//               <p className="mt-1 text-sm font-semibold">
//                 Friendly guidance for every customer
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right: Highlight / mini cards */}
//         <div className="mt-10 w-full md:mt-0 md:w-1/2">
//           <div className="grid gap-4 sm:grid-cols-2">
//             <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
//               <p className="text-xs uppercase tracking-wide text-slate-400">
//                 Hot Right Now
//               </p>
//               <p className="mt-2 text-lg font-semibold text-white">
//                 Student & Work-from-Home Packs
//               </p>
//               <p className="mt-1 text-xs text-slate-300">
//                 Pre-configured laptops tuned for assignments, Zoom, and everyday work.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-4 backdrop-blur-md">
//               <p className="text-xs uppercase tracking-wide text-cyan-300">
//                 Gaming & Creators
//               </p>
//               <p className="mt-2 text-lg font-semibold text-white">
//                 High FPS, Low Latency Builds
//               </p>
//               <p className="mt-1 text-xs text-cyan-100">
//                 RTX builds, fast SSDs, and tuned airflow for serious performance.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md sm:col-span-2">
//               <p className="text-xs uppercase tracking-wide text-slate-400">
//                 Service Promise
//               </p>
//               <p className="mt-2 text-sm font-semibold text-white">
//                 Transparent pricing, genuine parts, and clear communication for every job.
//               </p>
//               <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-200">
//                 <span className="rounded-full bg-white/10 px-3 py-1">
//                   Warranty-backed hardware
//                 </span>
//                 <span className="rounded-full bg-white/10 px-3 py-1">
//                   Data-safe repairs
//                 </span>
//                 <span className="rounded-full bg-white/10 px-3 py-1">
//                   Island-wide customers
//                 </span>
//               </div>
//               <div className="mt-4 flex flex-wrap gap-2 text-xs">
//                 <Link
//                   to="/contact"
//                   className="underline-offset-2 hover:underline text-cyan-300"
//                 >
//                   Talk to our team
//                 </Link>
//                 <span className="text-slate-400">•</span>
//                 <Link
//                   to="/orders"
//                   className="underline-offset-2 hover:underline text-slate-200"
//                 >
//                   Track your orders
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGamepad, FaTools, FaLaptop } from "react-icons/fa";

const TAGLINES = [
  "Elite gaming & workstation builds",
  "RGB power. Clean cable management.",
  "Built for FPS, creators & professionals"
];

export default function HomeContent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-100px)] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/home.jpg"
        alt="Gaming setup"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Neon overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-indigo-900/70" />

      {/* Glow accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-500/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/30 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 flex flex-col justify-center min-h-[calc(100vh-100px)]">
        
        {/* Top badge */}
        <span className="w-fit mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur
          text-xs tracking-widest text-cyan-300 uppercase">
          Isuri Computers • Gaming Division
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-3xl">
          Build your{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ultimate setup
          </span>
        </h1>

        {/* Animated tagline */}
        <p className="mt-4 text-lg text-cyan-100 min-h-[28px] transition-all">
          {TAGLINES[index]}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/products"
            className="px-7 py-3 rounded-full bg-cyan-500 text-slate-900
            font-semibold shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition"
          >
            Browse Builds
          </Link>

          <Link
            to="/contact"
            className="px-7 py-3 rounded-full border border-white/30
            text-white backdrop-blur hover:bg-white/10 transition"
          >
            Custom Build Request
          </Link>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-4xl">
          
          <Feature
            icon={<FaGamepad />}
            title="Gaming PCs"
            text="High-FPS builds with RTX GPUs, airflow tuning & RGB aesthetics."
          />

          <Feature
            icon={<FaLaptop />}
            title="Laptops & Macs"
            text="Apple MacBooks, creator laptops & performance notebooks."
          />

          <Feature
            icon={<FaTools />}
            title="Repairs & Upgrades"
            text="Diagnostics, SSD, RAM, thermal service & full rebuilds."
          />
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex flex-wrap gap-6 text-sm text-slate-200">
          <Trust value="5+" label="Years Experience" />
          <Trust value="1000+" label="Customers Served" />
          <Trust value="✔" label="Genuine Parts" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white/10 border border-white/10
      backdrop-blur-md p-5 hover:bg-white/15 transition">
      <div className="text-2xl text-cyan-300 mb-2">{icon}</div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-200 mt-1">{text}</p>
    </div>
  );
}

function Trust({ value, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold text-cyan-400">{value}</span>
      <span className="uppercase tracking-wide text-xs">{label}</span>
    </div>
  );
}
