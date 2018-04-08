import React from 'react'
import Link from 'gatsby-link'
import style from './style.css'

const Header = (props) => (
  <div>
    <div>
      <h1>
        <Link to="/" >
          {props.title}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
