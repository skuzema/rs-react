import React, { Component } from 'react';
import './Card.css';
class Card extends Component {
    render() {
        const { title, description, image, time_ago, comments } = this.props.data;
        return (React.createElement("div", { className: "col-md-3 col-sm-6" },
            React.createElement("div", { className: "card card-block" },
                React.createElement("h4", { className: "card-title text-right" }),
                React.createElement("img", { src: image, alt: title }),
                React.createElement("h5", { className: "card-title mt-3 mb-3" }, title),
                React.createElement("p", { className: "card-text" }, description),
                React.createElement("p", { className: "txt3" },
                    React.createElement("i", { className: "far fa-clock" }),
                    time_ago,
                    " Minutes Ago",
                    React.createElement("span", { className: "comments" },
                        React.createElement("i", { className: "fas fa-comments" }),
                        comments,
                        " Comments")))));
    }
}
export default Card;
