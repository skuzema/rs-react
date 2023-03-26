import React, { Component } from 'react';
import Card from '../card/Card';
import { CardProps } from '../../utils/CardProps';
import './CardList.css';

class CardList extends Component<CardProps> {
  constructor(props: CardProps | Readonly<CardProps>) {
    super(props);
  }

  componentDidUpdate() {
    this.props.onConfirm();
  }

  render() {
    const { cardData } = this.props;
    return (
      <div className="wrap">
        {cardData ? cardData.map((card, index) => <Card key={index} data={card} />) : <div></div>}
      </div>
    );
  }
}

export default CardList;
