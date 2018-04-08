import React from 'react'
import Link from 'gatsby-link'
import Overdrive from 'react-overdrive'
import bookCover from '../media/473600-L.jpg';

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <Overdrive id="bookCover-to-page2">
      <img src={bookCover} />
    </Overdrive>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
