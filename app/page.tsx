import type { Metadata } from "next";
import { structuredData } from "@/lib/site";
import Image from "next/image";
import Emailer from "@/components/Emailer";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  MapPin,
} from "lucide-react";
import { GitHub, LinkedIn, Twitter } from "@/icons/";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const repository = "https://github.com/peter-calabrese/localization";
const experience = [
  {
    dates: "DEC 2024 — PRESENT",
    title: "VP, Senior Software Engineer",
    project: "Cash Management System",
    summary:
      "Helped rebuild and launch a modern cash management platform, connecting a React micro frontend with Java / Spring Boot service, Azure Serverless Funcions  and PostgreSQL.",
    highlight: "Delivery across 6 cross-functional teams",
    details: [
      "Helped establish a microfrontend architecture with Vite Module Federation and coordinated feature migrations across design, QA, product, infrastructure, and DevOps.",
      "Built high-throughput Azure Functions for background processing and monitoring dashboards with Application Insights, custom events, and KQL for payment activity and transaction KPIs.",
      "Built AI-assisted localization, translation caching, and a shared npm package with a custom useTranslation hook. Used Azure App Configuration feature flags to separate business testing from approved production languages.",
    ],
  },
  {
    dates: "APR 2022 — DEC 2024",
    title: "VP, Software Engineer",
    project: "ALPS · Loan processing",
    summary:
      "Led frontend development for an internal loan processing application built in React used by 20+ groups across four departments. Integrated MSAL single sign-on for over 1,500 internal users.",
    highlight: "TypeScript adopted across the application",
    details: [
      "Introduced TypeScript throughout the application, with an estimated 20% improvement in developer productivity.",
      "Used React Context and Reducer for predictable state management, React Router for navigation, and Ant Design for consistent interfaces.",
    ],
  },
  {
    dates: "OCT 2021 — APR 2022",
    title: "Associate, Business Analyst",
    project: "ALPS · Loan digitization",
    summary:
      "Mapped 15+ manual loan processing workflows across four departments, created initial wireframes, and partnered with senior management on the technical roadmap.",
    highlight: "Business context that still informs how I build",
    details: [],
  },
];

const skills = [
  [
    "Frontend",
    "React, React Native, TypeScript, JavaScript, React Router, MUI",
  ],
  ["Backend & data", "Java, Spring Boot, REST APIs, PostgreSQL"],
  ["Cloud & delivery", "Azure, Azure Functions, CI/CD, Git"],
  [
    "Platform experience",
    "Microfrontends, MSAL authentication, localization, Application Insights, KQL",
  ],
];

