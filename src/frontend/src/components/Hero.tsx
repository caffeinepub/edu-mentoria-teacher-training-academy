import { Check, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";

const DOTS = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  top: `${5 + ((i * 37) % 85)}%`,
  left: `${5 + ((i * 53) % 88)}%`,
  delay: i * 0.3,
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const lineVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function StatItem({
  target,
  label,
  suffix = "",
}: { target: number; label: string; suffix?: string }) {
  const { ref, inView } = useInView(0.3);
  const count = useCountUp(target, 2000, inView);
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span
        style={{
          fontSize: 48,
          fontWeight: 900,
          color: "white",
          lineHeight: 1,
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {count}
        <span style={{ color: "#C8DC00" }}>{suffix}</span>
      </span>
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.40)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const compositionRef = useRef(null);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#0d1945",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      className="grain"
    >
      {/* Background glows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: [
            "radial-gradient(ellipse 800px 600px at 70% 50%, rgba(0,187,204,0.07), transparent)",
            "radial-gradient(ellipse 400px 400px at 20% 80%, rgba(200,220,0,0.05), transparent)",
          ].join(", "),
        }}
      />

      {/* Scattered dots */}
      {!prefersReducedMotion &&
        DOTS.map((dot) => (
          <motion.div
            key={dot.id}
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: dot.delay,
            }}
            style={{
              position: "absolute",
              top: dot.top,
              left: dot.left,
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "rgba(200,220,0,0.25)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        ))}

      {/* Main content */}
      <div
        style={{
          flex: 1,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "100px 32px 60px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          gap: 40,
          boxSizing: "border-box",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ flex: "0 0 55%", maxWidth: "55%" }}>
          {/* Overline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <div style={{ width: 24, height: 2, background: "#00BBCC" }} />
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#00BBCC",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              CHENNAI'S PREMIER TEACHER TRAINING ACADEMY
            </span>
          </div>

          {/* Headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: 28 }}
          >
            <motion.div variants={lineVariants} style={{ overflow: "hidden" }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(48px,7vw,80px)",
                  fontWeight: 300,
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                  fontStyle: "italic",
                  lineHeight: 1.1,
                }}
              >
                Shape the
              </h1>
            </motion.div>
            <motion.div variants={lineVariants} style={{ overflow: "hidden" }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(48px,7vw,80px)",
                  fontWeight: 900,
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: 1.1,
                }}
              >
                Future of
              </h1>
            </motion.div>
            <motion.div variants={lineVariants} style={{ overflow: "hidden" }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(52px,7.5vw,88px)",
                  fontWeight: 700,
                  color: "#C8DC00",
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                  lineHeight: 1.1,
                  textShadow: "0 0 60px rgba(200,220,0,0.30)",
                }}
              >
                Education.
              </h1>
            </motion.div>
          </motion.div>

          {/* Sub paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: "rgba(255,255,255,0.60)",
              lineHeight: 1.85,
              maxWidth: 420,
              marginBottom: 40,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Edu Mentoria equips aspiring and practising teachers with the
            knowledge, confidence, and practical skills to become genuinely
            transformative educators. Our diplomas blend rigorous theory with
            real classroom experience.
          </motion.p>

          {/* Button row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <motion.button
              type="button"
              onClick={() => scrollTo("courses")}
              whileHover={{
                y: -2,
                boxShadow: "0 12px 40px rgba(200,220,0,0.30)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "#C8DC00",
                color: "#0d1945",
                borderRadius: 999,
                padding: "14px 32px",
                fontSize: 13,
                fontWeight: 700,
                border: "none",
                fontFamily: "Montserrat, sans-serif",
                cursor: "pointer",
              }}
              data-ocid="hero.explore_button"
            >
              Explore Programmes →
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollTo("about")}
              whileHover={{
                borderColor: "#00BBCC",
                background: "rgba(0,187,204,0.08)",
              }}
              style={{
                background: "transparent",
                color: "white",
                borderRadius: 999,
                padding: "14px 32px",
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "Montserrat, sans-serif",
                border: "1.5px solid rgba(255,255,255,0.40)",
                cursor: "pointer",
              }}
              data-ocid="hero.story_button"
            >
              Our Story
            </motion.button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{
              marginTop: 64,
              paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              gap: 48,
              flexWrap: "wrap",
            }}
          >
            <StatItem target={2} label="Diploma Programmes" suffix="+" />
            <StatItem target={30} label="Day Internship" />
            <StatItem target={5} label="Core Subjects" suffix="+" />
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          ref={compositionRef}
          style={{
            flex: "0 0 45%",
            maxWidth: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            minHeight: 500,
          }}
          className="hidden md:flex"
        >
          {/* Outer circle */}
          <div
            style={{
              width: 420,
              height: 420,
              border: "1px solid rgba(0,187,204,0.15)",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Inner rotating circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              width: 300,
              height: 300,
              background:
                "linear-gradient(135deg, rgba(0,187,204,0.12), rgba(26,43,140,0.20))",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              willChange: "transform",
            }}
          />

          {/* Lime SVG arc */}
          <motion.svg
            role="img"
            aria-label="Decorative arc"
            width={420}
            height={420}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -210,
              marginLeft: -210,
              willChange: "transform",
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <title>Decorative arc</title>
            <path
              d="M 210 10 A 200 200 0 0 1 410 210"
              fill="none"
              stroke="#C8DC00"
              strokeWidth={2}
              opacity={0.5}
            />
          </motion.svg>

          {/* Chip 1: top-right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0,
            }}
            style={{
              position: "absolute",
              top: "5%",
              right: "-8%",
              background: "white",
              borderRadius: 14,
              padding: "12px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              display: "flex",
              gap: 10,
              alignItems: "center",
              minWidth: 160,
              willChange: "transform",
            }}
          >
            <Star size={16} color="#C8DC00" fill="#C8DC00" />
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0d1945",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Recognised Diploma
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#7a8ab0",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Theory & Practicals
              </div>
            </div>
          </motion.div>

          {/* Chip 2: bottom-left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.8,
            }}
            style={{
              position: "absolute",
              bottom: "8%",
              left: "-10%",
              background: "#0d1945",
              border: "1px solid #00BBCC",
              borderRadius: 14,
              padding: "12px 16px",
              display: "flex",
              gap: 10,
              alignItems: "center",
              minWidth: 170,
              willChange: "transform",
            }}
          >
            <Check size={16} color="#00BBCC" />
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Internship Included
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.60)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                30 Days at Phonic Champs
              </div>
            </div>
          </motion.div>

          {/* Chip 3: middle-right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.6,
            }}
            style={{
              position: "absolute",
              top: "45%",
              right: "-12%",
              background: "#C8DC00",
              borderRadius: 14,
              padding: "12px 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              willChange: "transform",
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#0d1945",
                lineHeight: 1,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              30
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#0d1945",
                fontFamily: "Montserrat, sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Days
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip */}
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="animate-marquee"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            color: "#C8DC00",
            fontSize: "clamp(32px,4vw,60px)",
            fontWeight: 900,
            fontFamily: "Montserrat, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "3px",
            padding: "20px 0",
          }}
        >
          EDUCATE · INNOVATE · INSPIRE · TEACHER TRAINING ACADEMY · PHONIC
          CHAMPS · DIPLOMA PROGRAMMES ·&nbsp;&nbsp;&nbsp; EDUCATE · INNOVATE ·
          INSPIRE · TEACHER TRAINING ACADEMY · PHONIC CHAMPS · DIPLOMA
          PROGRAMMES ·&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </section>
  );
}
