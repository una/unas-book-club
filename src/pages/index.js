import React from 'react'
import Link from 'gatsby-link'
import Book from '../components/Book';
import Overdrive from 'react-overdrive'
import bender from "../media/bender.jpg";

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <Overdrive id="bender-to-big-fry">
      <img src={bender} width="100" height="100" />
    </Overdrive>
    <p>This is the Home component with the full book list.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
