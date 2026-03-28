import { motion } from "motion/react";
import { useRef, useState } from "react";

const subjects = [
  {
    num: "01",
    label: "Pre-school and Pre-Primary Curriculum Development",
    items: [
      "Conceptual teaching and modern methods of instruction",
      "Narratives and classroom storytelling",
      "Rhymes and songs for early learners",
      "Arts, crafts, strokes and curves",
      "Environmental studies integration",
      "Jolly English and Jolly Phonics",
    ],
  },
  {
    num: "02",
    label: "Child Psychology",
    items: [
      "Developmental psychology",
      "Learning difficulties and remedies",
      "Personality development",
      "Behaviour challenges and solutions",
    ],
  },
  {
    num: "03",
    label: "Childcare and Healthcare",
    items: [
      "Play and its role in early development",
      "Nutrition and healthy habits",
    ],
  },
  {
    num: "04",
    label: "Classroom Management and School Administration",
    items: [
      "Effective classroom management",
      "Strategies of school administration",
    ],
  },
  {
    num: "05",
    label: "Montessori Method of Education",
    items: [
      "History of Montessori Education",
      "Exercises on Practical Life",
      "Sensorial Exploration",
      "Arithmetic in the Montessori framework",
      "Language and Culture",
    ],
  },
];

export default function Syllabus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSidebarClick = (i: number) => {
    setActiveIndex(i);
    cardRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      id="syllabus"
      style={{
        background: "#F2F5FF",
        position: "relative",
        overflow: "hidden",
        padding: "100px 0",
      }}
    >
      {/* Ghost number */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -20,
          fontSize: 220,
          fontWeight: 900,
          color: "rgba(26,43,140,0.04)",
          pointerEvents: "none",
          lineHeight: 1,
          fontFamily: "Montserrat, sans-serif",
          userSelect: "none",
        }}
      >
        03
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 60 }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#1A2B8C",
              marginBottom: 16,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            CURRICULUM
          </div>
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(36px,5vw,56px)",
                fontWeight: 300,
                color: "#1A2B8C",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              What You
            </h2>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(36px,5vw,56px)",
                fontWeight: 900,
                color: "#1A2B8C",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Will Study.
            </h2>
          </div>
        </motion.div>

        {/* 2-col layout */}
        <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
          {/* Sidebar */}
          <div
            style={{
              width: 280,
              flexShrink: 0,
              position: "sticky",
              top: 100,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
            className="hidden md:flex"
          >
            {subjects.map((subject, i) => (
              <button
                type="button"
                key={subject.num}
                onClick={() => handleSidebarClick(i)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  padding: "12px 20px",
                  background:
                    activeIndex === i ? "rgba(26,43,140,0.04)" : "transparent",
                  borderLeft:
                    activeIndex === i
                      ? "3px solid #C8DC00"
                      : "3px solid transparent",
                  border: "none",
                  borderLeftWidth: 3,
                  borderLeftStyle: "solid",
                  borderLeftColor:
                    activeIndex === i ? "#C8DC00" : "transparent",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  borderRadius: "0 4px 4px 0",
                }}
                data-ocid={`syllabus.tab.${i + 1}`}
              >
                <span
                  style={{
                    fontSize: 10,
                    color: "#00BBCC",
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  {subject.num}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: activeIndex === i ? 700 : 600,
                    color: activeIndex === i ? "#0d1945" : "#3a4a7a",
                    fontFamily: "Montserrat, sans-serif",
                    lineHeight: 1.4,
                  }}
                >
                  {subject.label}
                </span>
              </button>
            ))}
          </div>

          {/* Cards */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {subjects.map((subject, i) => (
              <motion.div
                key={subject.num}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 4 }}
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: "36px 40px",
                  borderLeft: `4px solid ${
                    subject.num === "01"
                      ? "#C8DC00"
                      : subject.num === "05"
                        ? "#00BBCC"
                        : "transparent"
                  }`,
                  willChange: "transform",
                }}
                data-ocid={`syllabus.item.${i + 1}`}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      color: "#00BBCC",
                      fontWeight: 700,
                      fontFamily: "Montserrat, sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    {subject.num}
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#0d1945",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {subject.label}
                  </h3>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      subject.items.length > 3 ? "repeat(2, 1fr)" : "1fr",
                    gap: "8px 24px",
                  }}
                >
                  {subject.items.map((item, j) => (
                    <div
                      key={`${subject.num}-${j}`}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          color: "#00BBCC",
                          flexShrink: 0,
                          marginTop: 2,
                          fontSize: 14,
                        }}
                      >
                        ›
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          color: "#3a4a7a",
                          fontFamily: "Montserrat, sans-serif",
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
