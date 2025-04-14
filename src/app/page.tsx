"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Shield,
  Utensils,
  ChevronRight,
  Star,
  Zap,
  Globe,
  Store,
} from "lucide-react";

export default function Home() {
  // Timer functionality
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date("May 15, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center group">
            <div className="w-10 h-10 border border-emerald-500/50 flex items-center justify-center rounded-md mr-3 group-hover:border-emerald-400 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="w-5 h-5 border-2 border-emerald-400 rounded-sm relative z-10"></div>
            </div>
            <span className="text-xl font-black tracking-tight group-hover:tracking-wider transition-all duration-300 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              OOTA
            </span>
          </div>

          <nav className="flex items-center space-x-10">
            {["HOME", "ABOUT", "CONTACT"].map((item, index) => (
              <Link
                key={index}
                href="#"
                className="text-sm font-bold tracking-wide relative group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-300 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 -z-0"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            <Image
              src="/placeholder.svg"
              alt="Background"
              fill
              className="object-cover opacity-20 mix-blend-overlay"
            />

            {/* Animated gradient overlay */}
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent opacity-70 animate-pulse"
              style={{ animationDuration: "8s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-emerald-900/20 to-emerald-900/10 backdrop-blur-sm border border-emerald-500/20 rounded-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-emerald-500/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse relative z-10"></span>
                <span className="text-xs font-medium relative z-10 text-emerald-200">
                  LAUNCHING SOON
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
                <span className="block">The Future of</span>
                <span className="block relative">
                  <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-200 bg-clip-text text-transparent">
                    Food Delivery
                  </span>
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300"></span>
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 text-white/70">
                <span className="text-lg font-medium">Powered by ONDC</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="text-lg font-medium">
                  Zero Commission for a Transparent Experience
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mb-16">
                <div className="relative w-[65%]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-4 bg-gradient-to-r from-emerald-900/20 to-black backdrop-blur-sm border border-emerald-500/30 focus:border-emerald-400/60 outline-none transition-colors text-white w-full"
                  />
                  <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-gradient-to-r from-emerald-900/10 to-emerald-900/5 pointer-events-none"></div>
                </div>
                <div className="relative w-[35%]">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold flex items-center justify-center overflow-hidden w-full">
                    <span className="relative z-10 group-hover:tracking-wider transition-all duration-300 text-white mix-blend-overlay">
                      STAY UPDATED
                    </span>
                    <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-black transition-transform duration-300"></div>
                    <span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      STAY UPDATED
                    </span>
                    <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-gradient-to-r from-emerald-700/20 to-emerald-600/20 pointer-events-none"></div>
                </div>
              </div>

              <div className="mt-8 flex items-center">
                <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-emerald-900/20 via-emerald-400/30 to-emerald-900/20"></div>
                <div className="px-4 text-emerald-200/80 text-sm font-bold">
                  LAUNCHING IN
                </div>
                <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-emerald-900/20 via-emerald-400/30 to-emerald-900/20"></div>
              </div>

              <div className="mt-8 grid grid-cols-4 gap-6 max-w-md">
                {[
                  { value: timeLeft.days, label: "DAYS" },
                  { value: timeLeft.hours, label: "HOURS" },
                  { value: timeLeft.minutes, label: "MINUTES" },
                  { value: timeLeft.seconds, label: "SECONDS" },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-emerald-900/10 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"></div>
                    <div className="relative border border-emerald-500/30 bg-black/80 backdrop-blur-sm p-4 flex flex-col items-center">
                      <div className="text-3xl font-black mb-1 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                        {item.value}
                      </div>
                      <div className="text-xs text-emerald-200/50 font-medium">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div
            className="absolute top-1/4 right-10 w-20 h-20 border border-emerald-500/20 rounded-full animate-pulse opacity-20"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-10 w-32 h-32 border border-emerald-500/20 rounded-full animate-pulse opacity-10"
            style={{ animationDuration: "7s" }}
          ></div>
        </section>

        {/* Advantage Highlights */}
        <section className="py-32 border-t border-emerald-900/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-30"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block relative mb-6">
                <h2 className="text-4xl md:text-5xl font-black mb-4 relative z-10 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  WHY CHOOSE OOTA
                </h2>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
              </div>
              <p className="text-white/70 text-lg">
                We&apos;re revolutionizing food delivery with transparency,
                technology, and a commitment to both restaurants and customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Shield className="w-12 h-12 text-emerald-400" />,
                  title: "Zero Commission Model",
                  description:
                    "No hidden fees. Restaurants keep what they earn, and customers pay fair prices.",
                  color: "from-emerald-600/20 to-emerald-900/10",
                  borderColor: "border-emerald-500/30",
                  iconBg: "bg-emerald-900/20",
                },
                {
                  icon: <Utensils className="w-12 h-12 text-emerald-400" />,
                  title: "Exclusive Partnerships",
                  description:
                    "Curated premium restaurant selections offering the finest dining experiences.",
                  color: "from-emerald-600/20 to-emerald-900/10",
                  borderColor: "border-emerald-500/30",
                  iconBg: "bg-emerald-900/20",
                },
                {
                  icon: <Clock className="w-12 h-12 text-emerald-400" />,
                  title: "Seamless Experience",
                  description:
                    "Intuitive and user-friendly platform designed for maximum convenience.",
                  color: "from-emerald-600/20 to-emerald-900/10",
                  borderColor: "border-emerald-500/30",
                  iconBg: "bg-emerald-900/20",
                },
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500`}
                  ></div>
                  <div
                    className={`relative ${feature.borderColor} border p-10 h-full bg-black group-hover:bg-black/80 transition-colors duration-500`}
                  >
                    <div
                      className={`mb-8 p-5 inline-block ${feature.iconBg} rounded-md relative overflow-hidden group-hover:bg-opacity-30 transition-colors duration-500`}
                    >
                      <div className="relative z-10">{feature.icon}</div>
                      <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ONDC Information */}
        <section className="py-32 bg-gradient-to-br from-emerald-900/5 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-30"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-emerald-900/20 to-emerald-900/10 backdrop-blur-sm border border-emerald-500/20 rounded-full">
                  <span className="text-xs font-bold text-emerald-200">
                    POWERED BY ONDC
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-200 bg-clip-text text-transparent">
                  Revolutionizing Food Delivery Through Open Networks
                </h2>
                <p className="text-white/70 mb-10 text-lg leading-relaxed">
                  Oota leverages the Open Network for Digital Commerce (ONDC) to
                  create a more equitable ecosystem for restaurants and
                  customers alike. Our zero-commission model ensures
                  transparency and fairness across the platform.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {[
                    {
                      icon: <Globe className="w-6 h-6 text-emerald-400" />,
                      title: "Open Protocol",
                      description:
                        "ONDC is an open protocol that enables local commerce to be discovered and engaged by any network-enabled application.",
                    },
                    {
                      icon: <Zap className="w-6 h-6 text-emerald-400" />,
                      title: "Decentralized Network",
                      description:
                        "Unlike traditional platforms, ONDC creates a decentralized network that connects buyers and sellers directly.",
                    },
                    {
                      icon: <Store className="w-6 h-6 text-emerald-400" />,
                      title: "Empowering Small Businesses",
                      description:
                        "ONDC helps small businesses compete with large platforms by providing equal digital opportunities.",
                    },
                    {
                      icon: <Shield className="w-6 h-6 text-emerald-400" />,
                      title: "Transparent Transactions",
                      description:
                        "All transactions on ONDC are transparent with no hidden fees or commissions.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="mt-1 p-2 rounded-md bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-500/30 group-hover:border-emerald-400/50 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-white/70 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border border-emerald-500/30 bg-gradient-to-br from-emerald-900/10 to-black">
                  <p className="text-lg font-medium mb-2 text-emerald-200">
                    How Oota Leverages ONDC:
                  </p>
                  <p className="text-white/70">
                    By building on ONDC&apos;s infrastructure, Oota eliminates
                    intermediary fees, enabling direct connections between
                    restaurants and customers. This allows us to offer a
                    zero-commission model where restaurants retain more profit
                    and customers enjoy fair pricing.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-emerald-900/10 translate-x-8 translate-y-8"></div>
                <div className="absolute inset-0 translate-x-4 translate-y-4 border border-emerald-500/30"></div>
                <div className="relative border border-emerald-500/40 overflow-hidden h-[600px]">
                  <Image
                    src="/placeholder.svg"
                    alt="Oota Platform"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-emerald-400 fill-emerald-400"
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium">
                        4.9/5 Average Rating
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                      Premium Experience
                    </h3>
                    <p className="text-white/80">
                      Discover a new standard in food delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 relative overflow-hidden border-t border-emerald-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-30"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block relative mb-6">
                <h2 className="text-4xl md:text-5xl font-black mb-4 relative z-10 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  EARLY ADOPTERS
                </h2>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
              </div>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Join these industry leaders who are already excited about
                Oota&apos;s revolutionary approach
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-emerald-900/10 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                  <div className="relative border border-emerald-500/30 p-8 h-full bg-black flex items-center justify-center">
                    <div className="w-full h-16 bg-gradient-to-r from-emerald-900/20 to-black flex items-center justify-center">
                      <span className="text-xl font-bold text-emerald-200/40">
                        PREMIUM PARTNER
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Oota&apos;s zero-commission model is exactly what the industry needs. This will revolutionize how restaurants connect with customers.",
                  author: "Rahul Mehta",
                  position: "Executive Chef, Spice Garden",
                  gradient: "from-emerald-900/20 to-emerald-900/10",
                  border: "border-emerald-500/30",
                },
                {
                  quote:
                    "The transparency and technology behind Oota is impressive. We&apos;re excited to be one of the first partners on this platform",
                  author: "Priya Sharma",
                  position: "Owner, Coastal Flavors",
                  gradient: "from-emerald-900/20 to-emerald-900/10",
                  border: "border-emerald-500/30",
                },
              ].map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500`}
                  ></div>
                  <div
                    className={`relative ${testimonial.border} border p-10 h-full bg-black`}
                  >
                    <div className="text-6xl font-black text-gradient-to-r from-emerald-500/10 to-emerald-500/10 mb-6">
                      &quot;
                    </div>
                    <p className="text-white/90 text-xl italic mb-8 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-900/30 to-emerald-900/20 mr-4"></div>
                      <div>
                        <h4 className="font-bold">{testimonial.author}</h4>
                        <p className="text-emerald-200/60 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Email Subscription */}
        <section className="py-32 bg-gradient-to-br from-emerald-900/5 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-30"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-emerald-900/10 translate-x-4 translate-y-4"></div>
              <div className="relative border border-emerald-500/30 p-16 bg-black">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-emerald-900/20 to-emerald-900/10 backdrop-blur-sm border border-emerald-500/20 rounded-full">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-xs font-bold text-emerald-200">
                      EXCLUSIVE ACCESS
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-200 bg-clip-text text-transparent">
                    Be The First To Experience Oota
                  </h2>
                  <p className="text-white/70 mb-10 text-xl">
                    Join our exclusive waitlist and be among the first to
                    experience the future of food delivery. Early subscribers
                    will receive special benefits and offers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <div className="relative w-[65%]">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-6 py-4 bg-gradient-to-r from-emerald-900/20 to-black backdrop-blur-sm border border-emerald-500/30 focus:border-emerald-400/60 outline-none transition-colors text-white w-full"
                      />
                      <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-gradient-to-r from-emerald-900/10 to-emerald-900/5 pointer-events-none"></div>
                    </div>
                    <div className="relative w-[35%]">
                      <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-black font-bold flex items-center justify-center overflow-hidden w-full">
                        <span className="relative z-10 group-hover:tracking-wider transition-all duration-300 text-white mix-blend-overlay">
                          SUBSCRIBE
                        </span>
                        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-black transition-transform duration-300"></div>
                        <span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          SUBSCRIBE
                        </span>
                        <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-gradient-to-r from-emerald-700/20 to-emerald-600/20 pointer-events-none"></div>
                    </div>
                  </div>
                  <p className="text-white/40 text-xs mt-6 font-medium">
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
      <footer className="border-t border-emerald-900/30 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <div className="flex items-center mb-8 group">
                <div className="w-10 h-10 border border-emerald-500/30 flex items-center justify-center rounded-md mr-3 group-hover:border-emerald-400/60 transition-all duration-300">
                  <div className="w-5 h-5 border-2 border-emerald-400 rounded-sm"></div>
                </div>
                <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  OOTA
                </span>
              </div>
              <p className="text-white/60 max-w-md text-lg leading-relaxed">
                Premium food delivery platform powered by ONDC, connecting you
                with the best local restaurants with zero commission.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-black mb-8 tracking-wider bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                COMPANY
              </h4>
              <ul className="space-y-4">
                {["About", "Careers", "Press", "Contact"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-white/60 hover:text-white transition-colors duration-300 group flex items-center"
                    >
                      <span>{item}</span>
                      <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black mb-8 tracking-wider bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                LEGAL
              </h4>
              <ul className="space-y-4">
                {["Terms", "Privacy", "Cookies", "Licenses"].map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-white/60 hover:text-white transition-colors duration-300 group flex items-center"
                      >
                        <span>{item}</span>
                        <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400" />
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-emerald-900/30">
            <p className="text-white/40 text-sm mb-6 md:mb-0">
              © 2025 Oota Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-8">
              {["Instagram", "Twitter", "LinkedIn", "Facebook"].map(
                (social, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-white/60 hover:text-gradient-to-r hover:from-emerald-400 hover:to-emerald-300 hover:bg-clip-text hover:text-transparent transition-colors duration-300 text-sm font-medium"
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
