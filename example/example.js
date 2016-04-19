/* import InfiniteLoader from '../lib/InfiniteLoader' */
import Visit from '../lib/Visit'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import { createStore } from 'redux'

function counter(state, action) {
   if (typeof state === 'undefined') {
     return 0
   }
   switch (action.type) {
     case 'INCREMENT':
       return state + 1
     case 'DECREMENT':
       return state - 1
     default:
       return state
   }
 }

 var store = createStore(counter)

class ArticlesList extends Component {

  _load () {
    this.props.fetch()
  }
  stop () {
    this.refs['infiniteLoader'].stop()
  }

  render() {
    const { articles } = this.props
    return (
      <div>
        <div>
          {map(articles, this.props.renderArticle)}
        </div>
        { /*<InfiniteLoader ref='infiniteLoader' stop={  this._load.bind(this) } load={ this._load.bind(this) } /> */}
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: section => dispatch(fetchFeed(section)),
    feedViewed: () => dispatch(feedViewed())
  }
}
class FeedContainer extends Component {

  componentDidMount() {
    const { feedViewed } = this.props;
  }
  _renderArticle(article, section) {
    return <ArticleCard key={`feed_${article.article_id}`} article={article} />
  }
  _fetch (page) {
    const { fetchFeed } = this.props
    fetchFeed()
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

class Counter extends Component {

  visited () {
    console.log('u visited me...')
  }

  render() {
      const { value, onIncrement, onDecrement } = this.props
      return (
        <div>
          <Visit visited={ this.visited.bind(this) }  />
          <p>
            Clicked: {value} times {' '}
            <button onClick={onIncrement}>+</button>{' '}
            <button onClick={onDecrement}>-</button>{' '}
          </p>
        </div>
      )
    }
}


function render() {
  ReactDOM.render(
    <Counter value={store.getState()}
             onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
             onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
