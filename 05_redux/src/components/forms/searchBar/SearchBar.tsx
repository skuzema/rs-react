import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { SearchParams } from '../../../models/IArticles';
import { useAppDispatch } from '../../../store/hooks';

import './SearchBar.scss';
import { setQueryParam } from '../../../store/reducers/queryParamSlice';

const SearchBar = () => {
  const { register, handleSubmit } = useForm<SearchParams>({ mode: 'onSubmit' });

  const dispatch = useAppDispatch();

  const onFormSubmit = (par: SearchParams) => {
    dispatch(
      setQueryParam({
        q: par.q,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="search-conatiner">
      <input {...register('q')} className="search-bar" placeholder="Title" defaultValue="" />
      <input type="submit" className="btn-search" value="Search" />
    </form>
  );
};

SearchBar.propTypes = {
  onSearchParamsSet: PropTypes.func,
};

export default SearchBar;
