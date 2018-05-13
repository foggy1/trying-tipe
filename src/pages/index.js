import React from 'react'
import Link from 'gatsby-link'
import { YourDoc } from '../tipe/jumanji.tipe'
import test, { SomeFolder } from '../tipe/posts.tipe'
console.log(test)
console.log(YourDoc)

console.log(JSON.stringify(SomeFolder))
const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <h2 className="subtitle">{YourDoc.block}</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
