import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import {date_to_slug, randomDate} from '../lib/utils'

import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
      query {
          site {
            siteMetadata {
              title
            }
          }
  }`);


  let today = date_to_slug(new Date());
  let random = date_to_slug(randomDate());

  return (
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to={today} className={navLinkText}>Today</Link></li>
          <li className={navLinkItem}><Link to={random} className={navLinkText}>Random</Link></li>
          <li className={navLinkItem}><Link to="/calendar" className={navLinkText}>Calendar</Link></li>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      {children}
    </main>
  )
}

export default Layout

