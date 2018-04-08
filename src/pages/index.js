import React from 'react'
import Link from 'gatsby-link'
import Overdrive from 'react-overdrive'
import bookCover from '../media/7319052-L.jpg';
import bookCover2 from '../media/473600-L.jpg';
import style from './index.css'

const IndexPage = () => (
  <ul className="bookList">
    <li className="bookListItem">
      <div className="book">
        <Link to="/page-2/">
          <div className="bookCoverContainer">
            <Overdrive id="bookCover-to-page">
              <img src={bookCover} className="bookCover"/>
            </Overdrive>
          </div>
          <Overdrive id="bookCover-to-page--title">
            <h2>Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration</h2>
          </Overdrive>
          <span className="stars four">⭐️⭐️⭐️⭐️⭐️</span>
        </Link>
      </div>
    </li>
    <li className="bookListItem">
      <div className="book">
        <Link to="/page-3/">
          <div className="bookCoverContainer">
            <Overdrive id="bookCover-to-page2">
              <img src={bookCover2} className="bookCover" />
            </Overdrive>
          </div>
          <h2>The Glass Castle</h2>
          <span className="stars five">⭐️⭐️⭐️⭐️⭐️</span>
        </Link>
      </div>
    </li>
    <li className="bookListItem">
      <div className="book">
        <Link to="/page-2/">
          <div className="bookCoverContainer">
              <img src={bookCover} className="bookCover" />
          </div>
            <h2>Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration</h2>
          <span className="stars fourHalf">⭐️⭐️⭐️⭐️⭐️</span>
        </Link>
      </div>
    </li>
  </ul>
)

export default IndexPage
