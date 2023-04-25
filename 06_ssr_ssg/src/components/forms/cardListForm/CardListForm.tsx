import React from 'react';
import CardForm from '../cardForm/CardForm';
import { useAppSelector } from '../../../store/hooks';
import { TPCardForm } from '../../../models/IArticles';

import './CardListForm.scss';

const CardListForm = () => {
  const data = useAppSelector((state) => state.form.forms);
  return (
    <div className="wrap-form">
      {data ? (
        data.map((card: TPCardForm, index: number) => <CardForm key={index} data={card} />)
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CardListForm;
