import React, { Component } from 'react'
import styles from './InfiniteLoader.css'
import CSSModules from 'react-css-modules'
import loader from '!raw!../assets/images/spin.svg'
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

@CSSModules(styles)
export default class InfiniteLoader extends Component {

  constructor(props) {
    super(props);

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
    }, 2000);

  }

  stop () {
    this.setState({ loading: false })
  }

  render() {

    const { loading } = this.state;

    return (
      <div styleName='InfiniteLoader'>
        { loading ? <span styleName='Loader' dangerouslySetInnerHTML={{__html: loader }} /> : null }
        <Visit ref="loaderVisit" visited={ this.visited.bind(this) } />
      </div>
    );
  }
}
