require('dotenv').config()
const fetch = require('./fetch-tipe.js')
const fs = require('fs')


fetch()
  .then(docs => fs.writeFile('src/data/tipePosts.json', JSON.stringify(docs), 'utf8'))
  .catch(err => console.log(err))



const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);

  return graphql(`
    {
      allTipePostsJson {
        edges {
          node {
            urlSlug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allTipePostsJson.edges.forEach(({ node: {urlSlug} }) => {
      createPage({
        path: urlSlug,
        urlSlug: urlSlug,
        component: blogPostTemplate,
        context: { urlSlug }
      });
    });
  });
};


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
