import React from 'react'

const BlogPost = props => {
  return (
      <h1>{props.data.tipePostsJson.title}</h1>
  )
}

export default BlogPost

export const query = graphql`
  query GetBlogPost ($urlSlug: String!) {
    tipePostsJson(urlSlug: { eq: $urlSlug }) {
      title
      urlSlug
    }
  }
`
