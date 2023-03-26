import React from 'react';
import CardList from '../../ui/cardList/CardList';
import PageHeader from '../../ui/appPageHeader/PageHeader';
import data from '../../data/cards.json';
import SearchBar from '../../ui/searchBar/SearchBar';

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
