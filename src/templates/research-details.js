import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import * as styles from "../styles/research-details.module.css"

const ResearchDetails = ({ data }) => {
  const { researchItem, file } = data
  const paragraphs = researchItem.introduction
    .split(/\n{2,}/)
    .filter(Boolean)

  return (
    <Layout>
      <article className={styles.details}>
        <p className={styles.eyebrow}>Research</p>
        <h1>{researchItem.title}</h1>
        <p className={styles.date}>{researchItem.date}</p>
        <p className={styles.summary}>{researchItem.summary}</p>

        {file && (
          <div className={styles.figure}>
            <Img fluid={file.childImageSharp.fluid} alt={researchItem.title} />
          </div>
        )}

        <p className={styles.paperLink}>
          Paper URL:{" "}
          <a href={researchItem.url} target="_blank" rel="noreferrer">
            {researchItem.url}
          </a>
        </p>

        <section className={styles.introduction}>
          <h2>Introduction:</h2>
          {paragraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </article>
    </Layout>
  )
}

export default ResearchDetails

export const query = graphql`
  query ResearchDetails($slug: String!, $image: String!) {
    researchItem(slug: { eq: $slug }) {
      date
      introduction
      summary
      title
      url
    }
    file(relativePath: { eq: $image }, sourceInstanceName: { eq: "research" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
