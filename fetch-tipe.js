const YOUR_FOLDER_ID = '5af7b4536280100013952133'
const axios = require('axios')

var variables = { id: YOUR_FOLDER_ID }
var query = `
query API($id: ID!) {
  Folder(id: $id) {
    id
    name
    documents {
         _meta {
           id
         }
         ... on ArticleExample {
           author {
             ... on AuthorExample {
               bio
               name
             }

             # Tipe system metadata
             _meta {
               id
               name
               updatedAt
               createdAt
               published
             }
           }
           body
           featuredImage {
             id
             name
             size
             url
             mime
           }
           title
           urlSlug

           # Tipe system metadata
           _meta {
             id
             name
             updatedAt
             createdAt
             published
           }
         }
     }
  }
}
`

const fetch = () => {

  return axios.post(
    'https://api.tipe.io/graphql',
    { query: query, variables: variables },
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.TIPE_API,
      'Tipe-Id': process.env.TIPE_ORG_SECRET
    },
  })
    .then(({data: {data}}) => {
    return data.Folder.documents
  })
    .catch(err => console.log(err))
}

module.exports = fetch
