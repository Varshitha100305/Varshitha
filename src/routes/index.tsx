import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "motion/react";
import { useState, type FormEvent } from "react";
import {
  Briefcase,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  Send,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import interviewShot from "@/assets/project-interview-copilot.jpg";
import rfidShot from "@/assets/project-rfid-healthcare.jpg";
import bgRedGradient from "@/assets/bg-red-gradient.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nalagatla Sai Varshitha — AI/ML Developer & Python Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Nalagatla Sai Varshitha — AI/ML developer building transformer-powered NLP applications, predictive analytics, and cloud/IoT systems.",
      },
      {
        property: "og:title",
        content: "Nalagatla Sai Varshitha — AI/ML Developer & Python Engineer",
      },
      {
        property: "og:description",
        content:
          "Transformer-powered NLP apps, predictive analytics, and cloud-connected IoT systems.",
      },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "nvarshithar2005@gmail.com";
const GITHUB = "https://github.com/Varshitha100305";
const LINKEDIN = "https://www.linkedin.com/in/sai-varshitha-n-a6235a289";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrpbrowj";

const projects = [
  {
    title: "Interview Copilot",
    image: interviewShot,
    tags: ["Python", "Streamlit", "Hugging Face Transformers", "NLP"],
    description:
      "Streamlit-based mock interview application that leverages Hugging Face transformer models to evaluate user inputs and generate context-aware conversational replies.",
    outcome:
      "Custom structured response workflow that provides candidates with real-time, actionable feedback logic.",
  },
  {
    title: "Cloud-Enabled RFID Healthcare Inventory Tracking",
    image: rfidShot,
    tags: ["IoT", "Arduino", "RFID", "Blynk Cloud", "Hardware-to-Cloud"],
    description:
      "Cloud-synchronized inventory tracking system designed for healthcare supply chains, logging item movements in real time.",
    outcome:
      "Resilient data pipeline linking hardware sensors to a Blynk cloud dashboard for live telemetry and audit logging.",
  },
  {
    title: "Warehouse Process Analytics & Demand Forecasting",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1280&q=80",
    tags: ["Python", "ARIMA", "Random Forest", "Predictive Analytics", "Scikit-Learn"],
    description:
      "Business process analytics pipeline evaluating 28,000+ transactional warehouse records to balance inventory holding costs and prevent stockouts across multiple fulfillment sub-centers.",
    outcome:
      "Engineered an ARIMA(5, 0, 2) time-series forecasting model and trained an ensemble Random Forest classifier achieving 67.8% accuracy in predicting customer satisfaction drivers.",
  },
  {
    title: "Workplace Psychological Health & Care Analytics",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1280&q=80",
    tags: ["Python", "Machine Learning", "EDA", "Statistical Testing", "Pandas"],
    description:
      "Data understanding and predictive modeling architecture analyzing 225,000+ self-reported surveys to uncover relationships between occupational strain and mental health care seeking.",
    outcome:
      "Designed an end-to-end categorical preprocessing and ordinal encoding pipeline, mitigating demographic imbalance and prioritizing recall/F1-score for treatment classification.",
  },
];

const experience = [
  {
    role: "Cloud Computing Intern",
    org: "8 Queens Technology, Chennai",
    period: "May 2025 – Jun 2025",
    detail:
      "Worked with cloud infrastructure and storage services, and studied deployment security workflows for live systems.",
  },
  {
    role: "Cybersecurity Job Simulation",
    org: "Deloitte (Virtual / Forage)",
    period: "Sep 2025",
    detail:
      "Analyzed web activity logs to identify suspicious user behavior, investigated simulated security breaches, and recommended mitigation actions.",
  },
];

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    org: "RMD Engineering College • Kavaraipettai, Tamil Nadu",
    period: "Oct 2022 – Jun 2026",
    score: "CGPA 8.51",
  },
  {
    degree: "Higher Secondary Education",
    org: "Narayana Junior College • Nellore, Andhra Pradesh",
    period: "2020 – 2022",
    score: "82.2%",
  },
];

