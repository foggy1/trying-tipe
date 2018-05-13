import React from 'react'
const BlogPost = props => {
  const { title, body, author: {bio} } = props.data.tipePostsJson
  debugger
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <br />
      <br />
      <hr />
      <span>{bio}</span>
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query GetBlogPost ($urlSlug: String!) {
    tipePostsJson(urlSlug: { eq: $urlSlug }) {
      title
      body
      author {
        bio
      }
    }
  }
`
