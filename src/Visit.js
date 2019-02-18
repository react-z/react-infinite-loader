import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Visit extends Component {
  static get defaultProps() {
    return {
      visitStyle: { visibility: 'hidden' }
    }
  }

  static get propTypes() {
    return {
      containerElement: PropTypes.object,
      onVisited: PropTypes.func,
      visitStyle: PropTypes.object
    }
  }

  constructor(props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)
    this.state = { visited: false }
  }

  containerElementDefined() {
    return !(
      this.props.containerElement == null ||
      this.props.containerElement == undefined
    )
  }

  resetVisited() {
    setTimeout(() => {
      this.setState({ visited: false })
    }, 1000)
  }

  componentDidMount() {
    if (this.containerElementDefined()) {
      this.props.containerElement.addEventListener('scroll', this.handleScroll)
    } else {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    if (this.containerElementDefined()) {
      this.props.containerElement.removeEventListener(
        'scroll',
        this.handleScroll
      )
    } else {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll(e) {
    if (this.refs.visit != undefined) {
      if (this.isElementInViewport()) {
        if (this.state.visited) {
          /* already visited */
        } else {
          /* fire off event for element visited */
          if (this.props.onVisited != undefined) {
            this.props.onVisited()
          }
          this.setState({ visited: true })
        }
      }
    }
  }

  isElementInViewport() {
    var rect = this.refs.visit.getBoundingClientRect()
    let containerBottom = window.innerHeight
    let containerRight = window.innerWidth
    let containerTop = 0
    let containerLeft = 0

    if (this.containerElementDefined()) {
      let containerRect = this.props.containerElement.getBoundingClientRect()
      let containerBottom = containerRect.bottom
      let containerRight = containerRect.right
    }
    return (
      rect.top >= containerTop &&
      rect.left >= containerLeft &&
      rect.bottom <= containerBottom &&
      rect.right <= containerRight
    )
  }

  render() {
    return (
      <span
        className='visit'
        style={this.props.visitStyle}
        ref="visit"
      >
      <style jsx>{`
        .visit {
        }
      `}</style>
      </span>
    )
  }
}
