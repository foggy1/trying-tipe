# trying-tipe

Trying Tipe and Gatsby. Deploying with Now. These sentences are absurd to anybody who isn't a web developer.

## Details

The most interesting files in terms of novel implementation are `fetch-tipe.js` and how I integrate it within `gatsby-node.js`. The really cool thing, looking back on this code, is that none of it is earth-shattering in complexity: it's just hitting an API, doing a little bit of cleaning up, and then prepping Gatsby's schema in a normal way (something experience Gatsby users will already be used to).

Critical Gatsby plugins for making this implementation work (fetching and writing to JSON) are `gatsby-transformer-json` and `gatsby-source-filesystem` (the former requires the latter). These allow me to read from local files, and JSON files become automaticlaly integrated into a graphQL schema that ships out of the box with Gatsby.

`remark` and `remark-html` were critical for taking raw markdown fetched from the Tipe API and converting it on the fly before writing it to JSON.
