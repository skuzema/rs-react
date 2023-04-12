import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { SearchParams } from '../../utils/interfaces';
import './SearchBar.scss';

const SearchBar = (props) => {
  const { register, handleSubmit } = useForm<SearchParams>({ mode: 'onSubmit' });

  const prm: SearchParams = {
    query: '',
    sources: '',
    sort: 'publishedAt',
    page: '1',
    page_size: '100',
  };

  const [params, setParams] = useState(
    JSON.parse(localStorage.getItem('searchParams')) || ({} as SearchParams)
  );

  const onFormSubmit = (par: SearchParams) => {
    prm.query = par.query;
    setParams(prm);
    localStorage.setItem('searchParams', JSON.stringify(prm));
    props.onSearchParamsSet(prm);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="search-conatiner">
      <input
        {...register('query')}
        className="search-bar"
        placeholder="Title"
        defaultValue={params.query}
      />
      <input type="submit" className="btn-search" value="Search" />
    </form>
  );
};

SearchBar.propTypes = {
  onSearchParamsSet: PropTypes.func,
};

export default SearchBar;
