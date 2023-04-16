import React, { useState, useEffect } from 'react';
import Modal from 'react-overlays/Modal';
import PropTypes from 'prop-types';

import './ModalForm.scss';

const ModalForm = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { data } = props.data;

  useEffect(() => {
    setShowModal(props.showModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const renderBackdrop = (param) => <div className="backdrop" {...param} />;

  const handleClose = () => {
    setShowModal(false);
    props.onModalFormClose(false);
  };

  return (
    <Modal className="modal" show={showModal} onHide={handleClose} renderBackdrop={renderBackdrop}>
      <div>
        <div className="modal-header">
          <div className="modal-title">{data.title}</div>
          <div className="close-button">
            <span className="close-button" onClick={handleClose}>
              x
            </span>
          </div>
        </div>
        <div className="modal-desc">
          <div className="modal-ref">
            <img
              src={data.urlToImage}
              alt={data.title}
              width="200"
              height="150"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = './not_available.jpg';
              }}
            />
            <div className="modal-src">
              <div>
                <span>Source:</span>
                {data.source.name}
              </div>
              <div>
                <span>Date:</span>
                {data.publishedAt}
              </div>
              <div>
                <span>Author:</span>
                {data.author}
              </div>
            </div>
          </div>
          <div className="modal-separator"></div>
          <p>{data.description}</p>
          <div className="modal-separator"></div>
          <p>{data.content}</p>
          <div className="modal-separator"></div>
          <a href={data.url} target="_blank" rel="noreferrer">
            Open full article in new tab
          </a>
        </div>
      </div>
    </Modal>
  );
};

ModalForm.propTypes = {
  onModalFormClose: PropTypes.func,
};

export default ModalForm;
