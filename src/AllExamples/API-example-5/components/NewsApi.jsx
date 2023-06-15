import React, { Component } from 'react';
import axios from 'axios';
import api from './services/api';
import ArticleList from './ArticleList';

import GoBackButton from 'components/generic/GoBackButton/GoBackButton';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

class NewsApi extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const articles = await api.fetchArticlesWithQuery('react');
      console.dir(articles);
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <div>
        <GoBackButton path={'/examples'} />
        <h1>News API</h1>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}
export default NewsApi;
