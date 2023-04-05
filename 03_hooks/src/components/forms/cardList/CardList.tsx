import React from 'react';
import Card from '../card/Card';
import { TPArrayCard } from '../../utils/CardProps';
import './CardList.css';

const CardList = (props: TPArrayCard | Readonly<TPArrayCard>) => {
  const { data } = props;
  return (
    <div className="wrap">
      {data ? data.map((card, index) => <Card key={index} data={card} />) : <div></div>}
    </div>
  );
};

export default CardList;
