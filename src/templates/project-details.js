import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import * as styles from '../styles/project-details.module.css'
import { graphql } from "gatsby"

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <p className={styles.eyebrow}>Project</p>
        <h1>{title}</h1>
        <p className={styles.stack}>{stack}</p>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
 
export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug} }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
