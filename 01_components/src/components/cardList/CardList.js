import React, { Component } from 'react';
import Card from '../card/Card';
import './CardList.css';
class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [],
        };
    }
    render() {
        const { cardData } = this.props;
        return (React.createElement("div", null,
            React.createElement("div", { className: "row" }, cardData.map((card, index) => (React.createElement(Card, { key: index, data: card }))))));
    }
}
export default CardList;
