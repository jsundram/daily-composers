<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  daily-composers
</h1>

learn more and listen more

## TODO (MVP)
* mobile friendliness
* photo aspect ratios cause some problems sometimes
* get spotify links to open in app?
    * replacing "https" with "spotify" prompts to open the app immediately instead of loading the website (which then prompts for app)
* move list to table, for sorting
    * https://www.smashingmagazine.com/2020/03/sortable-tables-react/
    * could sort on popularity etc in addition to chronological? Not sure this is needed.
* ~~Add birth/year~~
* ~~get playlist links back onto daily pages~~
* ~~deal with missing images~~
* ~~style results~~
* ~~style header~~
* Occasional crazy timeouts (15s)
    * something funky with e.g. http://localhost:8000/7-31
    * `gatsby clean` fixed it
* ~~check in and deploy~~
* ~~Remove "Home" and replace with "Today".~~
* ~~Day template doesn't correctly set page title (browser tab has a | in it)~~

## TODO (feature wishes)
* make a separate repo for all the data processing and make that easy to read / update
* add composers by death day
* use "top tier" to sort best composers to top of day?
* get data from google sheets instead of cooked csv/json
    * service account set up
    * need to understand how [this example](https://github.com/gatsbyjs/gatsby/tree/master/examples/functions-google-sheets) works better.
        * https://www.gatsbyjs.com/docs/reference/functions/getting-started/
        * probably means understanding this stuff better:
            * [React](https://reactjs.org/tutorial/tutorial.html)
            * [function components](https://yogeshchauhan.com/how-to-convert-a-function-component-into-a-class-in-react/)
            * [hooks](https://reactjs.org/docs/hooks-intro.html) 
            * [state](https://www.educative.io/edpresso/how-to-force-a-react-component-to-re-render) 
    * [gatsby plugins for this](https://www.gatsbyjs.com/plugins/gatsby-source-google-spreadsheet/?=google%20sheet) are aimed at buildtime steps only!
* calendar-type page?
* ical downloads
* add page for charts etc?
* piece premieres
* female composer page?
* Make [a manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/) for iOS "add to home screen"
* ~~next / prev button for each page~~

---
### CSS resources 
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://css-tricks.com/snippets/css/complete-guide-grid/
* https://cssbattle.dev/play/71
* https://gridcritters.com/
* https://geddski.teachable.com/p/flexbox-zombies
* https://frontendmasters.com/courses/css-grids-flexbox/
