import React from 'react'
import Link from 'gatsby-link'
import { YourDoc } from '../tipe/jumanji.tipe'
import test, { SomeFolder } from '../tipe/posts.tipe'
console.log(test)
console.log(YourDoc)

console.log(JSON.stringify(SomeFolder))
const IndexPage = props => {
  const posts = props.data.allTipePostsJson.edges.map(e => e.node)
  return (
      <div>
        <h1>Hi people</h1>
        <h2 className="subtitle">{YourDoc.block}</h2>
        <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {posts.map(p => {
        return(
          <div>
            <Link to={p.urlSlug}>{p.title}</Link>
          </div>
        )
      })}
      </div>
  )
}

export default IndexPage

export const query = graphql`
  query getIndex {
    allTipePostsJson {
      edges {
        node {
          title
          urlSlug
        }
      }
    }
  }
`
