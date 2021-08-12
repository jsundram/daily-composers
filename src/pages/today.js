// Step 1: Import your component
import * as React from 'react'
import { Link } from 'gatsby'
import {date_to_slug} from '../lib/utils'

import Layout from '../components/layout'

import {
  heading,
} from '../components/layout.module.css'

import {link} from './index.module.css'

// Step 2: Define your component
const TodayPage = () => {
    let today = date_to_slug(new Date());
    const isBrowser = typeof window !== `undefined`;

    if (isBrowser){
        window.location.href = today
    }

    return (
          <Layout pageTitle="Today">
            <h1 className={heading}>Today</h1>
            <p>Redirecting to <Link to={today} className={link}>today</Link> &hellip;</p>
          </Layout>
      )
}

// Step 3: Export your component
export default TodayPage
