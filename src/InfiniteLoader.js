import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Visit from './Visit'

export default class InfiniteLoader extends Component {
  static get defaultProps() {
    return {
      visitStyle: { visibility: 'hidden' }
    }
  }

  static get propTypes() {
    return {
      containerElement: PropTypes.object,
      onVisited: PropTypes.func,
      visitStyle: PropTypes.object,
      loaderStyle: PropTypes.object
    }
  }

  constructor(props) {
    super(props)
  }

  handleVisit() {
    this.refs.visit.resetVisited()
    if (this.props.onVisited != undefined) {
      this.props.onVisited()
    }
  }

  render() {
    return (
      <span>
        <div className="loader" style={this.props.loaderStyle} />
        <Visit
          className="visit"
          ref="visit"
          {...this.props}
          onVisited={() => this.handleVisit()}
        />
      <style jsx>{`
        .loader {
          margin: 20px auto;
          font-size: 5px;
          position: relative;
          border: 1.1em solid rgba(255, 255, 255, 0.2);
          border-left: 1.1em solid #ffffff;
          transform: translateZ(0);
          animation: loadAnimation 1.1s infinite linear;
        }
        .loader,
        .loader:after {
          border-radius: 50%;
          width: 10em;
          height: 10em;
        }
        @-webkit-keyframes loadAnimation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes loadAnimation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      </span>
    )
  }
}
