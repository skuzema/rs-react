import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import CardList from '../../forms/cardList/CardList';
import PageHeader from '../../forms/appPageHeader/PageHeader';
import SearchBar from '../../forms/searchBar/SearchBar';
import Copyright from '../../forms/copyright/Copyright';

import './MainPage.css';

const MainPage = () => {
  return (
    <div>
      <PageHeader page_name="PewNews" />
      <ErrorBoundary fallback={<div style={{ color: 'red' }}>Something went wrong</div>}>
        <SearchBar />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div style={{ color: 'red' }}>Something went wrong</div>}>
        <CardList />
      </ErrorBoundary>
      <Copyright />
    </div>
  );
};

export default MainPage;