const certifications = [
  {
    issuer: "IBM SkillsBuild",
    name: "Artificial Intelligence Fundamentals",
    year: "2025",
    tag: "AI & Machine Learning",
    link: "https://www.credly.com/badges/53380370-0bbc-4150-9086-7c86c2390ac9",
  },
  {
    issuer: "AWS Academy",
    name: "AWS Academy Graduate - Data Engineering",
    year: "2025",
    tag: "Cloud & Data Engineering",
    link: "https://www.credly.com/go/qM68s0XP",
  },
  {
    issuer: "BCG X & Forage",
    name: "GenAI Job Simulation",
    year: "2026",
    tag: "Generative AI & Chatbots",
    link: "https://www.theforage.com/simulations/bcg/genai-empower-future",
  },
  {
    issuer: "HackerRank",
    name: "Python (Basic) Certification",
    year: "2025",
    tag: "Programming & Logic",
    link: "https://www.hackerrank.com/certificates/581FCFCDA4C4",
  },
  {
    issuer: "HackerRank",
    name: "SQL (Basic) Certification",
    year: "2025",
    tag: "Relational Databases",
    link: "https://www.hackerrank.com/certificates/B2176E099795",
  },
  {
    issuer: "Great Learning",
    name: "Prompt Engineering for ChatGPT",
    year: "2025",
    tag: "Generative AI & LLMs",
    link: "https://www.mygreatlearning.com/certificate/SXZBZAUZ",
  },
];

const apertureContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.045,
    },
  },
};

const apertureLetterVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    filter: "blur(16px)",
    letterSpacing: "-0.08em",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    letterSpacing: "-0.02em",
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
    },
  },
};

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const errors = {
    name: form.name.trim().length < 2 ? "Please enter your name" : "",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Enter a valid email",
    message: form.message.trim().length < 10 ? "Message should be at least 10 characters" : "",
  };
  const valid = !errors.name && !errors.email && !errors.message;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!valid || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Formspree submit error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const field =
    "w-full rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition duration-200 focus:border-rose-400/50 focus:bg-black/35 focus:ring-1 focus:ring-rose-400/30";

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-8 sm:p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="inline-flex p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-sm text-slate-300 font-light max-w-md mx-auto mb-6">
          Thank you for reaching out! Your message has been delivered to my inbox and I will respond to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-xs font-mono text-rose-400 hover:text-rose-300 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            name="name"
            className={field}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onBlur={() => setTouched({ ...touched, name: true })}
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-xs text-rose-400">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            name="email"
            type="email"
            className={field}
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onBlur={() => setTouched({ ...touched, email: true })}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <textarea
          name="message"
          rows={5}
          className={field}
          placeholder="Tell me about the role or project…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onBlur={() => setTouched({ ...touched, message: true })}
        />
        {touched.message && errors.message && (
          <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
        )}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-medium text-sm text-white bg-rose-600/90 hover:bg-rose-500 backdrop-blur-md shadow-[0_4px_24px_rgba(225,29,72,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send message"} <Send size={15} />
        </button>

        {status === "error" && (
          <span className="text-xs text-rose-400 font-medium">
            Could not send message. Please email me directly at {EMAIL}.
          </span>
        )}
      </div>
    </form>
  );
}

