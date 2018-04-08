import React from "react"
import Book from '../components/Book'

export default ({ data }) => {
  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {data.allBooksJson.edges.map(({ node }, index) => (
          <Book key={node.isbn} index={node.isbn} info={node} />
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query MyBooksQuery {
    allBooksJson {
      edges {
        node {
          isbn
          rating
          read
          desc
        }
      }
    }
  }
`