export default function Home() {
  return (
    <>
      <Analytics />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap navigation">
          <a className="brand" href="#">
            Peter Calabrese<span aria-hidden="true">.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#experience">Experience</a>
            <a href="#localization">Project</a>
            <a href="#skills">Skills</a>
          </nav>
          <a className="nav-contact" href="#contact">
            Let’s Connect
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero-context-section" aria-labelledby="intro-title">
          <video
            className="hero-context-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/placeholder-bg.png"
            aria-hidden="true"
          >
            <source src="/context-background.mp4?v=3" type="video/mp4" />
          </video>
          <div className="hero-context-overlay" aria-hidden="true" />
          <div className="wrap hero">
            <div className="hero-copy">
              <p className="eyebrow">FULL-STACK SOFTWARE ENGINEER</p>
              <h1 id="intro-title">
                Hey, I'm Peter!
                <br />
              </h1>
              <p className="hero-description">
                I’m a New York–based engineer with <strong>5+ years</strong>{" "}
                building enterprise React applications and scalable backend
                services.
              </p>

              <div className="hero-actions">
                <a
                  className="button primary"
                  href="/peter-calabrese-resume.pdf"
                  download
                >
                  Download resume <ArrowDownToLine size={16} />
                </a>
                <a className="text-link" href="#experience">
                  Explore my experience <ArrowDown size={15} />
                </a>
              </div>
              <p className="hero-stack">
                React <span>/</span> TypeScript <span>/</span> Java & Spring
                Boot <span>/</span> Azure
              </p>
            </div>
            <figure className="portrait">
              <Image
                src="/profile.jpg"
                alt="Peter Calabrese"
                width={400}
                height={400}
                priority
                sizes="(max-width: 700px) 90vw, 340px"
              />
              <figcaption>
                <div>
                  <strong>Peter Calabrese</strong>
                  <span>
                    <MapPin size={12} /> New York, NY
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                  }}
                >
                  <a
                    href="https://github.com/peter-calabrese"
                    aria-label="Peter on GitHub"
                  >
                    <GitHub className="social-icon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/peter-calabrese/"
                    aria-label="Peter on LinkedIn"
                  >
                    <LinkedIn className="social-icon" />
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          id="experience"
          className="wrap section"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / EXPERIENCE</p>
              <h2 id="experience-title">Professional Experience</h2>
              <small>Business Analyst to Senior Full-Stack Engineer</small>
            </div>
          </div>
          <div className="employer">
            <span className="employer-monogram" aria-hidden="true">
              S
            </span>
            <div>
              <h3>Sumitomo Mitsui Banking Corporation</h3>
              <p>Financial services · October 2021 — Present</p>
            </div>
            <span className="employer-short">SMBC</span>
          </div>
          <div className="experience-list">
            {experience.map((role, index) => (
              <article className="experience-row" key={role.title}>
                <div className="role-period">
                  <span
                    className={
                      index === 0 ? "timeline-dot active" : "timeline-dot"
                    }
                  />
                  <span>{role.dates}</span>
                  {index === 0 && (
                    <span className="current-role">Current role</span>
                  )}
                </div>
                <div className="role-copy">
                  <h3>{role.title}</h3>
                  <p className="role-project">{role.project}</p>
                  <p>{role.summary}</p>

                  {role.details.length > 0 && (
                    <details className="read-more">
                      <summary>
                        More about this role <ChevronDown size={14} />
                      </summary>
                      <ul>
                        {role.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="localization"
          className="project-section"
          aria-labelledby="project-title"
        >
          <div className="wrap">
            <div className="project-topline">
              <p className="eyebrow">02 / FEATURED PROJECT</p>
            </div>
            <div className="project-layout">
              <div className="project-copy">
                <h2 id="project-title">
                  Supporting regions.
                  <br />
                  <span>Less work.</span>
                </h2>
                <p className="project-intro" style={{ marginBottom: "1.3rem" }}>
                  A TypeScript localization tool that uses Azure AI Translator
                  to translate English locale files while preserving nested keys
                  and file structure.
                </p>

                <a className="button secondary" href={repository}>
                  Explore on GitHub
                </a>
              </div>
              <figure
                className="project-visual"
                aria-label="Illustrative translation workflow: English JSON files pass through a cache check and Azure Translator, producing locale files with the same nested keys."
              >
                <div className="code-heading">
                  <Code2 size={16} />
                  <span>localization / translation workflow</span>
                </div>
                <div className="code-file">
                  <span className="file-path">en / common.json</span>
                  <pre>
                    <code>
                      {
                        '{\n  "navigation": {\n    "home": "Home",\n    "settings": "Settings"\n  }\n}'
                      }
                    </code>
                  </pre>
                </div>
                <div className="translation-step">
                  <span className="step-line" />
                  <span>Cache check</span>
                  <ArrowRight size={15} />
                  <span>Azure Translator</span>
                  <span className="step-line" />
                </div>
                <div className="output-files">
                  <span>es / common.json</span>
                  <span>fr / common.json</span>
                  <span>…your target locales</span>
                </div>
                <figcaption>
                  <Check size={14} /> Same nested keys. Translated values.
                  <span>Illustrative workflow</span>
                </figcaption>
              </figure>
            </div>
            <details className="project-deep-dive">
              <summary>
                <span>
                  Under the hood{" "}
                  <span className="summary-note">
                    Caching, structure, and production context
                  </span>
                </span>
                <ChevronDown size={17} />
              </summary>
              <div className="deep-dive-content">
                <div>
                  <h3>Inside the public project</h3>
                  <p>
                    The tool flattens nested JSON strings, batches translation
                    requests, and rebuilds language-specific files while
                    preserving their original structure.
                  </p>
                  <p>
                    A persistent cache tracks each string by file namespace and
                    nested key path, recording its English source text and
                    completed languages. Unchanged strings with existing
                    translations skip the API call. Changed text or missing
                    translations are sent to Azure, and removed keys are cleared
                    from the cache. This avoids paying to translate the same
                    content repeatedly.
                  </p>
                  <p>
                    Target languages and the locale root are configurable. A
                    GitHub Action triggers the tool through an automated
                    pipeline and exposes the generated file paths to subsequent
                    workflow steps.
                  </p>
                </div>
                <div>
                  <h3>Related work at SMBC</h3>
                  <p>
                    My enterprise localization work also included a shared npm
                    package with a custom <code>useTranslation</code> hook for
                    microfrontends. Azure App Configuration feature flags made
                    translations available for business testing while keeping
                    unapproved languages out of production.
                  </p>
                  <p className="context-note">
                    This production experience is described in my resume; the
                    public repository is a separate code sample.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section
          id="skills"
          className="wrap section skills-section"
          aria-labelledby="skills-title"
        >
          <div className="skills-layout">
            <div>
              <p className="eyebrow">03 / TOOLKIT</p>
              <h2 id="skills-title">What I build with.</h2>
              <p className="section-intro">
                I’m most at home with React and TypeScript, but my work
                regularly takes me into Java backends and Azure services.
              </p>
            </div>
            <dl className="skills-list">
              {skills.map(([category, tools]) => (
                <div key={category}>
                  <dt>{category}</dt>
                  <dd>{tools}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="education">
            <div>
              <p className="eyebrow">EDUCATION</p>
              <h3>Farmingdale State College</h3>
              <p>B.S. Computer Programming and Information Systems</p>
              <span>December 2020 · Major GPA: 3.51</span>
            </div>
            <div>
              <p className="eyebrow">CERTIFICATION</p>
              <h3>Microsoft Certified: Azure Fundamentals</h3>
              <p>AZ-900</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="wrap contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">LET’S CONNECT</p>
              <h2>Think we’d work well together?</h2>
              <p>
                Have a role or freelance project in mind? Send me a message and
                tell me what you’re working on.
              </p>
            </div>
            <Emailer />

            <div className="contact-links">
              <a href="https://www.linkedin.com/in/peter-calabrese/">
                <LinkedIn className="social-icon" /> LinkedIn
              </a>
              <a href="https://github.com/peter-calabrese">
                <GitHub className="social-icon" /> GitHub
              </a>
              <a href="/peter-calabrese-resume.pdf" download>
                <ArrowDownToLine size={15} /> Resume
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap footer">
        <p>© {new Date().getFullYear()} Peter Calabrese</p>
        <span>New York, NY</span>
      </footer>
    </>
  );
}
