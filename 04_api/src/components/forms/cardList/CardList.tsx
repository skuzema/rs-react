/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from '../card/Card';
import { Article, SearchParams } from '../../utils/interfaces';
import Spinner from '../../ui/Spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import NewsAppService from '../../../services/NewsAppService';
import NotFound from '../notFound/NotFound';

import './CardList.scss';
import not_available from './not_available.jpg';

let cpage = 1;

const CardList = (props) => {
  const [articles, setArticles] = useState([]);
  const [moreLoading, setMoreLoading] = useState(false);
  const [articlesEnded, setArticlesEnded] = useState(false);
  const [initial, setInitial] = useState(true);
  const [params, setParams] = useState({} as SearchParams);

  const { loading, error, getEverything, clearError } = NewsAppService();

  useEffect(() => {
    loadInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.params.query]);

  const loadInit = () => {
    cpage = 1;
    setArticles((articles) => []);
    updateArticles(false);
    setInitial((initial) => false);
  };

  const loadMore = () => {
    updateArticles(true);
  };

  const updateArticles = (load_more: boolean) => {
    let query_param = Object.create(props.params);

    if (Object.keys(props.params).length === 0) {
      query_param = JSON.parse(localStorage.getItem('searchParams')) || ({} as SearchParams);
    }
    if (query_param.query === '' || query_param.query === null || query_param.query === undefined) {
      query_param.query = '*';
    }
    const { query, sources, sort, page_size } = query_param;
    setParams((params) => query_param);
    clearError();
    initial ? setMoreLoading(false) : setMoreLoading(true);
    if (load_more) {
      cpage++;
    }
    getEverything(query, sources, sort, cpage.toString(), page_size).then(onArticlesLoaded);
  };

  const onArticlesLoaded = (newArticlesList: SearchParams[]) => {
    let ended = false;
    if (newArticlesList.length < Number.parseInt(params.page_size)) {
      ended = true;
    }
    setArticles((articles) => [...articles, ...newArticlesList]);
    setMoreLoading((moreLoading) => false);
    setArticlesEnded((articlesEnded) => ended);
  };

  const content = !(loading || error) ? (
    articles.length !== 0 ? (
      <View arr={articles} />
    ) : (
      <NotFound />
    )
  ) : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !moreLoading ? <Spinner /> : null;
  const loadMoreButtonHidden = articlesEnded || articles.length === 0;

  return (
    <div className="wrapper">
      {errorMessage}
      {spinner}
      {content}
      <button
        className="button"
        style={{ display: loadMoreButtonHidden ? 'none' : 'block' }}
        onClick={() => loadMore()}
      >
        <div className="inner">Load more</div>
      </button>
    </div>
  );
};

const View = ({ arr }) => {
  const articles = arr.map((article: Article, index: number) => {
    if (
      article.urlToImage === '' ||
      article.urlToImage === null ||
      article.urlToImage === undefined
    ) {
      article.urlToImage = not_available;
    }
    return <Card key={index} data={article} />;
  });
  return articles;
};

View.propTypes = {
  onOpenLinkClick: PropTypes.func,
};

export default CardList;