function Portfolio() {
  const nameLetters = "NALAGATLA SAI VARSHITHA".split("");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0204] text-slate-100 font-sans selection:bg-rose-500/30 selection:text-white">
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${bgRedGradient})`,
          filter: "contrast(1.08) brightness(0.92)",
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 backdrop-blur-[0.5px]" />

      <Preloader />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden z-10">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 pt-32 pb-16 text-center">
          <div className="flex flex-col items-center justify-center">
            {/* Opening Effect */}
            <motion.h1
              variants={apertureContainerVariants}
              initial="hidden"
              animate="visible"
              className="w-full text-center font-display text-[clamp(2.4rem,7.5vw,7.2rem)] font-black uppercase tracking-tight text-white leading-none select-none flex flex-wrap justify-center drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
            >
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={apertureLetterVariants}
                  whileHover={{
                    scale: 1.12,
                    color: "#fecdd3",
                    textShadow: "0 0 24px rgba(244,63,94,0.8)",
                    transition: { duration: 0.15 },
                  }}
                  className={`inline-block transition-colors cursor-default ${
                    char === " " ? "w-4 sm:w-8" : ""
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
              className="mt-6 font-mono text-[clamp(1.1rem,2.5vw,1.8rem)] font-medium text-rose-400 tracking-wide drop-shadow-md"
            >
              AI/ML & Python Developer
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative mx-auto max-w-5xl px-6 py-24 z-10">
        <Reveal>
          <p className="chip mb-4">01 — About Me</p>
          <h2 className="section-title">Engineering practical AI/ML solutions & cloud pipelines.</h2>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-300/90 font-light">
            Computer Science graduate with hands-on
            experience developing Python-based NLP applications using Hugging Face Transformers and
            Streamlit, alongside predictive analytics and cloud-connected IoT inventory systems. Certified across IBM, AWS,
            and Oracle AI foundations, actively seeking an entry-level AI/ML or Python Developer role.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/Sai_Varshitha_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white tracking-wide overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]
                bg-white/[0.08] backdrop-blur-2xl border border-white/20 border-t-white/40
                shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.4)]
                hover:bg-white/[0.14] hover:border-white/35 hover:shadow-[0_8px_32px_0_rgba(225,29,72,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.6)]"
            >
              <span className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity" />
              <FileText size={17} className="text-rose-400 group-hover:text-white transition-colors" />
              <span>Open Resume</span>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group relative inline-flex items-center justify-center p-3.5 rounded-2xl text-white transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]
                bg-white/[0.06] backdrop-blur-2xl border border-white/15 border-t-white/30
                shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.3)]
                hover:bg-white/[0.12] hover:border-rose-400/40"
            >
              <Linkedin size={18} className="text-slate-300 group-hover:text-rose-400 transition-colors" />
            </a>
          </div>
        </Reveal>
      </section>

      {/* Skills Section — AESTHETIC BENTO GRID */}
      <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20 z-10">
        <Reveal>
          <p className="chip mb-4">02 — What I Can Do</p>
          <h2 className="section-title">Technical Competence & Toolkit</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-12">
            <TiltCard className="p-8 rounded-3xl bg-white/[0.03] border border-white/15 hover:border-rose-500/40 backdrop-blur-2xl relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">AI & Machine Learning</h3>
                    <p className="text-xs font-mono text-rose-300">Core Specialty</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-300 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  Transformers • NLP • Predictive Modeling
                </span>
              </div>
              <p className="text-sm text-slate-300/90 mb-6 max-w-2xl leading-relaxed font-light">
                Specialized in Natural Language Processing, text representation, transformer model fine-tuning with Hugging Face, time-series forecasting, and structured prompt engineering workflows.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Natural Language Processing (NLP)",
                  "Hugging Face Transformers",
                  "Machine Learning & ARIMA",
                  "Prompt Engineering",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-rose-500/[0.09] text-rose-200 border border-rose-500/20 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>

          <div className="md:col-span-6">
            <TiltCard className="h-full p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-rose-500/40 backdrop-blur-2xl flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/10 text-rose-400">
                    <Terminal size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Languages & Data Analytics</h3>
                </div>
                <p className="text-sm text-slate-300/90 mb-5 leading-relaxed font-light">
                  Data manipulation, structured querying, log auditing, predictive regression, and statistical analysis for business decision-making.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {["Python", "SQL", "Log Analysis", "Predictive Modeling", "Excel", "Google Sheets"].map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>

          <div className="md:col-span-6">
            <TiltCard className="h-full p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-rose-500/40 backdrop-blur-2xl flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/10 text-rose-400">
                    <Cloud size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cloud Architecture & IoT</h3>
                </div>
                <p className="text-sm text-slate-300/90 mb-5 leading-relaxed font-light">
                  Sensor-to-cloud telemetry pipelines, hardware integration, and foundational cloud storage security principles.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {["AWS", "Cloud Storage & Security", "Arduino", "RFID", "Blynk Cloud"].map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>

          <div className="md:col-span-12">
            <div className="p-6 rounded-2xl bg-white/[0.025] border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Wrench size={18} className="text-slate-400" />
                <span className="text-sm font-semibold text-white tracking-wide">Development Toolkit & Environments:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Streamlit", "Git", "GitHub", "VS Code", "Google Colab", "Scikit-Learn"].map((tool) => (
                  <span key={tool} className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.05] text-slate-300 border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20 z-10">
        <Reveal>
          <p className="chip mb-4">03 — Featured Projects</p>
          <h2 className="section-title">Things I&apos;ve built end to end.</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard className="h-full overflow-hidden rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src={p.image}
                  alt={`${p.title} interface preview`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-52 w-full object-cover object-top opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300/90 font-light">
                    {p.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/90 font-light">
                    <span className="text-rose-400 font-medium">Outcome — </span>
                    {p.outcome}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative mx-auto max-w-4xl px-6 py-20 z-10">
        <Reveal>
          <p className="chip mb-4">04 — Work Experience</p>
          <h2 className="section-title flex items-center gap-3">
            <Briefcase className="text-rose-400" size={28} /> Industry & Internship Experience
          </h2>
        </Reveal>

        <div className="relative mt-12 border-l border-rose-500/30 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-8">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <div className="relative group">
                <span className="absolute -left-[31px] sm:-left-[39px] top-6 h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)] group-hover:scale-125 transition-transform" />
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-2xl p-6 sm:p-8 hover:border-rose-400/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-bold text-white">{e.role}</h3>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-400 mb-4">{e.org}</p>
                  <p className="text-sm leading-relaxed text-slate-300/90 font-light">{e.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative mx-auto max-w-4xl px-6 py-20 z-10">
        <Reveal>
          <p className="chip mb-4">05 — Education</p>
          <h2 className="section-title flex items-center gap-3">
            <GraduationCap className="text-rose-400" size={28} /> Academic Journey
          </h2>
        </Reveal>

        <div className="relative mt-12 border-l border-rose-500/30 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-8">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <div className="relative group">
                <span className="absolute -left-[31px] sm:-left-[39px] top-6 h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)] group-hover:scale-125 transition-transform" />
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-2xl p-6 sm:p-8 hover:border-rose-400/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-bold text-white">{e.degree}</h3>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-400 mb-4">{e.org}</p>
                  <div className="inline-block px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-rose-300 font-semibold">
                    {e.score}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications Section — CLEAN MINIMAL BLOCKS WITH NAMES & YEARS */}
      <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-20 z-10">
        <Reveal>
          <p className="chip mb-4">06 — Credentials</p>
          <h2 className="section-title">Certifications & Validations</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="group relative p-6 rounded-2xl bg-white/[0.025] border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/40 hover:shadow-[0_8px_30px_rgba(244,63,94,0.12)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      {c.issuer}
                    </span>
                    <span className="font-mono text-xs text-rose-400 font-semibold px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
                      {c.year}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white mb-3 group-hover:text-rose-200 transition-colors leading-snug">
                    {c.name}
                  </h3>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5">
                    {c.tag}
                  </span>

                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-rose-400 hover:text-rose-300 transition-colors group/link"
                  >
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative mx-auto max-w-5xl px-6 py-24 z-10">
        <Reveal>
          <p className="chip mb-4">07 — Let&apos;s Work Together</p>
          <h2 className="section-title max-w-3xl">
            Let&apos;s Build Something <span className="text-rose-400">Intelligent</span> Together.
          </h2>
          <p className="mt-5 max-w-2xl text-slate-300/90 font-light">
            Currently open to entry-level AI/ML and Python Developer roles.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className="chip">
              <Mail size={12} /> {EMAIL}
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="chip">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="chip">
              LinkedIn
            </a>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row">
          <span className="flex items-center gap-2 text-slate-300">
            <Cpu size={14} className="text-rose-400" /> Nalagatla Sai Varshitha
          </span>
          <span className="font-mono text-xs text-slate-500">
            © {new Date().getFullYear()} 
          </span>
        </div>
      </footer>
    </div>
  );
}