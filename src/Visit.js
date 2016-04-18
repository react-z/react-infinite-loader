import React, { Component } from 'react';

export default class Visit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visited: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll (e) {
    if(this.refs.visit != undefined){

      if(this.isElementInViewport(this.refs.visit)){
        if(this.state.visited){
          /* already visited */
        } else {
          /* fire off event for element visited */
          this.props.visited()
          this.setState({ visited: true });
        }
      }
    }
  }

  isElementInViewport (el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  render() {
    return (
    	<span ref='visit' />
    )
  }
}
