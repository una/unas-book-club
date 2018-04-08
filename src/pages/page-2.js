import React from 'react'
import Link from 'gatsby-link'
import Overdrive from 'react-overdrive'
import fry from "../media/fry.jpg";

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <Overdrive id="bender-to-big-fry">
      <img src={fry} width="300" height="300" />
    </Overdrive>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
