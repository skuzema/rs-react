import React, { useState } from 'react';
import ModalForm from '../modalForm/ModalForm';

import { TPArticle } from '../../../models/IArticles';

import './Card.scss';
import not_available from '/not_available.jpg';

function Card(props: TPArticle) {
  const [showModal, setShowModal] = useState(false);

  const getFromatedDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US');
  };

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const onModalFormClose = (param: boolean) => {
    setShowModal(param);
  };

  const { source, title, description, url, urlToImage, publishedAt } = props.data;
  return (
    <div className="card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${urlToImage === null ? not_available : urlToImage})`,
        }}
      >
        <div className="info">
          <div className="date">{source.name}</div>
          <div className="date">{getFromatedDate(publishedAt)}</div>
        </div>
      </div>
      <div className="right">
        <h3>{title}</h3>
        <div className="wrap">
          <div className="separator"></div>
          <p>{description}</p>
        </div>
        <div className="wrap">
          <a href={url} onClick={onLinkClick}>
            Read More
          </a>
        </div>
      </div>
      <ModalForm showModal={showModal} data={props} onModalFormClose={onModalFormClose} />
    </div>
  );
}

export default Card;
