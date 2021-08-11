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
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects} >
          {projects.map(project => (
            <Link to={'/portfolio/' + project.frontmatter.slug} key={project.id} >
              <div>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} imgStyle={{transition:"0.4s"}} />
                <h3>{project.frontmatter.title}</h3>
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