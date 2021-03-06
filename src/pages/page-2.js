import React from 'react'
import Link from 'gatsby-link'
import Overdrive from 'react-overdrive'
import bookCover from '../media/7319052-L.jpg';

const SecondPage = () => (
  <div>
    <Overdrive id="bookCover-to-page--title">
      <h1>Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration</h1>
    </Overdrive>
    <Overdrive id="bookCover-to-page">
      <img src={bookCover} />
    </Overdrive>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
