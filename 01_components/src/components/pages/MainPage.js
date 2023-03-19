import React from 'react';
import CardList from '../cardList/CardList';
import PageHeader from '../appPageHeader/PageHeader';
import data from '../data/cards.json';
import SearchBar from '../searchBar/SearchBar';
import '../style/MainPage.css';
const MainPage = () => {
    return (React.createElement("div", null,
        React.createElement(PageHeader, { page_name: "Main Page" }),
        React.createElement(SearchBar, { name: '' }),
        React.createElement(CardList, { cardData: data })));
};
export default MainPage;
