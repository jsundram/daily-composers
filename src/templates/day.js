import * as React from "react"
import {Link} from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'


import Layout from '../components/layout'
import Composer from '../components/composer'


// import next_button from "../images/next-button.svg"
// import prev_button from "../images/previous-button.svg"

const container = {
    "display": "flex",
    "height": "120px",
    "width": "600px",
}

const heading = {
  color: "cornflowerblue",
  margin: "auto",
}
const button = {
  margin: "auto",
}
const button_height = 30;

const link = {
    color: "cornflowerblue",
}


// TODO: this should probably go someplace more central and get used by
// gatsby-node.js
let dateslug = ( d ) => ("/" + (d.getMonth() + 1) + "-" +  d.getDate());

export default function Day({ pageContext }) {
  console.log(pageContext);
  const {date_str, playlist, group} = pageContext;
  const playlist_types = ["sampler", "long", "draft", "other"];

  const one_day_ms = 24 * 60 * 60 * 1000;
  let date = Date.parse(date_str);
  let yesterday = new Date(date - one_day_ms);
  let tomorrow = new Date(date + one_day_ms);


  // let has_playlist = playlist_types.every(t => (playlist[t] === ""));
  // let popularity = (n) => (n.wp_views * n.sp_popularity * n.sp_followers);
  return (
        <Layout pageTitle={null}>

            <div style={container}>
            <Link style={button} to={dateslug(yesterday)} title="yesterday">
                <StaticImage
                    alt="yesterday"
                    src="../images/previous-button.svg"
                    width={button_height}
                    height={button_height}
                />
            </Link>

            <h1 style={heading}>{date_str}</h1>

            <Link style={button} to={dateslug(tomorrow)} title="tomorrow">
                <StaticImage
                    alt="tomorrow"
                    src="../images/next-button.svg"
                    width={button_height}
                    height={button_height}
                />
          </Link>
          </div>


          <h3>
            Playlist status: {playlist.status || "None (yet!)"}
          </h3>
          <ul>
            {
                playlist_types.map(type => (
                    playlist[type] ?
                    <li key={type}>
                        <a key={type} href={playlist[type]} style={link}>{type}</a>
                    </li>
                    :
                    null
                ))
            }
          </ul>
          <h3>Featured composers for {date_str}</h3>
          <ul>
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
