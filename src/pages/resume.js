import React from "react"
import Layout from "../components/Layout"

const publications = [
  "S. Li, Z. Li, Z. Zhang, et al. Database-driven and property-constrained inference of molecular composition of petroleum fractions from routine experimental data[J]. Chemical Engineering Journal, 2026: 176448.",
  "Z. Zhang, B. Huang, Z. Li. Simultaneous Outlier-Exclusion and Distributionally Robust Learning through Partial Optimal Transport. Computers & Chemical Engineering (2025): 109408.",
  "S. Li, Z. Zhang, Z. Li, G. Cai, L. Zhang, Q. Shi. Molecular composition reconstruction of naphtha fractions through data-driven modeling and interpretable optimization. Chemical Engineering Science (2025): 122655.",
  "Z. Zhang, B. Huang, Z. Li. Dynamic Process Flexibility Analysis Using Neural Networks and a Volumetric Flexibility Index. Industrial & Engineering Chemistry Research. 2025, 64, 7452-7465.",
  "Z. Zhang, S. Yang, B. Huang, Z. Li. Novel Feasible Set Learning and Process Flexibility Analysis Method Using Deep Neural Networks. Industrial & Engineering Chemistry Research. 2024, 63, 11516-11529.",
  "Z. Zhang, and Z. Li. Model Predictive Control for Renal Anemia Treatment through Physics-informed Neural Network. IFAC-PapersOnLine 58.14 (2024): 307-312.",
  "Z. Zhang, Z. Li. Haemoglobin Response Modelling under Erythropoietin Treatment: Physiological Model-Informed Machine Learning Method. The Canadian Journal of Chemical Engineering. 2023, 101, 4307-4319.",
  "Z. Zhang, B. Huang, Z. Li. Distributionally robust optimization for Gaussian mixture model ambiguity under moment variations. Computers & Chemical Engineering (Under Review).",
  "Z. Zhang, B. Huang, Z. Li. The Two Faces of Outliers in Robust Learning: Exclusion and Emphasis via Partial Optimal Transport. (Under Preparation).",
]

const presentations = [
  {
    title:
      "Distributionally Robust Optimization for Gaussian Mixture Model Ambiguity Under Moment Variations",
    detail:
      "Oral presentation in American Institute of Chemical Engineers (AIChE) Annual Meeting on November 3, 2025, Boston, Massachusetts, U.S.",
  },
  {
    title:
      "Decision-focused Learning Considering Solution Robustness under Data Uncertainty",
    detail:
      "Oral presentation in Canadian Chemical Engineering Conference (CSChE 2025) on October 7, 2025, Montreal, Quebec, Canada.",
  },
  {
    title: "Dynamic Process Operational Flexibility Analysis Using Neural Networks",
    detail:
      "Poster presentation in Canadian Chemical Engineering Conference (CSChE 2024) on October 6-9, 2024, Toronto, Ontario, Canada.",
  },
  {
    title:
      "Model Predictive Control for Renal Anemia Treatment through Physics-Informed Neural Network",
    detail:
      "Poster presentation in 12th IFAC International Symposium on Advanced Control of Chemical Processes (ADCHEM) on July 14-17, 2024, Toronto, Ontario, Canada.",
  },
  {
    title:
      "A Novel Volumetric Flexibility Index Calculation Method Using Physics-Informed Neural Networks",
    detail:
      "Oral presentation in American Institute of Chemical Engineers (AIChE) Annual Meeting on November 9, 2023, Orlando, Florida, U.S.",
  },
]

const awards = [
  "Graduate Students' Association Academic Travel Grant (2025)",
  "Captain Thomas Farrell Greenhalgh Memorial Graduate Scholarship (2023)",
  "Graduate Students' Association Academic Travel Grant (2023)",
]

