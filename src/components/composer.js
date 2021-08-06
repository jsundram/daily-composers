import * as React from 'react'
import {format} from 'd3-format'

import {
    container,
    photo,
    main,
    linkSpotify,
    linkWikidata,
    tags,
    name,
    linkWp,
    lifespan,
    popularity
} from './composer.module.css'

// Tell webpack this JS file uses these images
import spotify_logo from "../images/spotify.png"
import wikidata_logo from "../images/wikidata.svg"
import no_artist_photo from "../images/user.svg"


const Composer = ({node}) => {

    let get_genre_tags = (n) => {
        let s = "";
        if (n && n.genres){
            try {
              let genres = n.genres.replaceAll("'", '"');
              s = JSON.parse(genres).join(", ")
            }
            catch (error) {
                console.error("couldn't run JSON parse on", n.name);
                console.error(error);
            }
        }
        return s;
    }
    let friendly = (s) => {
        return s > 999 ? format(".2s")(s) : s;
    };

    return (
          <li key={node.name} className={container}>
            <img className={photo} src={node.sp_img_url || no_artist_photo } height="100px" alt="spotify" type="image/jpg"/>

            <div className={main}>
                <p className={name}><a className={linkWp} href={node.wp_url}>{node.name}</a></p>
                <p className={lifespan}>{node.birthyear} &ndash; {node.deathdate || "?"}</p>
                <p className={popularity}>Views: {friendly(node.wp_views)}, Popularity: {node.sp_popularity}, Follows: {friendly(node.sp_followers)}</p>
            </div>


            <a className={linkSpotify} href={node.sp_url}>
                <img src={spotify_logo} height="50px" alt="spotify" type="image/jpg"/>
            </a>

            <a className={linkWikidata} href={node.wd_url}>
                <img src={wikidata_logo} height="50px" alt="wikidata" type="image/jpg"/>
            </a>

            <p className={tags}>{get_genre_tags(node)}</p>
          </li>
    )

}

export default Composer
