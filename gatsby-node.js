const path = require("path")

// docs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages


// using the file system route api may be easier than using the createPage API?
// https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
exports.onCreateNode = ({ node, getNode }) => {
    // console.log(`Node created of type "${node.internal.type}"`)
    // if (node.internal.type === 'ComposersCsv'){
    // one node per composer, not ideal
    if (node.internal.type === 'PlaylistsJson'){
        // console.log(node.date);
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // graphql returns a Promise
    const cresult = await graphql(`
        query {
          allComposersCsv {
            group(field: birthday) {
              totalCount
              fieldValue
              field
              nodes {
                name
                birthdate
                birthday
                birthyear
                deathdate
                deathday
                deathyear
                genres
                sp_followers
                sp_id
                sp_img_url
                sp_popularity
                sp_url
                wd_url
                wp_url
                wp_views
              }
            }
          }
        }`)
    // console.log(JSON.stringify(result, null, 4));

    const presult = await graphql(`
        query {
            allPlaylistsJson {
                nodes {
                  date
                  draft
                  status
                  sampler
                  long
                  other
                }
            }
        }
    `)

    console.log(JSON.stringify(presult.data.allPlaylistsJson.nodes[0], null, 4))
    let playlists = {};
    presult.data.allPlaylistsJson.nodes.forEach( n => {
        playlists[n.date] = n;
    });

    cresult.data.allComposersCsv.group.forEach(  group  => {
        // "April 02" -> 04/11
        let d = new Date(Date.parse(group.fieldValue));
        let slug = "/" + (d.getMonth() + 1) + "-" +  d.getDate();
        let ds = (d.getMonth() + 1) + "/" +  d.getDate();
        console.log("path: ", slug, "Count: ", group.totalCount);
        // console.log(d, ds);

        let template = path.resolve("./src/templates/day.js");
        createPage({
            path: slug,
            component: template,
            context: {
                date_str: group.fieldValue,
                playlist: playlists[ds],
                group: group,
            },
        })
    })

}
