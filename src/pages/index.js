import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <article className={styles.home}>
        <div className={styles.profile}>
          <h1>Zhongyu Zhang</h1>

          <div className={styles.photo}>
            <img src="/photo_zy.jpg" alt="Zhongyu Zhang" />
          </div>
        </div>

        <div className={styles.main}>
          <p>
            I&apos;m Zhongyu Zhang, finishing my PhD at University of Alberta. I
            work on{" "}
            <Link to="/research">
              uncertainty-aware modeling and optimization
            </Link>{" "}
            for biomedical and chemical process systems, ranging from
            physics-informed machine learning to robust decision-making methods.
            I also worked with Teck Metals on applied projects, developing
            practical methods for smelting optimization and process fault
            diagnosis.
          </p>

          <p>
            Before my PhD, I built some web applications, and I still enjoy
            turning research ideas into clear, practical solutions with careful
            attention to detail. You can find a short overview on my{" "}
            <Link to="/resume">CV(web)</Link> or open the{" "}
            <a href="/cv_pdf/zhongyu_cv.pdf" target="_blank" rel="noreferrer">
              CV(pdf)
            </a>.
          </p>

          <p>
            You can reach me at{" "}
            <a href="mailto:zhongyu4@ualberta.ca">zhongyu4@ualberta.ca</a>.
          </p>

          <p>
            Find me elsewhere:{" "}
            <a
              href="https://scholar.google.com/citations?user=XjUxktcAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
            ,{" "}
            <a
              href="https://github.com/zzygith"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/zhongyu-zhang-profile"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </article>
    </Layout>
  )
}
