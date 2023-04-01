import React, { Component } from 'react';
import Card from '../card/Card';
import { TPArrayCard } from '../../utils/CardProps';
import './CardList.css';

class CardList extends Component<TPArrayCard> {
  constructor(props: TPArrayCard | Readonly<TPArrayCard>) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="wrap">
        {data ? data.map((card, index) => <Card key={index} data={card} />) : <div></div>}
      </div>
    );
  }
}

export default CardList;
