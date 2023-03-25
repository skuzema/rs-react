import React, { Component } from 'react';
import './Card.css';

interface CardProps {
  data: {
    title: string;
    description: string;
    image: string;
    time_ago: number;
    comments: number;
  };
}

class Card extends Component<CardProps> {
  render() {
    const { title, description, image, time_ago, comments } = this.props.data;
    return (
      <div className="col-md-3 col-sm-6">
        <div className="card card-block">
          <h4 className="card-title text-right"></h4>
          <img src={image} alt={title} />
          <h5 className="card-title mt-3 mb-3">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="txt3">
            <i className="far fa-clock"></i>
            {time_ago} Minutes Ago
            <span className="comments">
              <i className="fas fa-comments"></i>
              {comments} Comments
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
