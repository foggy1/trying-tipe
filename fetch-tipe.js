const YOUR_FOLDER_ID = '5af7b4536280100013952133'
const axios = require('axios')
const remark = require('remark')
const html = require('remark-html')

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
    .then(async ({data: {data}}) => {
      const docs = await Promise.all(data.Folder.documents.map(doc => parseMarkdown(doc)))
      return docs
    })
    .catch(err => console.log(err))
}

const parseMarkdown = (doc) => new Promise((resolve, reject) => {
  remark()
    .use(html)
    .process(doc.body, function (err, file) {
      if (err) {
        reject(err)
      }
      resolve({ ...doc, body: file.contents })

    })
})

module.exports = fetch
