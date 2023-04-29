import React from 'react';
import { TPCard } from '../../../models/IArticles';
import './CardForm.sass';

export default function CardForm(props: TPCard) {
  const getDayFromDate = (date: string) => {
    return new Date(date).getDate();
  };

  const getMonYearFromDate = (date: string) => {
    const post_date = new Date(date);
    return post_date
      .toLocaleString('default', { month: 'long' })
      .toLocaleUpperCase()
      .concat(', ', post_date.getFullYear().toString());
  };

  const getSource = (select: string) => {
    const selectOptions = ['Twitter', 'Facebook', 'Instagram'];
    return selectOptions[parseInt(select)];
  };

  const { author, title, post, image, post_date, select, check, gender, img_file } = props.data;
  const imageUrl = img_file instanceof File ? URL.createObjectURL(img_file) : image;
  return (
    <div className="card-post">
      <div className="thumbnail-post">
        <img className="left-post" src={imageUrl} alt={title} />
      </div>
      <div className="right-post">
        <h1>{title}</h1>
        <div className="author-post">
          <h2>{author}</h2>
        </div>
        <div className="separator-post"></div>
        <p>{post}</p>
      </div>
      <h5>{getDayFromDate(post_date)}</h5>
      <h6>{getMonYearFromDate(post_date)}</h6>
      <ul>
        <li>
          <i>Source: {getSource(select)}</i>
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
