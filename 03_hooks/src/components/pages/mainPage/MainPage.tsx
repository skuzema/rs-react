import React from 'react';
import CardList from '../../forms/cardList/CardList';
import PageHeader from '../../forms/appPageHeader/PageHeader';
import SearchBar from '../../forms/searchBar/SearchBar';
import data from '../../data/cards.json';
import './MainPage.css';

function MainPage() {
  return (
    <div>
      <PageHeader page_name="Main Page" />
      <SearchBar />
      <CardList data={data} />
    </div>
  );
}

export default MainPage;
