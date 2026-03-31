"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getExperiences } from "@/api/getExperiences";
import { PortfolioProjects } from "@/api/getPortfolioProjects";

// Premium easing functions
const easing = {
  smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  expo: "cubic-bezier(0.19, 1, 0.22, 1)",
};

// Text scramble effect for premium feel
function useScrambleText(text: string, hover: boolean) {
  const [scrambled, setScrambled] = useState(text);

  useEffect(() => {
    if (!hover) {
      setScrambled(text);
      return;
    }

    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let iterations = 0;
    const interval = setInterval(() => {
      setScrambled(
        text
          .split("")
          .map((char, i) => {
            if (i < iterations) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iterations += 1 / 2;
      if (iterations >= text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [text, hover]);

  return scrambled;
}

// Hook for scroll-triggered animations with progress
function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold, rootMargin: "-100px" }
    );

    observer.observe(element);

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elemProgress = 1 - rect.top / (windowHeight + rect.height);
      setProgress(Math.max(0, Math.min(1, elemProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { ref, isVisible, progress };
}

// Parallax hook
function useParallax(speed = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return { ref, offset };
}

// Counter animation
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      setCount(Math.floor(eased * end));

      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return { ref, count };
}

// Magnetic button effect
function MagneticButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

// Reveal section component
function RevealSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
  distance = 60,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  className?: string;
  distance?: number;
}) {
  const { ref, isVisible, progress } = useScrollReveal(0.2);

  const getTransform = () => {
    const progressClamped = Math.max(0, Math.min(1, (progress - 0.2) * 2));
    const remaining = 1 - progressClamped;

    switch (direction) {
      case "up": return `translateY(${remaining * distance}px)`;
      case "down": return `translateY(${-remaining * distance}px)`;
      case "left": return `translateX(${remaining * distance}px)`;
      case "right": return `translateX(${-remaining * distance}px)`;
      case "fade": return "translateY(0)";
      case "scale": return `scale(${0.95 + remaining * 0.05})`;
      default: return `translateY(${remaining * distance}px)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: Math.max(0, Math.min(1, (progress - 0.1) * 1.5)),
        transform: isVisible ? (direction === "scale" ? "scale(1)" : "translateY(0) translateX(0)") : getTransform(),
        transition: `opacity 0.8s ${easing.smooth} ${delay}ms, transform 0.8s ${easing.smooth} ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Glowing text component
function GlowingText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute inset-0 blur-xl opacity-50 bg-[#bfff00]" />
      <span className="relative">{children}</span>
    </span>
  );
}

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const fullName = "Jorge Luis Almonte";
  const role = "Senior Frontend Engineer";

  const { ref: heroImageRef, offset: heroImageOffset } = useParallax(0.2);

  // Mouse tracking for ambient effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedText(fullName.slice(0, index));
        index++;
      } else clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll tracking
  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Active section observer
  useEffect(() => {
    const observers = [
      { ref: heroRef, section: "hero" },
      { ref: aboutRef, section: "about" },
      { ref: projectsRef, section: "projects" },
      { ref: experienceRef, section: "experience" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = observers.find((o) => o.ref.current === entry.target)?.section;
            if (section) setActiveSection(section);
          }
        });
      },
      { threshold: 0.4 }
    );

    observers.forEach(({ ref }) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll calculations
  const heroOpacity = Math.max(0, 1 - scrollY / 600);
  const heroScale = Math.max(0.95, 1 - scrollY / 4000);
  const navBlur = scrollY > 50;
  const navOpacity = Math.min(1, scrollY / 200);

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f4ef] overflow-x-hidden selection:bg-[#bfff00] selection:text-[#080808]">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating ambient orbs */}
      <div
        className="fixed top-1/4 -left-32 w-96 h-96 bg-[#bfff00] rounded-full blur-[150px] opacity-5 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <div
        className="fixed bottom-1/4 -right-32 w-96 h-96 bg-[#bfff00] rounded-full blur-[150px] opacity-5 pointer-events-none"
        style={{
          transform: `translate(${-mousePos.x * 30}px, ${-mousePos.y * 30}px)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Grid background with parallax */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
          backgroundImage: `
            linear-gradient(rgba(191, 255, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(191, 255, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Premium Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 px-6 py-5 transition-all duration-700"
        style={{
          backdropFilter: navBlur ? "blur(20px)" : "none",
          backgroundColor: navBlur ? "rgba(8, 8, 8, 0.7)" : "transparent",
          borderBottom: navBlur ? "1px solid rgba(191, 255, 0, 0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="relative group"
            style={{ opacity: navOpacity || 0.5 }}
          >
            <span className="font-mono text-sm tracking-[0.3em] text-[#bfff00] group-hover:text-white transition-colors duration-300">
              JLA_
            </span>
            <span
              className="absolute -bottom-1 left-0 h-[1px] bg-[#bfff00] w-0 group-hover:w-full transition-all duration-500 ease-out"
            />
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {["about", "projects", "experience"].map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative group"
                style={{ opacity: navOpacity || 0.6 }}
              >
                <span
                  className="font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
                  style={{
                    color: activeSection === item ? "#bfff00" : "rgba(245, 244, 239, 0.6)",
                  }}
                >
                  {item}
                </span>
                <span
                  className="absolute -bottom-2 left-0 h-[1px] bg-[#bfff00] transition-all duration-500"
                  style={{
                    width: activeSection === item ? "100%" : "0%",
                  }}
                />
              </button>
            ))}
          </div>

          <MagneticButton>
            <Link
              href="mailto:almonteluis92@gmail.com"
              className="relative overflow-hidden font-mono text-[11px] tracking-[0.15em] border border-[#bfff00] text-[#bfff00] px-5 py-3 group block"
            >
              <span className="relative z-10 group-hover:text-[#080808] transition-colors duration-300">
                CONTACT_
              </span>
              <span
                className="absolute inset-0 bg-[#bfff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              />
            </Link>
          </MagneticButton>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="hero"
          className="min-h-screen flex items-center justify-center px-6 relative"
        >
          <div
            className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center"
            style={{
              opacity: heroOpacity,
              transform: `scale(${heroScale})`,
              transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
            }}
          >
            <div className="space-y-10">
              <RevealSection delay={100} direction="up">
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-[1px] bg-gradient-to-r from-[#bfff00] to-transparent" />
                    <span className="font-mono text-[11px] tracking-[0.3em] text-[#bfff00]">
                      PORTFOLIO_2025
                    </span>
                  </div>

                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95]">
                    <div className="overflow-hidden">
                      <span
                        className="block text-[#f5f4ef]"
                        style={{
                          animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                          opacity: 0,
                        }}
                      >
                        {typedText}
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <GlowingText className="block text-[#bfff00] mt-2">
                        <span
                          style={{
                            animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards",
                            opacity: 0,
                          }}
                        >
                          {typedText === fullName ? "|" : ""}
                        </span>
                      </GlowingText>
                    </div>
                  </h1>

                  <p
                    className="font-mono text-sm md:text-[15px] text-[#f5f4ef]/50 max-w-md leading-relaxed"
                    style={{
                      animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
                      opacity: 0,
                    }}
                  >
                    {role}
                  </p>
                </div>
              </RevealSection>

              <RevealSection delay={400} direction="fade">
                <div className="flex items-center gap-3 pt-4">
                  <div className="relative">
                    <span
                      className="w-2.5 h-2.5 bg-[#bfff00] rounded-full block"
                      style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                    />
                    <span
                      className="absolute inset-0 bg-[#bfff00] rounded-full"
                      style={{ animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite" }}
                    />
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.1em] text-[#f5f4ef]/40">
                    AVAILABLE FOR OPPORTUNITIES
                  </span>
                </div>
              </RevealSection>
            </div>

            {/* Hero Image with premium effects */}
            <div
              ref={heroImageRef}
              className="relative flex justify-center lg:justify-end"
              style={{
                transform: `translateY(${heroImageOffset * 0.5}px)`,
              }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div
                  className="absolute -inset-8 border border-[#bfff00]/10"
                  style={{
                    transform: scrollY > 50 ? "rotate(3deg)" : "rotate(0deg)",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                <div
                  className="absolute -inset-16 border border-[#bfff00]/5"
                  style={{
                    transform: scrollY > 100 ? "rotate(-2deg)" : "rotate(0deg)",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                  }}
                />

                {/* Image container with glow */}
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div
                    className="absolute inset-0 rounded-full bg-[#bfff00] blur-3xl opacity-20"
                    style={{
                      transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#bfff00]/80 shadow-2xl">
                    <Image
                      src="/headshot.jpeg"
                      alt="Jorge Luis Almonte"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#bfff00]/10" />
                  </div>
                </div>

                {/* Experience badge */}
                <div
                  className="absolute -bottom-6 -right-6 bg-[#080808] border border-[#bfff00]/30 backdrop-blur-sm font-mono text-[11px] px-5 py-3"
                  style={{
                    transform: scrollY > 200 ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                    opacity: scrollY > 200 ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <span className="text-[#bfff00] font-semibold">9+</span>
                  <span className="text-[#f5f4ef]/60 ml-1">YEARS EXP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            style={{
              opacity: Math.max(0, 1 - scrollY / 300),
              transform: scrollY < 300 ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#f5f4ef]/30">SCROLL</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-[#bfff00]/50 to-transparent relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-1/2 bg-[#bfff00]"
                style={{ animation: "scrollLine 2s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          id="about"
          className="min-h-screen flex items-center px-6 py-32 relative"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <RevealSection delay={0} direction="right">
                  <div className="sticky top-32">
                    <span className="font-mono text-[11px] tracking-[0.3em] text-[#bfff00]">
                      01_
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-[0.95]">
                      About
                    </h2>
                  </div>
                </RevealSection>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-8">
                  <RevealSection delay={150} direction="up">
                    <p className="text-[19px] leading-[1.85] text-[#f5f4ef]/70 font-light">
                      From dismantling PCs as a curious kid to architecting{" "}
                      <span className="text-[#bfff00] font-medium">high-performance</span> web
                      applications, my path in technology has always been driven by a desire to
                      build and understand.
                    </p>
                  </RevealSection>

                  <RevealSection delay={250} direction="up">
                    <p className="text-[19px] leading-[1.85] text-[#f5f4ef]/70 font-light">
                      I thrive on transforming designs into elegant code, using atomic design
                      principles to build scalable component systems that have improved
                      conversion rates by{" "}
                      <span className="inline-flex items-center gap-2">
                        <span className="text-[#bfff00] font-medium">40%</span>
                        <span className="h-[1px] w-8 bg-[#bfff00]/30" />
                      </span>
                      {" "}and page load times by{" "}
                      <span className="inline-flex items-center gap-2">
                        <span className="text-[#bfff00] font-medium">65%</span>
                        <span className="h-[1px] w-8 bg-[#bfff00]/30" />
                      </span>
                      .
                    </p>
                  </RevealSection>

                  <RevealSection delay={350} direction="up">
                    <p className="text-[19px] leading-[1.85] text-[#f5f4ef]/70 font-light">
                      My expertise spans{" "}
                      <span className="text-[#bfff00] font-medium">React, TypeScript, and Next.js</span>,
                      with a particular focus on performance optimization and accessible user
                      interfaces.
                    </p>
                  </RevealSection>

                  {/* Skills with animated progress */}
                  <RevealSection delay={500} direction="fade" className="pt-8">
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                      {[
                        { label: "React.js", level: 95 },
                        { label: "TypeScript", level: 90 },
                        { label: "Next.js", level: 92 },
                        { label: "Vue.js", level: 85 },
                      ].map((skill) => (
                        <div key={skill.label} className="space-y-3">
                          <div className="flex justify-between items-baseline">
                            <span className="font-mono text-[12px] tracking-wide">{skill.label}</span>
                            <Counter value={skill.level} suffix="%" />
                          </div>
                          <div className="h-[2px] bg-[#f5f4ef]/10 overflow-hidden">
                            <div
                              className="h-full bg-[#bfff00] origin-left relative"
                              style={{
                                width: `${skill.level}%`,
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RevealSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          ref={projectsRef}
          id="projects"
          className="min-h-screen px-6 py-32 relative"
        >
          <div className="max-w-7xl mx-auto w-full">
            <RevealSection delay={0}>
              <div className="mb-20">
                <span className="font-mono text-[11px] tracking-[0.3em] text-[#bfff00]">
                  02_
                </span>
                <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-[0.95]">
                  Featured Work
                </h2>
              </div>
            </RevealSection>

            <div className="space-y-6">
              {PortfolioProjects.map((project, index) => (
                <RevealSection key={index} delay={index * 120} direction="up" distance={40}>
                  <Link href="#" className="block group">
                    <div
                      className="border border-[#f5f4ef]/5 p-8 md:p-10 hover:border-[#bfff00]/20 relative overflow-hidden transition-all duration-700"
                      style={{
                        background: "linear-gradient(180deg, rgba(191,255,0,0.02) 0%, transparent 100%)",
                      }}
                    >
                      {/* Hover glow effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(191,255,0,0.06), transparent 40%)",
                        }}
                      />

                      {/* Accent line */}
                      <div
                        className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#bfff00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      />

                      <div className="grid md:grid-cols-12 gap-8 items-start relative">
                        <div className="md:col-span-1 font-mono text-[12px] text-[#f5f4ef]/30">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="md:col-span-7 space-y-5">
                          <h3 className="text-3xl font-bold leading-tight group-hover:text-[#bfff00] transition-colors duration-500">
                            {project.title}
                          </h3>
                          <p className="text-[#f5f4ef]/50 leading-[1.75] text-[17px]">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="font-mono text-[11px] border border-[#f5f4ef]/10 px-3 py-1.5 text-[#f5f4ef]/40 group-hover:border-[#bfff00]/30 group-hover:text-[#f5f4ef]/60 transition-all duration-300"
                                style={{ transitionDelay: `${i * 40}ms` }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="md:col-span-4 text-right">
                          <span className="font-mono text-[11px] text-[#bfff00]/80">
                            {project.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          ref={experienceRef}
          id="experience"
          className="min-h-screen px-6 py-32 relative"
        >
          <div className="max-w-7xl mx-auto w-full">
            <RevealSection delay={0}>
              <div className="mb-20">
                <span className="font-mono text-[11px] tracking-[0.3em] text-[#bfff00]">
                  03_
                </span>
                <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-[0.95]">
                  Experience
                </h2>
              </div>
            </RevealSection>

            <div className="space-y-16">
              {getExperiences.experience.map((exp, index) => (
                <RevealSection key={index} delay={index * 150} direction="left" distance={30}>
                  <div className="relative pl-12 md:pl-16">
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#bfff00]/30 to-transparent" />

                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 top-2 w-4 h-4 -translate-x-1/2 bg-[#080808] border-2 border-[#bfff00] rounded-full z-10"
                      style={{
                        boxShadow: index === 0 ? "0 0 20px rgba(191, 255, 0, 0.3)" : "none",
                      }}
                    />

                    <div className="space-y-5">
                      <div className="flex flex-wrap items-baseline gap-4">
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                          {exp.title}
                        </h3>
                        <span className="font-mono text-[13px] text-[#bfff00]">
                          {exp.company}
                        </span>
                      </div>
                      <p className="font-mono text-[11px] text-[#f5f4ef]/30 tracking-wide">
                        {exp.period}
                      </p>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 text-[#f5f4ef]/50 text-[17px] leading-[1.75]"
                          >
                            <span className="text-[#bfff00] mt-1 flex-shrink-0 text-lg">→</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>

            {/* Bug Bounty Banner */}
            <RevealSection delay={600} direction="scale">
              <div className="mt-28 p-10 border border-[#bfff00]/20 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-[#bfff00]/5"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(191,255,0,0.08) 0%, transparent 70%)",
                  }}
                />
                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#bfff00] mb-3 leading-tight">
                      Bug Bounty Hunter
                    </h3>
                    <p className="text-[#f5f4ef]/50 text-[17px] leading-[1.7]">
                      Actively participating in bug bounty programs to help make the
                      internet more secure.
                    </p>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center">
                      <Counter value={50} prefix="+" />
                      <div className="font-mono text-[11px] text-[#f5f4ef]/30 mt-1 tracking-wide">
                        VULNERABILITIES FOUND
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-[#f5f4ef]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono text-[11px] text-[#f5f4ef]/30 tracking-wide">
            © 2025 JORGE LUIS ALMONTE
          </div>
          <div className="flex gap-8">
            {[
              { label: "GITHUB", url: "#" },
              { label: "LINKEDIN", url: "#" },
              { label: "DEV.TO", url: "#" },
            ].map((link, index) => (
              <Link
                key={link.label}
                href={link.url}
                className="font-mono text-[11px] text-[#f5f4ef]/40 hover:text-[#bfff00] transition-colors duration-300 tracking-wide"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      {/* Premium global styles */}
      <style jsx global>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes growBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        html {
          scroll-behavior: smooth;
        }

        section {
          scroll-margin-top: 120px;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #080808;
        }

        ::-webkit-scrollbar-thumb {
          background: #bfff00;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #aadd00;
        }
      `}</style>
    </div>
  );
}

// Counter component for animated numbers
function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const { ref, count } = useCounter(value, 2000);

  return (
    <div ref={ref} className="text-4xl font-bold text-[#bfff00] tabular-nums">
      {prefix}
      {count}
      {suffix}
    </div>
  );
}
