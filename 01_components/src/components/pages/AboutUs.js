import React from 'react';
import PageHeader from '../appPageHeader/PageHeader';
import '../style/AboutUs.css';
const AboutUsPage = () => {
    return (React.createElement("div", null,
        React.createElement(PageHeader, { page_name: "About Us" }),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row mt-40" },
                React.createElement("div", { className: "col-md-4 col-sm-6" },
                    React.createElement("div", { className: "box1" },
                        ' ',
                        React.createElement("img", { src: "https://i.imgur.com/Ur43esv.jpg", alt: "" }),
                        React.createElement("h3", { className: "title" }, "William"))),
                React.createElement("div", { className: "col-md-4 col-sm-6" },
                    React.createElement("div", { className: "box1" },
                        ' ',
                        React.createElement("img", { src: "https://i.imgur.com/8RKXAIV.jpg", alt: "", className: "img-thumbn" }),
                        React.createElement("h3", { className: "title" }, "Krist"))),
                React.createElement("div", { className: "col-md-4 col-sm-6" },
                    React.createElement("div", { className: "box1" },
                        ' ',
                        React.createElement("img", { src: "https://i.imgur.com/J6l19aF.jpg", alt: "" }),
                        React.createElement("h3", { className: "title" }, "Nehal")))))));
};
export default AboutUsPage;
