import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <Link className="site-title" to="/" aria-label={title}>
        &lt;/&gt;
      </Link>
      <div className="links">
        <Link to="/research">research/</Link>
        <Link to="/portfolio">toys/</Link>
        <Link to="/resume">cv(web)/</Link>
        <a href="/cv_pdf/zhongyu_cv.pdf" target="_blank" rel="noreferrer">
          cv(pdf)/
        </a>
      </div>
    </nav>
  )
}
