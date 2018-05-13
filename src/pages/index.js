import React from 'react'
import Link from 'gatsby-link'
import { YourDoc } from '../tipe/jumanji.tipe'
import test, { SomeFolder } from '../tipe/posts.tipe'

const IndexPage = props => {
  const posts = props.data.allTipePostsJson.edges.reverse().map(e => e.node)
  return (
      <div>
        <h1>{YourDoc.block}</h1>
      <p>{YourDoc.paragraph}</p>
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
