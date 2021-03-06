import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css'
import Img from 'gatsby-image'

export default function Home({data}) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer based in Edmonton.</p>
          <Link className={styles.btn} to="/portfolio">My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const qurey = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    id
    name
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
