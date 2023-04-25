import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Card from '../card/Card';
import { Article, SearchParams } from '../../../models/IArticles';
import Spinner from '../../ui/Spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import NotFound from '../notFound/NotFound';

import { useGetArticlesQuery } from '../../../services/articlesSevice';
import type { RootState } from '../../../store/store';

import './CardList.scss';

interface ViewProps {
  arr: Article[];
}

const CardList = () => {
  const { data, error, isLoading } = useGetArticlesQuery(
    useSelector((state: RootState) => state.queryParam) as SearchParams
  );

  const content = !(isLoading || error) ? (
    data?.articles && data.articles.length !== 0 ? (
      <View arr={data?.articles} />
    ) : (
      <NotFound />
    )
  ) : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;

  return (
    <div className="wrapper">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ arr }: ViewProps) => {
  const articles = arr.map((article: Article, index: number) => {
    return <Card key={index} data={article} />;
  });
  return <div>{articles}</div>;
};

View.propTypes = {
  onOpenLinkClick: PropTypes.func,
};

export default CardList;
