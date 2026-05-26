import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

const Projects = ({ data }) => {
  const projects = data.projects.nodes;
  
  return (
    <Layout>
      <div className={styles.portfolio}>
        <header className={styles.header}>
          <p>Toys</p>
          <h1>Toys and Selected Work</h1>
          <span>
            A compact archive of web interfaces, full-stack experiments, and
            computer vision projects.
          </span>
        </header>
        <div className={styles.projects} >
          {projects.map(project => (
            <Link
              className={styles.project}
              to={'/portfolio/' + project.frontmatter.slug}
              key={project.id}
            >
              <Img
                className={styles.thumb}
                fluid={project.frontmatter.thumb.childImageSharp.fluid}
                imgStyle={{ transition: "0.4s" }}
              />
              <div>
                <h2>{project.frontmatter.title}</h2>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
 
export default Projects

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {frontmatter: {type: {eq: "project"}}}
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }

  }
`