const skillGroups = [
  {
    title: "Research & Modeling",
    skills: [
      "Optimization with uncertainty",
      "Flexibility analysis",
      "Control theory",
    ],
  },
  {
    title: "Machine Learning & Data",
    skills: [
      "Physics-informed neural networks",
      "Time-series forecasting",
      "Classification and regression",
    ],
  },
  {
    title: "Optimization & Applications",
    skills: [
      "LP",
      "NLP",
      "MILP",
      "MINLP",
      "Smelting process optimization",
      "Process fault diagnosis",
      "Biomedical treatment planning",
      "Petroleum molecular composition inference",
    ],
  },
  {
    title: "Programming & Tools",
    skills: [
      "Python",
      "PyTorch",
      "NumPy",
      "SciPy",
      "scikit-learn",
      "OpenCV",
      "Pyomo",
      "GAMS",
      "MATLAB",
      "Git",
      "Databricks",
    ],
  },
  {
    title: "Web & Visualization",
    skills: [
      "React",
      "Gatsby",
      "JavaScript",
      "HTML/CSS",
      "Node.js",
      "Express",
      "MySQL",
    ],
  },
]

const Resume = () => {
  return (
    <Layout>
      <article className="cv">
        <header>
          <p>CV(web)</p>
          <h1>Zhongyu Zhang</h1>
          <span>
            PhD candidate working on uncertainty-aware modeling, optimization,
            and process systems engineering.
          </span>
        </header>

        <section>
          <h2>Links</h2>
          <p>
            <a
              href="https://scholar.google.com/citations?user=XjUxktcAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>{" "}
            /{" "}
            <a href="https://www.webzhongyu.com/" target="_blank" rel="noreferrer">
              webzhongyu.com
            </a>{" "}
            / <a href="mailto:zhongyu4@ualberta.ca">zhongyu4@ualberta.ca</a> /{" "}
            <a href="https://github.com/zzygith" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <div className="entry">
            <div>
              <h3>University of Alberta</h3>
              <p>
                PhD candidate, Process Control. Supervised by Prof. Zukui Li
                and Prof. Biao Huang.
              </p>
            </div>
            <span>2023.01 - present / Edmonton, Alberta, Canada</span>
          </div>
          <div className="entry">
            <div>
              <h3>University of Alberta</h3>
              <p>
                MSc Degree, Process Control. GPA: 3.8/4.0. Supervised by Prof.
                Zukui Li.
              </p>
            </div>
            <span>2020.09 - 2022.12 / Edmonton, Alberta, Canada</span>
          </div>
          <div className="entry">
            <div>
              <h3>Shandong University</h3>
              <p>BEng Degree, Automation. GPA: 4.17/5.</p>
            </div>
            <span>2016.09 - 2020.06 / Jinan, Shandong, China</span>
          </div>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="skill-groups">
            {skillGroups.map(group => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tags">
                  {group.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="cv-block">
            <h3>KIVCET Furnace Feed Optimization (2025-2026)</h3>
            <p>Teck Metals Canada</p>
            <ul>
              <li>
                Built a cloud-based pipeline to generate optimization
                recommendations for KIVCET furnace feed moisture and
                element-ratio control.
              </li>
              <li>
                Implemented a constrained blending optimization model reflecting
                real operating bounds, and validated performance via multi-day
                simulation comparisons against manual operation results.
              </li>
              <li>
                Automated KPI tracking and reporting to support daily
                decision-making and continuous model refinement with operations
                stakeholders.
              </li>
            </ul>
          </div>
          <div className="cv-block">
            <h3>
              Industrial Application of Model-Plant-Mismatch Detection
              (2024-2025)
            </h3>
            <p>Teck Metals Canada</p>
            <ul>
              <li>
                Applied the Model-Plant-Mismatch Detection toolbox to identify
                potential mismatches in production systems, improving
                operational insights.
              </li>
              <li>
                Migrated local detection code to a cloud platform, streamlining
                processes and enhancing daily reports with automated mismatch
                detection results.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Publications</h2>
          <ol className="cv-list">
            {publications.map(publication => (
              <li key={publication}>{publication}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2>Presentations</h2>
          {presentations.map(presentation => (
            <div className="cv-block" key={presentation.title}>
              <h3>{presentation.title}</h3>
              <p>{presentation.detail}</p>
            </div>
          ))}
        </section>

        <section>
          <h2>Awards</h2>
          <ul className="cv-list">
            {awards.map(award => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Teaching Assistant Experience</h2>
          <ul className="cv-list">
            <li>CHE 574 Process Optimization (Winter 2026)</li>
            <li>
              CHE 358 Process Data Analytics and Machine Learning
              (Spring/Summer 2024)
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default Resume
