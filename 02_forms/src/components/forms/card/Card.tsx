import React, { Component } from 'react';
import { TPCard } from '../../utils/CardProps';
import './Card.sass';

class Card extends Component<TPCard> {
  getDayFromDate(date: string) {
    return new Date(date).getDate();
  }

  getMonYearFromDate(date: string) {
    const post_date = new Date(date);
    return post_date
      .toLocaleString('default', { month: 'long' })
      .toLocaleUpperCase()
      .concat(', ', post_date.getFullYear().toString());
  }

  getSource(select: string) {
    const selectOptions = ['Twitter', 'Facebook', 'Instagram'];
    return selectOptions[parseInt(select)];
  }

  render() {
    const { author, title, post, image, post_date, select, check, gender, img_file } =
      this.props.data;
    return (
      <div className="card">
        <div className="thumbnail">
          <img
            className="left"
            src={img_file ? URL.createObjectURL(img_file) : image}
            alt={title}
          />
        </div>
        <div className="right">
          <h1>{title}</h1>
          <div className="author">
            <h2>{author}</h2>
          </div>
          <div className="separator"></div>
          <p>{post}</p>
        </div>
        <h5>{this.getDayFromDate(post_date)}</h5>
        <h6>{this.getMonYearFromDate(post_date)}</h6>
        <ul>
          <li>
            <i>Source: {this.getSource(select)}</i>
          </li>
          <li>
            <i>Checked: {check ? 'yes' : 'no'}</i>
          </li>
          <li>
            <i>Gender: {gender}</i>
          </li>
        </ul>
      </div>
    );
  }
}

export default Card;
