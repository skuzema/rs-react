import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import CardList from '../../forms/cardList/CardList';
import PageHeader from '../../forms/appPageHeader/PageHeader';
import SearchBar from '../../forms/searchBar/SearchBar';
import { SearchParams } from '../../utils/interfaces';
import Copyright from '../../forms/copyright/Copyright';

import './MainPage.css';

const MainPage = () => {
  const [searchParams, setSearchParams] = useState({} as SearchParams);

  const onSearchParamsSet = (param: SearchParams) => {
    setSearchParams(param);
  };

  return (
    <div>
      <PageHeader page_name="PewNews" />
      <ErrorBoundary fallback={<div style={{ color: 'red' }}>Something went wrong</div>}>
        <SearchBar onSearchParamsSet={onSearchParamsSet} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div style={{ color: 'red' }}>Something went wrong</div>}>
        <CardList params={searchParams} />
      </ErrorBoundary>
      <Copyright />
    </div>
  );
};

export default MainPage;
