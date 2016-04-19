import React, { Component } from 'react'
/*import loader from '!raw!../assets/images/spin.svg'*/
import Visit from './Visit'

/* styles, plus move in the svg
.InfiniteLoader {
  width: 100%;
  margin-top: 4rem;
}

.Loader {
  width: 3rem;
  height: 3rem;
  display: block;
  width: 100%;
}

.Loader svg {
  width: 100%;
  height: 100%;
}
*/

export default class InfiniteLoader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  visited () {
    this.setState({ loading: true })
    this.props.load()
    setTimeout( () => {
      this.refs['loaderVisit'].revisit()
      this.setState({ loading: false })
    }, 2000)

  }

  stop () {
    this.setState({ loading: false })
  }

  render() {

    const { loading } = this.state

    return (
      <div className='InfiniteLoader'>
        { loading ? <span className='Loader'>loading...</span> : null }
        <Visit ref="loaderVisit" visited={ this.visited.bind(this) } />
      </div>
    )
  }
}
