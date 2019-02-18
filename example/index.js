import InfiniteLoader from '../src/InfiniteLoader'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  constructor(props) {
    super(props)
    this.state = { items: [] }
  }

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
      items.push({ name: 'An item', description: 'A description of an item' })
    }
    return items
  }

  renderCards() {
    const { items } = this.state
    let cardStyle = { backgroundColor: 'white', padding: '1rem', margin: '1rem' }

    const cards = items.map((item, i) => {
      return (
        <div key={i} style={cardStyle}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      )
    })
    return cards
  }

  render () {
    let containerStyle = { paddingTop: '2rem', paddingBottom: '2rem', background: 'rgb(248, 245, 236)', position: 'relative' }
    let visitStyle = { position: 'absolute', width: '100%', bottom: '10rem', height: '10rem' }

    return (
      <div style={containerStyle}>
        { this.renderCards() }
        <InfiniteLoader visitStyle={visitStyle} onVisited={ () => this.handleVisit() } />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
