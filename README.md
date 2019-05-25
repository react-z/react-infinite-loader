# react-infinite-loader

An infinite loader react component based on [react-visit](https://github.com/StevenIseki/react-visit)

[![npm version](https://badge.fury.io/js/react-infinite-loader.svg)](https://badge.fury.io/js/react-infinite-loader)

![](https://raw.githubusercontent.com/StevenIseki/react-infinite-loader/master/example/screenshot.gif)

## Install

`npm install react-infinite-loader --save`

## Usage

Add the infinite loader component below the items in you list. When the loader is in view the onVisited event will fire for you to reload more data. Check out the [example](https://github.com/StevenIseki/react-infinite-loader/blob/master/example) for more info.

```jsx
import InfiniteLoader from 'react-infinite-loader'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  componentDidMount() {
    this.loadItems()
  }

  loadItems() {
    /* just simulating a load of more items from an api here */
    setTimeout( () => {
      let items = this.state.items.slice()
      items = items.concat(this.getItems())
      this.setState({ items: items })
    }, 1000)
  }

  handleVisit () {
    this.loadItems()
  }

  getItems() {
    let items = []
    for(var i = 0; i < 10; i++) {
      items.push({ name: 'An item' })
    }
    return items
  }

  renderCards() {
    const { items } = this.state
    const cards = items.map((item, i) => {
      return (
        <div key={i}><h3>{item.name}</h3></div>
      )
    })
    return cards
  }

  render () {
    return (
      <div>
        { this.renderCards() }
        <InfiniteLoader onVisited={ () => this.handleVisit() } />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
```

## Props

- `onVisited()`

A function to call when the loader comes into the viewport. This is when you normally will load more items.

- `visitStyle`

Style object to display the visit component, usually you want the visit component hidden, but may want to give it a margin bottom or negative bottom margin so it will be triggered earlier. Give the visitStyle a background color to see where it is triggered while testing. The element has the className `visit` if you need to style it with css.

- `loaderStyle`

Style object for the loader, usually some styles for a loader or spinner element. styled-jsx is used for styling. To update the styles ...

- `containerElement`

The dom element to set the scroll event on, e.g. `document.querySelector('.container')`. If no containerElement is set react-infinite-loader will attach the scroll event to window, which is usually what you want unless in the case of a modal.

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
