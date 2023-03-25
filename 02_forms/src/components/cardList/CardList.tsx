import React, { Component } from 'react';
import Card from '../card/Card';

import './CardList.css';

interface CardListProps {
  cardData: Array<{
    title: string;
    description: string;
    image: string;
    time_ago: number;
    comments: number;
  }>;
}

class CardList extends Component<CardListProps> {
  constructor(props: CardListProps | Readonly<CardListProps>) {
    super(props);
  }
  render() {
    const { cardData } = this.props;
    return (
      <div>
        <div className="row">
          {cardData.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
