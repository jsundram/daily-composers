// Step 1: Import your component
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import {
  heading,
} from '../components/layout.module.css'

import {link} from './index.module.css'

// Step 2: Define your component
const AboutPage = () => {
  return (
      <Layout pageTitle="About">
        <h1 className={heading}>About</h1>
        <p>Daily Composers was inspired by <a className={link} href="http://composerbirthdays.com/">composerbirthdays.com</a>, and was built to help celebrate great music</p>
        <p>Daily Composers was built with <a className={link} href="https://www.gatsbyjs.com/">Gatsby</a>.</p>

        <p>Icons made by the following creators on <a className={link} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>: </p>
        <ul>
            <li> <a className={link} href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a></li>
            <li> <a className={link} href="https://www.freepik.com" title="Freepik">Freepik</a></li>
        </ul>

        <p>Check out <Link to="/today" className={link}>Today</Link>'s composers of the day, browse the <Link to="/calendar" className={link}>Calendar</Link> or click <Link to="/random" className={link}>Random</Link> to explore!</p>
      </Layout>
  )
}

// Step 3: Export your component
export default AboutPage
