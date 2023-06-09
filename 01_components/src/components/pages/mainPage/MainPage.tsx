import React from 'react';
import CardList from '../../cardList/CardList';
import PageHeader from '../../appPageHeader/PageHeader';
import data from '../../data/cards.json';
import SearchBar from '../../searchBar/SearchBar';

import './MainPage.css';

const MainPage = () => {
  return (
    <div>
      <PageHeader page_name="Main Page" />
      <SearchBar />
      <CardList cardData={data} />
    </div>
  );
};

export default MainPage;
