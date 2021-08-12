import * as React from "react"
import {Link} from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import {date_to_slug, ONE_DAY_MS} from '../lib/utils'

import Layout from '../components/layout'
import Composer from '../components/composer'

import {
    container,
    heading,
    button,
    link,
} from './day.module.css'


const button_height = 30;

export default function Day({ pageContext }) {
  console.log(pageContext);
  const {date_str, playlist, group} = pageContext;
  const playlist_types = ["sampler", "long", "draft", "other"];
  const playlist_count = playlist_types.map(type => (playlist[type] ? 1 : 0)).reduce((a, b) => (a + b), 0);

  let date = Date.parse(date_str);
  let yesterday = new Date(date - ONE_DAY_MS);
  let tomorrow = new Date(date + ONE_DAY_MS);


  // let has_playlist = playlist_types.every(t => (playlist[t] === ""));
  // let popularity = (n) => (n.wp_views * n.sp_popularity * n.sp_followers);
  return (
        <Layout pageTitle={date_str}>

            <div className={container}>
            <Link className={button} to={date_to_slug(yesterday)} title="yesterday">
                <StaticImage
                    alt="yesterday"
                    src="../images/previous-button.svg"
                    width={button_height}
                    height={button_height}
                />
            </Link>

            <h1 className={heading}>{date_str}</h1>

            <Link className={button} to={date_to_slug(tomorrow)} title="tomorrow">
                <StaticImage
                    alt="tomorrow"
                    src="../images/next-button.svg"
                    width={button_height}
                    height={button_height}
                />
          </Link>
          </div>


          <h3>
            Playlist status: <span style={{fontWeight: 'normal'}}>{playlist_count === 0  ? "None (yet!)" : "In Progress"}</span>
          </h3>
          <ul>
            {
                playlist_types.map(type => (
                    playlist[type] ?
                    <li key={type}>
                        <a key={type} href={playlist[type]} className={link}>{type}</a>
                    </li>
                    :
                    null
                ))
            }
          </ul>
          <h3>{group.totalCount} Featured composers for {date_str}:</h3>
          <ul style={{padding: 0, margin: 0}}>
          {
            group.nodes
              .sort((a, b) => (a.birthyear > b.birthyear) ? 1 : -1)
              // .sort((a, b) => (popularity(a) > popularity(b)) ? 1 : -1)
              .map(node => (
                <Composer key={node.name} node={node}/>
            ))
          }
          </ul>
      </Layout>
  )
}

//export default Day
