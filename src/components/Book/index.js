import React, { Component } from 'react';
import style from './style.css';

export default class Book extends Component {

  render() {
    // Build subject list
    let subjectList = '';
    // this.props.info.subjects.forEach((item) => {
    //   subjectList += `${item.name} `;
    // });

    return (
      <li className={style.Book} data-tags={subjectList}>
        <a className={style.Book_Link} href={`/book/${this.props.info.isbn}`}>
          <h2 className={style.Book_Title}>{this.props.info.title}</h2>
          <p>Read More...</p>
          </a>
        <img className={style.Book_Cover} src={this.props.info.cover} alt={this.props.info.title} />
        <div className={style.Book_Info}>
          <p className={style.Book_Length}>Length: {this.props.info.pages}</p>
          <p className={style.Book_Read}>Read: {this.props.info.read}</p>
          <p className={style.Book_Rating}>Rating: <span>{this.props.info.rating}</span></p>
        </div>
        <ul className={style.Book_Links}>
          <li><a className={style['Book_Link--Audio']}>Audiobook</a></li>
          <li><a className={style['Book_Link--Text']}>Paperback</a></li>
        </ul>
      </li>
    );
  }
}
