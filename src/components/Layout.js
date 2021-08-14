import React from 'react'
import Navbar from './Navbar'
import  Head from './Head'
import '../styles/global.css'
import { graphql, useStaticQuery } from 'gatsby'

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  const { copyright } = data.site.siteMetadata

  return (
    <div className="layout">
      <Head />
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>{ copyright }</p>
      </footer>
    </div>
  )
}