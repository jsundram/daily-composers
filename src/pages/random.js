// Step 1: Import your component
import * as React from 'react'
import { Link } from 'gatsby'
import {date_to_slug, randomDate} from '../lib/utils'

import Layout from '../components/layout'

import {
  heading,
} from '../components/layout.module.css'

import {link} from './index.module.css'


// Step 2: Define your component
const RandomPage = () => {
    let random = date_to_slug(randomDate());
    const isBrowser = typeof window !== `undefined`;

    if (isBrowser){
        window.location.href = random
    }

    return (
          <Layout pageTitle="Random">
            <h1 className={heading}>Random</h1>
            <p>Redirecting to a <Link to={random} className={link}>random</Link> day &hellip;</p>
          </Layout>
      )
}

// Step 3: Export your component
export default RandomPage
