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
* photo aspect ratios cause some problems sometimes
    * August 11 Alexander Mosolov (very tall image)
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
* ~~mobile friendliness v1~~
* ~~add number of composers featured for day~~
* ~~fix playlist link color~~ 
* ~~change cryptic playlist abbreviations to "in progress"~~
* ~~remove spotify / wikidata buttons if no links are present~~


## TODO (feature wishes)
* Make [a manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/) for iOS "add to home screen"
* add composers by death day
* use "top tier" to sort best composers to top of day?
* search for a particular composer
* make a separate repo for all the data processing and make that easy to read / update
    * can pull tags / genres from wikidata in future.
    * [chevalier de st georges](https://en.wikipedia.org/wiki/Chevalier_de_Saint-Georges) doesn't have wikidata linked so death date is missing.
        * fixing manually in data in this repository, need to figure out why https://www.wikidata.org/wiki/Q726953 wasn't linked originally.
    * [Amalia Catharina](https://en.wikipedia.org/wiki/Countess_Amalia_Katharina_of_Waldeck) doesn't have wikidata linked
        Amalia Catharina,August 09,,7885,0,0,,http://en.wikipedia.org/wiki/Amalia_Catharina,,,,,1640,,,¬
        * fixing manually in data in this repository, need to figure out why https://www.wikidata.org/wiki/Q4739394 wasn't linked originally.
        Amalia Catharina,August 09,January 4,7885,0,0,,http://en.wikipedia.org/wiki/Amalia_Catharina,https://www.wikidata.org/wiki/Q4739394,,"Aug 09, 1640","Jan 04 1697",1640,1697,,
        * can find a list of ~178 such problems via:
            ```python
            import csv
            with open('./src/data/composers.csv') as f:
                rows = list(csv.DictReader(f))
            missing_wd = [r for r in rows if 2021 - int(r['birthyear']) > 100 and r['deathdate'] == '']
            ```
    * "other" playlist pulls name from column T but not link from column U!
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
* ical downloads
* add page for charts etc?
* piece premieres
* female composer page?
* ~~next / prev button for each page~~
* ~~calendar view~~

---
### CSS resources 
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://css-tricks.com/snippets/css/complete-guide-grid/
* https://cssbattle.dev/play/71
* https://gridcritters.com/
* https://geddski.teachable.com/p/flexbox-zombies
* https://frontendmasters.com/courses/css-grids-flexbox/
