require('dotenv').config()
const fetch = require('./fetch-tipe.js')

fetch()
  .then(docs => console.log(docs))
  .catch(err => console.log(err))
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 exports.modifyWebpackConfig = ({ config, stage }) => {
  config.loader('tipe-loader', {
    test: /\.tipe$/,
    loader: 'tipe-loader',
    query: {
      apiKey: process.env.TIPE_API,
      orgKey: process.env.TIPE_ORG_SECRET,
    },
  })
  return config
}
