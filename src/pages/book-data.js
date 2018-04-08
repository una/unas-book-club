import React from "react"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>All Book Data</h1>
      <table>
        <thead>
          <tr>
            <th>isbn</th>
            <th>rating</th>
            <th>read</th>
            <th>desc</th>
          </tr>
        </thead>
        <tbody>
          {data.allBooksJson.edges.map(({ node }, index) =>
            <tr key={index}>
              <td>
                {node.isbn}
              </td>
              <td>
                {node.rating}
              </td>
              <td>
                {node.read}
              </td>
              <td>
                {node.desc}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const query = graphql`
  query bookDataQuery {
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