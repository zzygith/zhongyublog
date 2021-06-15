import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout'

const About = ({ data }) => {
  console.log(data.markdownRemark.html);
  return (
    <Layout>
      <div>
        <h1>Resume</h1>
        <div className="resume" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    
      
    </Layout>
  );
}
 
export default About

export const query = graphql`
query MyQuery {
  markdownRemark(frontmatter: {type: {eq: "resume"}}) {
    frontmatter {
      title
    }
    html
  }
}
`