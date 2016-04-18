import InfiniteLoader from '../lib/InfiniteLoader'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import map from 'lodash/map'
import { feedSelector } from '../selectors'
import { Link } from 'react-router'
import colours from '../styles/colours.css'



class ArticlesList extends Component {

  constructor(props) {
    super(props);
  }

  _load () {
    this.props.fetch()
  }

  stop () {
    this.refs['infiniteLoader'].stop()
  }

  render() {
    const { articles } = this.props

    return (<div styleName='ArticlesList'>
      <div styleName='ArticlesRow'>
        {map(articles, this.props.renderArticle)}
      </div>
      <div>
        <InfiniteLoader ref='infiniteLoader' stop={  this._load.bind(this) } load={ this._load.bind(this) } />
      </div>
    </div>
    )
  }
}

/* have to pull in a very simple redux example here.... to call the action, and the rest,,, */


const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: section => dispatch(fetchFeed(section)),
    feedViewed: () => dispatch(feedViewed())
  }
}

@connect(feedSelector, mapDispatchToProps)
class FeedContainer extends Component {

  componentDidMount() {
    const { feedViewed } = this.props;
  }

  _renderArticle(article, section) {
    return <ArticleCard key={`feed_${article.article_id}`} article={article} />
  }

  _fetch (page) {
    const { fetchFeed, nextFeedPage, lastFeedPage, section } = this.props;
    if(nextFeedPage > lastFeedPage){
      this.refs['articles'].stop()
    } else {
      (section == undefined) ? fetchFeed() : fetchFeed(section)
    }
  }

  render() {
    const { feed, section, fetchFeed } = this.props;

    return (
      <div>
        <ArticlesList ref='articles' articles={feed} renderArticle={this._renderArticle} fetch={ this._fetch.bind(this) } />
      </div>
    )
  }
}


class TestComponent extends Component {

  visited () {
    console.log('u visited me...')
  }

  render () {

    var divStyle = {
      height: '50rem',
      marginTop: '10rem',
      marginBottom: '10rem',
      backgroundColor: 'darkblue'
    };

    return (
      <div style={divStyle}>
        <Visit visited={ this.visited.bind(this) }  />
      </div>
    )
  }
}


ReactDOM.render(<TestComponent />, document.getElementById('root'))
