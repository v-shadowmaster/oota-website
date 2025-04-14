import Link from "next/link";
import Image from "next/image";
import { Clock, Shield, Utensils } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-md mr-3">
              <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">OOTA</span>
          </div>

          <nav className="flex items-center space-x-10">
            <Link
              href="#"
              className="text-sm font-bold tracking-wide hover:text-white/70 transition-colors"
            >
              HOME
            </Link>
            <Link
              href="#"
              className="text-sm font-bold tracking-wide hover:text-white/70 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className="text-sm font-bold tracking-wide hover:text-white/70 transition-colors"
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            <Image
              src="/placeholder.svg"
              alt="Background"
              fill
              className="object-cover opacity-20 mix-blend-overlay"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                <span className="text-xs font-medium">
                  LAUNCHING SOON with VINAY KUMAR
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                The Future of Online Food Delivery
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-white/70">
                <span className="text-lg font-medium">Powered by ONDC</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                <span className="text-lg font-medium">
                  Zero Commission for a Transparent Experience
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 focus:border-white/30 outline-none transition-colors text-white w-full"
                />
                <button className="group relative px-8 py-4 bg-white text-black font-bold flex items-center justify-center overflow-hidden">
                  <span className="relative z-10">STAY UPDATED</span>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-black transition-transform duration-300"></div>
                  <span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    STAY UPDATED
                  </span>
                </button>
              </div>

              <div className="mt-8 flex items-center">
                <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-white/5 via-white/20 to-white/5"></div>
                <div className="px-4 text-white/40 text-sm">LAUNCHING IN</div>
                <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-white/5 via-white/20 to-white/5"></div>
              </div>

              <div className="mt-8 grid grid-cols-4 gap-4 max-w-md">
                {[
                  { value: "30", label: "DAYS" },
                  { value: "12", label: "HOURS" },
                  { value: "45", label: "MINUTES" },
                  { value: "22", label: "SECONDS" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-3xl font-bold mb-1">{item.value}</div>
                    <div className="text-xs text-white/50">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advantage Highlights */}
        <section className="py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                WHY CHOOSE OOTA
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We're revolutionizing food delivery with transparency,
                technology, and a commitment to both restaurants and customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-10 h-10" />,
                  title: "Zero Commission Model",
                  description:
                    "No hidden fees. Restaurants keep what they earn, and customers pay fair prices.",
                },
                {
                  icon: <Utensils className="w-10 h-10" />,
                  title: "Exclusive Partnerships",
                  description:
                    "Curated premium restaurant selections offering the finest dining experiences.",
                },
                {
                  icon: <Clock className="w-10 h-10" />,
                  title: "Seamless Experience",
                  description:
                    "Intuitive and user-friendly platform designed for maximum convenience.",
                },
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-white/5 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                  <div className="relative border border-white/10 p-8 h-full bg-black">
                    <div className="mb-6 p-4 inline-block bg-white/5 rounded-md">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Information */}
        <section className="py-24 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <span className="text-xs font-medium">POWERED BY ONDC</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Revolutionizing Food Delivery Through Open Networks
                </h2>
                <p className="text-white/70 mb-8">
                  Oota leverages the Open Network for Digital Commerce (ONDC) to
                  create a more equitable ecosystem for restaurants and
                  customers alike. Our zero-commission model ensures
                  transparency and fairness across the platform.
                </p>
                <ul className="space-y-4">
                  {[
                    "Direct restaurant-to-customer connections",
                    "Transparent pricing with no hidden fees",
                    "Support for local businesses and communities",
                    "Advanced technology for seamless ordering",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 rounded-sm bg-white/10 flex items-center justify-center mt-0.5 mr-3">
                        <div className="w-2 h-2 bg-white"></div>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-white/5 translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 border border-white/10 overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Oota Platform"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Subscription */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 translate-x-2 translate-y-2"></div>
              <div className="relative border border-white/10 p-12 bg-black">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Be The First To Experience Oota
                  </h2>
                  <p className="text-white/70 mb-8">
                    Join our exclusive waitlist and be among the first to
                    experience the future of food delivery. Early subscribers
                    will receive special benefits and offers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 focus:border-white/30 outline-none transition-colors text-white w-full"
                    />
                    <button className="group relative px-8 py-4 bg-white text-black font-bold flex items-center justify-center overflow-hidden">
                      <span className="relative z-10">SUBSCRIBE</span>
                      <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-black transition-transform duration-300"></div>
                      <span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        SUBSCRIBE
                      </span>
                    </button>
                  </div>
                  <p className="text-white/40 text-xs mt-4">
                    We respect your privacy. Your information will never be
                    shared with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 border border-white/20 flex items-center justify-center rounded-md mr-3">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <span className="text-lg font-bold tracking-tight">OOTA</span>
              </div>
              <p className="text-white/60 max-w-md">
                Premium food delivery platform powered by ONDC, connecting you
                with the best local restaurants with zero commission.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6">COMPANY</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6">LEGAL</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm mb-4 md:mb-0">
              © 2024 Oota Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Instagram", "Twitter", "LinkedIn", "Facebook"].map(
                (social, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {social}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
