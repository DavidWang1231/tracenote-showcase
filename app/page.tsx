"use client";

import { useState } from "react";

type DemoQuestion = {
  question: string;
  label: string;
  answer: string[];
  citations: Array<{ id: string; document: string; excerpt: string }>;
};

const questions: DemoQuestion[] = [
  {
    label: "Resume fit",
    question: "How should this candidate tailor their resume for the role?",
    answer: [
      "Lead with the analytics dashboard project because it directly demonstrates the role’s need for product thinking and data communication.",
      "Move the TypeScript and React experience above general coursework, then quantify the dashboard’s adoption and performance impact.",
      "Do not claim production Kubernetes experience. The source material only supports classroom exposure, so list it as a learning area rather than a core skill.",
    ],
    citations: [
      { id: "S1", document: "Product Analyst — Role Brief", excerpt: "The successful candidate can translate ambiguous business questions into clear product metrics and communicate findings through concise dashboards." },
      { id: "S2", document: "Candidate Portfolio Notes", excerpt: "Built a React and TypeScript dashboard used by 34 student teams; reduced weekly reporting time from two hours to twenty minutes." },
      { id: "S3", document: "Candidate Skills Inventory", excerpt: "Kubernetes: completed one guided lab; no production deployment experience." },
    ],
  },
  {
    label: "Evidence gaps",
    question: "What experience gaps should the candidate address honestly?",
    answer: [
      "The role expects direct stakeholder facilitation, while the candidate sources describe project-team presentations but no client ownership.",
      "SQL is supported by two portfolio projects, but the documents do not show experience with large production datasets.",
      "The candidate should present these as development priorities and prepare examples showing transferable communication skills.",
    ],
    citations: [
      { id: "S1", document: "Product Analyst — Role Brief", excerpt: "Facilitate discovery sessions with operations, engineering, and customer-facing teams." },
      { id: "S2", document: "Candidate Portfolio Notes", excerpt: "Presented sprint outcomes to faculty reviewers and coordinated scope decisions across a four-person project team." },
      { id: "S3", document: "Candidate Skills Inventory", excerpt: "SQL used for two portfolio datasets of approximately 50,000 rows; no enterprise warehouse experience listed." },
    ],
  },
  {
    label: "Interview prep",
    question: "Which interview stories are best supported by the portfolio?",
    answer: [
      "Use the reporting dashboard as the primary impact story: the problem, users, measurable time savings, and iteration process are all documented.",
      "Use the team scope disagreement as a collaboration story because the notes include the candidate’s decision process and outcome.",
      "Avoid presenting the cloud deployment lab as a major technical accomplishment; the evidence is too limited.",
    ],
    citations: [
      { id: "S2", document: "Candidate Portfolio Notes", excerpt: "Interviewed six student team leads, redesigned the weekly report flow, and measured a reduction from two hours to twenty minutes." },
      { id: "S2", document: "Candidate Portfolio Notes", excerpt: "Resolved a scope disagreement by comparing user value, implementation effort, and the two-week delivery constraint." },
      { id: "S3", document: "Candidate Skills Inventory", excerpt: "Cloud deployment experience is limited to coursework and a guided container lab." },
    ],
  },
];

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [activeCitation, setActiveCitation] = useState(0);
  const demo = questions[activeQuestion];
  const citation = demo.citations[activeCitation] ?? demo.citations[0];

  function chooseQuestion(index: number) {
    setActiveQuestion(index);
    setActiveCitation(0);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TraceNote home">
          <span className="brand-mark">T</span>
          <span>TraceNote</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#demo">Live demo</a>
          <a href="#how">How it works</a>
          <a href="#build">The build</a>
        </nav>
        <a className="header-cta" href="#demo">Explore the demo</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Evidence-first document research</p>
          <h1>Research you<br />can <em>defend.</em></h1>
          <p className="hero-subtitle">
            TraceNote turns dense source material into concise answers with citations you can inspect — without quietly mixing in outside information.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#demo">Try the live evidence demo <span>→</span></a>
            <a className="text-link" href="#build">See how it was built</a>
          </div>
          <ul className="trust-list" aria-label="Product principles">
            <li><span>✓</span> Source-only by default</li>
            <li><span>✓</span> Multilingual research</li>
            <li><span>✓</span> Verifiable citations</li>
          </ul>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="source-sheet sheet-back">
            <span>ROLE BRIEF</span><i /><i /><i /><b>Required</b><i /><i />
          </div>
          <div className="source-sheet sheet-front">
            <span>PORTFOLIO NOTES</span><i /><i /><mark /><i /><i /><small>[S2]</small>
          </div>
          <div className="answer-card">
            <span className="answer-label">SUPPORTED ANSWER</span>
            <strong>Lead with the dashboard project.</strong>
            <p>It matches the role’s product metrics and communication requirements.</p>
            <span className="citation-tag">S1</span><span className="citation-tag">S2</span>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <span>Built for documents that matter</span>
        <strong>Job research</strong><i />
        <strong>Market analysis</strong><i />
        <strong>Policy review</strong><i />
        <strong>Academic synthesis</strong>
      </section>

      <section className="demo-section" id="demo">
        <div className="section-intro">
          <p className="eyebrow">Interactive product demo</p>
          <h2>See the evidence,<br />not just the answer.</h2>
          <p>This public demo uses fictional, fixed documents. It never accepts uploads or touches the private research workspace.</p>
        </div>

        <div className="demo-window">
          <div className="demo-toolbar">
            <div className="demo-brand"><span className="brand-mark small">T</span> TraceNote</div>
            <div className="demo-status"><span /> Source-only demo</div>
            <div className="demo-safe">Fixed sample data · No uploads</div>
          </div>

          <div className="demo-grid">
            <aside className="source-list">
              <p>DEMO LIBRARY</p>
              {[
                ["S1", "Product Analyst", "Role brief"],
                ["S2", "Candidate portfolio", "Project notes"],
                ["S3", "Skills inventory", "Self-assessment"],
              ].map(([id, name, type]) => (
                <div className="source-row" key={id}>
                  <span>{id}</span><div><strong>{name}</strong><small>{type}</small></div><b>✓</b>
                </div>
              ))}
              <div className="demo-note"><strong>Why fixed data?</strong><p>Recruiters can explore the product without exposing anyone’s private documents.</p></div>
            </aside>

            <section className="answer-panel">
              <div className="question-tabs">
                {questions.map((item, index) => (
                  <button className={index === activeQuestion ? "active" : ""} key={item.label} onClick={() => chooseQuestion(index)}>{item.label}</button>
                ))}
              </div>
              <div className="question-bubble"><span>YOU</span>{demo.question}</div>
              <div className="response-block">
                <div className="response-heading"><span>✦</span><div><strong>TraceNote</strong><small>Evidence-grounded synthesis</small></div></div>
                <ol>
                  {demo.answer.map((point, index) => (
                    <li key={point}>{point} <button className="inline-source" onClick={() => setActiveCitation(index)}>{demo.citations[index].id}</button></li>
                  ))}
                </ol>
                <div className="confidence-note"><span>✓</span> Every recommendation above is supported by the sample documents.</div>
              </div>
            </section>

            <aside className="evidence-panel">
              <p>EVIDENCE INSPECTOR</p>
              <div className="evidence-id">{citation.id}</div>
              <h3>{citation.document}</h3>
              <blockquote>“{citation.excerpt}”</blockquote>
              <div className="grounded"><span>✓</span><div><strong>Grounded in source</strong><small>Select any citation tag to inspect its evidence.</small></div></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="section-intro compact">
          <p className="eyebrow">The product principle</p>
          <h2>Useful answers need<br />an evidence trail.</h2>
        </div>
        <div className="steps">
          <article><span>01</span><h3>Bring your sources</h3><p>Add PDF, Word, Markdown, CSV, JSON, or text files to a private workspace.</p></article>
          <article><span>02</span><h3>Ask across documents</h3><p>Compare claims, summarize findings, or identify gaps across English and Chinese material.</p></article>
          <article><span>03</span><h3>Inspect every claim</h3><p>Open citation tags to verify the exact source excerpt behind an answer.</p></article>
        </div>
      </section>

      <section className="build-section" id="build">
        <div className="build-copy">
          <p className="eyebrow">Portfolio case study</p>
          <h2>Designed and built as a production-minded AI product.</h2>
          <p>
            TraceNote explores a practical question: how can an AI research interface stay useful without hiding uncertainty? The result combines document parsing, persistent source storage, multilingual retrieval, strict prompting, and citation inspection in one responsive workflow.
          </p>
          <div className="builder-note"><span>DW</span><div><strong>Designed & engineered by David Wang</strong><small>Toronto, Canada · Product-minded software developer</small></div></div>
        </div>
        <div className="stack-card">
          <p>SELECTED STACK</p>
          <div><span>01</span><strong>Next.js + TypeScript</strong><small>Responsive product interface</small></div>
          <div><span>02</span><strong>Cloudflare D1 + R2</strong><small>Structured metadata and document storage</small></div>
          <div><span>03</span><strong>OpenAI Responses API</strong><small>Multilingual, evidence-constrained synthesis</small></div>
          <div><span>04</span><strong>PDF + DOCX parsing</strong><small>Browser-side source extraction</small></div>
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow">TraceNote</p>
        <h2>From source material<br />to <em>defensible insight.</em></h2>
        <a className="primary-button light" href="#demo">Explore the demo again <span>↑</span></a>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">T</span><span>TraceNote</span></div>
        <p>Evidence-first document research · Portfolio demonstration</p>
        <span>Toronto · 2026</span>
      </footer>
    </main>
  );
}
