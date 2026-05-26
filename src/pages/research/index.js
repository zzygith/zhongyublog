import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import * as styles from "../../styles/research.module.css"

const Research = ({ data }) => {
  const imageMap = new Map(
    data.images.nodes.map(image => [image.relativePath, image])
  )

  return (
    <Layout>
      <div className={styles.research}>
        <header className={styles.header}>
          <p>Research</p>
          <h1>Papers and Research Work</h1>
        </header>

        <div className={styles.list}>
          {data.items.nodes.map(item => {
            const image = imageMap.get(item.image)

            return (
              <Link
                className={styles.item}
                to={"/research/" + item.slug}
                key={item.id}
              >
                {image && (
                  <Img
                    className={styles.thumb}
                    fluid={image.childImageSharp.fluid}
                    alt={item.title}
                  />
                )}
                <div>
                  <p className={styles.date}>{item.date}</p>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Research

export const query = graphql`
  query ResearchPage {
    items: allResearchItem(sort: { fields: dateSort, order: DESC }) {
      nodes {
        date
        id
        image
        slug
        summary
        title
      }
    }
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "research" }
        extension: { in: ["jpg", "jpeg", "png"] }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
